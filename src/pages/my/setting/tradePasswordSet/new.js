/**
 * Created by Administrator on 2016/12/7.
 */
/**
 * 设置交易密码
 */
import React from 'react'
import { connect } from 'react-redux'
import BasePasswordInput from '../../../../components/BaseInput/BasePasswordInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import Alert from '../../../../components/Dialog/alert'
import ValidateForm  from '../../../../components/BaseValidateForm'
import Tipbar from '../../../../components/Tipbar'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import {TRADE_PASSWORD_SET,VERIFY_CARD,CHECK_VERIFY_CAPTCHA_W,CLAER_LC} from '../../../../actions/actionTypes'
import Page from '../../../../components/Page'
import {goBack,push} from 'react-router-redux'
import Loading from '../../../../components/pageLoading'
import Success from '../../../../components/Dialog/success'
import InlineLoading from '../../../../components/Loading/InlineLoading'

class TradePasswordSet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: '',
            init:true
        }
    }
    componentDidMount(){
        const alert = this.refs.alert;
        const {
            data,
            load,
            idCard,
            yzCode
        }=this.props;
        if (!data){
            load()
        }else {
            if (data.data.card==''){
                alert.show({
                    title: '为了您的账号安全，请先认证身份信息！',
                    okText: '去认证',
                    okCallback: ()=>{this.props.go('/user/setting/identityAuth')},
                })
            }else if (idCard!==100){
                alert.show({
                    title: '您还没有验证身份信息！',
                    okText: '去验证',
                    okCallback:()=>{this.props.go('/user/setting/tradePasswordForget')},
                })
            }else if (yzCode!=100){
                alert.show({
                    title: '您还没有短信验证！',
                    okText: '去验证',
                    okCallback:()=>{this.props.go('/user/setting/tradePasswordForget/verifyMobile')},
                })
            }
        }
    }
    componentWillReceiveProps({resCode,data,pending,idCard,yzCode}) {
        const alert = this.refs.alert;
        if (data.data.card==''){
            alert.show({
                title: '为了您的账号安全，请先认证身份信息！',
                okText: '去认证',
                okCallback:()=>{this.props.go('/user/setting/identityAuth')},
            })
        }else if (idCard!==100){
            alert.show({
                title: '您还没有验证身份信息！',
                okText: '去验证',
                okCallback:()=>{this.props.go('/user/setting/tradePasswordForget')},
            })
        }else if (yzCode!=100){
            alert.show({
                title: '您还没有短信验证！',
                okText: '去验证',
                okCallback:()=>{this.props.go('/user/setting/tradePasswordForget/verifyMobile')},
            })
        }

        if (resCode == 100&&!pending&&this.state.init) {
            this.refs.success.show({
                text: '重置密码成功!',
                callback: () => {this.props.go('/user/setting'),this.props.clear()},
            })
            this.setState({
                init:false
            })
        }
        if (resCode == 301&&!pending) {
            alert.show({
                title: '交易密码不能和登录密码一致',
                okText: '确定',
            })
        }
    }

    onValid = () => {
        if (this.props.pending) return
        const {
            password
        } = this.refs.form.getValue()
        this.props.pwdSet({password})
    }

    onInvalid = (name, value, message) => {
        this.setState({errorMessage: message})
    }
    loadEnd(){
        return(<div>
            <ValidateForm
                className={commonStyles.mt15}
                ref='form'
                onValid={this.onValid}
                onInvalid={this.onInvalid}>
                <BasePasswordInput
                    ref='password'
                    name='password'
                    maxLength={16}
                    placeholder='设置新交易密码'
                    type='validateItem'
                    reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'} }}
                />
                <Button
                    className={commonStyles.buttonWrap}
                    text={this.props.pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'提交中'} className={commonStyles.loading}/>||'确认设置'}
                    type='submit' />
            </ValidateForm>
            { this.state.errorMessage && <Tipbar text={this.state.errorMessage} /> }
        </div>)
    }
    loadDom(){
        return(<Loading/>)
    }
    render() {
        const {
            data,
            idCard,
            yzCode
        }=this.props;
        let Dom;
        if (data){
            if (data.data.card!=''&&idCard==100&&yzCode==100){
                Dom=this.loadEnd()
            }
        }
        else{
            Dom=this.loadDom()
        }
        console.log(idCard)
        return (
            <Page>
                <div className={commonStyles.panel}>
                    <NavBar onLeft={this.props.pop} title='设置新交易密码' />
                    {
                        Dom
                    }
                    <Alert ref="alert" />
                    <Success ref="success"/>
                </div>
            </Page>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
        pending: state.infodata.getIn([TRADE_PASSWORD_SET, 'pending']),
        resCode: state.infodata.getIn([TRADE_PASSWORD_SET, 'data']) && state.infodata.getIn([TRADE_PASSWORD_SET, 'data']).code || 0,
        idCard:state.infodata.getIn([VERIFY_CARD,'data'])&&state.infodata.getIn([VERIFY_CARD,'data']).code||false,
        yzCode:state.infodata.getIn([CHECK_VERIFY_CAPTCHA_W,'data'])&&state.infodata.getIn([CHECK_VERIFY_CAPTCHA_W,'data']).code||false
    }
}

const mapDispatchToProps = (dispatch) => ({
    load(){
        dispatch({
            type:'USER_INFO_WITH_LOGIN'
        })
    },
    pop() {
        dispatch(goBack())
    },
    go(path){
        dispatch(push(path))
    },
    clear(){
       dispatch({
           type:CLAER_LC,
           key:[VERIFY_CARD,CHECK_VERIFY_CAPTCHA_W]
       })
    },
    pwdSet(data) {
        dispatch({
            type: TRADE_PASSWORD_SET,
            params: [
                data
            ]
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TradePasswordSet)
