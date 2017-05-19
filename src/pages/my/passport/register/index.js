/**
 * 注册 － 输入手机号
 */
import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import BaseInput from '../../../../components/BaseInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import ValidateForm  from '../../../../components/BaseValidateForm'
import LoadingButton from '../../../../components/LoadingButton'
import Tipbar from '../../../../components/Tipbar'
import styles from './index.styl'
import commonStyles from '../../../../css/common.styl'
import {EXIST_MOBILE,REGISTER_NUM} from '../../../../actions/actionTypes'
import Icon from '../../../../assets/images/PhoneIcon.png'
import back from '../../../../assets/images/regBack.png'
import Alert from '../../../../components/Dialog/alert'
import util from '../../../../utils/utils.js'
class RegisterMobile extends React.Component {
  constructor(props){
    super(props)
    this.state= {init:true}

  }
  componentWillReceiveProps(nextProps) {
    const code = nextProps.data;
    const {go}=this.props;
    if (code) {
      if (code.code == 302) {
          this.refs.alert.show({
              content: '手机号码已注册，立即登录',
              okText: '确定',
              cancel:'取消',
              okCallback: () => {go('/login')},
          })
      }
      if (code.code==300){
          this.refs.alert.show({
              content: '发送验证码失败',
              okText: '确定',
              cancel:'取消',
          })
      }
      if (code.code == 100&&this.state.init) {
        this.props.savenum(this.refs.form.getValue().mobile );
        this.props.go('/registerVerifyMobile');
        this.setState({
          init:false
        })
      }
    }
  }

  onValid = () => {
    if (this.props.pending) return false
    const data = this.refs.form.getValue()
    this.props.checkExistMobile(data.mobile)
  }

  onInvalid = (name, value, message) => {
    this.openTipbar(message)
  }

  openTipbar(message) {
    this.refs.tipbar.open(message)
  }

  render() {
    return (
      <div className={styles.loginPage}>
        <NavBar backgroundColor="#fff"
                leftNode={<img src={back} className={styles.backImg}/>}
                 onLeft={this.props.goBack} />
        <div className={styles.content}>
        <span className={commonStyles.markTitle}>手机号将成为你的账号</span>
        <ValidateForm
          ref='form'
          onValid={this.onValid}
          onInvalid={this.onInvalid}>
          <BaseInput
            containerStyle={{margin: '30px 0 0 0',paddingRight:'15px'}}
            ref='mobile'
            name='mobile'
            noLeftPadding
            placeholder='请输入手机号'
            type='validateItem'
            icon={<div className={styles.Icon}><img src={Icon}/></div>}
            reg={{ required: {message: '手机号不能为空'},
                   mobile: {message: '请输入正确的手机号'} }}
            borderType='four' />
          <Button
            containerStyle={{margin: '30px 15px 0'}}
            text={this.props.pending ? <LoadingButton text='下一步' /> : '下一步'}
            type='submit' />
        </ValidateForm>
          </div>
        <Tipbar ref='tipbar' />
        <Alert ref="alert"/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const infodata = state.infodata
  return {
    pending: infodata.getIn([EXIST_MOBILE, 'pending']),
    data: infodata.getIn([EXIST_MOBILE, 'data']) || {},
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  goBack() {
    dispatch(goBack())
  },
  go(path) {
    dispatch(push(path))
  },
  checkExistMobile(mobile) {
    const clientTime=Date.parse(new Date())/ 1000;
    const sign=mobile+1+clientTime+util.key();
    dispatch({
      type: EXIST_MOBILE,
      params: [
        {
          mobile,
          type:1,
          clientTime,
          sign:util.md5(sign)
        }
      ],
    })
  },
  savenum(mobile){
    dispatch({
      type:REGISTER_NUM,
      key:'mobile',
      data:mobile
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterMobile)
