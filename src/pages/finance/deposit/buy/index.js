import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import styles from './index.styl'
import NavBar from '../../../../components/NavBar'
import Button from '../../../../components/BaseButton'
import wrap from '../../../../utils/pageWrapper'
import BuyInput from '../../../../components/customInput'
import Tipbar from '../../../../components/Tipbar'
import {RATE} from '../../../../actions/actionTypes'
import PayProcess from '../../payProcess'
import * as actionTypes from '../../../../actions/actionTypes'
import utils from '../../../../utils/utils'
import {Link} from 'react-router'
import SelectCoupon from '../../selectCoupon'
import IsAuth from '../../../../components/isAuth/index'
import Pay from '../../../../pages/finance/pay/index'
import util from '../../../../utils/utils'
import setUrl from '../../../../components/setUrl'
const hostName=window.location.origin;
class DepositBuy extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      depositId: this.props.params.id,
      inputValue: 10000,
      quantity: 10,  // 购买数量
      unitPrice: 1000, // 单价
      vouchers: [],
      interestRates: [],
      pending:false,
      couponsFetching:true,
      top:'100%',
      choose:'',
        money:'',
        useCoupon:true,
        payTop:'100%',
        url:'',
       sy:'',
        select:1,
        type:0,
    }
  }
  componentWillMount(){
    const {
        params: {
            id,
            type
        },
    }=this.props;
    if (id==5){
      this.setState({
          unitPrice:50,
          quantity:200
      })
    }
    this.setState({
        type
    })
  }
  componentDidMount() {
      window['closeFn']=this.closeFn;
    this.props.getDepositDetail(this.state.depositId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rates && nextProps.rates.data && !this.getAvailableCouponsFlag) {
      this.getAvailableCouponsFlag = true
      // 获取可以使用的优惠券
       if (nextProps.params.id==5){
           this.props.getAvailableCoupons(nextProps.new_deposit.month)
       }else {
           this.props.getAvailableCoupons(nextProps.rates.data.deposit[this.state.depositId].month)
       }
    }

    if (this.props.quantityLeftFetching == true && 
        nextProps.quantityLeftFetching == false && 
        nextProps.quantityData && 
        nextProps.quantityData.code == 100) {
      // 获取到定存宝详情数据 并设置默认购买份数
      const result = nextProps.quantityData
      const quantity = result && result.data && result.data.quantity ?
              result.data.quantity < this.state.quantity ?
              result.data.quantity : this.state.quantity : 1
      this.setState({quantity})      
    }
    if (!this.hasSetCoupon && nextProps.couponsData && nextProps.couponsData.data) {
      this.hasSetCoupon = true;

      this.setState({
        vouchers: nextProps.couponsData.data.filter(coupon => coupon.type === '抵用券'),
        interestRates: nextProps.couponsData.data.filter(coupon => coupon.type === '加息券'),
      })
        this.setState({
            couponsFetching:false
        })
    }
       if (nextProps.depositBuyPending){
           this.setState({
               pending:true
           })
       }

  }
    componentWillUnmount(){
    this.props.clearDataInfo();
    }
  depositBuy = (password, money) => {
    let coupon = this.props.useCoupon ? this.getCoupon() : null;
    const {useCoupon}=this.state;
    if (!useCoupon&&coupon){
        coupon.id='';
    }
    this.props.balancePay(this.state.depositId, this.state.quantity, utils.md5(password), coupon && coupon.id || '')
  }

  // 修改购买份数
  changeQuantity = (value) => {
    const {
      params:{id}
    }=this.props;
    if (value<=0){
        this.refs.tipbar.open('购买份数必须为正整数!');
    }else if (value>parseFloat(this.props.quantityData.data.quantity)){
        this.refs.tipbar.open('剩余份数不足!');
    }
    if (value>200&&id==5){
        this.refs.tipbar.open('新手标购买金额不能超过一万！');
        this.setState({quantity: Number(200)})
    }else {
        this.setState({quantity: Number(value)})
    }
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
      maxInterestRate = this.state.interestRates[0];
      this.state.interestRates.forEach(ir => {
        if (Number(ir.rate) > Number(maxInterestRate.rate)) {
          maxInterestRate = ir
        }
      })
    }

    if (maxVoucher && maxInterestRate) { // 两种都有
      const maxInterestRateAmount = payTotal * Number(maxInterestRate.rate) / 100

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

  // 能否支付
  canPay() {
    const {
        quantity,
    }=this.state;
    const {quantityData}=this.props;
    return quantity &&
    quantity <= (quantityData && quantityData.data.quantity || 0) ? true : false
  }

  // 获取支付费用
  getPayTotal = (type) => {
    const coupon = this.getCoupon();
    const {useCoupon}=this.state;
      if (type){
          return this.state.quantity * this.state.unitPrice
      }else if (type=='null'){
          return this.state.quantity * this.state.unitPrice
      }
  if (useCoupon&& coupon && coupon.type === '抵用券'){
      return this.state.quantity * this.state.unitPrice - Number(coupon.amount)
  }else {
      return this.state.quantity * this.state.unitPrice
  }
    if (this.props.useCoupon && coupon && coupon.type === '抵用券') {
      return this.state.quantity * this.state.unitPrice - Number(coupon.amount)
    } else {
      return this.state.quantity * this.state.unitPrice
    }
  }  

  // 计算预期收益
  expectIncome = () => {
    const detail = this.getCurrentMonth();
    const {useCoupon}=this.state;
    if (!detail&&this.props.params.id!=5) return ''
    let totalRate = detail.rate / 100
    if (!useCoupon){
        return utils.padMoney(this.state.unitPrice*this.state.quantity*detail.month*totalRate/12)
    }
    if (this.props.useCoupon) {
      const coupon = this.props.selectedCoupon || this.getMaxCoupon()
      if (coupon && coupon.type==='加息券' && +coupon.rate>=0 && +detail.rate>=0){
        totalRate += +coupon.rate / 100
      }
    }
    if (this.props.params.id==5){
        if (this.props.new_deposit.hasOwnProperty('month')){
            return utils.padMoney(this.state.unitPrice*this.state.quantity*this.props.new_deposit.month*this.props.new_deposit.rate/100/12)
        }
    }else {
        return utils.padMoney(this.state.unitPrice*this.state.quantity*detail.month*totalRate/12)
    }
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
       let coupon = this.state.useCoupon&&this.getCoupon()||null
       const curMonth = this.getCurrentMonth()
       if (this.props.params.id==5&&coupon){
           coupon.id=''
       }
       // 调用支付流程
       this.refs.payProcess.open({
           productId: this.state.depositId,
           quantity: this.state.quantity,
           couponId: coupon && coupon.id || '',
           month: curMonth && curMonth.month || ''
       })
   }
  renderDiscountBar = () => {
    // 还未加载完抵用券和加息券，渲染占位View
    if (this.state.couponsFetching) {
      return (
        <div className={styles.discountBarTouch}>
          <p className={styles.discountBarName}>正在加载优惠券</p>
        </div>
      )
    }
      if(this.props.params.id==5){
          return (
              <div
                  className={styles.coupon}>
                  <span>新手标不能使用优惠券</span>
              </div>
          )
      }
      let coupon = this.getCoupon()
    if (! coupon || this.state.quantity < 1) {
      let vouchers = this.state.vouchers.sort((a, b) => { return Number(b.amount) - Number(a.amount)})

      return (
        <div 
          className={styles.discountBarTouch}
          onClick={()=>{this.openDy()}}>
          <p className={styles.discountBarName}>暂无优惠可用</p>
        </div>
      )
    } else {
      let couponText;
      if (this.state.choose!=''){
           coupon = this.getCoupon();
          couponText = coupon.type === '抵用券' ? `抵用券抵扣${coupon.amount || ''}元` : `加息券加息${coupon.rate || ''}%`
      }else {
           couponText = coupon.type === '抵用券' ? `抵用券抵扣${coupon.amount || ''}元` : `加息券加息${coupon.rate || ''}%`
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
          const card = this.state.useCoupon&&this.props.useCoupon ? (
              <div>
                  <div>{ couponText }</div>
              </div>
          ) : null
          return (
              <div
                  className={styles.coupon}
                  onClick={()=>{this.openDy()}}>
                  <span>使用优惠</span>
                  {card}
              </div>
          )
      }
  }
  openDy=()=>{
      let money=this.getPayTotal(true);
      this.setState({top:'0px',money})
  }
    changePending=()=>{
    this.setState({
      pending:false
    })
    }
  getCurrentMonth = () => {
    const { deposit } = this.props
    const depositId = this.state.depositId
      return deposit[depositId];
  }
  clickFn=()=>{
    this.setState({
      top:'100%'
    })
  }
  useDy=(amount)=>{
    this.setState({
        choose:amount
    })
  }
    nullCoupon=()=>{
        this.setState({
            top:'100%',
            useCoupon:false,
        })
    }
    useCoupon=()=>{
        this.setState({
            top:'100%',
            useCoupon:true
        })
    }
    overPay=(val,data)=>{
        const{
            productId,
            quantity,
            couponId
        }=data,
        password='',
        type=2;
        const url=util.combineUrl(`${hostName}/mobile_api/deposit/buy`,{productId,quantity,password,type,couponId})
        this.setState({
            url,
            payTop:'0px'
        })
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
            this.props.goBack();
        }
    }
    closeFn=()=>{
        if (this.props.params.id==5){
            let user=JSON.parse(sessionStorage.getItem('bao-user'));
            user.isInvest=1;
            sessionStorage.setItem('bao-user',JSON.stringify(user));
        }
        this.setState({payTop:'100%',url:''})
    }
  render() {
    const {
      params: { id },
      deposit,
      new_deposit
    } = this.props;
    const {type}=this.state;
      let depositData = {}
      let String='';
    if (id!=5){
        if (deposit && deposit.length) {
            depositData = this.getCurrentMonth();
            String=depositData.month&&depositData.month+'个月'||'个月'
        }
    }else {
        if (new_deposit.hasOwnProperty('month')){
            depositData=new_deposit;
            String='新手标';
        }
    }
    return (
      <div className={styles.root}>
        <div className={styles.bg}>
        <NavBar onLeft={()=>{this.pop()}} style={{position:'absolute',left:'0px',top:'0px'}}>购买支付</NavBar>
        <p className={styles.title}>购买产品：定存宝{type=='A'&&'A'||'B'}计划-{String} 年化利率（{depositData.rate || ''}%）</p>
        <div className={styles.status}>
          <div>
            <p>单价<span>（元 / 份）</span></p>
            <p>{this.state.unitPrice}.00</p>
          </div>
          <div>
            <p>份数<span>（剩余{
                this.props.quantityData &&
                this.props.quantityData.code == 100 &&
                this.props.quantityData.data.quantity || '' }份）</span></p>
            
            <div className={styles.form}>
              <div className={styles.inputWrapper}>
                <BuyInput value={this.state.quantity} onChange={this.changeQuantity} id={this.props.params.id}/>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.expectIncome}>
          <div className={styles.wrap}>
            <p className={styles.name}>预期收益（元）</p>
            <p className={styles.profit}>{this.expectIncome()}</p>
          </div>
        </div>

        <div className={styles.discountBar}>
          {this.renderDiscountBar()}
        </div>
        <div className={styles.amount}>
          <span>还需支付（元）</span>
          <span>{utils.padMoney(this.getPayTotal())}</span>
        </div>
        <PayProcess
          ref='payProcess'
          type='deposit'
          go={this.props.push}
          getChoose={this.getChoose}
          overPay={this.overPay}
          user={this.props.user}
          balance={+this.props.user.balance}
          onRequestBalancePay={this.depositBuy}
          inputValue={Number(utils.padMoney(this.getPayTotal()))}
          balancePayPending={this.state.pending}
          balancePayData={this.props.depositBuyData}
          changePending={this.changePending}
          clear={this.props.clearData}
           money={utils.padMoney(this.getPayTotal())}/>
        <p><Link to="/agreement" className={styles.protocol}>《投资咨询及管理服务协议》及相关融资文件</Link></p>
        <Button
          containerStyle={{margin: '40px 15px 0'}}
          text='确认支付'
          disable={this.canPay() > 0 ? false : true}
          onClick={this.onValid}
          status={this.canPay() > 0 ? '' : 'disable'}/>
        <Tipbar ref='tipbar' />
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

const mapStateToProps = (state, ownProps) => {
  const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data'])
  const user = userData && userData.data ? userData.data : {}  
  const quantityLeftFetching = state.infodata.getIn([actionTypes.DEPOSIT_DETAIL, 'pending'])
  const quantityData = state.infodata.getIn([actionTypes.DEPOSIT_DETAIL, 'data'])
  return {
    deposit: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.deposit || [],
    user,
    quantityLeftFetching,
    quantityData,
    couponsFetching: state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'pending']),
    couponsData: state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'data']),
    rates: state.infodata.getIn([RATE, 'data']),
    depositBuyPending: state.infodata.getIn([actionTypes.DEPOSIT_BUY, 'pending']),
    depositBuyData: state.infodata.getIn([actionTypes.DEPOSIT_BUY, 'data']),
    selectedCoupon: state.useCoupons.getIn(['coupons', 'selectedCoupon']),
    useCoupon: state.useCoupons.getIn(['coupons', 'useCoupon']),
    new_deposit:state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.new_deposit||{},
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  },

  getDepositDetail(id) {
    dispatch({
      type: actionTypes.DEPOSIT_DETAIL,
      params: [id]
    })
  },

  getAvailableCoupons(month) {
    dispatch({
      type: actionTypes.AVAILABLE_COUPONS,
      params: ['定存', month]
    })
  },

  balancePay(productId, quantity, password, couponId) {
    dispatch({
      type: actionTypes.DEPOSIT_BUY,
      params: [{
        productId,
        quantity,
        password,
        type: 3,
        couponId
      }]
    })
  },

  setUseCoupons(selectedCoupon) {
    dispatch({
      type: actionTypes.SET_USE_COUPONS,
      selectedCoupon
    })
  },
  clearData(){
      dispatch({
          type:'CLEAR_INFO_DATA',
           key:'DEPOSIT_BUY'
      })
  },
  clearDataInfo(){
    dispatch({
      type:'CLEAR_INFO_DATA',
      key:'AVAILABLE_COUPONS'
    })
      dispatch({
          type:'CLEAR_CONPONS',
      })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(DepositBuy))
