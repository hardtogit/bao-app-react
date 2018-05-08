/**
 * Created by xiangguo .
 * time:2018/4/3 0003.
 * email:413401168@qq.com.
 * use:auto...
 */
/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import NavBar from '../../../../components/NavBar'
import Calculator from '../../../../components/Calculator'
import styles from './index.styl'
import wrap from '../../../../utils/pageWrapper'
import {push, goBack} from 'react-router-redux'
import {connect} from 'react-redux'
import Store from '../../../../components/Dialog/store'
import Loading from '../../../../components/pageLoading'
import Header from '../../../../components/depositBanner'
import classNames from 'classnames'
import IsAuth from '../../../../components/isAuth'
import setUrl from '../../../../components/setUrl'
import ok from '../../../../assets/images/ok.png'
import LoadList from '../../../../components/scroll/config'
import nullImg from '../../../../assets/images/record.png'
import {getAuthDetail} from '../../../../components/Permission'
import utils from '../../../../utils/utils'
class GatherMain extends React.Component {
    state = {
        init: false,
        type:2,
        tabIndex:0
    }
    componentWillMount(){

    }
    componentDidMount() {
        const {params:{productId},get,getInvestRecord}=this.props;
        get(productId)//获取聚点+详情
        getInvestRecord(productId)//获取聚点+计划详情
    }
    loading(){
        return(<Loading/>)
    }
    changeTab=(index)=>{
        this.setState({
            tabIndex:index
        })
    };
    btDom=()=>{
        const {
            pending,
            end,
            listData
        }=this.props;
        let Dom;
        if (pending&&!end){
            Dom=LoadList.loadingDom();
        }else if (end){
            Dom=<div className={styles.nullDom}>没有更多</div>
        }
        if (listData&&end){
            if (listData.size==0){
                    Dom=<div  className={styles.nullImg}>
                        <img src={nullImg}/>
                    </div>
            }
        }
        return Dom;
    }
    moneyFn=(rate,month)=>{
        let money=parseFloat(10000*rate/100*(month/12)).toString();
        if (money.indexOf('.')!=-1){
            money=money.substring(0,money.indexOf('.')+3)
        }
        return money
    };
    componentWillReceiveProps({data}){
         if(data&&data.data&&!this.state.init){
             this.props.getBorrowInfo(data.data.borrow_id);
             this.setState({
                 init:true
             })
         }
    }
    loadEnd=()=>{
        const {
            data,
            push,
            borrowData,
            listData
        } = this.props;
        const {
            tabIndex
        }=this.state;
        let {
            productId,
            rate,
            interest,
            money,
            fee,
            type,
            repayment_type,
            totalMoney,
            returnInterest,
            repaymentDay,
            title,
            status,
            xinyu,
            month
        }=data.data;
        rate=parseFloat(rate).toFixed(2);
        const bData=[{name:'转让金额',val:money},{name:"投资期限",val:month+'个月'}];
        const loadList=this.btDom();
        let text='';
        let flag=true;
        switch (parseInt(status)) {
            case 0:
                text = '马上出借';
                flag = false;
                break;
            case 1:
                text = '已完成';
                flag = true;
                break;
            case 2:
                text = '已过期';
                flag = true;
                break
        }

        return(
            <div>
                <Header rate={rate}  data={bData}/>
                <div className={styles.title}>{title}</div>
                <div className={styles.item}>
                    <div className={styles.left}>预期收益：</div>
                    <div className={styles.right}>{interest}元</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.left}>转让金额：</div>
                    <div className={styles.right}>{money}元</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.left}>预付利息：</div>
                    <div className={styles.right}>{returnInterest}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.left}>手续费：</div>
                    <div className={styles.right}>{fee}元</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.left}>实际支付：</div>
                    <div className={styles.right}>{totalMoney}元</div>
                </div>
                <div className={styles.back}>
                    <div className={styles.box}>
                    <div className={styles.left}>还款方式：</div>
                    <div className={styles.right}>{
                        (()=>{
                            switch (parseInt(repayment_type)){
                                case 1:
                                    return "按天到期";
                                    break;
                                case 2:
                                    return "等额本息";
                                    break;
                                case 3:
                                    return "按季分期";
                                    break;
                                case 4:
                                    return "每月还息到期还本";
                                    break;
                                case 5:
                                    return "到期还本付息"
                                break

                            }
                        })()
                    }</div>
                        <div className={styles.left}>下一还款日：</div>
                        <div className={styles.right}>{utils.formatDate('yyyy-MM-dd',new Date(repaymentDay*1000))}</div>
                    </div>
                </div>
                <div className={classNames(styles.item,styles.type)}>
                    <div className={styles.left}>信用等级 {xinyu}</div>
                    <div className={styles.right}>类型：{
                        (()=>{
                            switch (parseInt(type)){
                                case 1:
                                    return "信用";
                                    break;
                                case 5:
                                    return "抵押"
                                    break

                            }
                        })()
                    }</div>
                </div>
                <div className={styles.listBox}>
                    <div className={styles.tabContainer}>
                        <div onClick={()=>{this.changeTab(0)}} className={classNames(styles.tab,tabIndex==0&&styles.active||"")}>借款人</div>
                        <div onClick={()=>{this.changeTab(1)}} className={classNames(styles.tab,tabIndex==1&&styles.active||"")}>投资记录</div>
                    </div>
                    {tabIndex==0&&
                        <div className={styles.barrow}>
                           <div className={styles.title}>借款用途</div>
                            <div className={styles.text}>{borrowData&&borrowData.data.borrow_use}</div>
                            <div className={styles.title}>还款来源</div>
                            <div className={styles.text}>{borrowData&&borrowData.data.repaymentSource}</div>
                            <div className={styles.title}>平台认证</div>
                            <div className={styles.danger}>{(()=> {
                                let arr=[];
                                borrowData&&borrowData.data&&borrowData.data.certification.map((value,i)=>{
                                    arr.push(<div key={i} className={styles.item}>{value} <img src={ok} alt=""/></div>)
                                })
                                return arr
                            })()}
                            </div>

                        </div>
                    || <div className={styles.listBox}>
                        {
                            (()=>{
                                let Dom=[];
                                listData&&listData.map((item,i)=>{
                                    Dom.push(
                                        <div className={styles.tabListBox} key={i}>
                                            <div className={styles.tabListLeft}>
                                                <p>{item.username}</p>
                                                <p>{item.add_time}</p>
                                            </div>
                                            <div className={styles.tabListRight}>
                                                {item.invest_money}元
                                            </div>
                                        </div>)
                                })
                                return Dom;
                            })()

                        }
                        {loadList}</div> }
                    <div>


                    </div>
                </div>
                <div className={styles.bottom}>
                    <div onClick={() => this.refs.calculator.show()} className={styles.calculator}></div>
                    <button onClick={()=>{this.purchase(productId,push)}} disabled={flag} style={flag&&{backgroundColor:'#aaa'}||{}}>{text}</button>
                </div>
                <Calculator
                    ref="calculator"
                    unit="m"
                    rate={rate}
                    term={month}
                    amount={money}
                    // rateMap={deposit.map(({rate, month}) => ({term: month, rate}))}
                    modalStyle={styles.modalStyle}
                    modalBody={styles.modalBody}
                />
                <IsAuth ref="isAuth"/>
                <Store ref="store"> </Store>
            </div>)
    }
    purchase=(id,push)=>{
        switch (getAuthDetail()){
            case 1:
                push(`/wisdomBuy/${id}`);
                break;
            case 2:
                push('/user/setting/authorization');
                break;
            case 3:
                this.refs.store.show();
                break;
            default:
                break
        }

    };
    succsseFn=(url)=>{
        setUrl.setUrl(url)
    }
    render() {
        const {
            data,
            pop,
            backgroundColor,
        }=this.props;
        const {
            type
        }=this.state;
        let Dom=this.loading();
        if (data){
            Dom=this.loadEnd()
        }
        let backSty=backgroundColor?{borderRightColor:backgroundColor}:{borderRightColor:"#00a6e2"}
        return (
            <div className={styles.root}>
                <NavBar onLeft={pop}>
                    产品详情
                </NavBar>
                {
                    Dom
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data:state.infodata.getIn(['WISDOM_DETAIL','data']),
        borrowData:state.infodata.getIn(['GATHER_BID_DETAIL','data']),
        pending:state.listdata.getIn(['WISDOM_INVEST_LIST','pending']),
        end:state.listdata.getIn(['WISDOM_INVEST_LIST','pageEnd']),
        listData:state.listdata.getIn(['WISDOM_INVEST_LIST','data'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    push(path) {
        dispatch(push(path))
    },

    pop() {
        dispatch(goBack())
    },
    get(id){
        dispatch({
            type:'WISDOM_DETAIL',
            params:[id]
        })
    },
    getBorrowInfo(id){
        dispatch({
          type:"GATHER_BID_DETAIL",
          params:[id]
        })
    },
    getInvestRecord(id){
        dispatch({
            type:"WISDOM_INVEST_LIST",
            params:[id]
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(GatherMain))
