import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/'
import styles from './index.css'
import {connect} from 'react-redux'
import fivestar from '../../../../../assets/images/my-index/balance.png' //圆形五角星
import Loading from '../../../../../components/pageLoading/'
import {Link} from 'react-router'
import {push,goBack} from 'react-router-redux'
import wrap from '../../../../../utils/pageWrapper'
import classNames from 'classnames'
import Tipbar from '../../../../../components/Tipbar/index'
class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            top:'100%',
			recMoney:'',
			disabled:true,
			submite:false,
		}
	}
	componentDidMount() {
		this.props.load();
	}
	componentWillUnmount() {
		this.props.clearData();
	}
    componentWillReceiveProps(next){
		 const {
             cookie,
             push
		 }=next;
		 if (cookie){
             const {submite}=this.state;
             if (submite&&cookie.code==100){
                 this.setState({
                     submite:false,
                 });
                 push(`/pay/${this.state.recMoney}`)
             }else if (submite){
                 this.setState({
                     submite:false,
                 })
                 this.openTipbar('提交失败!')
             }
		 }
	}
	loadDom(){
         return(<Loading/>)
	}
	loadEndDom(data){
		 const {
			balance 
		 }=data
          return(<div className={styles.recharge}>
					<img src={fivestar}/>
					<p>我的余额</p>
					<h1>￥{balance}</h1>
					<div className={styles.btnContent}>
						<button className={styles.rechargeBtn} onClick={this.rechargeFn}>充值</button>
						<button className={styles.depositBtn}>提现</button>
					</div>
				</div>)
	}
    recChange=(e)=>{
		const recMoney=e.target.value,
			  reg=/^-?\d*\.?\d*$/;
		this.setState({
            recMoney
		});
		if (!reg.test(recMoney)||recMoney==''){
			this.openTipbar('请输入正确的充值金额！');
            this.setState({
                disabled:true
            });
		}else {
            this.setState({
                disabled:false
            });
		}
	}
    cancel=(data)=>{
		this.setState(data)
	}
    recharge(){
		const {
            top,
            recMoney,
            disabled
		}=this.state;
		return(<div className={styles.rechargeBox} style={{top:top}}>
			<NavBar leftNode={<span className={styles.rechargeTitle}>取消</span>}
					style={BanckStyle}
			        onLeft={()=>{this.cancel({top:'100%'})}}>余额充值</NavBar>
             <div className={styles.inputBox}>
              <div className={styles.recInput}>
				  <span>
                        充值金额
				  </span>
				  <span>
					  <input placeholder="请输入金额" value={recMoney} onChange={this.recChange}/>
				  </span>
				  <span>
					  元
				  </span>
			  </div>
				 <div className={classNames(styles.recInput,styles.recName)}>
				  连连支付
				 </div>
				 <button className={styles.buttonNext} disabled={disabled} onClick={this.submit}>
					 下一步
				 </button>
			 </div>
			<Tipbar ref='tipbar' />
		</div>)
	}
    rechargeFn=()=>{
    	this.setState({
    		top:'0px'
		})
	}
    openTipbar(message) {
        this.refs.tipbar.open(message)
    }
    submit=()=>{
    	this.setState({
            submite:true,
		});
    	this.props.submit();
	}
	render() {
		const {
			balance,
            pop
		}=this.props;
		let Dom;
		if(balance){
			Dom=this.loadEndDom(balance.data)
		}else{
			Dom=this.loadDom()
		}
		return (
			<div className={styles.bg}>
				<NavBar onLeft={pop}
					rightNode={<Link className={styles.detail} to={`/user/moneyLog`}>余额明细</Link>} style={BanckStyle}>我的余额</NavBar>
				{
                    Dom
				}{
                this.recharge()
			}
			</div>
		)
	}
}
const BanckStyle={
    position:'absolute',
    top:'0px',
    left:'0px'
};
const Rechargeinit=(state,own)=>({
	  balance:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
	  cookie:state.infodata.getIn(['AUTH_COOKIE','data'])
})
const Rechargeinitfn=(dispath,own)=>({
	   load(){
		    dispath({
			  type:"USER_INFO_WITH_LOGIN"
		  })
	   },
	   pop(){
	   	dispath(goBack())
	   },
	  submit(){
	   	dispath({
	   		type:'AUTH_COOKIE',
		})
	  },
	 push(url){
	   dispath(push(url))
	 },
	clearData(){
	  	dispath({
	  		type:'CLEAR_INFO_DATA',
			key:'AUTH_COOKIE'
		})
	}
})
export default connect(Rechargeinit,Rechargeinitfn)(wrap(Index))