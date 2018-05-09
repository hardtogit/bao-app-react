import React from 'react'
import NavBar from '../../../../components/NavBar'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import Success from '../../../../components/Dialog/success'
import styles from './index.styl'
import {go, replace} from 'react-router-redux'
import {connect} from 'react-redux'
import IDValidator from 'id-validator'
import {IDENTITY_AUTH, SET_USERNAME_SUCCESS,REGISTER_NUM} from '../../../../actions/actionTypes'
import Loading from '../../../../components/pageLoading'

class IdentityAuth extends React.Component {
  state = {
    name: '',
    id: '',
    valid: false,
    idValidator: new IDValidator(),
    init:true
  }
  componentDidMount(){
    const {
        card,
        load
    }=this.props;
    if (!card){
       load()
    }else if(card.data.card!=''){
      this.alert()
    }
  }
  componentWillReceiveProps({card,responseCode: code}) {
    const alert = this.refs.alert;
    const {
      path,
      reg,
      setReg
    }=this.props;
    let pathGo;
    if (card&&card.data.card!=''&&this.state.init){
      this.alert()
    }
    if (code === 100&&this.state.init) {
      this.props.authSuccess(this.state.name, this.state.id);
      let user=JSON.parse(sessionStorage.getItem('bao-user'));
      if (path!=''&&reg){
         pathGo=path;
         setReg()
      } else {
         pathGo='/user/setting'
      }
      user.card=this.state.id;
      user.isAuth=2;

        sessionStorage.setItem('bao-user',JSON.stringify(user))
      this.refs.success.show({
        text: '认证成功',
        callback: () => {this.props.replace(pathGo)},
      })
      this.setState({
        init:false
      })
    }
    if (code === 301) {
      alert.show({
        content: '该身份证已被认证，如有问题请联系客服！',
        okText: '确定',
      })
    }
    if (code === 302) {
      alert.show({
        title: '身份证认证失败',
        content: '请输入真实的身份证姓名和身份证号',
        okText: '确定',
      })
    }
    if (code === 303) {
      alert.show({
        content: '根据相关规定，出借者年龄必须在18~65之间',
        okText: '确定',
      })
    }
  }
    componentDidUpdate(){
    this.props.clearData()
    }
  alert(){
    const alertn=this.refs.alert;
    alertn.show({
      content: '您已经认证过身份，无需认证',
      okText: '返回',
      okCallback:this.props.pop ,
    })
  }
  submit = () => {
    if (!this.state.valid) return;
    this.refs.confirm.show({
      title: '身份确认',
      content: (
        <div className={styles.ensure}>
          <p>身份认证后不可修改，请确认信息无误</p>
          <p>身份证姓名：{this.state.name}</p>
          <p>身份证号码：{this.state.id}</p>
        </div>
      ),
      okText: '确定',
      okCallback: () => this.props.submit(this.state.name, this.state.id),
      cancelText: '取消',
    })
  }


  handleIDInput = (e) => {
    const id = e.target.value
    this.setState({id})
    if (id.length >= 14) {
      if (this.state.idValidator.isValid(id)) {
        if (!this.state.valid) this.setState({valid: true})
      }else {
        if (this.state.valid) this.setState({valid: false})
      }
    }
  }
 loadDom(){
   return(<Loading/>)
 }
 loadEnd(){
   const {
       pending
   }=this.props;
   return(<div>
     <div className={styles.form}>
       <div onClick={() => this.refs.name.focus()} className={styles.row}>
         <span>真实姓名</span>
         <input
             ref="name"
             type="text"
             placeholder="请输入身份证姓名"
             value={this.state.name}
             onChange={e => this.setState({name: e.target.value})}
         />
       </div>
       <div onClick={() => this.refs.id.focus()} className={styles.row}>
         <span>身份证号</span>
         <input
             ref="id"
             type="tel"
             placeholder="请输入18位身份证号"
             maxLength={18}
             value={this.state.id}
             onChange={this.handleIDInput}
         />
       </div>
     </div>
     <div className={styles.buttonWrap}>
       <button disabled={!(this.state.valid && this.state.name)} onClick={this.submit}>
         {pending && <InlineLoading color="#fff" />}
         实名认证
       </button>
     </div>
   </div>)
 }
  render() {
    const {
      pop,
      card,
    } = this.props;
    let Dom;
    if (card){
       if (card.data.card==''){
         Dom=this.loadEnd()
       }
    }else {
      Dom=this.loadDom()
    }
    return (
      <div className={styles.root}>
        <NavBar onLeft={pop}>身份认证</NavBar>
        {
            Dom
        }
        <Confirm ref="confirm" />
        <Alert ref="alert" />
        <Success ref="success" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    card:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
    responseCode: state.infodata.getIn([IDENTITY_AUTH, 'data']) && +state.infodata.getIn([IDENTITY_AUTH, 'data']).code || 0,
    pending: state.infodata.getIn([IDENTITY_AUTH, 'pending']),
    path:state.infodata.getIn([REGISTER_NUM,'pathLeave'])&&state.infodata.getIn([REGISTER_NUM,'pathLeave']).path||'',
    reg:state.infodata.getIn([REGISTER_NUM,'regSuccess'])&&state.infodata.getIn([REGISTER_NUM,'regSuccess']).reg||''
  }
}

const mapDispatchToProps = (dispatch) => ({
  load(){
    dispatch({
      type:'USER_INFO_WITH_LOGIN'
    })
  },
  pop() {
    dispatch(go(-1))
  },

  replace(path) {
    dispatch(replace(path))
  },

  submit(name, id) {
    dispatch({
      type: IDENTITY_AUTH,
      params: [
        {
          name,
          code: id,
        }
      ]
    })
  },
  setReg(){
    dispatch({
        type:'REGISTER_NUM',
        key:'regSuccess',
        data:{
            reg:false
        }
    })
  },
  authSuccess(name, id) {
    dispatch({
      type: SET_USERNAME_SUCCESS,
      key:'USER_INFO_WITH_LOGIN',
      data:{
          name,
          card: id,
          isAuth:2
      }
    })
  },
    clearData(){
        dispatch({
            type: 'CLEAR_INFO_DATA',
            key:'IDENTITY_AUTH',
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(IdentityAuth)
