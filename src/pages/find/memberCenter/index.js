import React,{Component} from 'react'
import {Link} from 'react-router'
import NavBar from '../../../components/NavBar/index'
import {connect} from 'react-redux'
import classNames from 'classnames'
import styles from './index.css'
import noheadImg from '../../../assets/images/find/noheadImg.png'
import headImg from '../../../assets/images/find/headImg.png'
import tab1 from '../../../assets/images/find/tab1.png'
import tab2 from '../../../assets/images/find/tab2.png'
import tab3 from '../../../assets/images/find/tab3.png'
import tab4 from '../../../assets/images/find/tab4.png'
import content1 from '../../../assets/images/find/content1.png'
import ku from '../../../assets/images/find/ku.png'
import noSignTable from '../../../assets/images/find/noSignTable.png'
import {goBack,push} from 'react-router-redux'
class memberCenter extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:0,
        }
    }
    componentWillMount(){
        let userInfo = JSON.parse(sessionStorage.getItem("bao-user"));
        if (userInfo){
            this.props.getVip();
            this.props.getRateCoupons();
            this.props.getVoucherCoupons();
        }
    }

    changeBar=(index)=>{
        this.setState({index});
    };
    rateDomHas=()=>{
        const {
            rateCouponsData,
        }=this.props;
        return(
            <ul className={styles.shop}>
                {rateCouponsData&&rateCouponsData.map((item,i)=>{
                    return(
                        <li key={i}>
                            <div className={styles.shopImg2}>
                                <p>￥<span className={styles.quanTxt}>{item.coupon_money}</span></p>
                            </div>
                            <p className={styles.shopTitle1}>{item.coupon_name}</p>
                        </li>
                    )
                })}
            </ul>
        )
    };
    rateDomNo=()=>{
        return(
            <div className={styles.noRate}>
                <img src={ku} />
                <p className={styles.rateTxt}>您的会员为：普通会员，暂无加息券可供选择领取</p>
                <p className={styles.farfrom}>距加息券领取尚差年化金额：500,000.00元</p>
            </div>
        )
    };
    oneDom=(data)=>{
        let {
            index
        } = this.state;
        const {
            rateCouponsData,
            voucherData
        }=this.props;
        let rateDom;
        if(rateCouponsData&&rateCouponsData.size!=0){
            rateDom = this.rateDomHas();
        }else{
            rateDom = this.rateDomNo();
        }
        const {
            user_name,
            vip_level,
            annual_total,
            coin_total,
            annual_gap
        } = data;
        return(
            <div className={styles.messageContent}>
                <div className={styles.memberTop}>
                    <div className={styles.memberCard}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardleft}>
                                <img src={headImg}  />
                                <span style={{color:"#333",fontSize:"12px"}}>{user_name}</span>
                            </div>
                            <span className={styles.cardright}>
                                 <p className={styles.cardrighttopMoney}>{annual_total}</p>
                                 <p className={styles.cardrightbelow}>当前待收年化（元）</p>
                             </span>
                        </div>
                        <div className={styles.promote}>投资升级</div>
                        <p className={styles.annualMap}>距下一等级尚差待收年化<span style={{color:"#333333"}}>{annual_gap}</span>元</p>
                    </div>
                </div>
                <div className={styles.findItem} style={{marginTop:"0"}}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>基础特权</span>
                        <Link to="/find/moreBasic" className={styles.Link}>
                            <span className={styles.rightTxt}>更多></span>
                        </Link>
                    </div>
                    <div className={styles.tabContainer}>
                        <div className={styles.TabTitle}>
                            <ul>
                                <li className={index==0&&styles.active||null} onClick={()=>{this.changeBar(0)}} >
                                    <img src={tab1}/>
                                    <p>生日特权</p>
                                    <div className={styles.trangle}></div>
                                </li>
                                <li  className={index==1&&styles.active||null} onClick={()=>{this.changeBar(1)}} >
                                    <img src={tab2}/>
                                    <p>节日特权</p>
                                    <div className={styles.trangle}></div>
                                </li>
                                <li  className={index==2&&styles.active||null} onClick={()=>{this.changeBar(2)}} >
                                    <img src={tab3}/>
                                    <p>商城折扣</p>
                                    <div className={styles.trangle}></div>
                                </li>
                                <li  className={index==3&&styles.active||null} onClick={()=>{this.changeBar(3)}} >
                                    <img src={tab4}/>
                                    <p>免费提现</p>
                                    <div className={styles.trangle}></div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.TabContent}>
                            <div className={index==0&&styles.contentItem}>
                                <img src={content1}/>
                                <p className={styles.farfrom}>距礼包拆取尚差年化金额：500,000.00元</p>
                            </div>
                            <div className={index==1&&styles.contentItem}>
                                <img src={content1}/>
                                <p className={styles.farfrom}>距礼包拆取尚差年化金额：400,000.00元</p>
                            </div>
                            <div className={index==2&&styles.contentItem}>
                                <img src={content1}/>
                                <p className={styles.farfrom}>距礼包拆取尚差年化金额：300,000.00元</p>
                            </div>
                            <div className={index==3&&styles.contentItem}>
                                <img src={content1}/>
                                <p className={styles.farfrom}>距礼包拆取尚差年化金额：200,000.00元</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>抵用券</span>
                        <Link to="/find/ticketRule" className={styles.Link}>
                            <span className={styles.rightTxt}>领取规则></span>
                        </Link>
                    </div>
                    <ul className={styles.shop}>
                        {voucherData&&voucherData.map((item,i)=>{
                            return(
                                <li key={i}>
                                    <div className={styles.shopImg}>
                                        <p>￥<span className={styles.quanTxt}>{item.coupon_money}</span></p>
                                    </div>
                                    <p className={styles.shopTitle1}>{item.coupon_name}</p>
                                    <p className={styles.shopTitle2}>满{item.minimum_money}可用</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>加息券</span>
                        <Link to="/find/rateTicketRule" className={styles.Link}>
                            <span className={styles.rightTxt}>领取规则></span>
                        </Link>
                    </div>
                    {
                        rateDom
                    }
                </div>
            </div>
        )
    }
    twoDom=()=>{
        let {
            index
        } = this.state;
        return(
            <div className={styles.messageContent}>
                <div className={styles.memberTop1}>
                    <div className={styles.memberCard1}>
                        <div className={styles.cardContent}>
                            <img src={noheadImg} className={styles.cardleft} />
                            <span className={styles.cardright}>
                                <Link to="/login" className={styles.Link}>
                                     <p className={styles.cardrighttop1}>立即登录</p>
                                </Link>
                                 <p className={styles.cardrightbelow}>秒速登录，体验更多功能</p>
                             </span>
                        </div>
                        <div className={styles.promote}>投资升级</div>
                    </div>
                </div>
                <div className={styles.findItem1} style={{marginTop:"0"}}>
                    <p className={styles.noSignTxt}>宝点网根据用户年化待收将用户划分为7个会员等级，不同等级的用户可享不同的特权，更多特权等级信息请登录后查看。</p>
                    <img src={noSignTable} className={styles.noSignImg} />
                </div>


            </div>
        )
    }

    render(){
        const {
            pop,
            VipData,
        }=this.props;
        let Dom;
        let userInfo = JSON.parse(sessionStorage.getItem("bao-user"));
        if (userInfo){
            if(VipData){
                Dom= this.oneDom(VipData.data);
            }
        }else {
            Dom= this.twoDom();
        }

        return(
            <div className={styles.findMessage} >
                <div className={styles.findMessageHeader}><NavBar title="会员中心" onLeft={pop} backgroundColor="#41403e"/>
                </div>
                {
                    Dom
                }
            </div>
        )
    }
}
const initMymassege=(state,own)=>({
    VipData: state.infodata.getIn(['GET_VIP', 'data']),
    rateCouponsData:state.listdata.getIn(['GET_RATE_COUPONS','data']),
    voucherData:state.listdata.getIn(['GET_VOUCHER_COUPONS','data']),
})
const initMymassegefn=(dispatch,own)=>({
    getVip(){
        dispatch({
            type:'GET_VIP'
        })
    },
    getRateCoupons(){
        dispatch({
            type:'GET_RATE_COUPONS'
        })
    },
    getVoucherCoupons(){
        dispatch({
            type:'GET_VOUCHER_COUPONS'
        })
    },
    pop(){
        dispatch(goBack())
    }
})
export default connect(initMymassege,initMymassegefn)(memberCenter)