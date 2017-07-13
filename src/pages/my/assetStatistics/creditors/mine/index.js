import React from 'react' //我的债权转让
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import Manage from '../../../../user/common/manage/index'
import Loading from '../../../../../components/pageLoading'
import Scroll from '../../../../../components/scroll/index'
import {goBack,push} from 'react-router-redux'
import {Link} from 'react-router'
import explan from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录
import type_zqzr from '../../../../../assets/images/my-index/zqzr.png' //管家标志
import Util from '../../../../../utils/utils'
import wrap from '../../../../../utils/pageWrapper'
import {connect} from 'react-redux'

 class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
           height:0
		}
	}
	setHeight=(h)=>{
		this.setState({
			height:h
		})
	}
    scrollDom=()=>{
		const {
            listData,
            pending,
            end,
            getList
		}=this.props;
		const {
            height
		}=this.state
        const BodyHeight=document.body.clientHeight,
            ScrollHeight=BodyHeight-height-44-50;
		return(<div style={{height:ScrollHeight}} className={styles.listBox}>
			<Scroll height={ScrollHeight} fetch={getList} isLoading={pending} distance={5} endType={end}
					nullDom={<div className={styles.nullBox}><img src={explan} /></div>}
					endload={<div></div>}
			>

                {
                    listData&&listData.map((item,i)=>{
                        const {name,status,profit_expire,profit_arrival,
                            profit_accumulate,surplus_days,periods,id,hold_money}=item;
                        let Dom;
                        if (status=='竞标中'){
                            Dom=<p className={styles.competitive}>{status}</p>
                        }else{
                            Dom=<p className={styles.surplus}>剩余{surplus_days}天</p>
                        }
                        return(<ul key={i} className={styles.listBoxOne} onClick={()=>{this.goDetail(id)}}>
							<li>
								<img style={{marginTop:'16px'}} src={type_zqzr}/>{name}
                                {Dom}
							</li>
							<li>持有金额<p>{Util.padMoney(hold_money)}</p></li>
							<li>到期收益<p>{Util.padMoney(profit_expire)}</p></li>
							<li>已到账收益({Util.padMoney(periods)})<p>{Util.padMoney(profit_arrival)}</p></li>
							<li>累计收益<p>{Util.padMoney(profit_accumulate)}</p></li>
						</ul>)
                    })
                }

			</Scroll>
		</div>)
	}
     goDetail=(id)=>{
         const {
             push
         }=this.props;
         //跳转
         push('/user/zqPropertyDetail/'+id);
     }
	go=()=>{
        const {
            goBuy,
            push
        }=this.props;
        goBuy();
        push('/home/productIndex')
	}
	buyDom=()=>{
		return(<div className={styles.gobuy} onClick={this.go}>再次购买</div>)
	}
	loadDom=()=>{
		return(<Loading/>)
	}
	loadEndDom=()=>{
        const{
            total,
            profit_yesterday,
            profit_accumulate,
            revenue
        }=this.props.infoData.data;
		return(<div className={styles.m_h_title}>
			<Manage
				titleLeft={`昨日收益`}
				titleRight={`历史累计收益`}
				priceLeft={Util.padMoney(profit_yesterday)}
				priceRight={Util.padMoney(profit_accumulate)}
				titleBottom={'待收本息（利息部分'+Util.padMoney(revenue)+')'}
				priceBottom={Util.padMoney(total)}
				didFn={(h)=>{this.setHeight(h)}}
			/>
		</div>)
	}
	componentDidMount(){
		this.props.getInfo()
	}
     componentWillUnmount(){
         this.props.clearData()
     }
	render() {
		const {
            infoData,
			pop,
            push
		}=this.props;
		const {
            height
		}=this.state;
		let Dom,
			buyDom,
			listDom;
		if (infoData){
			Dom=this.loadEndDom();
			buyDom=this.buyDom();
		}else {
			Dom=this.loadDom();
		}
		if (height!=0){
            listDom=this.scrollDom()
		}
		return (
			<div>
				<NavBar onLeft={pop} rightNode={<span>记录</span>} onRight={()=>{push('/user/zqRecords')}}>我的债权</NavBar>
				<div className={styles.bg}>
				{Dom}{listDom}{buyDom}
				</div>
			</div>
		)
	}
}
const datas=(state)=>({
      infoData:state.infodata.getIn(['MY_CREDITOR_SUMMARY','data']),
	  listData:state.listdata.getIn(['MY_CREDITOR_LIST','data']),
	  pending:state.listdata.getIn(['MY_CREDITOR_LIST','pending']),
	  end:state.listdata.getIn(['MY_CREDITOR_LIST','pageEnd'])
})
const dispatch=(dispatch)=>({
       getInfo(){
           dispatch({
           	type:'MY_CREDITOR_SUMMARY'
		   })
	   },
	  getList(){
       	 dispatch({
       	 	type:'MY_CREDITOR_LIST'
		 })
	  },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'MY_CREDITOR_LIST'
        })
    },
    goBuy(){
        dispatch({
            type:'HOME_TAB_CAV',
            index:1
        })
        dispatch({
            type:'PRODUCT_INDEX',
            index:2
        })
    },
    push(url){
      dispatch(push(url))
	},
	pop(){
    	dispatch(goBack())
	}
})
export default connect(datas,dispatch)(wrap(Index))