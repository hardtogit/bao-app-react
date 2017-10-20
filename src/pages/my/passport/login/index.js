/**
 * 登录页
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import setAuthUrl from '../../../../components/setAuthUrl/index'
import BaseInput     from '../../../../components/BaseInput/index'
import BasePasswordInput from '../../../../components/BaseInput/BasePasswordInput'
import Button        from '../../../../components/BaseButton/index'
import Page        from '../../../../components/Page'
import ValidateForm  from '../../../../components/BaseValidateForm/index'
import Tipbar from '../../../../components/Tipbar/index'
import LoadingButton from '../../../../components/LoadingButton/index'
import styles  from './index.styl'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import * as actionTypes from '../../../../actions/actionTypes'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.logining = false;
        this.position = 'bottom';
        this.state = {
            loading: false,
            errorMessage: '',
            backUrl:'',
            pathname:['/home/myIndex']
        }
    }
    componentWillMount(){
        const urlObj=this.props.location.query;
         if (urlObj.hasOwnProperty('baoBackUrl')){
            const backUrl=urlObj.baoBackUrl;
            this.setState({
                backUrl
            })
         }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.loginCode) {
            const code = nextProps.loginCode;
            if (code != 100) {
                let message = '';
                if (code == 300) message = '登录出错了';
                if (code == 301) message = '密码与账户不匹配';
                if (code == 302) message = '账户已被冻结，请联系客服';
                if (code == 303) message = '账户已被拉黑，请联系客服';
                if (code == 304) message = '该账户不存在';
                if (code == 305) message = '密码输入错误';
                this.openTipbar(message)
            }
        }
    }
    componentWillUnmount(){
        sessionStorage.removeItem('bao-sc')
    }
    onValid = () => {
        const {
            backUrl
        }=this.state;
        const data  = this.refs.form.getValue();
        if (backUrl!=''){
            this.props.isLogin({username:data.username,password:util.md5(data.password),clientType:'wap'});
            let flag=true;
            setInterval(function(){
                let auth=sessionStorage.getItem('bao-auth-str')
                let user=sessionStorage.getItem('bao-user')
                if (auth&&user){
                    if(flag){
                        location.replace(backUrl+'?bao-auth='+auth);
                    }
                    flag=false
                }
            },500);
        }else {
            this.props.doLogin({username:data.username,password:util.md5(data.password),clientType:'wap',device:'WAP',tokenId:tokenId})
        }
    };

    onInvalid = (name, value, message) => {
        this.openTipbar(message)
    };

    openTipbar(message) {
        this.refs.tipbar.open(message)
    }
    render() {
        let Fn=this.props.goBack;
        const {
            pathname
        }=this.state;
        const {
            loginOut
        }=this.props;
        if (pathname.indexOf(loginOut)!=-1){
            Fn=()=>{this.props.go('/home')}
        }
        return (
            <Page>
                  <div className={commonStyles.topBar}>
                      <span onClick={() => {Fn()}} className={commonStyles.topBarLeft}>取消</span>
                  </div>
                  <div onClick={this.props.test} className={styles.logoContainer}>
                      <img className={styles.logo} ref='ss' src={require('../../../../assets/images/logo.png')} />
                  </div>
                  <ValidateForm
                      ref='form'
                      onValid={this.onValid}
                      onInvalid={this.onInvalid}>
                      <BaseInput
                          noleftPadding
                          ref='username'
                          name='username'
                          label='帐号'
                          defaultValue=''
                          placeholder='手机号/邮箱/用户名'
                          type='validateItem'
                          reg={{ required: {message: '请输入正确用户名'}}}
                          borderType='four' />
                      <BasePasswordInput
                          noleftPadding
                          ref='password'
                          name='password'
                          maxLength={16}
                          label='密码'
                          placeholder='请输入密码'
                          type='validateItem'
                          reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'}}}
                          borderType='four' />
                      <Button
                          className={styles.button}
                          text={this.props.pending ? <LoadingButton text='登录中' /> : '登录'}
                          type='submit' />
                  </ValidateForm>
                  <div className={styles.forgetWrap}>
                      <div className={styles.forgetBox} onClick={this.enterForget}>
                          <Link to='/findpassword' className={styles.forget}>忘记密码？</Link>
                      </div>
                      <div className={styles.registerBox} onClick={this.enterRegister}>
                          <Link to='/register' className={styles.register}>立即注册</Link>
                      </div>
                  </div>
                  <Tipbar ref='tipbar' />
            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pending: state.infodata.getIn([actionTypes.USER_LOGIN_FLOW, 'pending']),
        loginCode:state.infodata.getIn([actionTypes.USER_LOGIN_FLOW,'data']) && state.infodata.getIn([actionTypes.USER_LOGIN_FLOW,'data']).code || 0,
        userInfo:state.infodata.getIn([actionTypes.USER_INFO,'data']),
        loginOut:state.global.getIn([actionTypes.LOGIN_OUT_PATH])
    }
};
const mapDispatchToProps = (dispatch) => ({
    doLogin(user) {
        const url=sessionStorage.getItem('bao-sc')&&'/user/coinShop'||'/home';
        dispatch({
            type:actionTypes.USER_LOGIN_FLOW,
            params:[user],
            go: url,
        })
    },
    isLogin(user){
        dispatch({
            type:actionTypes.USER_LOGIN_FLOW,
            params:[user],
        })
    },
    goBack() {
        dispatch(goBack())
    },
    go(path) {
        dispatch(push(path))
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)
