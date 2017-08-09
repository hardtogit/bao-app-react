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
import styles from './index.less'
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
    passGuard1.generate("kb1",kb,0);
    passGuard2.generate("kb2",kb,0);
    $(function(){
      setTimeout(function(){
        kb.generate();
      },100);
    })
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
  openTipbar(message) {
    //this.refs.tipbar.open(message)
  }

  render() {
    return (
      <Page>
        <div className={commonStyles.panel}>
          <NavBar onLeft={this.props.pop} title='修改交易密码' />
          <div className={styles.input_group}>
          <div className={styles.inputs}>
            <span>原密码</span>
          <input id="kb1" type="text"/>
          </div>
          <div className={styles.inputs}>
            <span>新密码</span>
          <input id="kb2" type="text"/>
          </div>
          </div>
          <Button className={styles.submit} text="确认修改" >

          </Button>
          <Alert ref="alert" />
        </div>
        <Tipbar text={this.state.errorMessage} />
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
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
