/**
 * 注册 － 设置密码
 */
import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import BaseInput from '../../../../components/BaseInput'
import BasePasswordInput from '../../../../components/BaseInput/BasePasswordInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import ValidateForm  from '../../../../components/BaseValidateForm'
import Tipbar from '../../../../components/Tipbar'
import ConfirmDialog from '../../../../components/Dialog/confirm'
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
      init:true
      }
  }
  componentDidMount() {
     const {
         mobile,
         code
     }=this.props;
     if (mobile&&!code){
       this.alert('/registerVerifyMobile')
     }else if (!mobile||!code){
       this.alert('/register')
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
              type='validateItem'
              containerStyle={{paddingRight:'15px'}}
              borderType='four' />
          <Button
              className={styles.buttonWrap}
              text='注册'
              type='submit' />
        </ValidateForm>
        <div className={styles.agreement}>
          同意<span className={styles.agreementText} onClick={()=>{this.props.go('/privacy')}}>《宝点网隐私条例》</span>和
          <span className={styles.agreementText} onClick={()=>{this.props.go('/service')}}>《宝点网服务协议》</span>
        </div>
      </div>
    </div>)
  }
  render() {
    const {
        mobile,
         code
     }=this.props;
     let Dom;
     if (mobile&&code){
       Dom=this.Dom()
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

const mapStateToProps = (state, ownProps) => {
  const my = state.infodata
  return {
    mobile:my.getIn(['REGISTER_NUM','mobile']),
    code:my.getIn(['REGISTER_NUM','code']),
    data:my.getIn(['REGISTER','data'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
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
  userInfo(){
      dispatch({type:actionTypes.USER_INFO})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSetPassword)
