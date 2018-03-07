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
            flag:true
        }
    }
    componentWillMount(){
        this.props.getRateInfo();
        this.props.getVoucherInfo();
        this.props.clearData("VOUCHER_GET");
        this.props.clearData("RATE_GET");
    }
    componentWillUnmount(){
        this.props.clearData('VOUCHER_GET');
        this.props.clearData('RATE_GET')
    }
    componentDidMount(){

    }
    componentWillReceiveProps = ({voucherInfo,rateInfo}) => {
        const {
            flag
        }=this.state;
        if(voucherInfo&&!flag){
            if (voucherInfo.code == 100) {
                this.refs.confirm.show({
                    title: '领取成功',
                    okText: '确定',
                    okCallback: () => {
                        this.props.push('/find/memberCenter')
                        this.setState({
                            flag:true
                        })
                    },
                    cancelText: '取消',
                    cancelCallback: () => {
                        this.setState({
                            flag:true
                        })
                    }
                })
            }else{
                this.refs.confirm.show({
                    title: '领取失败',
                    okText: '确定',
                    content:voucherInfo.msg,
                    okCallback: () => {
                        this.setState({
                            flag:true
                        })
                    },
                    cancelText: '取消',
                    cancelCallback: () => {
                        this.setState({
                            flag:true
                        })
                    }
                })
            }
        }
        if(rateInfo&&!flag){
            if (rateInfo.code == 100) {
                this.refs.confirm.show({
                    title: '领取成功',
                    okText: '确定',
                    okCallback: () => {
                        this.props.push('/find/memberCenter')
                        this.setState({
                            flag:true
                        })
                    },
                    cancelText: '取消',
                    cancelCallback: () => {
                        this.setState({
                            flag:true
                        })
                    }
                })
            }else{
                this.refs.confirm.show({
                    title: '领取失败',
                    okText: '确定',
                    content:rateInfo.msg,
                    okCallback: () => {
                        this.setState({
                            flag:true
                        })
                    },
                    cancelText: '取消',
                    cancelCallback: () => {
                        this.setState({
                            flag:true
                        })
                    }
                })
            }
        }

    };
    submit=(id,ticketName)=>{
        this.setState({
            flag:false
        })
        if(ticketName == "抵用券"){
            this.props.voucherGet(id);
        }else if(ticketName == "加息券"){
            this.props.rateGet(id);
        }
    };
    nohasBtnDom=(id,ticketName)=>{
        return(
            <div className={styles.yesBtn} onClick={() => {this.submit(id,ticketName)}} >
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
    noBtnDom=(id,ticketName)=>{
        let vipLevel = sessionStorage.getItem("vipLevel");
        let cueTxt;
        if(vipLevel == 0){
            cueTxt = "普通会员不可领取"
        }else{
            cueTxt = "已达每月领券上限"
        }
        return(
            <div>
                <div className={styles.noBtn} onClick={() => {this.submit(id,ticketName)}}>
                    确认领取
                </div>
                <p className={styles.noBtnTxt}>{cueTxt}</p>
            </div>
        )
    };
    render(){
        const {
            pop,
            voucherInfoData,
            rateInfoData,
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
        let vipLevel = sessionStorage.getItem("vipLevel");
        let ticketNum,ticketName1,btnDom;
        let ticketName = coupon_name.substring(coupon_name.length-3);
        if(ticketName == "加息券"){
            ticketNum = coupon_name.split("%")[0];
            ticketName1 = "%" + ticketName;
            if(rateInfoData){
                if(vipLevel == 0||rateInfoData.data.can==0){
                    btnDom=this.noBtnDom();
                }else{
                    if(is_has==1){
                        btnDom=this.hasBtnDom();
                    }else{
                        btnDom=this.nohasBtnDom(coupon_id,ticketName)
                    }
                }
            }
        }else if(ticketName == "抵用券"){
            ticketNum = coupon_name.split("元")[0];
            ticketName1 = "元" + ticketName;
            if(voucherInfoData){
                if(vipLevel == 0||voucherInfoData.data.can==0){
                    btnDom=this.noBtnDom();
                }else{
                    if(is_has==1){
                        btnDom=this.hasBtnDom();
                    }else{
                        btnDom=this.nohasBtnDom(coupon_id,ticketName)
                    }
                }
            }
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
        voucherInfoData:state.infodata.getIn(['GET_VOUCHER_INFO','data']),
        rateInfoData:state.infodata.getIn(['GET_RATE_INFO','data']),
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
    push(url) {
        dispatch(push(url))
    },
    clearData(key){
        dispatch({
            type:'CLEAR_DATA',
            key:key
        })
    },
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)