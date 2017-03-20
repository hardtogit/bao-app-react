/**
 * Created by wangdongfang on 17/3/15.
 */
/**
 * Created by wangdongfang on 17/3/15.
 */
import React,{Component,PropTypes} from 'react';
import NavBar from '../../../components/NavBar'
import styles from './index.less'
import {connect} from 'react-redux'
import {go} from 'react-router-redux'
import util from '../../../utils/utils'
const hostName=location.hostname;
`http://${hostName}/mobile_api/deposit/buy`
const Urls={
    deposit:`http://demo-wap.devbao.cn/mobile_api/deposit/buy`,
    pay:`http://${hostName}/mobile_api/pay?money=`,
    directInvest:`http://demo-wap.devbao.cn/mobile_api/directInvest/buy/`,
    creditors:`http://demo-wap.devbao.cn/mobile_api/creditors/pay-bond/`
}
class Index extends Component{
    constructor(porps){
        super(porps);
        this.state={
            url:'',
            num:-2
        }
    }
    componentDidMount(){
        this.getUrl();
    }
    getUrl=()=>{
        const {
            location:{
                query
            }
        }=this.props;
        if (query.wap=='deposit'){
            this.deposit(query);
        }else if (query.wap=='directInvest'){
            this.directInvest(query);
        }else if(query.wap=='creditors'){
            this.creditors(query)
        }else {
            this.pay()
        }
    }
    deposit=(query)=>{
        const {
            productId,
            quantity,
            password,
            type,
            couponId
        }=query;
        this.setState({
            url:util.combineUrl(Urls[query.wap],{productId,quantity,password,type,couponId}),
            num:-3
        })
    }
    directInvest=(query)=>{
        const {
            num,
            type,
            payPwd,
            borrowPwd,
            couponId
        }=query;
        const Id=this.props.params.id;
        this.setState({
            url:util.combineUrl(Urls[query.wap]+Id,{num,payPwd,borrowPwd,type,couponId}),
            num:-3
        })
    }
    creditors=(query)=>{
        const {
            copies,
            payPass,
            type
        }=query;
        const Id=this.props.params.id;
        this.setState({
            url:util.combineUrl(Urls[query.wap]+Id,{copies,payPass,type}),
            num:-3
        })
    }
    pay=()=>{
        this.setState({
            url:Urls.pay+this.props.params.id
        })
    }
    render(){
        const {
            url
        }=this.state;
        const {
            pop
        }=this.props;
        return(<div className={styles.rechargeBox}>
            <NavBar leftNode={<span className={styles.rechargeTitle}>关闭</span>}
                    onLeft={()=>{pop(this.state.num)}}>充值</NavBar>
            <iframe src={url} className={styles.ifr} onLoad={this.loadEnd} >

            </iframe>
        </div>)
    }
}
const datas=(state)=>({

})

const dispatchFn=(dispatch)=>({
    pop(num){
        dispatch(go(num))
    }
})
export default connect(datas,dispatchFn)(Index)