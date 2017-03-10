/**
 * 修改登录密码
 */
import React from 'react'
import { connect } from 'react-redux'
import {push, goBack} from 'react-router-redux'
import BasePasswordInput from '../../../../components/BaseInput/BasePasswordInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import Alert from '../../../../components/Dialog/alert'
import Page from '../../../../components/Page'
import ValidateForm  from '../../../../components/BaseValidateForm'
import Tipbar from '../../../../components/Tipbar'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import {LOGIN_PASSWORD_MODIFY,LOGIN_OUT} from '../../../../actions/actionTypes'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Success from '../../../../components/Dialog/success'
class LoginPasswordModify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: '',
    }
  }

  componentWillReceiveProps({resCode,pending}) {
    if (resCode == 100&&!pending) {
      this.refs.success.show({
        text: '修改成功',
        callback: () => {this.props.push('/login');this.props.logout();this.props.clear()},
      })
    }else if (resCode==300&&!pending){
      this.refs.alert.show({
        title: '登录密码修改失败',
        okText: '返回',
      })
    }else if(resCode==301&&!pending){
      this.refs.alert.show({
        title: '新密码不能与原密码一致',
        okText: '确定',
      })
    }else if (resCode==302&&!pending){
      this.refs.alert.show({
        title: '原登录密码错误，请重新输入',
        okText: '确定',
      })
    }
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
        pending
    }=this.props;
    return (
      <Page>
        <div className={commonStyles.panel}>
          <NavBar onLeft={this.props.pop} title='修改登录密码' />
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
              placeholder='请输入原登录密码'
              type='validateItem'
              reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'} }}
              borderType='two' />
            <BasePasswordInput
              ref='newPassword'
              name='newPassword'
              maxLength={16}
              label='新密码'
              placeholder='请输入新登录密码'
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
          <Alert ref="alert" />
          <Success ref="success" />
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pending: state.infodata.getIn([LOGIN_PASSWORD_MODIFY, 'pending']),
    resCode: state.infodata.getIn([LOGIN_PASSWORD_MODIFY, 'data']) && state.infodata.getIn([LOGIN_PASSWORD_MODIFY, 'data']).code || 0,
  }
}

const mapDispatchToProps = (dispatch) => ({
  push(path) {
    dispatch(push(path))
  },
  logout(){
    dispatch({
      type:LOGIN_OUT
    })
  },
  pop() {
    dispatch(goBack())
  },
  modify(data) {
    dispatch({
      type: LOGIN_PASSWORD_MODIFY,
      params: [
        data
      ],
    })
  },
  clear(){
    dispatch({
      type:"CLAER_USER"
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPasswordModify)
