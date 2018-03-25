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
      time:0,
      verifyTime:0,
      smsReference:''
    }    
  }
  loadDom(){
    return(<Loading/>)
  }
  loadEnd(){
    const {
        pending,
        data
    }=this.props;
      let dom=this.loadDom()
      if(data){
          dom=<div>
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
          </div>
      }
    return(<div>{dom}</div>)
  }
  onValid = () => {
    const {
        sendYzm,
    }=this.props;
      if(this.state.smsReference){
          const datas={
              smsReference:this.state.smsReference,
              verifyCode:this.refs.form.getValue().captcha,
              device:'WAP'
          };
          this.setState({
              verifyTime:0,
          })
          sendYzm(datas)
      }else{
          this.refs.alert.show({content: '请先发送验证码',okText:'确定'})
      }
  }

  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }
  sendVerifyCode = () => {
      this.setState({
          time:0,
          smsReference:''
          })
      this.props.clean('SEND_VERIFY');
      this.props.clean('NEW_TRANSACTION_CODE')
   this.props.send(this.props.data.data.mobile)
  }
  componentDidMount() {
       this.props.load()
  }
    componentWillUnmount(){
       this.props.cleanAll()
    }

    componentWillReceiveProps(nextProps){
        const{goBankData}=nextProps;
        //生成订单后跳转
        if(goBankData&&goBankData.code==100){
            this.props.clean("GO_BANK_PAGE")
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
            // this.props.clearData("GO_BANK_PAGE")
        }else if(goBankData&&goBankData.code!=100){
            // this.props.clearData("GO_BANK_PAGE")
            this.props.clean("GO_BANK_PAGE")
            this.refs.alert.show({content: '订单生成失败！',okText:'确定'});
        }
    const alertn=this.refs.alert;
     if(nextProps.data&&this.state.init){
      this.props.send(nextProps.data.data.mobile)
      this.setState({
          init:false
      })
     }
    if (nextProps.sendData&&nextProps.sendData.status==1){
       if(this.state.time<=3){
           this.setState({
               time:this.state.time+1
           })
           if(nextProps.verifySendData&&nextProps.verifySendData.code=="0001"){
               this.setState({
                   smsReference:nextProps.verifySendData.data.ref
               })
           }else{
               if(this.state.time>=3){
                   this.refs.alert.show({content: '验证码发送失败',okText:'确定'});
               }else{
                   setTimeout(()=>{
                       this.props.verifySend(nextProps.sendData.msgId)
                   },2000)
               }
           }
       }
    }
     if (nextProps.verifyCodeData&&nextProps.verifyCodeData.status==1){
          if(this.state.verifyTime<=3){
              this.setState({
                  verifyTime:this.state.verifyTime+1
              })
              if(nextProps.verifyCodeRightData&&nextProps.verifyCodeRightData.code=="0001"){
                    this.props.goBankPage({
                       type:3,
                       way:1,
                       returnUrl:"",
                       data:{
                          device:"WAP"
                       }
                    });
                    this.props.clean("CODE_RIGHT_VERIFY")
              }else{
                  if(this.state.verifyTime>=3){
                      this.refs.alert.show({content: '验证码错误',okText:'确定'});
                  }else{
                      setTimeout(()=>{
                          this.props.verifyCodeRight(nextProps.verifyCodeData.msgId)
                      },2000)
                  }
              }
          }
      }
  }
  render() {
    const {
        pop
    }=this.props;
    let Dom;
    Dom=this.loadEnd();
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
    sendData:state.infodata.getIn(['NEW_TRANSACTION_CODE','data']),
    verifySendData:state.infodata.getIn(['SEND_VERIFY','data']),
    verifyCodeData:state.infodata.getIn(['NEW_CHECK_VERIFY_CAPTCHA_W','data']),
    verifyCodeRightData:state.infodata.getIn(['CODE_RIGHT_VERIFY','data']),
    goBankData:state.infodata.getIn(['GO_BANK_PAGE','data']),
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
    goBankPage(data){
      dispatch({
          type:"GO_BANK_PAGE",
          params:[data]
      })
    },
    send(mobile){
      dispatch({
        type:'NEW_TRANSACTION_CODE',
        params:[{
          telNo:mobile,
          transcode:46709,
          device:'WAP'
        }]
      })
    },
    verifySend(id){
      dispatch({
          type:'SEND_VERIFY',
          params:[{id:id}]
      })
    },
   sendYzm(data){
     dispatch({
       type:'NEW_CHECK_VERIFY_CAPTCHA_W',
       params:[
            data
       ]
     })
   },
   verifyCodeRight(id){
     dispatch({
       type:'CODE_RIGHT_VERIFY',
       params:[{id:id}]
     })
    },
    clean(key){
      dispatch({
          type:'CLEAR_INFO_DATA',
          key:key
      })
    },
    cleanAll(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'CODE_RIGHT_VERIFY'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'NEW_CHECK_VERIFY_CAPTCHA_W'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'SEND_VERIFY'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'NEW_TRANSACTION_CODE'
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyMobile)
