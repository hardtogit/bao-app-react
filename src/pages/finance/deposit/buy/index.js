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
    }
  }
  componentWillMount(){
    const {
        params: {
            id,
        },
    }=this.props;
    if (id==5){
      this.setState({
          unitPrice:50,
          quantity:200
      })
    }
  }
  componentDidMount() {
    console.log(this.props)
    // this.focus()
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
      this.hasSetCoupon = true
      this.setState({
        vouchers: nextProps.couponsData.data.filter(coupon => coupon.type === '抵用券'),
        interestRates: nextProps.couponsData.data.filter(coupon => coupon.type === '加息券'),
      })
    }

  }

  depositBuy = (password, money) => {
    let coupon = this.props.useCoupon ? this.getCoupon() : null
    this.props.balancePay(this.state.depositId, this.state.quantity, utils.md5(password), coupon && coupon.id || '')
  }

  // 修改购买份数
  changeQuantity = (value) => {
    const {
      params:{id}
    }=this.props;
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
      maxInterestRate = this.state.interestRates[0]

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
    return this.state.quantity && 
      this.state.quantity <= (this.props.quantityData && this.props.quantityData.data.quantity || 0) ? true : false
  }

  // 获取支付费用
  getPayTotal = () => {
    const coupon = this.getCoupon()
    if (this.props.useCoupon && coupon && coupon.type === '抵用券') {
      return this.state.quantity * this.state.unitPrice - Number(coupon.amount)
    } else {
      return this.state.quantity * this.state.unitPrice
    }
  }  

  // 计算预期收益
  expectIncome = () => {
    const detail = this.getCurrentMonth();
    if (!detail&&this.props.params.id!=5) return ''

    let totalRate = detail.rate / 100
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
    let coupon = this.state.useCoupon ? this.getCoupon() : null
    const curMonth = this.getCurrentMonth()

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

    const coupon = this.getCoupon()
    const {params,rates,new_deposit}=this.props;
    if (! coupon || this.state.quantity < 1) {
      let vouchers = this.state.vouchers.sort((a, b) => { return Number(b.amount) - Number(a.amount)})

      const availableVouchers = vouchers.filter(this.voucherIsAvailable)

      const unavailableVouchers = vouchers.filter(this.voucherIsNotAvailable).map(voucher => {
        return Object.assign({}, voucher, { status: 'unavailable' })
      })

      vouchers = availableVouchers.concat(unavailableVouchers)

      const interestRates = this.state.interestRates.sort((a, b) => {
        return Number(b.rate) - Number(a.rate)
      })
      let String='';
      if (params.id==5){
         String=new_deposit.month;
      }else {
        String=this.props.rates.data.deposit[this.state.depositId].month;
      }
      return (
        <div 
          className={styles.discountBarTouch}
          onClick={()=>{this.props.setUseCoupons(coupon);
            this.props.push('/selectCoupon?product=定存&month=' + String) }}>
          <p className={styles.discountBarName}>暂无优惠可用</p>
        </div>
      )
    } else {
      const couponText = coupon.type === '抵用券' ? `抵用券抵扣${coupon.amount || ''}元` : `加息券加息${coupon.rate || ''}%`

      let vouchers = this.state.vouchers.sort((a, b) => { return Number(b.amount) - Number(a.amount)})

      const availableVouchers = vouchers.filter(this.voucherIsAvailable)

      const unavailableVouchers = vouchers.filter(this.voucherIsNotAvailable).map(voucher => {
        return Object.assign({}, voucher, { status: 'unavailable' })
      })

      vouchers = availableVouchers.concat(unavailableVouchers)

      const interestRates = this.state.interestRates.sort((a, b) => {
        return Number(b.rate) - Number(a.rate)
      })

      const card = this.props.useCoupon ? (
        <div>
          <div>{ couponText }</div>
        </div>
      ) : null

      return (
        <div 
          className={styles.coupon} 
          onClick={() => {this.props.setUseCoupons(this.props.useCoupon ? coupon : ''); this.props.push('/selectCoupon?product=定存&month=' + this.props.rates.data.deposit[this.state.depositId].month)}}>
          <span>使用优惠</span>
          {card}
        </div>
      )
    }
  }

  getCurrentMonth = () => {
    const { deposit } = this.props
    const depositId = this.state.depositId
    for (var i = 0 ; i < deposit.length; i++) {
      if (deposit[i].id == depositId) {
        return deposit[i]
      }
    }
    return ''
  }

  render() {
    const {
      params: { id },
      deposit,
      new_deposit
    } = this.props;
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
        <NavBar onLeft={()=>{this.props.goBack()}}>购买支付</NavBar>
        <p className={styles.title}>购买产品：定存宝-{String} 年化利率（{depositData.rate || ''}%）</p>
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
            <p className={styles.profit}>{this.expectIncome(this.state.quantity)}</p>
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
          user={this.props.user}
          balance={+this.props.user.balance}
          onRequestBalancePay={this.depositBuy}
          inputValue={Number(utils.padMoney(this.getPayTotal()))}
          balancePayPending={this.props.depositBuyPending}
          balancePayData={this.props.depositBuyData} />
        <p><Link to="/agreement" className={styles.protocol}>《投资咨询及管理服务协议》及相关融资文件</Link></p>
        <Button
          containerStyle={{margin: '40px 15px 0'}}
          text='确认支付'
          disable={this.canPay() > 0 ? false : true}
          onClick={this.onValid} />
        <Tipbar ref='tipbar' />
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
    new_deposit:state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.new_deposit||{}
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(DepositBuy))
