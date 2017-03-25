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
import {TRADE_PASSWORD_SET} from '../../../../actions/actionTypes'
import Page from '../../../../components/Page'
import {push, goBack} from 'react-router-redux'
import Loading from '../../../../components/pageLoading'
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
    const {
        data,
        load
    }=this.props;
    if (!data){
      load()
    }else {
      if (data.data.card==''){
        alert.show({
          title: '为了您的账号安全，请先认证身份信息！',
          okText: '去认证',
          okCallback: ()=>{this.props.push('/user/setting/identityAuth')},
        })
      }
      if (data.data.isSetTradePassword){
        alert.show({
          title: '你已经设置过密码',
          okText: '返回',
          okCallback:this.props.pop,
        })
      }
    }
  }
  componentWillReceiveProps({resCode,data,pending}) {
    const alert = this.refs.alert;
    if (data.data.card==''){
      alert.show({
        title: '为了您的账号安全，请先认证身份信息！',
        okText: '去认证',
        okCallback:()=>{this.props.push('/user/setting/identityAuth')},
      })
    }
    if (data.data.isSetTradePassword&&this.state.init){
      alert.show({
        title: '你已经设置过密码',
        okText: '返回',
        okCallback:this.props.pop,
      })
    }
    if (resCode == 100&&this.state.init&&!pending) {
      alert.show({
        title: '设置交易密码成功',
        okText: '返回',
        okCallback: this.props.pop,
      })
     this.props.success();
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

  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }

  openTipbar(message) {
    //this.refs.tipbar.open(message)
  }
  loadEnd(){
    const {
        pending
    }=this.props;
    return(<div>
      <ValidateForm
          className={commonStyles.mt15}
          ref='form'
          onValid={this.onValid}
          onInvalid={this.onInvalid}>
        <BasePasswordInput
            ref='password'
            name='password'
            maxLength={16}
            placeholder='设置交易密码'
            type='validateItem'
            reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'} }}
        />
        <Button
            className={commonStyles.buttonWrap}
            text={pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'提交中'} className={commonStyles.loading}/>||'确认提交'}
            type='submit' />
      </ValidateForm>
      { this.state.errorMessage && <Tipbar text={this.state.errorMessage} /> }
    </div>)
  }
  loadDom(){
     return(<Loading/>)
  }
  render() {
    const {
        data
    }=this.props;
    let Dom;
    if (data){
      if (data.data.card!='' && !data.data.isSetTradePassword){
        Dom=this.loadEnd()
      }
    }
    else {
      Dom=this.loadDom()
    }
    return (
      <Page>
        <div className={commonStyles.panel}>
          <NavBar onLeft={this.props.pop} title='设置交易密码' />
          {
              Dom
          }
          <Alert ref="alert" />
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  load(){
        dispatch({
          type:'USER_INFO_WITH_LOGIN'
        })
  },
  push(path) {
    dispatch(push(path))
  },

  pop() {
    dispatch(goBack())
  },

  pwdSet(data) {
    dispatch({
      type: TRADE_PASSWORD_SET,
      params: [
        data
      ]
    })
  },
  success(){
    dispatch({
      type:'SET_USERNAME_SUCCESS',
      key:'USER_INFO_WITH_LOGIN',
      data:{
        isSetTradePassword:true
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TradePasswordSet)
