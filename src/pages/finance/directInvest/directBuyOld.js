/**
 * Created by xiangguo .
 * time:2017/10/25 0025.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import NavBar from '../../../components/NavBar'
import styles from './directBuy.less'
import * as actionTypes from '../../../actions/actionTypes'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import wrap from '../../../utils/pageWrapper'
import {goBack, push} from 'react-router-redux'
import utils from '../../../utils/utils.js'
import BuyInput from '../../../components/customInput'
import Button from '../../../components/BaseButton'
import PayProcess from '../payProcessOld.js'
import Tipbar from '../../../components/Tipbar'
import SelectCoupon from '../selectCoupon'
import IsAuth from '../../../components/isAuth'
import Pay from '../../../pages/finance/pay/index'
import util from '../../../utils/utils'
import setUrl from '../../../components/setUrl'
const hostName=window.location.origin;
class DirectBuy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 200,  // 购买数量
            unitPrice: 50, // 单价
            chosenPay: '',
            vouchers: [],
            interestRates: [],
            top:'100%',
            choose:'',
            money:'',
            useCoupon:true,
            payTop:'100%',
            url:'',
            select:1,
            rate:false,
            init:true,
            pending:false,
            checkBox:false,
        }
        this.directInvestId = this.props.params.id
        this.borrowPwd = utils.getParams().borrowPwd
    }
    componentDidMount(){
        window['closeFn']=this.closeFn;
        this.props.getDirectInvestDetail(this.directInvestId)
        this.props.getAvailableCoupons(this.props.params.month)
        this.props.getUse(this.props.params.id);
        this.props.getUser();
        this.props.getEducationInfo();
        this.props.getEmptyContractsList()
    }
    componentWillReceiveProps(nextProps) {
        const{goBankData}=nextProps
        //生成订单后跳转
        if(goBankData&&goBankData.code==100){
            this.props.clearState()
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
            // this.props.clearData("GO_BANK_PAGE")
        }else if(goBankData&&goBankData.code!=100){
            // this.props.clearData("GO_BANK_PAGE")
            this.props.clearState()
            this.refs.tipbar.open('订单生成失败!');
        }
        if (!utils.isPlainObject(this.props.detail)) {
            const quantity = this.props.detail.left_quantity ?
                this.props.detail.left_quantity < this.state.quantity ?
                    this.props.detail.left_quantity : this.state.quantity : 1
            const  unitPrice=this.props.detail.each_money
            this.setState({quantity,unitPrice})
        }
        if (!this.hasSetCoupon && nextProps.couponsData && nextProps.couponsData.data) {
            this.hasSetCoupon = true;
            this.setState({
                vouchers: nextProps.couponsData.data.filter(coupon => coupon.type === '抵用券'),
                interestRates: nextProps.couponsData.data.filter(coupon => coupon.type === '加息券'),
            })
        }
        if (nextProps.buyPending){
            this.setState({
                pending:true
            })
        }
    }
    componentWillUnmount(){
        this.props.clearData()
    }
    changePending=()=>{
        this.setState({
            pending:false
        })
    }
    //是否阅读合同
    ifScan=(e)=>{
        if(this.state.checkBox){
            this.setState({
                checkBox:false
            })
        }else{
            this.setState({
                checkBox:true
            })
        }
    }
    directInvestBuy = (password, money) => {
        let coupon = this.props.useCoupon ? this.getCoupon() : null
        const {useCoupon}=this.state;
        if (!useCoupon&&coupon){
            coupon.id=''
        }
        this.props.balancePay(this.directInvestId, this.state.quantity, password,this.props.location.state, coupon && coupon.id || '')
    }
    // 能否支付
    canPay() {
        if(!this.state.checkBox){
            return false;
        }
        const detail = this.props.detail
        if (utils.isPlainObject(detail)) return false
        return this.state.quantity && detail.left_quantity && this.state.quantity <= detail.left_quantity ? true : false
    }
    // 确认支付
    onValid = () => {
        const {select}=this.state;
        if (select==1){
            this.refs.isAuth.isSecurityCard(this.successsFn,this.props.push,'/user/setting/tradePasswordSet')
        }else {
            this.refs.isAuth.isbindSecurityCard(this.successsFn,this.props.push,'/user/setting/securityCard')
        }
    }
    successsFn=()=>{
        let coupon = this.state.useCoupon&&this.getCoupon()||null;
        const {use}=this.props;
        const {select}=this.state
        if (use){
            if (use.code==100){
                if (use.data.is&&coupon){
                    coupon.id=''
                }
            }
        }
        if(select==1){
            this.props.goBankPage({
                data:{
                    productId: this.directInvestId,
                    num: this.state.quantity,
                    couponId: coupon && coupon.id || '',
                    borrowPwd: this.props.location.state,
                    type:3,
                    device:'WAP',
                    access_sys:'platform'
                },
                way:1,
                type:411,
                returnUrl:""
            })
        }else{
            // 调用支付流程
            this.refs.payProcess.open({
                id: this.directInvestId,
                num: this.state.quantity,
                couponId: coupon && coupon.id || '',
                borrowPwd: this.borrowPwd
            })
        }
    }
    changeQuantity = (value) => {
        if (value<=0){
            this.refs.tipbar.open('出借份数必须为正整数!');
        }else if (value>parseFloat(this.props.detail.left_quantity)){
            this.refs.tipbar.open('剩余份数不足!');
        }
        this.setState({quantity: Number(value)})
    }
    voucherIsAvailable = (voucher) => {
        const payTotal = Number(this.state.quantity * this.state.unitPrice)
        return voucher.invest_money <= payTotal
    }
    voucherIsNotAvailable = (voucher) => {
        return ! this.voucherIsAvailable(voucher)
    }
    // 获取用户将要使用的优惠券
    getCoupon = () => {
        // 1. 用户选择的、可用的优惠券
        if (this.props.selectedCoupon && (this.props.selectedCoupon.type === '抵用券' && this.voucherIsAvailable(this.props.selectedCoupon) || this.props.selectedCoupon.type === '加息券')) {
            return  this.props.selectedCoupon
        } else {
            // 2. 可用的、最优惠的优惠券
            return this.getMaxCoupon()
        }
    }
    // 当前可用的、最优惠的优惠券
    getMaxCoupon() {
        // const quantity =
        const payTotal = Number(this.state.quantity * this.state.unitPrice)
        let maxVoucher, maxInterestRate, maxCoupon
        // 选出面值最大的抵用券
        if (this.state.vouchers.length > 0) {
            const availableVouchers = this.state.vouchers.filter(this.voucherIsAvailable)
            maxVoucher = availableVouchers[0]
            availableVouchers.forEach(voucher => {
                if (Number(voucher.amount) > Number(maxVoucher.amount)) {
                    maxVoucher = voucher
                }
            })
        }
        // 选出面值最大的加息券
        if (this.state.interestRates.length > 0) {
            maxInterestRate = this.state.interestRates[0]
            this.state.interestRates.forEach(ir => {
                if (Number(ir.rate) > Number(maxInterestRate.rate)) {
                    maxInterestRate = ir
                }
            })
        }
        if (maxVoucher && maxInterestRate) { // 两种都有
            const maxInterestRateAmount = payTotal * Number(maxInterestRate.rate) / 100/12*this.props.params.month
            if (maxInterestRateAmount > Number(maxVoucher.amount)) { // 抵用券优惠更多
                maxCoupon = maxInterestRate
            } else { // 加息券优惠更多
                maxCoupon = maxVoucher
            }
        } else if (maxVoucher) { // 没有加息券
            maxCoupon = maxVoucher
        } else if (maxInterestRate) { // 没有抵用券
            maxCoupon = maxInterestRate
        }
        return maxCoupon
    }

    getPayTotal = (type) => {
        const coupon = this.getCoupon();
        const {useCoupon}=this.state;
        if (type){
            return this.state.quantity * this.state.unitPrice
        }
        if (!useCoupon){
            return this.state.quantity * this.state.unitPrice
        }
        if (this.props.useCoupon && coupon && coupon.type === '抵用券') {
            return this.state.quantity * this.state.unitPrice - Number(coupon.amount)
        } else {
            return this.state.quantity * this.state.unitPrice
        }
    }
    // 计算参考回报
    expectIncome = () => {
        let detail = this.props.detail;
        const {rate}=this.state;
        if (utils.isPlainObject(detail)) return ''
        let totalRate = detail.rate / 100;
        const jxRate=this.getMaxCoupon();
        if (rate!=0){
            const rateN=parseFloat(rate)/100;
            totalRate=totalRate+rateN;
        }
        if (jxRate){
            if (jxRate.type=="加息券"&&typeof(rate)=='boolean'){
                const rateN=parseFloat(jxRate.rate)/100;
                totalRate=totalRate+rateN;
            }
        }
        if (this.props.useCoupon) {
            const coupon = this.props.selectedCoupon || this.getMaxCoupon()
            if (coupon && coupon.type==='加息券' && +coupon.rate>=0 && +detail.directRate>=0){
                totalRate += +coupon.rate / 100
            }
        }
        return utils.padMoney(this.state.unitPrice*this.state.quantity*detail.term*totalRate/12)
    }
    overPay=(val,data)=>{
        const{
                id,
                num,
                couponId,
            }=data,
            payPwd='',
            type=2;
        const borrowPwd=this.props.location.state;
        const url=util.combineUrl(`${hostName}/mobile_api/directInvest/buy/${id}`,{num,payPwd,type,couponId,borrowPwd,access_sys:'platform'})
        this.setState({
            url,
            payTop:'0px'
        })
    }
    selectPayHandle = (payWay) => {
        this.setState({chosenPay: payWay})
    }
    renderDiscountBar = () => {
        // 还未加载完抵用券和加息券，渲染占位View
        let {use}=this.props;
        if (use){
            if (use.code==100&&use.data.is){
                return (<div
                    className={styles.coupon}
                >
                    <span>{use.data.name}</span>
                </div>)
            }
        }
        if (this.state.couponsFetching) {
            return (
                <div className={styles.discountBarTouch}>
                    <p className={styles.discountBarName}>正在加载优惠券</p>
                </div>
            )
        }
        const coupon = this.getCoupon()
        if (! coupon || this.state.quantity < 1) {
            const {use}=this.props;
            if (use){
                if (use.code==100&&use.data.is){
                    return (<div
                        className={styles.coupon}
                    >
                        <span>{use.data.name}</span>
                    </div>)
                }
            }
            let vouchers = this.state.vouchers.sort((a, b) => { return Number(b.amount) - Number(a.amount)})
            const availableVouchers = vouchers.filter(this.voucherIsAvailable)
            const unavailableVouchers = vouchers.filter(this.voucherIsNotAvailable).map(voucher => {
                return Object.assign({}, voucher, { status: 'unavailable' })
            })
            vouchers = availableVouchers.concat(unavailableVouchers)
            const interestRates = this.state.interestRates.sort((a, b) => {
                return Number(b.rate) - Number(a.rate)
            })
            return (
                <div
                    className={styles.discountBarTouch}
                    onClick={()=>{this.openDy()}}>
                    <p className={styles.discountBarName}>暂无优惠可用</p>
                </div>
            )
        } else {
            const {use}=this.props;
            const couponText = coupon.type === '抵用券' ? `抵用券抵扣${coupon.amount || ''}元` : `加息券加息${coupon.rate || ''}%`
            let vouchers = this.state.vouchers.sort((a, b) => { return Number(b.amount) - Number(a.amount)})
            const availableVouchers = vouchers.filter(this.voucherIsAvailable)
            const unavailableVouchers = vouchers.filter(this.voucherIsNotAvailable).map(voucher => {
                return Object.assign({}, voucher, { status: 'unavailable' })
            })
            if (use){
                if (use.code==100&&use.data.is){
                    return (<div
                        className={styles.coupon}
                    >
                        <span>{use.data.name}</span>
                    </div>)
                }
            }
            const card = this.state.useCoupon&&this.props.useCoupon ? (
                <div>
                    <div>{ couponText }</div>
                </div>
            ) : null
            return (
                <div
                    className={styles.coupon}
                    onClick={() => {this.openDy()}}>
                    <span>使用优惠</span>
                    {card}
                </div>
            )
        }
    }
    useDy=(amount)=>{
        this.setState({
            choose:amount
        })
    }
    clickFn=()=>{
        this.setState({
            top:'100%'
        })
    }
    openDy=()=>{
        let money=this.getPayTotal(true);
        this.setState({top:'0px',money})
    }
    nullCoupon=()=>{
        this.setState({
            top:'100%',
            useCoupon:false,
            rate:0,
        })
    }
    useCoupon=(rate)=>{
        this.setState({
            top:'100%',
            useCoupon:true
        })
        if (rate){
            this.setState({
                rate
            })
        }else {
            this.setState({
                rate:0
            })
        }
    }
    getChoose=(select)=>{
        this.setState({
            select
        })
    }
    pop=()=>{
        const time=this.refs.pay.getTime();
        if (time!=1){
            this.props.push(setUrl.getUrl())
        }else {
            this.props.goBack()
        }
    }
    closeFn=()=>{
        this.setState({payTop:'100%',url:''})
    }
    render(){
        const detail = this.props.detail;
        const {
            EducationData,
            contractData
        } = this.props;
        let primeContent;
        if(EducationData&&EducationData.code == 100){
            if(EducationData.data.has_num != 0){
                primeContent = "您的风险承受类型："+EducationData.data.name+"，建议出借"+EducationData.data.max_month+"月以内项目";
            }
        }
        return(
            <div className={styles.root}>
                <div className={styles.bg}>
                    <NavBar title='确认支付' onLeft={this.pop}></NavBar>
                    <div style={{height:44}}></div>
                    <div className={styles.scroll}>
                        <div className={styles.infomation}>
                            <div>
                                <p>单价<span>（元/份）</span></p>
                                <p>{this.state.unitPrice}</p>
                            </div>
                            <div>
                                <p>份数<span>（剩余{detail.left_quantity || ''}）</span></p>
                                <BuyInput
                                    containerStyle={{marginTop: 12}}
                                    value={this.state.quantity}
                                    onChange={this.changeQuantity} />
                            </div>
                        </div>
                        <div className={styles.expectIncome}>
                            <div className={styles.wrap}>
                                <p className={styles.name}>参考回报（元）</p>
                                <p className={styles.profit}>{this.expectIncome(this.state.quantity)}</p>
                            </div>
                        </div>

                        <div className={styles.discountBar}>
                            {this.renderDiscountBar()}
                        </div>

                        <div className={styles.payMoney}>
                            <p>还需支付（元）</p>
                            <p>{utils.padMoney(this.getPayTotal())}</p>
                        </div>

                        <PayProcess
                            ref='payProcess'
                            productId={this.props.params.id}
                            num={this.state.quantity}
                            type='directInvest'
                            go={this.props.push}
                            getChoose={this.getChoose}
                            overPay={this.overPay}
                            user={this.props.user}
                            balance={this.props.user.balance_platform || 0}
                            onRequestBalancePay={this.directInvestBuy}
                            inputValue={Number(utils.padMoney(this.getPayTotal()))}
                            balancePayPending={this.state.pending}
                            balancePayData={this.props.buyData}
                            changePending={this.changePending}
                            clear={this.props.clear}/>
                        <div className={styles.payBtn}>
                            <p ><input type="checkbox" onClick={this.ifScan} checked={this.state.checkBox}/>我已阅读并同意{contractData&&contractData.data.map((item,i)=>{
                                return <Link key={i} to={`/emptyTemplate/${item.hetong_type?item.hetong_type:0}?name=${encodeURIComponent(item.hetong_name)}`} className={styles.protocol}>《{item.hetong_name}》</Link>
                            })}</p>
                        </div>
                        <Button
                            containerStyle={{margin: '40px 15px 20px'}}
                            text='确认支付'
                            disable={this.canPay() > 0 ? false : true}
                            onClick={this.onValid}
                            status={this.canPay() > 0 ? '' : 'disable'}
                        />
                        <p className={styles.primeTxt}>{primeContent}</p>
                    </div>
                    <Tipbar ref="tipbar"/>
                    <IsAuth ref="isAuth"/>
                </div>
                <div className={styles.zg} style={{top:this.state.top}}>
                    <SelectCoupon click={this.clickFn} useFn={this.useDy} money={this.state.money}
                                  nullCoupon={this.nullCoupon}
                                  useCoupon={this.useCoupon}/>
                </div>
                <div className={styles.zg} style={{top:this.state.payTop}}>
                    <Pay url={this.state.url} closeFn={this.closeFn} ref="pay"/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data'])
    const detail = state.infodata.getIn(['DIRECTINVEST_DETAIL', 'data'])
    return {
        user: userData && userData.data || {},
        detail: detail && detail.data || {},
        couponsFetching: state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'pending']),
        couponsData: state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'data']),
        buyPending: state.infodata.getIn([actionTypes.DIRECTINVEST_BUY, 'pending']),
        buyData: state.infodata.getIn([actionTypes.DIRECTINVEST_BUY, 'data']),
        selectedCoupon: state.useCoupons.getIn(['coupons', 'selectedCoupon']),
        useCoupon: state.useCoupons.getIn(['coupons', 'useCoupon']),
        use:state.infodata.getIn(['DIRECT_INVEST_COUPON','data']),
        EducationData:state.infodata.getIn(['GET_EDUCATION_INFO', 'data']),
        goBankData:state.infodata.getIn(['GO_BANK_PAGE','data']),
        contractData:  state.infodata.getIn(['GET_EMPTY_CONTRACTS_LIST',"data"])
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>({
    getEmptyContractsList(){
        dispatch({
            type:'GET_EMPTY_CONTRACTS_LIST',
            params:[{product_type:'A'}]
        })
    },
    getDirectInvestDetail(id) {
        dispatch({
            type: actionTypes.DIRECTINVEST_DETAIL,
            params: [id,'platform']
        })
    },
    getUser(){
        dispatch({type:actionTypes.USER_INFO})
    },
    getAvailableCoupons(month) {
        dispatch({
            type: actionTypes.AVAILABLE_COUPONS,
            params: ['直投',month,'platform']
        })
    },
    goBankPage(data){
        dispatch({
            type:'GO_BANK_PAGE',
            params:[data]
        })
    },
    getUse(id){
        dispatch({
            type: actionTypes.DIRECT_INVEST_COUPON,
            params: [id,'platform']
        })
    },
    push(path){
        dispatch(push(path))
    },
    goBack() {
        dispatch(goBack())
    },
    balancePay(id, num, payPwd, borrowPwd, couponId) {
        dispatch({
            type: actionTypes.DIRECTINVEST_BUY,
            params: [id, {
                num,
                payPwd,
                borrowPwd,
                type: 3,
                couponId,
                access_sys:'platform'
            }]
        })
    },
    setUseCoupons(selectedCoupon) {
        dispatch({
            type: actionTypes.SET_USE_COUPONS,
            selectedCoupon
        })
    },
    clear(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'DIRECTINVEST_BUY'
        })
    },
    clearState(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'GO_BANK_PAGE'
        })
    },
    clearData(){
        dispatch({
            type:'CLEAR_CONPONS'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'AVAILABLE_COUPONS'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'DIRECTINVEST_DETAIL'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:"GO_BANK_PAGE"
        })
    },
    getEducationInfo(){
        dispatch({
            type:'GET_EDUCATION_INFO'
        })
    },
})
export default (connect(mapStateToProps, mapDispatchToProps)(wrap(DirectBuy)))