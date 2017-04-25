import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Loading from '../../../components/pageLoading'
import Sign from '../../../components/Sign/index'

import styles from './index.css'

import xing from '../../../assets/images/my-index/2.png' // 会员标记
import moneySolar from '../../../assets/images/my-index/9.png'  //回款日历
import recharge from '../../../assets/images/my-index/3.png' // 充值
import DepositTreasure from '../../../assets/images/my-index/4.png' // 定存宝
import makeOver from '../../../assets/images/my-index/5.png' // 债权转让
import looseChange from '../../../assets/images/my-index/6.png' // 零钱宝
import safeplan from '../../../assets/images/my-index/7.png' // 直投项目
import directMail from '../../../assets/images/my-index/8.png' // 自动投标
import redPacket from '../../../assets/images/my-index/10.png' // 红包
import scratchCard from '../../../assets/images/my-index/11.png' // 刮刮卡
import someCoins from '../../../assets/images/my-index/12.png' // 点币
import interest from '../../../assets/images/my-index/13.png' // 加息券
import toUse from '../../../assets/images/my-index/14.png' // 抵用券
import manageMoney from '../../../assets/images/my-index/15.png' // 理财金
import DepositTreasureB from '../../../assets/images/my-index/16.png'
 class Index extends React.Component{
	constructor(props) {
        super(props);
    }
	loadingDom(){
		return(<Loading/>)
	}
	loadingEndDom(data){
      const {
		avatar,
		username,
		grade,
	    isSign,
		signNumbers,
		amount,
		balance,
		demand,
        directInvest,
		creditors,
		privilege,
		bonuse,
		interestRateSecurities,
		scratcheCard,
		voucher,
		coins,
		deposit,
        isBuyDemand
		}=data;
		return(
			<div>
                <div className={styles.header}>账户</div>
                <Sign ref="SignModel" coin={+coins} days={+signNumbers} sign={isSign} callBackFun={this.props.load}/>
                <div className={styles.userAccount}>
					<div className={styles.headImg}><img src={avatar}/></div>
					<div className={styles.nameCenter}>
						<p>{username}</p>
						<p onClick={e => e.stopPropagation()}><Link><img src={xing}/>普通会员</Link></p>
					</div>
					<div className={styles.rightArrows}>
					    <Link to='/user/setting'>
						<span className={styles.arrows}></span>
						</Link>
					</div>
				</div>

				<div className={styles.contents}>
                    <Link to="/user/analysis">
                        <div className={styles.myProduct}>
                            <div className={styles.mpLeft}>
                                <p>{amount}</p>
                            </div>
                            <div className={styles.mpright}>
                                <p>账户安全保障中</p>
                                <div className={styles.rightArrows}>
                                    <span className={styles.arrows}></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/user/calendar`}>
                        <div className={styles.myProduct}>
                            <div className={styles.mpLeft}>
                                <img src={moneySolar}/>
                                <p className={styles.mpFont1}>回款日历</p>
                            </div>
                            <div className={styles.mpright}>
                                <div className={styles.rightArrows}>
                                    <span className={styles.arrows}></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className={styles.myProduct}>
						<div className={styles.myList}>
						    <Link to={`/user/recharge`}>
							<img src={recharge}/>
							<div className={styles.myListText}>
								<p className={styles.listTitle}>充值</p>
								<p className={styles.listColor} style={{"color":"#888"}}>{balance==0&&'立即充值'||balance}</p>
							</div>
							</Link>
						</div>
						<div className={styles.myList}  style={{"borderLeft":"1px solid #E4E4E4"}}>
							<Link to={`/user/autoBuy`}>
								<img src={directMail}/>
								<div className={styles.myListText}>
									<p className={styles.listTitle}>自动投标</p>
									<p className={styles.listColor} style={{"color":"#F19149"}}>省时省心</p>
								</div>
							</Link>
						</div>
					</div>
					<div className={styles.myProduct}>
						<div className={styles.myList}>
							<Link to="/user/dcbB">
								<img src={DepositTreasureB}/>
								<div className={styles.myListText}>
									<p className={styles.listTitle}>定存宝B</p>
									<p className={styles.listColor} style={{"color":"#F19149"}}>{creditors==0&&'每月还息  到期还本'||'+'+creditors}</p>
								</div>
							</Link>
						</div>
						<div className={styles.myList} style={{"borderLeft":"1px solid #E4E4E4"}}>
							<Link to='/user/dcb'>
								<img src={DepositTreasure}/>
								<div className={styles.myListText}>
									<p className={styles.listTitle}>定存宝A</p>
									<p className={styles.listColor} style={{"color":"#F19149"}}>{deposit==0&&'到期还本付息'||'+'+deposit}</p>
								</div>
							</Link>
						</div>
					</div>
					<div className={styles.myProduct}>
						<div className={styles.myList}>
                            <Link to="/user/zt">
                                <img src={safeplan}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>直投项目</p>
                                    <p className={styles.listColor} style={{"color":"#F19149"}}>{directInvest==0&&'期限灵活门槛低'||'+'+directInvest}</p>
                                </div>
                            </Link>
						</div>
						<div className={styles.myList} style={{"borderLeft":"1px solid #E4E4E4"}}>
                            <Link to="/user/zq">
                                <img src={makeOver}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>债权转让</p>
                                    <p className={styles.listColor} style={{"color":"#F19149"}}>{creditors==0&&'流动性高'||'+'+creditors}</p>
                                </div>
							</Link>
						</div>
					</div>

					<div className={styles.myProduct}>
                        {
                            isBuyDemand!=0 &&
                            <div className={styles.myList}>
                                <Link to='/user/MyDemandIndex'>
                                    <img src={looseChange}/>
                                    <div className={styles.myListText}>
                                        <p className={styles.listTitle}>零钱宝</p>
                                        <p className={styles.listColor} style={{"color":"#F19149"}}>{demand==0&&'立即转入'||'+'+demand}</p>
                                    </div>
                                </Link>
                            </div>
                        }
					</div>
				</div>

				<div className={styles.contents} style={{"marginBottom":"40px"}}>
					<div className={styles.myProduct}>
						<div className={styles.myList}>
                            <Link to='/user/redPacket'>
                                <img src={redPacket}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>红包</p>
                                    <p className={styles.listColor} style={{"color":"#888"}}>{bonuse}</p>
                                </div>
                            </Link>
						</div>
						<div className={styles.myList} style={{"borderLeft":"1px solid #E4E4E4"}}>
                            <Link to="/user/addRate">
                                <img src={interest}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>加息券</p>
                                    <p className={styles.listColor} style={{"color":"#888"}}>{0==interestRateSecurities?'更多活动':interestRateSecurities+'张'}</p>
                                </div>
                            </Link>
						</div>
					</div>

					<div className={styles.myProduct}>
						<div className={styles.myList}>
                            <Link to="/user/scratchesCard">
                                <img src={scratchCard}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>刮刮卡</p>
                                    <p className={styles.listColor} style={{"color":"#888"}}>{0==scratcheCard?'红色星期五':scratcheCard+'张'}</p>
                                </div>
                            </Link>
						</div>
						<div className={styles.myList} style={{"borderLeft":"1px solid #E4E4E4"}}>
                            <Link to="/user/vouchers">
                                <img src={toUse}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>抵用券</p>
                                    <p className={styles.listColor} style={{"color":"#888"}}>{0==voucher?'更多活动':voucher+'张'}</p>
                                </div>
                            </Link>
						</div>
					</div>

					<div className={styles.myProduct}>
						<div className={styles.myList} style={{"borderRight":"1px solid #E4E4E4"}}>
                            <Link to={`/user/coinShop`}>
                                <img src={someCoins}/>
                                <div className={styles.myListText}>
                                    <p className={styles.listTitle}>积分商城</p>
                                    <p className={styles.listColor} style={{"color":"#888"}}>{0==coins&&'更多活动'||coins}</p>
                                </div>
                            </Link>
						</div>
						<div className={styles.myList} style={{"display":"none"}}>
							<img src={manageMoney}/>
							<div className={styles.myListText}>
								<p className={styles.listTitle}>理财金</p>
								<p className={styles.listColor} style={{"color":"#F19149"}}>{privilege}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	} 
	componentDidMount() {
		  this.props.load();
	}
     doSign=()=>{
            this.refs.SignModel.show();
     };
	render(){
		const{
          nobjs  
		}=this.props;
		let Dom;
		if(nobjs){
            Dom=this.loadingEndDom(nobjs.data)
		}else{
			Dom=this.loadingDom()
		}
		return(
			<div className={styles.myContent}>
				{
                  Dom 
				}
			</div>
		)
	}
}

const myIndexInit=(state,own)=>({
	  nobjs:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data'])
})
const myIndexInitfn=(dispath,own)=>({
	  load(){
            dispath({
			  type:"USER_INFO_WITH_LOGIN"
		  })
	  },
})
export default connect(myIndexInit,myIndexInitfn)(Index)
