/**
 * 忘记交易密码 － 验证身份信息
 */

import React from 'react'
import { connect } from 'react-redux'
import BaseInput from '../../../../components/BaseInput'
import Button        from '../../../../components/BaseButton'
import NavBar from '../../../../components/NavBar'
import ValidateForm  from '../../../../components/BaseValidateForm'
import Tipbar from '../../../../components/Tipbar'
import Loading from '../../../../components/pageLoading'
import commonStyles from '../../../../css/common.styl'
import Page from '../../../../components/Page'
import {push, goBack} from 'react-router-redux'
import Alert from '../../../../components/Dialog/alert'
import InlineLoading from '../../../../components/Loading/InlineLoading'
class VerifyCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: '',
      jump:false
    }
  }
  loadDom(){
    return(<Loading/>)
  }
  loadEndDom(){
    const {
        pending
    }=this.props;
    return(<div>
      <ValidateForm
          style={{marginTop: 15}}
          ref='form'
          onValid={this.onValid}
          onInvalid={this.onInvalid}>
        <BaseInput
            containerStyle={{marginTop: 15}}
            ref='card'
            name='card'
            label='身份证号'
            placeholder='请输入您的身份证号'
            type='validateItem'
            maxLength={18}
            reg={{ required: {message: '请输入正确的身份证号'},
              card: {message: '请输入正确的身份证号'}}} />
        <Button
            className={commonStyles.buttonWrap}
            text={pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'下一步'} className={commonStyles.loading}/>||'下一步'}
            type='submit' />
      </ValidateForm>
      { this.state.errorMessage && <Tipbar text={this.state.errorMessage} /> }
    </div>)
  }
  alert=()=>{
    const alert=this.refs.alert;
    console.log(alert)
    alert.show({
      content: '您还未设置交易密码',
      okText: '返回',
      okCallback:this.props.pop,
    })
  };
  componentWillReceiveProps({data,code,pending}){
      const alert=this.refs.alert;
    if (!data.data.isSetTradePassword){
      this.alert()
    }
    if (code==100&&!this.state.jump&&!pending){
      this.props.push('/user/setting/tradePasswordForget/verifyMobile')
      this.setState({
        jump:true
      })
    }
    if (code==300&&!pending){
      alert.show({
        content: '身份信息错误',
        okText: '确定',
      })
    }
  }
  componentDidMount(){
   const {
       data,
       load
   }=this.props;
   if (!data){
     load()
   }else {
      if (!data.data.isSetTradePassword){
            this.alert()
      }
   }
  }
  onValid = () => {
    const data = this.refs.form.getValue()
    const {
        card
    }=data;
    this.props.verify(card)
  }

  onInvalid = (name, value, message) => {
    this.setState({errorMessage: message})
  }

  render() {
    const {
        data
    }=this.props;
    let Dom;
    if (!data){
      Dom=this.loadDom();
    }else {
      if (data.data.isSetTradePassword){
        Dom=this.loadEndDom()
      }
    }
    return (
      <Page>
        <div className={commonStyles.panel}>
          <NavBar
            onLeft={this.props.pop}
            title='验证身份信息' />
          {
            Dom
          }
        </div>
        <Alert ref="alert" />
      </Page>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
    code:state.infodata.getIn(['VERIFY_CARD','data'])&&state.infodata.getIn(['VERIFY_CARD','data']).code||'',
    pending:state.infodata.getIn(['VERIFY_CARD','pending'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  load(){
     dispatch({
       type:"USER_INFO_WITH_LOGIN"
     })
  },
  verify(card){
     dispatch({
       type:'VERIFY_CARD',
       params:[{
         card
       }]
     })
  },
  push(path) {
    dispatch(push(path))
  },

  pop() {
    dispatch(goBack())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyCard)
