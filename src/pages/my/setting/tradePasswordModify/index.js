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
      time:0
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
  componentWillReceiveProps(nextProps) {
    let $this=this;
    if (data&&data.status==1){
      if(this.state.time<=3){
        this.setState({
          time:this.state.time+1
        });
        if(verifyData&&verifyData.code=='0001'){
               this.props.push('')
        }else{
          if(this.state.time>=3){
            if(verifyData&&verifyData.code!='0001'){
              this.alert('提现失败');
              this.refs.loading.hide()
            }else{
              this.refs.loading.hide();
              this.alert('提现失败')
            }
            this.setState({
              time:0
            })
          }else{
            setTimeout(function(){
              $this.props.cashVerify({id:cashData.msgId})
            },2000)

          }
        }
      }
    }
  }
  submit=()=>{
    //判断密码长度
    if(passGuard1.getLength()==0||passGuard2.getLength()==0){
      this.refs.alert.open('密码不能为空')
      return false;
    }
    //判断密码是否匹配正则
    if(passGuard2.getValid()==1){
      this.refs.alert.open('新密码不符合要求')
      return false;
    }
    passGuard1.setRandKey(sessionStorage.getItem('passwordFactor'));
    passGuard2.setRandKey(sessionStorage.getItem('passwordFactor'));
    let data={
      hEncryptKey:sessionStorage.getItem('hEncryptKey'),
      passwordFactor:sessionStorage.getItem('passwordFactor'),
      oldPassword:passGuard1.getOutput(),
      newPassword:passGuard2.getOutput(),
      device:"WAP"
    }
    this.props.modify(data)
  }
  render() {
    return (
      <Page>
        <div className={commonStyles.panel}>
          <NavBar onLeft={this.props.pop} title='修改交易密码' />
          <div className={styles.input_group}>
          <div className={styles.inputs}>
            <span>原密码</span>
          <input id="kb1" type="text" placeholder="请输入原交易密码"/>
          </div>
          <div className={styles.inputs}>
            <span>新密码</span>
          <input id="kb2" type="text" placeholder="请输入新交易密码"/>
          </div>
          </div>
          <Button className={styles.submit} onClick={this.submit} text="确认修改" >

          </Button>
        </div>
        <Tipbar ref='alert'/>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data:state.infodata.getIn(['STORE_TRADE_PASSWORD_MODIFY', 'data']),
    verifyData:state.infodata.getIn(['PASSWORD_CHANGE_VERIFY','data'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  push(path) {
    dispatch(push(path))
  },

  pop() {
    dispatch(goBack())
  },

  modify(data) {
    dispatch({
      type: 'STORE_TRADE_PASSWORD_MODIFY',
      params: [
        data
      ]
    })
  },
  verify(id){
     dispatch({
       type:'PASSWORD_CHANGE_VERIFY',
       id:[id]
     })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TradePasswordModify)
