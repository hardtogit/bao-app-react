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
        console.log(this.props)
        passGuard3.generate("kb3",kb,0);
        $(function(){
            setTimeout(function(){
                kb.generate();
            },100);
        })
    }
    componentWillReceiveProps({resCode,pending}) {
        const alert = this.refs.alert;
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
    render() {
        const {
        }=this.props;
        return (
            <Page>
                <div className={commonStyles.panel}>
                    <NavBar onLeft={this.props.pop} title='设置新交易密码' />
                    <div style={{display:'flex',backgroundColor:'#fff',marginTop:'15px'}}>
                     <div style={{padding:'12px 15px',color:'#777'}}>新密码</div><input style={{flex:'1',border:'none'}} id="kb3" type="text"/>
                    </div>
                    <div style={{marginTop:'40px',padding:'15px'}}>
                    <Button text="确认设置"></Button>
                    </div>
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
