/**
 * 安全中心
 */
import React from 'react'
import { connect } from 'react-redux'
import BaseText from '../../../../components/BaseText'
import NavBar from '../../../../components/NavBar/index'
import Page from '../../../../components/Page'
import Store from '../../../../components/Dialog/store'
import commonStyles from '../../../../css/common.styl'
import utils from '../../../../utils/utils.js'
import {push, goBack} from 'react-router-redux'
import Loading from '../../../../components/pageLoading'
class SecurityCenter extends React.Component {
	loadDom(){
		return(<Loading/>)
	}
	loadEndDom(datas){
          const{
			  isAuth,
			  mobile,
			  isSetTradePassword,
			  card
		  }=datas.data;
		  const{
			  push
		  }=this.props;
		const storeData=JSON.parse(sessionStorage.getItem('bao-store'));
		let text='';
		let url=''
		if(storeData.isRegister&&storeData.isBindBankcard){
			text= "已开通"
		}else{
			if(storeData.isRegister){
				text= "未绑定银行卡"
				url="/user/setting/cardBind"
			}else{
				text= "未开通"
				url="/user/setting/regStore"
			}
		}


       return(
		   <div>
	         <div style={{marginTop: 15}}>
				<BaseText
				  onClick={() =>isAuth === 0 && push('/user/setting/regStore')}
				  label='身份认证'
				  content={isAuth === 1 ? '审核中' : isAuth === 2 ? utils.replaceTextToSymbol(card, 9, 14) : '未认证'}
				  borderType='two' />
			  {!mobile ?
				<BaseText
				  onClick={() => {push('/user/setting/mobileBind')}}
				  label='绑定手机'
				  borderType='three' /> :
				<BaseText
				  onClick={() => {push('/user/setting/mobileBindModify')}}
				  label='修改绑定手机'
				  content={utils.replaceTextToSymbol(mobile, 4, 7)}
				  borderType='three' />}
			</div>
			<div style={{marginTop: 15}}>
				<BaseText
				 onClick={()=>{push('/user/setting/loginPasswordModify')}}
				 label='修改登录密码'
				 borderType='two' />
			{isSetTradePassword ?
				<BaseText
				 onClick={()=>{if(storeData.isRegister&&storeData.isBindBankcard)
				  {push('/user/setting/tradePasswordModify')}else{
				  if(storeData.isRegister){
                     push('/user/setting/cardBind')
				  }else{
				  this.refs.store.show()
				    }
				  }
				  }}
				 label='修改交易密码'
				 borderType='four' /> : null}
			{isSetTradePassword ?
				 <BaseText
				  onClick={()=>{if(storeData.isRegister&&storeData.isBindBankcard)
				  {push('/user/setting/tradePasswordForget/verifyMobile')}else{
				    if(storeData.isRegister){
                     push('/user/setting/cardBind')
				  }else{
				  this.refs.store.show()
				    }
				  }
				  }}
				  label='忘记交易密码'
				  borderType='four' /> :
				 <BaseText
				  onClick={()=>{if(storeData.isRegister&&storeData.isBindBankcard)
				  {push('/user/setting/tradePasswordSet')}else{
				    if(storeData.isRegister){
                        push('/user/setting/cardBind')
				  }else{
				  this.refs.store.show()
				    }
				  }
				  }}
				  label='设置交易密码'
				  borderType='four' /> }
				<BaseText
						onClick={()=>{ if(storeData.isRegister&&storeData.isBindBankcard){
                             return false;
						}else{push(url)}  }}
						label='开通银行存管'
						content={text}
						borderType='three' />
		     </div>
			   <Store ref="store"> </Store>
		</div>
		   )
	}
	componentDidMount(){
		const{
			user,
			load
		}=this.props;
		if(!user){
           this.props.load();
		}
	}
  	render() {
  		const {
				user,
				pop,
			} = this.props
			let Dom;
			if(user){
                Dom=this.loadEndDom(user)
			}else{
				Dom=this.loadDom()
			}
	    return (
	      	<Page>
						<div className={commonStyles.panel}>
		  			<NavBar title='安全中心' onLeft={pop}/>
		  			<div className={commonStyles.panelContent}>
			           	{
							Dom   
						   }
		      		</div>
		      	</div>
					</Page>
		)
  	}
}

const mapStateToProps = (state) => {
  return {
  	user: state.infodata.getIn(['USER_INFO_WITH_LOGIN', 'data'])
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
})

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCenter)
