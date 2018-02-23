import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import yesBtn from '../../../assets/images/find/yesBtn.png'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
import Confirm from '../../../components/Dialog/confirm';
class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: false,
            open: false,
            buttonClickStatus: true//确认开启是否能点击,

        }
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillReceiveProps = ({voucherInfo,rateInfo}) => {
        if(voucherInfo){
            if (voucherInfo.code == 100) {
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
                    content:voucherInfo.msg,
                    okCallback: () => {
                    },
                    cancelText: '取消',
                    cancelCallback: () => {
                    }
                })
            }
        }
        if(rateInfo){

            if (rateInfo.code == 100) {
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
                console.log("111")
                this.refs.confirm.show({
                    title: '领取失败',
                    okText: '确定',
                    content:"111",
                    okCallback: () => {
                    },
                    cancelText: '取消',
                    cancelCallback: () => {
                    }
                })
            }
        }

    };
    submit=(id,ticketName)=>{
        if(ticketName == "抵用券"){
            this.props.voucherGet(id);
        }else if(ticketName == "加息券"){
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
            rateInfo
        }=this.props;

        const {
            coupon_id,
            coupon_name,
            coupon_money,
            receive_way,
            info_term,
            info_limit,
            info_product,
            is_has,
        }=JSON.parse(sessionStorage.getItem("bao-ticketData"));
        let ticketNum;
        let ticketName1;
        let btnDom;
        let ticketName = coupon_name.substring(coupon_name.length-3);
        if(ticketName == "加息券"){
            ticketNum = coupon_name.split("%")[0];
            ticketName1 = "%" + ticketName;
        }else if(ticketName == "抵用券"){
            ticketNum = coupon_name.split("元")[0];
            ticketName1 = "元" + ticketName;
        }
        console.log(is_has)
        if(is_has==1){
            btnDom=this.hasBtnDom();
        }else{
            btnDom=this.nohasBtnDom(coupon_id,ticketName)
        }


        return(
             <div className={styles.findMessage} >
                 <div className={styles.findMessageHeader}>
                     <NavBar backgroundColor="#d0a15e" onLeft={pop}>{ticketName}</NavBar>
                </div>
                <div className={styles.messageContent}>
                    <div className={styles.tacket}>
                       <p className={styles.cashName}><span className={styles.ticketNum}>{ticketNum}</span>{ticketName1}</p>
                       <p className={styles.cashFrom}>获取来源：{receive_way}</p>
                    </div>
                    <div className={styles.bottomWraper}>
                        <p className={styles.firstP}>使用规则：</p>
                        <p>{info_term}</p>
                        <p>{info_limit}</p>
                        <p>{info_product}</p>
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
const mapStateToProps=(state,own)=>{
    return{
        voucherInfo: state.infodata.getIn(['VOUCHER_GET', 'data']),
        rateInfo: state.infodata.getIn(['RATE_GET', 'data']),
    }
}
const mapDispatchToProps=(dispatch,own)=>({
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
export default connect(mapStateToProps,mapDispatchToProps)(Index)