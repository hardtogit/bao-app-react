
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
            push
        }=this.props;
        //跳转
        push('/user/productInfo/'+id);
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
            profit_expire,
            total_periods
        }=this.props.infoData.data;
        return(<div>
            <div className={styles.listBoxOne} onClick={()=>{this.goProductDetail(id)}}>
                <h2>{name}<span>({id})</span></h2>
                <p><span>{total_periods}个月</span><span>约定年化收益率{profit_expire}%</span></p>
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
    //加载完资产详情页面后，发起请求
    componentDidMount(){
        const Id=this.props.id;
        this.props.getInvestProductDetail(Id)
    }
    render() {
        const {
            infoData,
            pop,
            id,
            type
        }=this.props;
        let Dom=this.loadDom(),
            headDom;
        if (infoData){
            console.log(infoData)
            if (infoData.data.id==id){
                headDom=this.headDom();
                if (type==1){
                    Dom=this.loadEndDomA()
                }else if (type==2){
                    Dom=this.loadEndDomB();
                }else {
                    Dom=this.loadEndDomC();
                }
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
                </div>
            </div>
        )
    }
}
const datas=(state)=>({
    infoData:state.infodata.getIn(['DIRECT_INVEST_PROPERTY_DETAIL','data'])
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
    }
});
export default connect(datas,dispatchFn)(Index)