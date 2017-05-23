/**
 * 忘记交易密码 － 验证手机号码
 */
import React from 'react'
import { connect } from 'react-redux'
import BaseInput from '../../../../components/BaseInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import ValidateForm  from '../../../../components/BaseValidateForm'
import VerifyCode from '../../../../components/VerifyCode'
import Tipbar from '../../../../components/Tipbar'
import styles from './index.styl'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import Loading from '../../../../components/pageLoading'
import Alert from '../../../../components/Dialog/alert'
import {push,replace,goBack} from 'react-router-redux'
import InlineLoading from '../../../../components/Loading/InlineLoading'
class VerifyMobile extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      errorMessage: '',
      init:true,
    }    
  }
  alert=()=>{
    const alert=this.refs.alert;
    alert.show({
      title: '您还没有绑定手机号码',
      okText: '去绑定',
      okCallback:()=>{this.props.push('/user/setting/mobileBind')}
    })
  }
  loadDom(){
    return(<Loading/>)
  }
  loadEnd(data){
    const {
        pending
    }=this.props;
    return(<div>
      <p className={styles.sendText}>我们已发送短信至
        <span className={styles.mark}>{util.replaceTextToSymbol(data.data.mobile, 4, 7)}</span>
        ,请在输入框填写验证码，若未收到请耐心等待～
      </p>
      <ValidateForm
          className={commonStyles.mt15}
          ref={'form'}
          onValid={this.onValid}
          onInvalid={this.onInvalid}>
        <BaseInput
            ref='captcha'
            name='captcha'
            label='验证码'
            type='validateItem'
            keyboardType='numeric'
            right={ <VerifyCode ref='verifyCode' onClick={this.sendVerifyCode} label='发送验证码' /> }
            reg={{ required: {message: '请输入正确的验证码'},
              captcha: {message: '请输入正确的验证码'}}} />
        <Button
            className={commonStyles.buttonWrap}
            text={pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'下一步'} className={commonStyles.loading}/>||'下一步'}
            type='submit' />
      </ValidateForm>
      { this.state.errorMessage && <Tipbar text={this.state.errorMessage} /> }
    </div>)
  }
  onValid = () => {
    const {
        sendYzm,
        data
    }=this.props;
    const datas={
       mobile:data.data.mobile,
       code:this.refs.form.getValue().captcha
    }
    sendYzm(datas)
  }

  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }

  sendVerifyCode = () => {
    const mobile = this.props.data.data.mobile
    if (!mobile) {
      return this.setState({errorMessage: '请先绑定手机号'})
    }

    if (!util.checkMobile(mobile)) {
      return this.setState({errorMessage: '请使用正确的手机号'})
    }
   this.props.send(this.props.data.data.mobile)
  }
  componentDidMount() {
    const {
        data,
        load,
        idCard
    }=this.props;
    if (!data){
      load()
    }else if (data.data.mobile==''){
       this.alert()
    }else {
      if (idCard!=100){
        this.refs.alert.show({
          title: '您还没有验证身份信息！',
          okText: '去验证',
          okCallback:()=>{this.props.replace('/user/setting/tradePasswordForget')}
        })
      }
    }
  }
  componentWillReceiveProps({data,regCode,pending,idCard}){
    const alertn=this.refs.alert;
    if (data){
      if (data.data.mobile==''){
        this.alert()
      }else {
        if (idCard!=100){
          this.refs.alert.show({
            title: '您还没有验证身份信息！',
            okText: '去验证',
            okCallback:()=>{this.props.replace('/user/setting/tradePasswordForget')}
          })
        }
      }
    }
   if (regCode==100&&this.state.init&&!pending){
      this.props.push('/user/setting/tradePasswordForget/new')
     this.setState({
       init:false
     })
   }
   if (regCode==300&&!pending){
     alertn.show({
       title: '对不起验证码认证失败',
       okText: '返回'
     })
   }
  }
  render() {
    const {
        data,
        idCard,
        pop
    }=this.props;
    let Dom;
    if (data){
      if (data.data.mobile!=''&&idCard==100){
        Dom=this.loadEnd(data)
      }
    }else{
      Dom=this.loadDom()
    }
    return (
      <div className={commonStyles.panel}>
        <NavBar
          title='验证手机号码'
         onLeft={pop}/>
        {
          Dom
        }
        <Alert ref="alert" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
    regCode:state.infodata.getIn(['CHECK_VERIFY_CAPTCHA_W','data'])&&state.infodata.getIn(['CHECK_VERIFY_CAPTCHA_W','data']).code||'',
    pending:state.infodata.getIn(['CHECK_VERIFY_CAPTCHA_W','pending']),
    idCard:state.infodata.getIn(['VERIFY_CARD','data'])&&state.infodata.getIn(['VERIFY_CARD','data']).code||false
  }
}

const mapDispatchToProps = (dispatch) => ({
    load(){
      dispatch({
        type:'USER_INFO_WITH_LOGIN'
      })
    },
    pop(){
      dispatch(goBack())
    },
    push(path){
      dispatch(push(path))
    },
    replace(path){
      dispatch(replace(path))
    },
    send(mobile){
        const clientTime=Date.parse(new Date())/ 1000;
        const sign=mobile+3+clientTime+util.key();
      dispatch({
        type:'TRANSACTION_CODE',
        params:[{
          mobile,
          type:3,
          clientTime,
          sign:util.md5(sign)
        }]
      })
    },
   sendYzm(data){
     dispatch({
       type:'CHECK_VERIFY_CAPTCHA_W',
       params:[
            data
       ]
     })
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyMobile)
