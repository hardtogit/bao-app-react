import React from 'react' //我的定存宝
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import Manage from '../../../../user/common/manage/index'
import {connect} from 'react-redux'
import Loading from '../../../../../components/pageLoading'
import {Link} from 'react-router'
import explan from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录
import dingicon from '../../../../../assets/images/my-index/dingicon.png' //列表时钟
import Scroll from '../../../../../components/scroll/index'
import {goBack,push} from 'react-router-redux'
import Util from "../../../../../utils/utils"
import wrap from '../../../../../utils/pageWrapper'
 class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            height:0
		}
	}
	loadDom(){
      return(<Loading/>) 
	}
	addScroll=(height)=>{
		this.setState({
            height
		})
	}
	ScrollDom=()=>{
		const {
            getList,
            pending,
            end,
            listData
		}=this.props;
		const {
			height
		}=this.state;
        const BodyHeight=document.body.clientHeight,
			  ScrollHeight=BodyHeight-height-44-50;
          return(<div style={{height:ScrollHeight}} className={styles.listBox}>
			  <Scroll height={ScrollHeight} fetch={getList} isLoading={pending} distance={5} endType={end}
					  nullDom={<div className={styles.nullBox}><img src={explan} /></div>}
					  endload={<div></div>}
			          >

				  {
                      listData&&listData.map((item,i)=>{
                      const {name,surplus_days,profit_accumulate,profit_expire,amount,coupon_text,coupon_type}=item;
                      let liDom;
                      if (coupon_type==1){
						  liDom=<span>{coupon_text}</span>
					  }else if (coupon_type==2){
                      	  liDom=<span className={styles.dyBox}>{coupon_text}</span>
					  }
                      	return(<div className={styles.manageList} key={i}>
							<div className={styles.listtitle}>
								<img src={dingicon}/>{name}
								{
                                     liDom
								}
								<p>还剩{surplus_days}天</p>
							</div>
							<ul>
								<li><p className={styles.orgFont}>{Util.padMoney(profit_accumulate)}</p><p>累计收益</p></li>
								<li><p>{Util.padMoney(profit_expire)}</p><p>到期收益</p></li>
								<li><p>{Util.padMoney(amount)}</p><p>持有金额</p></li>
							</ul>
						</div>)
					  })
				  }

			  </Scroll>
		  </div>)
	}
	buyDom=()=>{
		return(<div onClick={()=>{this.props.push('/home/productIndex')}}>
			<div className={styles.errorImg}><img src={explan} /></div>
			<div className={styles.gobuy}>再次购买</div>
		</div>)
	}
	loadEndDom=(datas)=>{
		const{
			total,
			profit_yesterday,
			profit_accumulate,
			revenue
		}=datas.data;
        return(
        	<div>
		  <div className={styles.m_h_title}>
					<Manage
					titleLeft={`昨日收益`}
					titleRight={`昨日收益`}
					priceLeft={Util.padMoney(profit_yesterday)}
					priceRight={Util.padMoney(profit_accumulate)}
					titleBottom={'待收本息（利息部分'+Util.padMoney(revenue)+')'}
					priceBottom={Util.padMoney(total)}
					didFn={(h)=>{this.addScroll(h)}}
				/>

				</div>
			</div>
		  )
	}
	componentDidMount(){
		this.props.load();
	}
     componentWillUnmount(){
         this.props.clearData()
     }
	render() {
		const {
			datas,
            pop
		}=this.props;
		const {
            height
		}=this.state
		let Dom,
			listDom,
			buyDom;
		if(datas){
          Dom=this.loadEndDom(datas);
          buyDom=this.buyDom()
		}else{
		  Dom=this.loadDom()
		}
		if (height!=0){
            listDom=this.ScrollDom()
		}
		return (
			<div>
				<NavBar onLeft={pop} rightNode={<Link to="/user/dcbRecords" style={{color:'#fff'}}>记录</Link>}>我的定存宝</NavBar>
				<div className={styles.bg}>
				{
				Dom	
				}{
                listDom
			    }{
                buyDom
			    }
				</div>
			</div>
		)
	}
}
const myDepositSummaryInit=(state,own)=>({
	  datas:state.infodata.getIn(['MY_DEPOSIT_SUMMARY','data']),
	  listData:state.listdata.getIn(['DEPOSIT_RECORD','data']),
      pending:state.listdata.getIn(['DEPOSIT_RECORD','pending']),
      end:state.listdata.getIn(['DEPOSIT_RECORD','pageEnd'])
});
const myDepositSummaryInitfn=(dispath,own)=>({
	load(){
		dispath({
			type:'MY_DEPOSIT_SUMMARY'
		})
	},
	getList(){
	     dispath({
	     	type:'DEPOSIT_RECORD',
             params:[1]
		 })
	},
    clearData(){
        dispath({
            type:'CLEAR_DATA',
            key:'DEPOSIT_RECORD'
        })
    },
	push(url){
       dispath(push(url))
	},
	pop(){
    	dispath(goBack())
	}
})
export default connect(myDepositSummaryInit,myDepositSummaryInitfn)(wrap(Index))
