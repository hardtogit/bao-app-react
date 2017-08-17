/**
 * Created by Administrator on 2016/12/7.
 */
/**
 * 手机绑定
 */
import React from 'react'
import { connect } from 'react-redux'
import BaseInput from '../../../../components/BaseInput'
import Button from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import Alert from '../../../../components/Dialog/alert'
import ValidateForm  from '../../../../components/BaseValidateForm'
import VerifyCode from '../../../../components/VerifyCode'
import Tipbar from '../../../../components/Tipbar'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import {SEND_MSG, BIND_MOBILE_SUCCESS,BIND_MOBILE_MODIFY} from '../../../../actions/actionTypes'
import {replace,push} from 'react-router-redux'
import Loading from '../../../../components/pageLoading'

class MobileBind extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            errorMessage: ''
        }
    }
    componentDidMount(){
        const {
            mobile,
            load
        }=this.props;
        if (mobile){
            if (mobile==''){
             this.alert()
            }
        }else {
            load()
        }
    }
    componentWillReceiveProps({mobile,verifyResCode, bindResCode}) {
        const alert = this.refs.alert;
        if (mobile&&mobile==''){
            this.alert()
        }
        if (verifyResCode === 302) {
            alert.show({
                content: '手机号已经被注册',
                okText: '确定',
            })
        }
        if (bindResCode === 100) {
            const {mobile} = this.refs.form.getValue()
            this.props.bindSuccess(''+mobile+'')
            alert.show({
                content: '绑定成功',
                okText: '确定',
                okCallback: () => this.props.replace('/securityCenter'),
            })
        }
        if (bindResCode === 300) {
            alert.show({
                content: '绑定失败',
                okText: '确定',
            })
        }
        if (bindResCode === 301) {
            alert.show({
                content: '手机号已被绑定',
                okText: '确定',
            })
        }
        if (bindResCode === 302) {
            alert.show({
                content: '你已经绑定过了',
                okText: '确定',
            })
        }
    }
    alert(){
        const alertn=this.refs.alert;
        alertn.show({
            content: '您还没有绑定手机',
            okText: '去绑定',
            okCallback: () =>{this.props.push('/user/setting/mobileBind')} ,
        })
    }
    loadDom(){
        return(<Loading/>)
    }
    loadEnd(){
       return(<div>
           <ValidateForm
               className={commonStyles.mt15}
               ref='form'
               onValid={this.onValid}
               onInvalid={this.onInvalid}>
               <BaseInput
                   ref='mobile'
                   name='mobile'
                   label='手机号'
                   maxLength={11}
                   keyboardType='numeric'
                   placeholder='请输入11位手机号'
                   type='validateItem'
                   reg={{ required: {message: '请输入正确的手机号'},
                       mobile: {message: '请输入正确的手机号'} }}
                   borderType='four' />
               <BaseInput
                   ref='captcha'
                   name='captcha'
                   label='验证码'
                   keyboardType='numeric'
                   type='validateItem'
                   right={ <VerifyCode onClick={this.sendVerifyCode} label='发送验证码' /> }
                   reg={{ required: {message: '请输入正确的验证码'},
                       captcha: {message: '请输入正确的验证码'}}}
                   borderType='four' />
               <Button
                   className={commonStyles.buttonWrap}
                   text='绑定手机'
                   type='submit'
               />
           </ValidateForm>
           { this.state.errorMessage && <Tipbar text={this.state.errorMessage} /> }
       </div>)
    }
    onValid = () => {
        const {
            mobile,
            captcha,
        } = this.refs.form.getValue()
        this.props.bindMobile(+mobile, +captcha)
    }

    onInvalid = (name, value, message) => {
        this.setState({errorMessage: message})
    }

    sendVerifyCode = () => {
        const {mobile} = this.refs.form.getValue()

        if (!util.checkMobile(mobile)) {
            return this.setState({errorMessage: '请输入正确的手机号'})
        }
        this.props.getVerifyCode(+mobile)
    }

    render() {
        const {
            mobile
        }=this.props;
        let Dom;
        if (mobile){
            if (mobile!=''){
                Dom=this.loadEnd()
            }
        }else {
            Dom=this.loadDom()
        }
        return (
            <div className={commonStyles.panel}>
                <NavBar
                    title='绑定新手机'
                />
                {
                    Dom
                }
                <Alert ref="alert" />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        mobile:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data'])&&state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']).data.mobile||false,
        verifyResCode: state.infodata.getIn([SEND_MSG, 'data']) && +state.infodata.getIn([SEND_MSG, 'data']).code || 0,
        bindResCode: state.infodata.getIn([BIND_MOBILE_MODIFY, 'data']) && +state.infodata.getIn([BIND_MOBILE_MODIFY, 'data']).code || 0,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
   load(){
       dispatch({
           type:'USER_INFO_WITH_LOGIN'
       })
   },
    getVerifyCode(mobile) {
        const clientTime=Date.parse(new Date())/ 1000;
        const sign=mobile+5+clientTime+util.key();
        dispatch({
            type: SEND_MSG,
            params: [
                {
                    mobile,
                    type: 6,
                    clientTime,
                    sign:util.md5(sign)
                }
            ]
        })
    },
   push(path){
      dispatch(push(path))
   },
    bindMobile(mobile, verifyCode) {
        dispatch({
            type: BIND_MOBILE_MODIFY,
            params: [
                {
                    mobile,
                    verifyCode,
                }
            ]
        })
    },

    replace(path) {
        dispatch(replace(path))
    },

    bindSuccess(mobile) {
        dispatch({
            type: BIND_MOBILE_SUCCESS,
            key:'USER_INFO_WITH_LOGIN',
            mobile
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileBind)
