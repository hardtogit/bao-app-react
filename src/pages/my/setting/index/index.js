/**
 * 设置主页
 */
import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import BaseText from '../../../../components/BaseText'
import Page from '../../../../components/Page'
import NavBar from '../../../../components/NavBar/index'
import Loading from '../../../../components/pageLoading'
import styles  from './index.styl'
import commonStyles from '../../../../css/common.styl'
import Alert from '../../../../components/Dialog/alert'
import {Link} from 'react-router'
import {push, goBack,replace} from 'react-router-redux'
import Success from '../../../../components/Dialog/success'
class Setting extends React.Component {
	constructor(props){
		super(props)
		this.state={
			init:true
		}
	}
	goUsernameModify = () => {
		if (this.props.user.data.isSetUsername) {
			this.refs.alert.show({
				title: '',
				content: '你已经设置过用户名，无法再次设置',
				okText: '确定',
				okCallback: () => {},
			})
		}else {
			this.props.push('/user/setting/usernameModify')
		}
	}
	loadDom(){
		return(<Loading/>)
	}
	loadEndDom(datas,address){
		const{
			avatar,
			username,
			isAuth,
			isSetTradePassword,
			isSetGesturePassword
		}=datas.data;
		return(
			<div>
				<div className={commonStyles.panelContent}>
					<div style={{marginTop: 15}}>
						<BaseText className={styles.avatarWrap}
								  label='头像'
								  borderType='two'
								  right={<img className={styles.avatar} src={avatar}/>}/>

						<BaseText
							onClick={this.goUsernameModify}
							label='用户名'
							borderType='three'
							content={username}
							right={false} />

					</div>
					<div className={styles.listw}>
						<Link to='/user/setting/securityCard'>
							<BaseText
								onClick={()=>{}}
								label='安全卡'
								borderType='two' />
						</Link>
						<Link to='/user/setting/securityCenter'>
							<BaseText
								onClick={()=>{}}
								label='安全中心'
								content={isAuth === 2 && isSetTradePassword && isSetGesturePassword &&'高'||'低'}
								borderType='four' />
						</Link>
						<Link to={address}>
							<BaseText
								onClick={()=>{}}
								label='收货地址'
								borderType='four' />
						</Link>
						<Link to='/user/setting/problems'>
							<BaseText
								onClick={()=>{}}
								label='常见问题'
								borderType='four' />
						</Link>
						<Link to='/user/setting/feedback'>
							<BaseText
								onClick={()=>{}}
								label='意见反馈'
								borderType='four' />
						</Link>
						<Link to='/user/setting/about'>
							<BaseText
								onClick={()=>{}}
								label='关于宝点理财'
								content={'V4.0.0'}
								borderType='three' />
						</Link>
					</div>
					<a className={styles.logoutBtn} onClick={this.props.logout}>安全退出</a>
				</div>
				<Alert ref="alert"/>
			</div>
		)

	}
	componentDidMount(){
        const {
			user,
			load,
            address,
            getAddress
		}=this.props;
        if(!user){
			load();
		}
        if(!address.status)
            getAddress();
	}
	componentWillReceiveProps({code}){
		if (code){
			if (code==100){
				this.refs.success.show({
					text: '安全退出成功',
					callback: () => {this.props.clear();this.props.setHomeTab();this.props.replace('/login');},
				})
			}else if (code==300){
				this.refs.alert.show({
					title: '安全退出失败',
					okText: '返回',
				})
			}
		}
	}
	render() {
		const{
			user,
            address,
			pop
		}=this.props;
		let Dom;
		if(user){
			Dom=this.loadEndDom(user,address.url)
		}else{
			Dom=this.loadDom()
		}
		return (
			<Page>
				<div className={cn(commonStyles.panel, styles.bg)}>
					<NavBar onLeft={pop}>设置</NavBar>
					{
						Dom
					}
					<Success ref="success" />
				</div>
			</Page>
		)
	}
}
const siteModel=(data)=>{
    if(data&&data.code==100){
        return {
            status:true,
            url:data.data.length>0?'/user/setting/siteList':'/user/setting/siteAdd'
        }
    }else{
        return {
            status:false
        }
    }
};
const mapStateToProps = (state) => {
	return {
		user:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
		code:state.infodata.getIn(['LOGIN_OUT','data'])&&state.infodata.getIn(['LOGIN_OUT','data']).code||false,
        address:siteModel(state.infodata.getIn(['SITE_LIST','data']))
	}
};

const mapDispatchToProps = (dispatch) => ({
	load(){
		dispatch({
			type:"USER_INFO_WITH_LOGIN"
		})
	},
	push(url){
		dispatch(push(url))
	},
    replace(url){
	   dispatch(replace(url))
	},
	pop() {
		dispatch(goBack())
	},
	logout(){
		dispatch({
			type:"LOGIN_OUT"
		})
	},
	clear(){
		dispatch({
			type:"CLEAR_USER_INFO"
		});
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'USER_INFO_WITH_LOGIN'
        })
	},
	getAddress(){
		dispatch({
			type:"SITE_LIST"
		})
	},
	setHomeTab(){
        dispatch({
            type:'LOGIN_OUT_PATH',
            path:'/home/myIndex'
        })
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Setting)
