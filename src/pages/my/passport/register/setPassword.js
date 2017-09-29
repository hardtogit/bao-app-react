/**
 * 注册 － 设置密码
 */
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { push, goBack } from 'react-router-redux'
import BaseInput from '../../../../components/BaseInput'
import BasePasswordInput from '../../../../components/BaseInput/BasePasswordInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import ValidateForm  from '../../../../components/BaseValidateForm'
import Tipbar from '../../../../components/Tipbar'
import styles from './index.styl'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import * as actionTypes from '../../../../actions/actionTypes'
import Alert from '../../../../components/Dialog/alert'
import back from '../../../../assets/images/regBack.png'
import Icon from '../../../../assets/images/pwd.png'
import tjm from '../../../../assets/images/tuijm.png'
class RegisterSetPassword extends React.Component {
  constructor (props) {
    super(props)
      this.state={
      init:true,
      checkBox:true
      }
  }
  componentDidMount() {
     this.refs.choice.checked =true
     const {
         mobile,
         code
     }=this.props;
     if (mobile&&!code){
       this.alert('/registerVerifyMobile')
     }else if (!mobile||!code){
       this.alert('/register')
     }
     if(mobile) {
         this.props.getCaptcha(mobile)
     }
   }
   alert(path){
     this.refs.alert.show({
       content: '请先进行手机号验证',
       okText: '确定',
       okCallback: () => {this.props.go(path)},
     })
  }
  componentWillUnmount() {
    
  }
    //是否阅读合同
    ifScan=(e)=>{
        if(this.state.checkBox){
            this.setState({
                checkBox:false
            })
        }else{
            this.setState({
                checkBox:true
            })
        }
    }
  componentWillReceiveProps({data}) {
     if (data){
       const code=data.code;
       const alert=this.refs.alert;
      const init=this.state.init;
       if (code==100&&init){
        this.setState({
           init:false
         });
         this.props.userInfo();
         this.props.go('/registerSuccess')
       }
       if (code==300){
         alert.show({
           content: '验证码错误',
           okText: '确定',
         })
       }
       if (code==301){
         alert.show({
           content: '验证码过期',
           okText: '确定',
         })
       }
       if (code==302){
         alert.show({
           content: '该手机号已被注册',
           okText: '确定',
         })
       }
       if (code==303){
           alert.show({
               content: '推荐码不存在!',
               okText: '确定',
           })
       }
     }
  }  

  onValid = () => {
    const data = this.refs.form.getValue();
    const {
        mobile,
        code
    }=this.props;
      if(!this.state.checkBox){
          return
      }
    this.props.goRegister({
      mobile,
      verifyCode:code,
      password: data.password,
      codes: data.captcha,
    })
  }

  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }

  openTipbar = (message) => {
    this.refs.tipbar.open(message)
  }
  Dom(){
      const {
          captcha
          }=this.props;
      console.log(captcha)
    return(<div>
      <div className={commonStyles.content}>
        <span className={commonStyles.markTitle}>设置登陆密码</span>
        <ValidateForm
            ref='form' onValid={this.onValid}
            onInvalid={this.onInvalid}>
          <BasePasswordInput
              ref='password'
              name='password'
              icon={<div className={styles.Icon}><img src={Icon}/></div>}
              maxLength={16}
              placeholder='6~16位密码'
              type='validateItem'
              imgSty={{marginRight:'0px'}}
              containerStyle={{paddingRight:'15px'}}
              reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'} }}
              borderType='four' />
          <BaseInput
              ref='captcha'
              name='captcha'
              icon={<div className={styles.Icon}><img src={tjm}/></div>}
              placeholder='推荐码（选填）'
              defaultValue={captcha&&captcha.data.code||''}
              type='validateItem'
              containerStyle={{paddingRight:'15px'}}
              borderType='four' />
            <p className={styles.textContent}><input ref="choice"   onChange={this.ifScan} style={{marginRight:'6px'}} type="checkbox"/>我已阅读并同意宝点网
                <Link to={'/privacy'} className={styles.protocol}>《宝点网隐私条例》</Link>和<Link to={'/service'} className={styles.protocol}>《宝点网服务协议》</Link>
            </p>
          <Button
              className={styles.buttonWrap}
              text='注册'
              type='submit' />
        </ValidateForm>
      </div>
    </div>)
  }
  render() {
    const {
        mobile,
         code,
        captcha
     }=this.props;
     let Dom;
     if (mobile&&code&&captcha){
          Dom = this.Dom()
     }
    return (
      <div className={commonStyles.panel} style={{backgroundColor: '#fff', paddingTop: 0}}>
        <NavBar backgroundColor="#fff"
                leftNode={<img src={back} className={styles.backImg}/>}
                onLeft={this.props.goBack} />
        {
            Dom
        }
        <Tipbar ref='tipbar' />
        <Alert ref="alert"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const my = state.infodata
  return {
    mobile:my.getIn(['REGISTER_NUM','mobile']),
    code:my.getIn(['REGISTER_NUM','code']),
    data:my.getIn(['REGISTER','data']),
    captcha:my.getIn(['GET_CAPTCHA','data'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  goBack() {
    dispatch(goBack())
  },
  go(path) {
    dispatch(push(path))
  },
  goRegister(data) {
    dispatch({
      type: actionTypes.REGISTER,
      params:[data]
    })
  },
  getCaptcha(mobile){
    dispatch({
        type:actionTypes.GET_CAPTCHA,
        params:[{mobile:mobile}]
    })
  },
  userInfo(){
      dispatch({type:actionTypes.USER_INFO})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSetPassword)
