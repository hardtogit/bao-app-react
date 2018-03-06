import React,{Component} from 'react'
import {Link} from 'react-router'
import NavBar from '../../../components/NavBar/index'
import {connect} from 'react-redux'
import styles from './index.css'
import noheadImg from '../../../assets/images/find/noheadImg.png'
import tab1 from '../../../assets/images/find/tab1.png'
import tab2 from '../../../assets/images/find/tab2.png'
import tab3 from '../../../assets/images/find/tab3.png'
import tab4 from '../../../assets/images/find/tab4.png'
import v0 from '../../../assets/images/find/v0.png'
import v1 from '../../../assets/images/find/1j.png'
import v2 from '../../../assets/images/find/2j.png'
import v3 from '../../../assets/images/find/3j.png'
import v4 from '../../../assets/images/find/4j.png'
import v5 from '../../../assets/images/find/5j.png'
import v6 from '../../../assets/images/find/6j.png'
import content11 from '../../../assets/images/find/content11.png'
import birth11 from '../../../assets/images/find/birth1111.png'
import noFestival from '../../../assets/images/find/noFestival.png'
import duanwu from '../../../assets/images/find/duanwu.png'
import zhongqiu from '../../../assets/images/find/zhongqiu.png'
import chunjie from '../../../assets/images/find/chunjie.png'
import noDiscount from '../../../assets/images/find/noDiscount.png'
import discount from '../../../assets/images/find/discount1.png'
import withdraw from '../../../assets/images/find/withdraw.png'
import ku from '../../../assets/images/find/ku.png'
import noSignTable from '../../../assets/images/find/noSignTable.png'
import Loading from '../../../components/pageLoading'
import {goBack,push} from 'react-router-redux'
class memberCenter extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:sessionStorage.getItem("basicIndex")&&sessionStorage.getItem("basicIndex")||0,
        }
    }

    componentWillMount(){
        this.props.getVip();
        this.props.getRateCoupons();
        this.props.getVoucherCoupons();
        this.props.getPrivilegeBasic();
        let userInfo = sessionStorage.getItem("bao-auth");
        if(userInfo){
            this.props.getRateInfo();
            this.props.getVoucherInfo();
        }
        sessionStorage.setItem("basicIndex",this.state.index);
    }
    push=(data)=>{
        sessionStorage.setItem("bao-ticketData",JSON.stringify(data));
        this.props.push('/find/ticketDetail');
    };

    changeBar=(index)=>{
        this.setState({index});
        sessionStorage.setItem("basicIndex",index);
    };
    rateDomHas=()=>{
        const {
            rateCouponsData,
        }=this.props;
        return(
            <ul className={styles.shop}>
                {rateCouponsData&&rateCouponsData.data.map((item,i)=>{
                    const {coupon_id,coupon_money,coupon_name,receive_way,info_term,info_limit,info_product,is_has}=item,
                        data={coupon_id,coupon_name,coupon_money,receive_way,info_term,info_limit,info_product,is_has};
                    return(
                        <Link key={i}>
                           <li  onClick={()=>{this.push(data)}}>
                                <div className={styles.shopImg2}>
                                    <p>￥<span className={styles.quanTxt}>{coupon_money}</span></p>
                                </div>
                                <p className={styles.shopTitle1}>{coupon_name}</p>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        )
    };
    cashDomHas=()=>{
        const {
            voucherData,
        }=this.props;
        return(
            <ul className={styles.shop}>
                {voucherData&&voucherData.data.map((item,i)=>{
                    const {coupon_id,coupon_money,coupon_name,minimum_money,receive_way,info_term,info_limit,info_product,is_has}=item,
                        data={coupon_id,coupon_name,coupon_money,receive_way,info_term,info_limit,info_product,is_has};
                    return(
                        <Link key={i}>
                           <li onClick={()=>{this.push(data)}}>
                                <div className={styles.shopImg}>
                                    <p>￥<span className={styles.quanTxt}>{coupon_money}</span></p>
                                </div>
                                <p className={styles.shopTitle1}>{coupon_name}</p>
                                <p className={styles.shopTitle2}>满{minimum_money}可用</p>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        )
    };
    cashDomNo=(data,ticketName)=>{
        const {
            user_name,
            vip_level,
            annual_total,
            annual_gap
        } = data;
        return(
            <div className={styles.noRate}>
                <img src={ku} />
                <p className={styles.rateTxt}>您的会员为：{vip_level==0&&"普通"||vip_level+"级"}会员，暂无{ticketName}可供选择领取</p>
                <p className={styles.farfrom}>距{ticketName}领取尚差年化金额：{annual_gap}元</p>
            </div>
        )
    };
    //普通会员特权
    PrivilegeBasicDom=(data)=>{
        const {
            index
        } = this.state;
        const {
            // vip_level,
            annual_gap
        }=this.props.VipData.data;
        let vip_level= 4;
        sessionStorage.setItem("vipLevel",vip_level);
        const {
            birthday,
            holiday,
            mall,
            withdrawal
        } = data;
        let birthdayVip = birthday.rule_list;
        let holidayVip = holiday.rule_list;
        let mallVip = mall.rule_list;
        let withdrawalVip = withdrawal.rule_list;
        return(
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
                        <img src={vip_level==0&&content11||birth11}  />
                        <p className={vip_level==0&&styles.farfrom||styles.none}>距礼包拆取尚差年化金额：{birthday.annual_gap}元</p>
                        <p className={vip_level!=0&&styles.BirNum||styles.none}>{vip_level==1&&birthdayVip.v1||(vip_level==2&&birthdayVip.v2||(vip_level==3&&birthdayVip.v3||(vip_level==4&&birthdayVip.v4||(vip_level==5&&birthdayVip.v5||(vip_level==6&&birthdayVip.v6)))))}</p>
                        <p className={vip_level!=0&&styles.BirInfo||styles.none}>生日当天将会为您送上{vip_level==1&&birthdayVip.v1||(vip_level==2&&birthdayVip.v2||(vip_level==3&&birthdayVip.v3||(vip_level==4&&birthdayVip.v4||(vip_level==5&&birthdayVip.v5||(vip_level==6&&birthdayVip.v6)))))}元生日大礼包~</p>
                    </div>
                    <div className={index==1&&styles.contentItem}>
                        <img  className={vip_level!=0&&styles.none||""} src={noFestival} style={{width:"280px"}}/>
                        <p className={vip_level==0&&styles.farfrom||styles.none}>距礼包拆取尚差年化金额：{holiday.annual_gap.cj}元</p>
                        <div className={(vip_level==1||vip_level==2)&&styles.chunjieOnly||styles.none}>
                            <img  className={styles.basicImg} src={chunjie} style={{width:"100px"}}/>
                            <p className={styles.BirNum1}>{vip_level==1&&holidayVip.cj.v1||(vip_level==2&&holidayVip.cj.v2)}  </p>
                        </div>
                        <div className={(vip_level>=3)&&styles.jieri||styles.none}>
                            <div className={styles.chunjieOnly1}>
                                <img  className={styles.basicImg1} src={duanwu} />
                                <p className={styles.BirNum1}>{vip_level==3&&holidayVip.dw.v3||(vip_level==4&&holidayVip.dw.v4||(vip_level==5&&holidayVip.dw.v5||(vip_level==6&&holidayVip.dw.v6)))}  </p>
                            </div>
                            <div className={styles.chunjieOnly1}>
                                <img  className={styles.basicImg1} src={zhongqiu} />
                                <p className={styles.BirNum1}>{vip_level==3&&holidayVip.zq.v3||(vip_level==4&&holidayVip.zq.v4||(vip_level==5&&holidayVip.zq.v5||(vip_level==6&&holidayVip.zq.v6)))}  </p>
                            </div>
                            <div className={styles.chunjieOnly1}>
                                <img  className={styles.basicImg1} src={chunjie} />
                                <p className={styles.BirNum1}>{vip_level==3&&holidayVip.cj.v3||(vip_level==4&&holidayVip.cj.v4||(vip_level==5&&holidayVip.cj.v5||(vip_level==6&&holidayVip.cj.v6)))}  </p>
                            </div>
                        </div>
                        <p  className={vip_level!=0&&styles.BirInfo||styles.none}>{(vip_level==1||vip_level==2)&&"每逢春节可获得等级对应价值的节日礼包~"||"每逢春节、端午、中秋可分别获得等级对应价值的节日礼包~"}</p>
                    </div>
                    <div className={index==2&&styles.contentItem}>
                        <img  className={(vip_level==0||vip_level==1||vip_level==2)&&styles.basicImg||styles.none} src={noDiscount} style={{width:"200px"}}/>
                        <p className={(vip_level==0||vip_level==1||vip_level==2)&&styles.farfrom||styles.none}>距礼包拆取尚差年化金额：{annual_gap}元</p>
                        <div className={(vip_level>2)&&styles.discount||styles.none}>
                            <img  className={styles.basicImg} src={discount} style={{width:"220px"}}/>
                            <p className={styles.BirNum2}>{vip_level==3&&(mallVip.v3)*10||(vip_level==4&&(mallVip.v4)*10||(vip_level==5&&(mallVip.v5)*10||(vip_level==6&&(mallVip.v6)*10)))}  </p>
                        </div>
                        <p  className={(vip_level>2)&&styles.BirInfo||styles.none}>您可在宝点网商城享受全场{vip_level==3&&(mallVip.v3)*10||(vip_level==4&&(mallVip.v4)*10||(vip_level==5&&(mallVip.v5)*10||(vip_level==6&&(mallVip.v6)*10)))}折优惠</p>
                    </div>
                    <div className={index==3&&styles.contentItem}>
                        <div className={styles.discount}>
                            <img  src={withdraw}  style={{width:"130px"}}/>
                            <p className={styles.withDrawNum}>{vip_level==0&&withdrawalVip.v0||(vip_level==1&&withdrawalVip.v1||(vip_level==2&&withdrawalVip.v2||(vip_level==3&&withdrawalVip.v3||(vip_level==4&&withdrawalVip.v4||(vip_level==5&&withdrawalVip.v5||(vip_level==6&&withdrawalVip.v6))))))}  </p>
                        </div>
                        <p  className={styles.BirInfo}>您每月可享受{vip_level==0&&withdrawalVip.v0||(vip_level==1&&withdrawalVip.v1||(vip_level==2&&withdrawalVip.v2||(vip_level==3&&withdrawalVip.v3||(vip_level==4&&withdrawalVip.v4||(vip_level==5&&withdrawalVip.v5||(vip_level==6&&withdrawalVip.v6))))))}次免费提现次数~</p>
                    </div>
                </div>
            </div>
        )
    };
    oneDom=(data)=>{
        const {
            rateCouponsData,
            voucherData,
            PrivilegeBasicData,
            voucherInfoData,
            rateInfoData
        }=this.props;
        const {
            user_name,
            vip_level,
            annual_total,
            annual_gap
        } = data;
        const{
            index
        }=this.state;
        let voucherTxt,rateTxt;
        if(voucherInfoData){
            if(voucherInfoData.data.has == 0){
                voucherTxt = "(本月您可领取"+voucherInfoData.data.total+"张抵用券)";
            }else{
                voucherTxt = "(本月您还可领取"+voucherInfoData.data.can+"张抵用券)";
            }
        }
        if(rateInfoData){

            if(rateInfoData.data.has == 0){
                rateTxt = "(本月您可领取"+rateInfoData.data.total+"张加息券)";
            }else{
                rateTxt = "(本月您还可领取"+rateInfoData.data.can+"张加息券)";
            }
        }
        let rateDom,cashDom,basicDom;
        if(rateCouponsData&&rateCouponsData.data.length!=0){
            rateDom = this.rateDomHas();
        }else{
            let ticketName = "加息券";
            rateDom = this.cashDomNo(data,ticketName);
        }
        if(voucherData&&voucherData.data.length!=0){
            cashDom = this.cashDomHas();
        }else{
            let ticketName = "抵用券";
            cashDom = this.cashDomNo(data,ticketName);
        }
        if(PrivilegeBasicData){
            basicDom = this.PrivilegeBasicDom(PrivilegeBasicData.data);
        }
        let vimg;
        if(vip_level == 0){
            vimg = v0;
        }else if(vip_level == 1){
            vimg = v1;
        }else if(vip_level == 2){
            vimg = v2;
        }else if(vip_level == 3){
            vimg = v3;
        }else if(vip_level == 4){
            vimg = v4;
        }else if(vip_level == 5){
            vimg = v5;
        }else if(vip_level == 6){
            vimg = v6;
        }
        return(
            <div className={styles.messageContent}>
                <div className={styles.memberTop}>
                    <div className={styles.memberCard}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardleft}>
                                <div className={styles.headImg}>
                                        <img src={vimg}  className={styles.vimg} />
                                </div>
                                <span style={{color:"#333",fontSize:"12px"}}>{user_name}</span>
                            </div>
                            <span className={styles.cardright}>
                                 <p className={styles.cardrighttopMoney}>{annual_total}</p>
                                 <p className={styles.cardrightbelow}>当前待收年化（元）</p>
                            </span>
                        </div>
                        <Link to="/home/productIndex">
                            <div className={styles.promote}>投资升级</div>
                        </Link>
                        <p className={styles.annualMap}>距下一等级尚差待收年化 <span style={{color:"#333333"}}>{annual_gap}</span> 元</p>
                    </div>
                </div>
                <div className={styles.findItem} style={{marginTop:"0"}}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>基础特权</span>
                        <Link to="/find/basicPrivaligeDetail" className={styles.Link}>
                            <span className={styles.rightTxt}>领取规则></span>
                        </Link>
                    </div>
                    {
                        basicDom
                    }
                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>抵用券</span>
                        <span className={styles.leftTxtCue}>{voucherTxt}</span>
                        <Link to={`/find/rateTicketRule/2`} className={styles.Link}>
                            <span className={styles.rightTxt}>领取规则></span>
                        </Link>
                    </div>
                    {
                        cashDom
                    }

                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>加息券</span>
                        <span className={styles.leftTxtCue}>{rateTxt}</span>
                        <Link to={`/find/rateTicketRule/1`} className={styles.Link}>
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
        let loginUrl;
        loginUrl = "/login?baoBackUrl="+"/find/memberCenter"
        return(
            <div className={styles.messageContent}>
                <div className={styles.memberTop1}>
                    <div className={styles.memberCard1}>
                        <div className={styles.cardContent}>
                            <img src={noheadImg} className={styles.cardleft} />
                            <span className={styles.cardright}>
                                <Link to={loginUrl} className={styles.Link}>
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
    loadingDom(){
        return(<Loading/>)
    }
    render(){
        const {
            pop,
            VipData,
            voucherData,
            rateCouponsData
        }=this.props;
        let Dom;
        let userInfo = JSON.parse(sessionStorage.getItem("bao-auth"));
        if (userInfo){
            if(VipData && voucherData && rateCouponsData){
                Dom= this.oneDom(VipData.data);
            }else {
                Dom= this.loadingDom();
            }
        }else{
                Dom= this.twoDom();
        }

        let rightNodeTxt= <span className={styles.right}>等级规则</span>

        return(
            <div className={styles.findMessage} >
                <div className={styles.findMessageHeader}>
                    <NavBar title="会员中心" onLeft={pop} backgroundColor="#41403e" color="#d0a15e" rightNode={rightNodeTxt} onRight={()=>{ this.props.push('/find/overallRule')} } />
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
    PrivilegeBasicData: state.infodata.getIn(['GET_PRIV_BASIC', 'data']),
    rateCouponsData:state.infodata.getIn(['GET_RATE_COUPONS','data']),
    voucherData:state.infodata.getIn(['GET_VOUCHER_COUPONS','data']),
    voucherInfoData:state.infodata.getIn(['GET_VOUCHER_INFO','data']),
    rateInfoData:state.infodata.getIn(['GET_RATE_INFO','data']),
})
const initMymassegefn=(dispatch,own)=>({
    getVip(){
        dispatch({
            type:'GET_VIP'
        })
    },
    getPrivilegeBasic(){
        dispatch({
            type:'GET_PRIV_BASIC'
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
    getRateInfo(){
        dispatch({
            type:'GET_RATE_INFO'
        })
    },
    getVoucherInfo(){
        dispatch({
            type:'GET_VOUCHER_INFO'
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
})
export default connect(initMymassege,initMymassegefn)(memberCenter)