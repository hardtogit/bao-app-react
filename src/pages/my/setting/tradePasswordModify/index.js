/**
 * 修改交易密码
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
import {TRADE_PASSWORD_MODIFY} from '../../../../actions/actionTypes'
import Page from '../../../../components/Page'
import {push, goBack} from 'react-router-redux'
import Loading from '../../../../components/pageLoading'
import InlineLoading from '../../../../components/Loading/InlineLoading'
class TradePasswordModify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: ''
    }
  }
  componentDidMount(){
   const {
       data,
       load
   }=this.props;
    if (!data){
       load();
    }else if (!data.data.isSetTradePassword){
       this.alert()
    }
  }
  componentWillReceiveProps({data,resCode}) {
    if (data){
      if (!data.data.isSetTradePassword){
        this.alert()
      }
    }
    if (resCode == 100) {
      this.refs.alert.show({
        title: '交易密码修改成功',
        okText: '确定',
        okCallback: this.props.pop,
      })
    }
    if (resCode == 301) {
      this.refs.alert.show({
        title: '交易密码不能和登录密码一致',
        okText: '确定',
      })
    }
    if (resCode == 302) {
      this.refs.alert.show({
        title: '原交易密码错误，请重新输入',
        okText: '确定',
      })
    }
  }
  alert(){
    const alertn=this.refs.alert;
    alertn.show({
      title: '您还未设置交易密码',
      okText: '去设置',
      okCallback:()=>{this.props.push('/user/setting/tradePasswordSet')}
    })
  }
  loadDom(){
    return(<Loading/>)
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
            label='原密码'
            maxLength={16}
            placeholder='请输入原交易密码'
            type='validateItem'
            reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'} }}
            borderType='two' />
        <BasePasswordInput
            ref='newPassword'
            name='newPassword'
            maxLength={16}
            label='新密码'
            placeholder='请输入新交易密码'
            type='validateItem'
            reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'},
              equalTo: {name: 'password', message: '新密码不能和原密码相同'} }}
            borderType='three' />
        <Button
            className={commonStyles.buttonWrap}
            text={pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'提交中'} className={commonStyles.loading}/>||'确认提交'}
            type='submit' />
      </ValidateForm>
      { this.state.errorMessage && <Tipbar text={this.state.errorMessage} /> }
    </div>)
  }
  onValid = () => {
    if (this.props.pending) return
    const {
      password: oldPwd,
      newPassword: password,
    } = this.refs.form.getValue()
    this.props.modify({oldPwd, password})
  }

  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }

  openTipbar(message) {
    //this.refs.tipbar.open(message)
  }

  render() {
    const {
        data,
        load
    }=this.props;
    let Dom;
    if (data){
       if (data.data.isSetTradePassword){
         Dom=this.loadEnd()
       }
    }else {
      Dom=this.loadDom()
    }
    return (
      <Page>
        <div className={commonStyles.panel}>
          <NavBar onLeft={this.props.pop} title='修改交易密码' />
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
    pending: state.infodata.getIn([TRADE_PASSWORD_MODIFY, 'pending']),
    resCode: state.infodata.getIn([TRADE_PASSWORD_MODIFY, 'data']) && state.infodata.getIn([TRADE_PASSWORD_MODIFY, 'data']).code || 0,
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

  modify(data) {
    dispatch({
      type: TRADE_PASSWORD_MODIFY,
      params: [
        data
      ]
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TradePasswordModify)
