
import React,{PropTypes} from 'react'//资产详情
import NavBar from '../NavBar'
import styles from './index.css'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import arrowRight from '../../assets/images/arrow2.png' //没有记录
import Loading from '../pageLoading'
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
    goProductDetail=(id)=>{
        const {
            push,
            type
        }=this.props;
        //跳转
        if (type<=3){
            push('/user/productInfo/'+id);
        }else {
            push('/user/zqProductInfo/'+id);
        }
    };
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
                <p><span>{total_periods}个月</span><span>约定年化收益率{rate}%</span></p>
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
    headDomB=()=>{
        const {
            name,
            term,
            rate,
            hold_money,
            profit_yesterday,
            profit_accumulate
        }=this.props.infoData2.data;
        return(<div>
            <div className={styles.listBoxOne} onClick={()=>{this.goProductDetail(this.props.id)}}>
                <h2>{name}</h2>
                <p><span>{term}个月</span><span>约定年化收益率{rate}%</span></p>
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
    loadEndDomD=()=>{
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
                </ul>
            </ul>
        </div>)
    }
    //加载完资产详情页面后，发起请求
    componentDidMount(){
        const Id=this.props.id;
        const{type,getInvestProductDetail,getZqProductDetail}=this.props;
        if (type==4){
            getZqProductDetail(Id)
        }else {
            getInvestProductDetail(Id)
        }
    }
    dataN=()=>{
        const {
            infoData,
            infoData2,
            type
        }=this.props;
        if (type<=3){
            return infoData
        }else {
            return infoData2
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
                Dom=this.loadEndDomD();
            }
        }
        if (infoData){
            if (type==1&&infoData.data.isTransfer==1){
                button=<div className={styles.detailsButton} onClick={()=>{push(`/user/zqTransfer/${id}`)}}>债权转让</div>
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
    infoData2:state.infodata.getIn(['CREDITORS_PROPERTY_DETAIL','data'])
});
const dispatchFn=(dispatch,own)=>({
    getInvestProductDetail(Id){
        dispatch({
            type:'DIRECT_INVEST_PROPERTY_DETAIL',
            params:[Id]
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getZqProductDetail(Id){
        dispatch({
            type:'CREDITORS_PROPERTY_DETAIL',
            params:[Id]
        })
    }
});
export default connect(datas,dispatchFn)(Index)