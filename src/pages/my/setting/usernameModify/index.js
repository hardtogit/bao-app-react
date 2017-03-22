/**
 * 修改用户名
 */
import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import BaseInput from '../../../../components/BaseInput'
import NavBar from '../../../../components/NavBar/index'
import styles from './index.styl'
import commonStyles from '../../../../css/common.styl'
import util from '../../../../utils/utils.js'
import wrap from '../../../../utils/pageWrapper'
import {USER_INFO, SET_USERNAME,SET_USERNAME_SUCCESS} from '../../../../actions/actionTypes'
import {go} from 'react-router-redux'
import Confirm from '../../../../components/Dialog/confirm'
import Alert from '../../../../components/Dialog/alert'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Loading from '../../../../components/pageLoading'
class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			init:true,
			setting:false,
			usernames:'',
		}
	}
  loadDom=()=>{
      return(<Loading/>)
	}
	loadEndDom=(datas)=>{
		const{
			isSetUsername,
			username
		}=datas.data;
	  let Dom;
		if(!isSetUsername){
          Dom=this.setUserDom(username);
		}
		return Dom;
	}
	setUserDom=(username)=>{
		return( <div>
		<div onClick={() => this.refs.username.focus()} className={cn(commonStyles.bg,commonStyles.panelContent)}>
			<BaseInput
				className={commonStyles.mt15}
				ref='username'
				placeholder='4~26位字符，支持中英文，数字，_和@'
				defaultValue={username}
				onChange={(usernames)=>{this.setState({usernames})}}
				maxLength={26} />
		</div>
		<Confirm ref="confirm" />
	</div>)
	}
	componentDidMount() {
		const{
			datas,
			load
		}=this.props;
		if(!datas){
           load();
		}else if(datas.data.isSetUsername){
				this.refs.alert.show({
			  content: '您已设置过一次，不能重复设置',
			  okText: '确定',
				okCallback: () => this.props.pop(),
			})
		}else {
			this.setState({
				usernames:datas.data.username
			})
		}
		if(this.refs.username){
			this.refs.username.focus()
		}
	}
	componentWillUnmount() {
     
	}
	componentWillReceiveProps=({setUsernameResponseCode,datas,setUsernamePending})=>{
		const alert = this.refs.alert;
		if (datas){
			if(datas.data.isSetUsername&&this.state.init) {
				alert.show({
					content: '您已设置过一次，不能重复设置',
					okText: '确定',
					okCallback: () => this.props.pop(),
				});
				return false;
			}else if (this.state.init){
				this.setState({
					username:datas.data.usernames
				})
			}
			this.setState({
				init:false
			})
		}
	  if (setUsernameResponseCode ===100&&this.state.setting&&!setUsernamePending) {
			this.props.setUsernameSuccess(this.state.usernames,this);
			this.props.pop()
		}
	  if (setUsernameResponseCode === 300&&!setUsernamePending) {
			alert.show({
			  content: '设置用户名失败，请重试',
			  okText: '确定',
			})
		}
	  if (setUsernameResponseCode === 301&&!setUsernamePending) {
		  this.refs.alert.show({
			  content: '您已设置过一次，不能重复设置',
			  okText: '确定',
			  okCallback: () => this.props.pop(),
		  })
		}
	  if (setUsernameResponseCode === 302&&!setUsernamePending) {
			alert.show({
			  content: '用户名包含有特殊字符',
			  okText: '确定',
			})
		}
	  if (setUsernameResponseCode === 303&&!setUsernamePending) {
			alert.show({
			  content: '用户名被占用',
			  okText: '确定',
			})
		}
	}
	componentDidUpdate(){
		if(this.refs.username){
				this.refs.username.focus();
		}
	}

	canSave = () => {
		if(this.state.usernames&&this.state.usernames!=''&&this.state.usernames!=this.props.datas.data.username){
			return this.state.usernames.length>=4&&this.props.usernames != this.state.usernames&&this.state.usernames.length<=26;
		}else{
			return false
		}
		
	}

	save = () => {
		if (!this.canSave()) return
		this.refs.confirm.show({
		  title: '',
		  content: '用户名设置成功后不可修改',
		  okText: '确定',
		  okCallback: () => {
				this.props.setUsernameRequest(this.state.usernames,this)
			},
		  cancelText: '取消',
		  cancelCallback: () => {},
		})
	}

	onValid = () => {
  	const data  = this.refs.form.getValue()
	}

	onInvalid = (name, value, message) => {

	}
	render() {
		const {
			setUsernamePending,
			datas
		} = this.props;
		let Dom;
		if(datas){
			if (!datas.data.isSetUsername){
				Dom=this.loadEndDom(datas);
			}else {
				Dom=''
			}
		}else{
            Dom=this.loadDom();
		}
    return (
      	<div className={commonStyles.panel}>
	  			<NavBar
						onLeft={this.props.pop}
	  				title='用户名'
	  				rightNode={<span onClick={this.save} className={cn(styles.saveBtn,!this.canSave()&&styles.disable)}>
							{setUsernamePending ?
								<InlineLoading color="rgba(255,255,255,.8)" /> : '保存'}
						</span>} />
	  			  {
							Dom
						}
							<Alert ref="alert" />
      	</div>
    )
	}
}

const mapStateToProps = (state) => {
  return {
		datas:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
		setUsernamePending: state.infodata.getIn([SET_USERNAME, 'pending']),
		setUsernameResponseCode: state.infodata.getIn([SET_USERNAME, 'data']) && +state.infodata.getIn([SET_USERNAME, 'data']).code || 0
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

	setUsernameRequest(name,Self){
		dispatch({
			type: SET_USERNAME,
			params:[name]
		});
		Self.setState({
			setting:true
		})
	},

	setUsernameSuccess(name,Self) {
		dispatch({
			type: SET_USERNAME_SUCCESS,
			 key:'USER_INFO_WITH_LOGIN',
			data:{username:name,isSetUsername:true}
		})
		Self.setState({
			setting:false
		})
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(Index))
