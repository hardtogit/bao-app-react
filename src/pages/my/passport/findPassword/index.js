/**
 * 忘记密码 － 验证手机号
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
import Alert from '../../../../components/Dialog/alert'
import * as actionTypes from '../../../../actions/actionTypes'
import {push,goBack} from 'react-router-redux'
import InlineLoading from '../../../../components/Loading/InlineLoading'

class FindpasswordVerifyMobile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
      init:true,
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
  componentWillReceiveProps({code}){
    if (code){
      const alert=this.refs.alert;
       if (code==100&&this.state.init){
          this.props.push('/findpasswordSetPassword')
           this.props.gxReders(this.refs.form.getValue())
         this.setState({
           init:false
         })
       }
       if (code==300){
        alert.show({
          content: '验证码错误，请重新输入验证码 ',
          okText: '确定',
        })
      }
      if (code==301){
        alert.show({
          content: '验证码失效，请重新获取验证码',
          okText: '确定',
        })
      }
    }
  }
  onValid = () => {
    const data = this.refs.form.getValue()
    this.props.sendCode(data.mobile,data.captcha)
  }

  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }

  sendVerifyCode = () => {
    const data = this.refs.form.getValue()
    if (!util.checkMobile(data.mobile)) {
      this.refs.tipbar.open('电话号码错误')
      return false
    }
    this.props.getCode(data.mobile)
  }

  render() {
    return (
      <div className={commonStyles.panel}>
        <NavBar
          onLeft={this.props.pop}
          title='验证手机号码'

        />
        <ValidateForm 
          className={styles.formWrap}
          ref='form' 
          onValid={this.onValid} 
          onInvalid={this.onInvalid}>
          <BaseInput
            ref='mobile'
            name='mobile'
            label='手机号'
            placeholder='请输入11位手机号'
            type='validateItem'
            reg={{ required: {message: '手机号不能为空'},
                   mobile: {message: '请输入正确的手机号'} }}
            borderType='two' />
          <BaseInput
            ref='captcha'
            name='captcha'
            label='验证码'
            type='validateItem'
            right={<VerifyCode onClick={this.sendVerifyCode} containerStyle={{height: 44}} init={true}/>}
            reg={{ required: {message: '验证码不能为空'},
                   captcha: {message: '请输入正确的验证码'}}}
            borderType='three' />
          <Button className={commonStyles.buttonWrap}
            text={this.props.pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'下一步'} className={commonStyles.loading}/>||'下一步'}
            type='submit' />
        </ValidateForm>
        <Tipbar ref='tipbar' />
        <Alert ref="alert"/>
      </div>      
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      code:state.infodata.getIn(['CHECK_VERIFY_CAPTCHA_W','data'])&&state.infodata.getIn(['CHECK_VERIFY_CAPTCHA_W','data']).code||false,
      pending:state.infodata.getIn(['CHECK_VERIFY_CAPTCHA_W','pending'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
       getCode(mobile){
         dispatch({
           type:actionTypes.VERIFY_CAPTCHA,
           params:[{
             mobile,
             type:3
           }
           ]
         })
       },
    pop(){
       dispatch(goBack())
    },
       gxReders(data){
          dispatch({
              type:actionTypes.FOR_GET_PWD,
              data:data
          })
       },
       sendCode(mobile,code){
         dispatch({
           type: actionTypes.CHECK_VERIFY_CAPTCHA_W,
           params:[{
             mobile,
             code
           }]
         })
       },
       push(path){
         dispatch(push(path))
       }
})

export default connect(mapStateToProps, mapDispatchToProps)(FindpasswordVerifyMobile)