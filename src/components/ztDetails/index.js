
import React from 'react'//资产详情
import NavBar from '../NavBar'
import styles from './index.css'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import arrowRight from '../../assets/images/arrow2.png' //没有记录
import Loading from '../pageLoading'
import PropTypes from 'prop-types'
import BaseText from '../../components/BaseText'
class Index extends React.Component {
    static PropTypes={
        type:PropTypes.number,
        id:PropTypes.number
    }
    static defaultProps={
        type:0,
        id:0
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    //点击直投项目列表事件
    goProductDetail=(id,bId)=>{
        let {
            push,
            type,
            location:{
                query:{
                    access_sys,
                    borrow_id
                }
            }
        }=this.props;
          if(!borrow_id){
              borrow_id=bId
          }
        //跳转
        if (type<=3){
            if(access_sys){
                push('/user/productInfo/'+id+'?access_sys='+access_sys);
            }else{
                push('/user/productInfo/'+id);
            }
        }else {
            if(access_sys){
                push('/user/zqProductInfo/'+id+'?access_sys='+access_sys+"&borrow_id="+borrow_id);
            }else{
                push('/user/zqProductInfo/'+id+"?borrow_id="+borrow_id);
            }
        }
    };
    timer=(date)=>{
        const time=new Date(parseInt(date)*1000);
        const year=time.getFullYear();
        const month=time.getMonth()+1;
        const day=time.getDate();
        return year+'年'+month+'月'+day+'日'
    }
    loadDom=()=>{
        return(<Loading/>)
    }
    headDom=()=>{
        const {
            profit_accumulate,
            id,
            name,
            profit_yesterday,
            total_periods,
            rate
        }=this.props.infoData.data;
        return(<div>
            <div className={styles.listBoxOne} onClick={()=>{this.goProductDetail(id)}}>
                <h2>{name}<span>({id})</span></h2>
                <p><span>{total_periods}个月</span><span>参考年回报率{rate}%</span></p>
                <img src={arrowRight}/>
            </div>
            <div className={styles.listBoxTwo}>
                <p>{profit_accumulate}</p>
                <p>累计收益（元）</p>
                {
                   this.props.type==1&&<p>昨日收益：{profit_yesterday}元</p>||null
                }
            </div>
        </div>)
    }
    headDomC=(data)=>{
        const {
            accumulateProfit,
            yesterdayProfit,
            name,
            month,
            investId,
            rate,
            currentPeriod,
            isExpired
        }=data;
        const {type}=this.props;
        return(<div>
            <div className={styles.listBoxOne}>
                <h2>{name}</h2>
                <p><span>{month}个月</span><span>参考年回报率{rate}%</span><span style={{float:'right'}}>{type==6?'到期还本付息':'每月还息  到期还本'}</span></p>
            </div>
            <div className={styles.listBoxTwo}>
                <p>{accumulateProfit}</p>
                <p>累计收益（元）</p>
                {(type==5&&currentPeriod!='')&&<p>昨日收益：{yesterdayProfit}元</p>||null}
                {(type==6&&!isExpired)&&<p>昨日收益：{yesterdayProfit}元</p>||null}
            </div>
        </div>)
    }
    headDomB=()=>{
        const {
            name,
            term,
            rate,
            hold_money,
            borrow_id,
            profit_yesterday,
            profit_accumulate
        }=this.props.infoData2.data;
        return(<div>
            <div className={styles.listBoxOne} onClick={()=>{this.goProductDetail(this.props.id,borrow_id)}}>
                <h2>{name}</h2>
                <p><span>{term}个月</span><span>参考年回报率{rate}</span></p>
                <img src={arrowRight}/>
            </div>
            <div className={styles.listBoxTwo}>
                <p>{hold_money}</p>
                <p>持有金额</p>
                <p className={styles.profitBox}>
                    <span className={styles.profitLeft}>昨日收益：{profit_yesterday}元</span>
                    <span className={styles.profitRight}>累计收益：{profit_accumulate}元</span>
                </p>
            </div>
        </div>)
    }
    loadEndDomA=()=>{
        const {
            infoData:{
                data
            },
            contractsFillList
        }=this.props;
        const {
            account_arrival,
            account_overdue,
            amount,
            refund_periods,
            profit_expire_arrival,
            total_periods,
            refund_date,
        }=data;
        return (
            <div>
                <ul className={styles.listBoxThree}>
                    <li className={styles.Onetitle}>购买信息</li>
                    <ul>
                        <li>购买金额<p>{amount}</p></li>
                        <li>到期获得<p>{profit_expire_arrival}</p></li>
                    </ul>
                    <li className={styles.Onetitle}>回款记录</li>
                    <ul>
                        <li>当前期数<p>期数：{refund_periods}/{total_periods}</p></li>
                        <li>已到账<p className={styles.yellowColor}>{account_arrival}</p></li>
                        <li>已逾期<p className={styles.yellowColor}>{account_overdue}</p></li>
                        <li>下期还款日<p className={styles.yellowColor}>{refund_date}</p></li>
                        {contractsFillList&&contractsFillList.data.length!=0&&<BaseText containerStyle={{paddingLeft:0}} label='服务协议' borderType="four" onClick={()=>{
                            let id=this.props.params.id
                            if(this.props.location.query.type){
                                if(this.props.location.query.access_sys=='platform'){
                                    this.props.push('/fillList/'+this.props.location.query.zqid+'/B')
                                }else{
                                    this.props.push('/fillList/'+this.props.location.query.zqid+'/E')
                                }
                            }else{
                                if(this.props.location.query.access_sys=='platform'){
                                    this.props.push('/fillList/'+id+'/A')
                                }else{
                                    this.props.push('/fillList/'+id+'/D')
                                }
                            }
                        }}></BaseText>}

                    </ul>
                </ul>
            </div>
        )
    };
    loadEndDomB=()=>{
        const {
            amount,
            transfer_money,
            account_arrival,
        }=this.props.infoData.data;
        return(<div>
            <ul className={styles.listBoxThree}>
                <ul>
                    <li>购买金额<p>{amount}</p></li>
                    <li>转让价格<p className={styles.yellowColor}>{transfer_money}</p></li>
                    <li>已到账<p className={styles.yellowColor}>{account_arrival}</p></li>
                </ul>
            </ul>
        </div>)
    }
    loadEndDomC=()=>{
        const {
            amount,
            account_overdue,
            account_arrival,
            profit_expire_arrival
        }=this.props.infoData.data;
        return(<div>
            <ul className={styles.listBoxThree}>
                <ul>
                    <li>购买金额<p>{amount}</p></li>
                    <li>到期获得<p className={styles.yellowColor}>{profit_expire_arrival}</p></li>
                    <li>已到账<p className={styles.yellowColor}>{account_arrival}</p></li>
                    <li>已逾期<p className={styles.yellowColor}>{account_overdue}</p></li>
                </ul>
            </ul>
        </div>)
    }
    loadEndDomE=(data)=>{
        const {
            id,
            push,
            type,
            contractsFillList
        }=this.props;
        const {
            arrivalAccount,
            currentPeriod,
            total,
            collect,
            endTime,
            startTime,
            nextRepaymentDate,
            month
        }=data;
        const endStrTime=this.timer(endTime);
        const startStrTime=this.timer(startTime);
        const nextStrTime=this.timer(nextRepaymentDate);
        let url=`/user/dcbContract/${id}`
        if (type==6){
            url=`/user/dcContract/${id}`
        }
        return (
            <div>
                <ul className={styles.listBoxThree}>
                    <li className={styles.Onetitle}>购买信息</li>
                    <ul>
                        <li>购买金额<p>{total}</p></li>
                        <li>到期获得<p>{collect}</p></li>
                        <li>产品到期日<p>{endStrTime}</p></li>
                        <li>产品起息日<p>{startStrTime}</p></li>
                    </ul>
                    {(type==5&&currentPeriod!='')&&<li className={styles.Onetitle}>回款记录</li>||''}
                    {(type==5&&currentPeriod!='')&&<ul>
                        <li>当前期数<p>期数：{currentPeriod}</p></li>
                        <li>已到账<p className={styles.yellowColor}>{arrivalAccount}</p></li>
                        <li>下期还款日<p className={styles.yellowColor}>{nextStrTime}</p></li>
                        {contractsFillList&&contractsFillList.data.length!=0&&<BaseText containerStyle={{paddingLeft:0}} label='服务协议' borderType="four" onClick={()=>{push(`/fillList/${id}/C`)}}></BaseText>}
                    </ul>||''}
                </ul>
            </div>
        )
    }
    loadEndDomD=()=>{
        const{contractsFillList}=this.props;
        const {
            amount,
            interest,
            profit,
            income,
            periods,
            account_arrival,
            account_overdue,
            next_periods
        }=this.props.infoData2.data;
        return(<div>
            <ul className={styles.listBoxThree}>
                <li className={styles.Onetitle}>购买信息</li>
                <ul>
                    <li>购买金额<p>{amount}</p></li>
                    <li>折价收益<p>{profit}</p></li>
                    <li>预付利息<p>{interest}</p></li>
                    <li>到期获得<p>{income}</p></li>
                </ul>
                <li className={styles.Onetitle}>回款记录</li>
                <ul>
                    <li>当前期数<p>期数:{periods}</p></li>
                    <li>已到账<p className={styles.yellowColor}>{account_arrival}</p></li>
                    <li>已逾期<p className={styles.yellowColor}>{account_overdue}</p></li>
                    <li>下期还款日<p className={styles.yellowColor}>{next_periods}</p></li>
                    {contractsFillList&&contractsFillList.data.length!=0&&<BaseText containerStyle={{paddingLeft:0}} label='服务协议' borderType="four" onClick={()=>{
                        let id=this.props.params.id
                        if(this.props.location.query.access_sys=='platform'){
                            this.props.push('/fillList/'+id+'/B')
                        }else{
                            this.props.push('/fillList/'+id+'/E')
                        }
                    }}></BaseText>}
                </ul>
            </ul>
        </div>)
    }
    //加载完资产详情页面后，发起请求
    componentDidMount(){
        let $this=this;
        const Id=this.props.id;
        let zqid;
        if(this.props.location){
            zqid=this.props.location.query.zqid
        }
        const{type,getFillContractsList,getInvestProductDetail,getZqProductDetail,getDepositbs,getDepositasInvest,index}=this.props;
        if (type==4){//债权转让
            getZqProductDetail(Id,this.props.location.query.access_sys)
            if(this.props.location.query.access_sys){
                getFillContractsList(Id,'B')
            }else{
                getFillContractsList(Id,'E')
            }
        }else if (type==5){//定存b
            getDepositbs(Id,index);
            getFillContractsList(Id,'C')//获取合同列表
        }else if (type==6){
            getDepositasInvest(Id)
        }else {//直投详情
            getInvestProductDetail(Id,$this.props.location.query.access_sys);
            if(this.props.location.query.type){
                if(this.props.location.query.access_sys){
                    getFillContractsList(zqid,'B')
                }else{
                    getFillContractsList(zqid,'E')
                }
            }else{
                if(this.props.location.query.access_sys){
                    getFillContractsList(Id,'A')
                }else{
                    getFillContractsList(Id,'D')
                }
            }
        }
    }
    dataN=()=>{
        const {
            infoData,
            infoData2,
            infoDate3,
            infoData4,
            type
        }=this.props;
        if (type<=3){
            return infoData
        }else if (type==4){
            return infoData2
        }else if (type==5){
            return infoDate3
        }else {
            return infoData4
        }
    }
    render() {
        const {
            pop,
            id,
            type,
            infoData,
            push
        }=this.props;
        let Dom=this.loadDom(),
            headDom,
            button;
        const dataN=this.dataN();
        if (dataN){
            if (type==5||type==6){
                if (dataN.data.investId==id){
                    headDom=this.headDomC(dataN.data);
                    Dom=this.loadEndDomE(dataN.data)
                }
            }else {
                if (dataN.data.id==id){
                    headDom=this.headDom();
                    if (type==1){
                        Dom=this.loadEndDomA()
                    }else if (type==2){
                        Dom=this.loadEndDomB();
                    }else if (type==3){
                        Dom=this.loadEndDomC();
                    }
            }else if (dataN.code==100&&type==4){
                    headDom=this.headDomB();
                    Dom=this.loadEndDomD();}
            }
        }
        if (infoData){
            if (type==1&&infoData.data.isTransfer==1){
                button=<div className={styles.detailsButton} onClick={
                    ()=>{
                    if(this.props.location.query.access_sys){
                    push(`/user/zqTransfer/${id}?access_sys=platform`)
                    }else{
                        push(`/user/zqTransfer/${id}`)
                      }}}>债权转让</div>
            }
        }
        return (
            <div>
                <NavBar onLeft={pop}>资产详情</NavBar>
                <div className={styles.bg}>
                    <div className={styles.manageContent}>
                        {
                            headDom
                        }
                    {
                        Dom
                    }
                    </div>
                    {
                        button
                    }
                </div>
            </div>
        )
    }
}
const datas=(state)=>({
    infoData:state.infodata.getIn(['DIRECT_INVEST_PROPERTY_DETAIL','data']),
    infoData2:state.infodata.getIn(['CREDITORS_PROPERTY_DETAIL','data']),
    infoDate3:state.infodata.getIn(['DEPOSITBS_INVEST','data']),
    infoData4:state.infodata.getIn(['DEPOSITA_SINVEST','data']),
    contractsFillList:state.infodata.getIn(['GET_FILL_CONTRACTS_LIST','data'])
});
const dispatchFn=(dispatch,own)=>({
    getInvestProductDetail(Id,access_sys){
        dispatch({
            type:'DIRECT_INVEST_PROPERTY_DETAIL',
            params:[Id,access_sys]
        })
    },
    getFillContractsList(id,type){
       dispatch({
                 type:'GET_FILL_CONTRACTS_LIST',
                 params:[{product_id:id,product_type:type}]
               })
    },
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getZqProductDetail(Id,access_sys){
        dispatch({
            type:'CREDITORS_PROPERTY_DETAIL',
            params:[Id,access_sys]
        })
    },
    getDepositbs(Id,index){
        dispatch({
            type:'DEPOSITBS_INVEST',
            params:[Id,index]
        })
    },
    getDepositasInvest(Id){
        dispatch({
            type:'DEPOSITA_SINVEST',
            params:[Id]
        })
    },
    clearData(){
        dispatch({
            type: 'CLEAR_INFO_DATA',
            key: 'GET_FILL_CONTRACTS_LIST'
        })
    }
});
export default connect(datas,dispatchFn)(Index)