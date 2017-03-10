import React from 'react' //零钱宝赎回
import NavBar from '../../../../../components/NavBar'
import BaseButton from '../../../../../components/BaseButton'
import styles from './index.css'
import wrap from '../../../../../utils/pageWrapper'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {goBack} from 'react-router-redux'
import Alert from '../../../../../components/Dialog/alert';
import Tipbar from '../../../../../components/Tipbar/index';
import utils from '../../../../../utils/utils.js'
class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            money:'',
            disable:true,
			pwd:'',
		}
	}
	changeInput=(e)=>{
      const value = e.target.value,
            reg=/^\d+(\.\d{1,2})?$/;
       if (reg.test(value)){
           this.set(value,false);
	   }else {
       	   this.openTipber('请输入正确的金额')
           this.set(value,true);
	   }
	}
	set=(money,disable)=>{
        this.setState({
            money,
            disable
        })
	}
    setPwd=(e)=>{
        const pwd = e.target.value;
        this.setState({
            pwd
		})
	}
    show=()=>{
		const {
            money,
		}=this.state;
		this.setState({
            pwd:''
		})
		this.refs.alert.show({
            title:'赎回',
            content:<div className={styles.redeem}><p>￥{parseFloat(money).toFixed(2)}</p><div>
				<input placeholder="请输入交易密码"  type="password" onChange={this.setPwd}/></div></div>,
            cancel:'忘记密码',
            okText:<button className={styles.suerBtn} >确定</button>,
			close:true,
            cancelCallback:()=>{this.props.push('/user/setting/tradePasswordForget')},
            okCallback:this.submit
		})
	}
    submit=()=>{
		const {
			pwd,
            money
		}=this.state;
		const reg=!/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(pwd) && /^\S{6,16}$/.test(pwd);
		if (!reg){
            this.openTipber('请输入正确的交易密码');
            return true
		}else {
            this.props.submit(money,utils.md5(pwd))
		}
	}
	openTipber=(message)=>{
        this.refs.tipbar.open(message)
	}
    componentWillReceiveProps(next){
        const {
            submitCode,
            push
		}=next;
        if (submitCode){
        	if (submitCode.code==100){
                push('/user/reddemSuccese');
                sessionStorage.setItem('bao-reddem',this.state.money)
			}else {
                this.refs.tipbar.open('对不起密码错误')
			}
		}
	}
	componentWillUnmount(){
    	this.props.clearData();
	}
	render() {
		const {
			pop
		}=this.props;
		return (
			<div className={styles.bg}>
				<NavBar onLeft={pop}>零钱宝赎回</NavBar>
				<div className={styles.demandContent}>
					<div className={styles.reddemMain}>
						<p>赎回到余额</p>
						<p>赎回金额（元）</p>
						<p><span>￥</span><input type="text" placeholder="请输入赎回金额"  value={this.state.money} onChange={this.changeInput}/></p>
						<p>零钱宝资产0元<label>本月还有5次免费赎回机会</label></p>
					</div>
					<p className={styles.reddemHint}>每月前5次免手续费，之后每次收取0.25%手续费</p>
					<BaseButton
						className="111"
						disable={this.state.disable}
						text="下一步"
						onClick={this.show}
					/>
				</div>
				<Alert ref="alert"/>
				<div className={styles.tipbar}>
				<Tipbar ref='tipbar' />
				</div>
			</div>
		)
	}
}
const datas=(state)=>({
      submitCode:state.infodata.getIn(['REDEEM','data'])
})
const dispatchFn=(dispatch)=>({
	  pop(){
	  	 dispatch(goBack())
	  },
	  push(url){
	  	dispatch(push(url))
	  },
    submit(amount,password){
	  	dispatch({
	  		type:'REDEEM',
            params:[{
                amount,
                password
			}]
		})
	},
	clearData(){
    	dispatch({
    		type:'CLEAR_INFO_DATA',
            key:'REDEEM'
		})
	}
})
export  default connect(datas,dispatchFn)(wrap(Index))