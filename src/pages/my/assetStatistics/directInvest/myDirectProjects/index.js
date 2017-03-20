import React from 'react' //我的直投
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import Manage from '../../../../user/common/manage/index'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Loading from '../../../../../components/pageLoading'
import Scroll from '../../../../../components/scroll/index'
import Util from '../../../../../utils/utils'
import {goBack,push} from 'react-router-redux'
import explan from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录
import zhitouicon from '../../../../../assets/images/my-index/zhitouicon1.png' //提升收益
import wrap from '../../../../../utils/pageWrapper'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            height:0
		}
	}
	loadEndDom=()=>{
		const {
            profit_yesterday,
            profit_accumulate,
            revenue,
            total
		}=this.props.infoData.data;
		return(
		<div className={styles.m_h_title}>
			<Manage
				titleLeft={`昨日收益`}
				titleRight={`历史累计收益`}
				priceLeft={Util.padMoney(profit_yesterday)}
				priceRight={Util.padMoney(profit_accumulate)}
				titleBottom={`待收本息（利息部分${Util.padMoney(revenue)})`}
				priceBottom={Util.padMoney(total)}
				didFn={(h)=>{this.setHeight(h)}}
			/>
		</div>
		)
	}
	setHeight=(h)=>{
		this.setState({
			height:h
		})
	}
	loadDom=()=>{
		return(<Loading/>)
	}
	buyDom=()=>{
		return( <div className={styles.gobuy}><p><Link to="/user/autoBuy">自动投标</Link></p><p  onClick={this.goBuy}>去购买</p></div>)
	}
	goBuy=()=>{
		const {
            goBuy,
            push
		}=this.props;
		goBuy();
		push('/home/productIndex');
	}
	//点击直投项目列表事件
    goDetail=(id)=>{
        const {
            push
        }=this.props;
        //跳转
        push('/user/propertyDetail/'+id);
    }
	scrollDom=()=>{
		const {
			height
		}=this.state;
        const {
            getList,
            pending,
            end,
            listData
        }=this.props;
		const bodyHeight=document.body.clientHeight,
              ScrollHeight=bodyHeight-height-44-50;
		return(<div className={styles.scrollBox} style={{height:ScrollHeight}}>
			<Scroll height={ScrollHeight} fetch={getList} isLoading={pending} distance={5} endType={end}
					nullDom={<div className={styles.nullBox}><img src={explan} /></div>}
					endload={<div></div>}
			>

                {
                    listData&&listData.map((item,i)=>{
                     const {name,stastus,amount,profit_expire,profit_arrival,
						 profit_accumulate,now_duration,duration,surplus_days,id}=item;
                     let Dom;
                       if (stastus=='竞标中'){
                       	Dom= <p className={styles.competitive}>{stastus}</p>
					   }else {
                       	Dom=<p className={styles.surplus}>剩余{surplus_days}天</p>
					   }
						return(<ul key={i} className={styles.listBoxOne} onClick={()=>{this.goDetail(id)}}>
						   <li>
							   <img src={zhitouicon}/>{name}
							   {Dom}
							   </li>
						   <li>持有金额<p>{amount}</p></li>
						   <li>到期收益<p>{profit_expire}</p></li>
						   <li>已到账收益({now_duration}/{duration})<p>{profit_arrival}</p></li>
						   <li>累计收益<p>{profit_accumulate}</p></li>
					   </ul>)
                    })
                }

			</Scroll>
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
			pop
		}=this.props;
		const {
			height
		}=this.state;
		let Dom,
			listDom,
			buyDom;
		if (infoData){
			Dom=this.loadEndDom();
			buyDom=this.buyDom();
		}else {
			Dom=this.loadDom()
		}
		if (height!=0){
            listDom=this.scrollDom();
		}
		return (
			<div>
				<NavBar onLeft={pop} rightNode={<Link to="/user/projectRecorde" className={styles.navLink}>记录</Link>}>我的直投</NavBar>
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
const datas=(state)=>({
      infoData:state.infodata.getIn(['MY_DEPOSIT_INVEST','data']),
	  listData:state.listdata.getIn(['MY_DEPOSIT_LIST','data']),
	   pending:state.listdata.getIn(['MY_DEPOSIT_LIST','pending']),
	  end:state.listdata.getIn(['MY_DEPOSIT_LIST','pageEnd'])
})
const dispatchFn=(dispatch,own)=>({
      getInfo(){
      	dispatch({
      		type:'MY_DEPOSIT_INVEST'
		})
	  },
	  getList(){
      	dispatch({
      		type:'MY_DEPOSIT_LIST'
		})
	  },
	  clearData(){
          dispatch({
              type:'CLEAR_DATA',
              key:'MY_DEPOSIT_LIST'
          })
	  },
	 pop(){
	  	dispatch(goBack())
	 },
	 goBuy(){
	 	dispatch({
	 		type:'HOME_TAB_CAV',
			index:1
		})
		 dispatch({
		 	type:'PRODUCT_INDEX',
			 index:1
		 })
	 },
	push(url){
	 	dispatch(push(url))
	}
})
export default connect(datas,dispatchFn)(wrap(Index))
