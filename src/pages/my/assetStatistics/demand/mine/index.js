import React from 'react' //我的零钱宝
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import Manage from '../../../../user/common/manage/index'
import {connect} from 'react-redux'
import Loading from '../../../../../components/pageLoading'
import {Link} from 'react-router'
import {goBack,push} from 'react-router-redux'
import wrap from '../../../../../utils/pageWrapper'
import rateup from '../../../../../assets/images/my-index/rateup.png' //提升收益


 class Index extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount(){
		this.props.load();
        this.props.getRate();
	}
	loadDom(){
		return(<Loading/>)
	}
	loadEndDom(data,deposit,push){
		const {
            profit_yesterday,
            profit_accumulate,
			total
		}=data;
        sessionStorage.setItem('bao-demand',JSON.stringify(data));
		return(
			<div>
			<div className={styles.m_h_title}>
					<Manage
					titleLeft={`昨日收益`}
					titleRight={`历史累计收益`}
					priceLeft={profit_yesterday}
					priceRight={profit_accumulate}
					titleBottom={'活期资产'}
					priceBottom={total}
				/>
				</div>
				<div className={styles.demandContent}>
					<div className={styles.demandTitle}><span>合理分配</span><span>更高效益</span><p><img src={rateup}/>提升收益</p></div>
					<ul className={styles.graph}>
						<li>
							<p><span>{deposit[0]&&deposit[0].rate}%</span><label>{deposit[0]&&deposit[0].month}个月</label></p>
						</li>
						<li>
							<p><span>{deposit[1]&&deposit[1].rate}%</span><label>{deposit[1]&&deposit[1].month}个月</label></p>
						</li>
						<li>
							<p><span>{deposit[2]&&deposit[2].rate}%</span><label>{deposit[2]&&deposit[2].month}个月</label></p>
						</li>
					</ul>
				</div>
				<div className={styles.gobuy}>
					<p >已下架</p></div>
				</div>
				)
	}
	render() {
		const {
			datas,
            pop,
            rates,
            push
		}=this.props;
		let Dom;
        let deposit = [];
        if(rates&&rates.code==100)
            deposit = rates.data.deposit;
		if(datas){
			Dom=this.loadEndDom(datas.data,deposit,push)
		}else{
			Dom=this.loadDom()
		}
		return (
			<div>
				<NavBar onLeft={pop}
						rightNode={<Link to="/user/MyDemandRecords" style={{color:'#fff'}}>记录</Link>}>我的零钱宝</NavBar>
				<div className={styles.bg}>
				{
                    Dom
				}
				</div>
			</div>
		)
	}
}
const MyDemandIndexinit=(state)=>({
	  datas:state.infodata.getIn(['DEMAND_ACCOUNT_DETAIL','data']),
	  rates:state.infodata.getIn(['RATE','data'])
});
const MyDemandIndexinitfn=(dispath)=>({
    load(){
        dispath({
            type:'DEMAND_ACCOUNT_DETAIL'
        })
    },
    getRate(){
        dispath({
            type:'RATE'
        })
    },
    pop(){
        dispath(goBack())
    },
    push(url){
        dispath(push(url))
    }
});
export default connect(MyDemandIndexinit,MyDemandIndexinitfn)(wrap(Index))