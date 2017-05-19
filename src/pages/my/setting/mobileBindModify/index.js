import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import styles from './index.styl'
import NavBar from '../../../../components/NavBar'
import Page from '../../../../components/Page'
import { SEND_MSG, CHECK_VERIFY_CAPTCHA} from '../../../../actions/actionTypes'
import Alert from '../../../../components/Dialog/alert'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Loading from '../../../../components/pageLoading'
import util from '../../../../utils/utils.js'
class MobileBindModify extends React.Component {

  state = {
    waiting: false,
    text: '发送验证码',
    captcha: '',
    captchaSent: false, // 是否已经发送过验证码
  }
  componentDidMount(){
    const {
        mobile,
        load
    }=this.props;
    if (!mobile){
      load()
    }else if (mobile==''){
     this.alert()
    }
  }
  alert(){
    const alertn=this.refs.alert
    alertn.show({
      content: '您还没有绑定手机号',
      okText: '去绑定',
      okCallback:()=>{this.props.push('/user/setting/mobileBind')}
    })
  }
  componentWillReceiveProps({mobile,sendCaptchaResCode, verifyResCode,verifyPending}) {
    const alert = this.refs.alert
    if (mobile&&mobile==''){
      this.alert()
    }
    if (sendCaptchaResCode === 300&&!verifyPending) {
      alert.show({
        content: '发送验证码失败',
        okText: '确定',
      })
    }
    if (sendCaptchaResCode === 302&&!verifyPending) {
      alert.show({
        content: '手机号已经被注册',
        okText: '确定',
      })
    }
    if (verifyResCode === 100&&!verifyPending) {
      this.props.push('/user/setting/mobileBindModify/new')
    }
    if (verifyResCode === 300&&!verifyPending) {
      alert.show({
        content: '验证码错误，请重新输入验证码',
        okText: '确定',
      })
    }
    if (verifyResCode === 301&&!verifyPending) {
      alert.show({
        content: '验证码失效，请重新获取验证码',
        okText: '确定',
      })
    }

  }

  hideTel = (tel) => {
    tel = String(tel)
    return tel.slice(0, 3) + '****' + tel.slice(7)
  }

  handleCaptchaInput = (e) => {
    const val = e.target.value
    if (+val >= 0) {
      this.setState({captcha: val})
    }
  }

  sendCaptcha = () => {
    this.props.sendCaptcha(this.props.mobile)
    this.setState({waiting: true, captchaSent: true})
    this.countSeconds(60).then(() => this.setState({waiting: false}))
  }

  countSeconds = (seconds) => {
    return new Promise(resolve => {
      this.setState({text: `${seconds}S后重新发送`})
      const timer = setInterval(() => {
        if (--seconds) {
          this.setState({text: `${seconds}S后重新发送`})
        }else {
          this.setState({text: '发送验证码'})
          clearInterval(timer)
          resolve()
        }
      }, 1000)
    })
  }
  loadDom(){
    return(<Loading/>)
  }
  loadEnd(){
    const {
        mobile,
        verifyCode,
        verifyPending,
    }=this.props;
     return(<div>
       <p className={styles.p1}>原手机号</p>
       <p className={styles.p2}>{this.hideTel(mobile)}</p>
       <div className={styles.input}>
         <span>验证码</span>
         <input
             ref="input"
             type="tel"
             placeholder="请输入验证码"
             maxLength={6}
             value={this.state.captcha}
             onChange={this.handleCaptchaInput}
         />
         <button disabled={this.state.waiting} onClick={this.sendCaptcha}>{this.state.text}</button>
       </div>
       <div className={styles.buttonWrap}>
         <button disabled={(this.state.captcha.length < 6) || !this.state.captchaSent} onClick={() => verifyCode(+mobile, +this.state.captcha)}>
           {verifyPending && <InlineLoading color="rgba(255,255,255,.8)"/>}
           下一步
         </button>
       </div>
     </div>)
  }
  render() {
    const {
      mobile,
      pop,
    } = this.props;
    let Dom;
    if (!mobile){
      Dom=this.loadDom();
    }else {
      if (mobile!=''){
        Dom=this.loadEnd()
      }
    }
    return (
      <Page>
        <div className={styles.root}>
          <NavBar onLeft={pop}>修改绑定手机</NavBar>
          {
            Dom
          }
          <Alert ref="alert" />
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mobile:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data'])&&state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']).data.mobile||false,
    sendCaptchaResCode: state.infodata.getIn([SEND_MSG, 'data']) && +state.infodata.getIn([SEND_MSG, 'data']).code || 0,
    verifyResCode: state.infodata.getIn([CHECK_VERIFY_CAPTCHA, 'data']) && +state.infodata.getIn([CHECK_VERIFY_CAPTCHA, 'data']).code || 0,
    verifyPending: state.infodata.getIn([CHECK_VERIFY_CAPTCHA, 'pending']),
  }
}

const mapDispatchToProps = (dispatch) => ({
  push(path) {
    dispatch(push(path))
  },
  load(){
    dispatch({
      type:'USER_INFO_WITH_LOGIN'
    })
  },
  pop() {
    dispatch(goBack())
  },

  sendCaptcha(mobile) {
      const clientTime=Date.parse(new Date())/ 1000;
      const sign=mobile+2+clientTime+'base64:cHFfWlsxHtS6HdiVWiR7XbzmvqqJmSbrBLx7CQuKDT0=';
    dispatch({
      type: SEND_MSG,
      params: [
        {
            mobile,
            type:2,
            clientTime,
            sign:util.md5(sign)
        }
      ]
    })
  },

  verifyCode(mobile, code) {
    dispatch({
      type: CHECK_VERIFY_CAPTCHA,
      params: [
        {
          mobile,
          code,
        }
      ]
    })
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(MobileBindModify)
