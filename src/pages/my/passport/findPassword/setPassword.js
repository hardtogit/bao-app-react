/**
 * 忘记密码 － 设置登录密码
 */
import React from 'react'
import { connect } from 'react-redux'
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
import Success from '../../../../components/Dialog/success'
import {replace} from 'react-router-redux'

class FindpasswordSetPassword extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: ''
    }
  }

  componentDidMount() {
      const {
          data
      }=this.props;
    if (!data){
      this.refs.alert.show({
        content: '请先认证手机号码',
        okText: '确定',
        okCallback:()=>{this.props.replace('/findpassword')}
      })
    }
  }

  componentWillUnmount() {

  }
  componentWillReceiveProps({code}){
    if (code){
      const alert=this.refs.alert;
      if (code==100){
        this.refs.success.show({
          text: '重置密码成功',
          callback: () => {this.props.replace('/login'),this.props.clear()},
        })
      }
      if (code==300){
        alert.show({
          content: '重置密码失败，请重新提交',
          okText: '确定',
        })
      }
      if (code==301){
        alert.show({
          content: '手机号不存在',
          okText: '确定',
        })
      }
    }
  }
  onValid = () => {
    const password = this.refs.form.getValue().password;
     const {
         mobile,
         captcha
     }=this.props.data
     this.props.send({mobile,code:captcha,password})
  }
  Dom(){
    return(<div>
      <ValidateForm
          className={styles.formWrap}
          ref='form'
          onValid={this.onValid}
          onInvalid={this.onInvalid}>
        <BasePasswordInput containerStyle={{marginTop: 15}}
                           ref='password'
                           name='password'
                           maxLength={16}
                           label='密码'
                           placeholder='设置新登录密码'
                           type='validateItem'
                           reg={{ reg: {reg: util.checkPassword, message: '请输入正确密码'} }}
        />
        <Button className={commonStyles.buttonWrap}
                text={this.props.pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'提交中'} className={commonStyles.loading}/>||'确认设置'}
                type='submit' />
      </ValidateForm>
    </div>)
  }
  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }
  render() {
    const {
        data
    }=this.props;
    let Dom;
    if (data){
      Dom=this.Dom();
    }
    return (
      <div className={commonStyles.panel}>
        <NavBar
          title='设置密码'
        />
        {
            Dom
        }
        <Tipbar ref="tipbar"/>
        <Success ref="success" />
        <Alert ref="alert"/>
      </div>      
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
       data:state.infodata.getIn(['FOR_GET_PWD','data']),
       code:state.infodata.getIn(['FIND_PWD_SET','data'])&&state.infodata.getIn(['FIND_PWD_SET','data']).code||false,
      pending:state.infodata.getIn(['FIND_PWD_SET','pending'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
      send(data){
           dispatch({
             type:actionTypes.FIND_PWD_SET,
             params:[data]
           })
      },
     replace(path){
       dispatch(replace(path))
     },
    clear(){
        dispatch({
            type:'CLAER_LC',
            key:['FOR_GET_PWD']
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(FindpasswordSetPassword)