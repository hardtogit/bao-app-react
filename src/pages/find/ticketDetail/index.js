import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import yesBtn from '../../../assets/images/find/yesBtn.png'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
import Confirm from '../../../components/Dialog/confirm';
class ticketRule extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: false,
            open: false,
            buttonClickStatus: true//确认开启是否能点击
        }
    }
    componentWillMount(){

    }
    componentWillReceiveProps = ({voucherInfo}) => {
        if (voucherInfo&&voucherInfo.code == 100) {
                 this.refs.confirm.show({
                    title: '领取成功',
                    okText: '确定',
                    okCallback: () => {
                        this.props.push('/find/memberCenter')
                    },
                    cancelText: '取消',
                    cancelCallback: () => {
                    }
                })
        }else{
            this.refs.confirm.show({
                title: '领取失败',
                okText: '确定',
                okCallback: () => {
                },
                cancelText: '取消',
                cancelCallback: () => {
                }
            })
        }
    };
    submit=(id,ticketName)=>{
        if(ticketName == "抵用券"){
            this.props.voucherGet(id);
        }else if(ticketName == "兑换券"){
            this.props.rateGet(id);
        }
    };
    nohasBtnDom=(id,ticketName)=>{
        return(
            <div className={styles.yesBtn} onClick={() => {this.submit(id,ticketName)}} disabled={!this.state.buttonClickStatus}>
                确认领取
            </div>
        )
    };
    hasBtnDom=()=>{
        return(
            <div className={styles.noBtn}>
                已领取
            </div>
        )
    };
    render(){
        const {
            pop,
            voucherInfo,
        }=this.props;

        let btnDom;
        console.log(voucherInfo);
        let coupon_name = this.props.params.coupon_name;
        let coupon_id = this.props.params.coupon_id;
        let ticketNum = coupon_name.split("元")[0];
        let ticketName = coupon_name.split("元")[1];
        let receive_way = this.props.params.receive_way;
        let info_term = this.props.params.info_term;
        let info_limit = this.props.params.info_limit;
        let is_has = this.props.params.is_has;
        if(is_has == 1){
            btnDom = this.hasBtnDom(coupon_id);
        }else if(is_has == 0){
            btnDom = this.nohasBtnDom(coupon_id,ticketName);
        }
        return(
             <div className={styles.findMessage} >
                 <div className={styles.findMessageHeader}>
                     <NavBar backgroundColor="#d0a15e" onLeft={pop}>{ticketName}</NavBar>
                </div>
                <div className={styles.messageContent}>
                    <div className={styles.tacket}>
                       <p className={styles.cashName}>￥<span className={styles.ticketNum}>{ticketNum}</span>{ticketName}</p>
                       <p className={styles.cashFrom}>获取来源：{receive_way}</p>
                    </div>
                    <div className={styles.bottomWraper}>
                        <p className={styles.firstP}>使用规则：</p>
                        <p>{info_term}</p>
                        <p>{info_limit}</p>
                    </div>
                    {
                        btnDom
                    }
                    <Confirm ref="confirm"/>
                </div>
            </div>
        )
    }
}
const initMymassege=(state,own)=>{
    return{
        voucherInfo: state.infodata.getIn(['VOUCHER_GET', 'data']),
        rateInfo: state.infodata.getIn(['RATE_GET', 'data']),
    }
}
const initMymassegefn=(dispatch,own)=>({
    voucherGet(id) {
        dispatch({
            type: "VOUCHER_GET",
            params:[
                id
            ]
        })
    },
    rateGet(id) {
        dispatch({
         type: "RATE_GET",
         params:[
             id
         ]
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(url) {
        dispatch(push(url))
    },
})
export default connect(initMymassege,initMymassegefn)(ticketRule)