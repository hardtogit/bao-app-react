/**
 * 注册 － 验证手机号
 */
import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import BaseInput from '../../../../components/BaseInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import ValidateForm  from '../../../../components/BaseValidateForm'
import VerifyCode from '../../../../components/VerifyCode'
import Tipbar from '../../../../components/Tipbar'
import styles from './index.styl'
import commonStyles from '../../../../css/common.styl'
import * as actionTypes from '../../../../actions/actionTypes'
import Alert from '../../../../components/Dialog/alert'
import back from '../../../../assets/images/regBack.png'
import Icon from '../../../../assets/images/yzmIcon.png'
import util from '../../../../utils/utils.js'
class RegisterVerifyMobile extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      init:true,
      flage:true
    }
  }

  componentDidMount() {
     const {
         mobile,
         go
     }=this.props;
    if (!mobile){
        this.refs.alert.show({
          content: '请先进行手机号验证',
          okText: '确定',
          okCallback: () => {go('/register')},
        })
    }else {
       this.refs.verifyCode.open()
    }
    this.setState({
        flage:false
    })
  }

  componentWillUnmount() {
    
  }

  componentWillReceiveProps({data}) {
       if (data){
         if (data.code==100&&this.state.init){
             this.props.savenum(this.refs.form.getValue().captcha);
             this.props.go('/registerSetPassword')
           this.setState({init:false})
         }
         if (data.code==300){
           this.openTipbar('验证码错误，请重新输入验证码')
         }
         if (data.code==302){
           this.openTipbar('手机号已经被注册')
         }
         if (data.code==301){
           this.openTipbar('验证码失效，请重新获取验证码')
         }
       }
  }
  onValid = () => {
    if (this.props.checkVerifyCaptchaPending) return false
    const data = this.refs.form.getValue()
    this.props.checkVerifyCaptcha(this.props.mobile, data.captcha)
  }

  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }

  openTipbar = (message) => {
    this.refs.tipbar.open(message)
  }

  sendVerifyCode = () => {
    console.log('你大爷')
    const {
        goVerifyCode,
        mobile
    }=this.props;
    goVerifyCode(mobile)
  }
  Dom(){
      const {flage}=this.state;
    return(<div>
      <div className={commonStyles.content}>
        <span className={commonStyles.markTitle}>验证码已发送，请填写</span>
        <ValidateForm
            ref='form'
            onValid={this.onValid}
            onInvalid={this.onInvalid}>
          <BaseInput
              ref='captcha'
              name='captcha'
              keyboardType='numeric'
              type='validateItem'
              icon={<div className={styles.Icon}><img src={Icon}/></div>}
              containerStyle={{paddingRight:'15px'}}
              right={ <VerifyCode
                  ref='verifyCode'
                  onClick={!flage&&this.sendVerifyCode||null}
                  noInit={true}
                  containerStyle={{backgroundColor: '#fff', height: 43}}
                  containerDisableStyle={{backgroundColor: '#fff', height: 43}}
                  textStyle={{fontSize: 16, color: '#45c3f0',textAlign:'right'}}
                  textDisableStyle={{color: '#888', fontSize: 12,textAlign:'right'}}
              /> }
              reg={{ required: {message: '验证码不能为空'},
                captcha: {message: '请输入正确的验证码'}}}
              borderType='four' />
          <Button className={styles.buttonWrap}
                  text='提交'
                  type='submit' />
        </ValidateForm>
        <Tipbar ref='tipbar' />
      </div>
    </div>)
  }
  render() {
    const {
      mobile
    }=this.props;
    let Dom;
    if (mobile){
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
        <Alert ref="alert"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const my = state.infodata
  return {
    mobile:my.getIn(['REGISTER_NUM','mobile']),
    data:my.getIn(['CHECK_VERIFY_CAPTCHA','data'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  savenum(code){
    dispatch({
      type:actionTypes.REGISTER_NUM,
      key:'code',
      data:code
    })
  },
  goBack() {
    dispatch(goBack())
  },
  go(path) {
    dispatch(push(path))
  },
  goVerifyCode(mobile) {
      const clientTime=Date.parse(new Date())/ 1000;
      const sign=mobile+1+clientTime+util.key();
    dispatch({
      type: actionTypes.VERIFY_CAPTCHA,
      params:[{
        mobile,
        type:1,
          clientTime,
          sign:util.md5(sign)
      }]
    })
  },
  checkVerifyCaptcha(mobile, code) {
    dispatch({
      type: actionTypes.CHECK_VERIFY_CAPTCHA,
      params:[{
        mobile,
        code
      }]
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterVerifyMobile)
