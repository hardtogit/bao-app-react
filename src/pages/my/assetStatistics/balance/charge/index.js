import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/'
import styles from './index.css'
import {connect} from 'react-redux'
import fivestar from '../../../../../assets/images/my-index/balance.png' //圆形五角星
import Loading from '../../../../../components/pageLoading/'
import {Link} from 'react-router'
import {goBack} from 'react-router-redux'
import wrap from '../../../../../utils/pageWrapper'
class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentDidMount() {
		this.props.load();
	}
	componentWillUnmount() {}
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
						<button className={styles.rechargeBtn}>充值</button>
						<button className={styles.depositBtn}>提现</button>
					</div>
				</div>)
	}
	render() {
		const {
			balance,
            pop
		}=this.props
		let Dom;
		if(balance){
			Dom=this.loadEndDom(balance.data)
		}else{
			Dom=this.loadDom()
		}
		return (
			<div className={styles.bg}>
				<NavBar onLeft={pop}
					rightNode={<Link className={styles.detail} to={`/user/moneyLog`}>余额明细</Link>}>我的余额</NavBar>
				{
                    Dom
				}
			</div>
		)
	}
}
const Rechargeinit=(state,own)=>({
	  balance:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data'])
})
const Rechargeinitfn=(dispath,own)=>({
	   load(){
		    dispath({
			  type:"USER_INFO_WITH_LOGIN"
		  })
	   },
	   pop(){
	   	dispath(goBack())
	   }
})
export default connect(Rechargeinit,Rechargeinitfn)(wrap(Index))