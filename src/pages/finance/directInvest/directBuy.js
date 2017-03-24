import React from 'react'
import NavBar from '../../../components/NavBar'
import styles from './directBuy.less'
import * as actionTypes from '../../../actions/actionTypes'
import {connect} from 'react-redux'
import wrap from '../../../utils/pageWrapper'
import {goBack, push} from 'react-router-redux'
import utils from '../../../utils/utils.js'
import BuyInput from '../../../components/customInput'
import Button from '../../../components/BaseButton'
import PayProcess from '../payProcess.js'
import Tipbar from '../../../components/Tipbar'
import SelectCoupon from '../selectCoupon'
import IsAuth from '../../../components/isAuth'
import Pay from '../../../pages/finance/pay/index'
import util from '../../../utils/utils'
const hostName=location.hostname;
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
        url:''
    }

    this.directInvestId = this.props.params.id
    this.borrowPwd = utils.getParams().borrowPwd
  }

  componentDidMount(){
    this.props.getDirectInvestDetail(this.directInvestId)
    this.props.getAvailableCoupons(this.props.params.month)
  }

  componentWillReceiveProps(nextProps) {

    if (!utils.isPlainObject(this.props.detail)) {
      const quantity = this.props.detail.left_quantity ?
          this.props.detail.left_quantity < this.state.quantity ?
          this.props.detail.left_quantity : this.state.quantity : 1
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

  directInvestBuy = (password, money) => {
    let coupon = this.props.useCoupon ? this.getCoupon() : null
    this.props.balancePay(this.directInvestId, this.state.quantity, password, this.borrowPwd, coupon && coupon.id || '')
  }

  // 能否支付
  canPay() {
    const detail = this.props.detail
    if (utils.isPlainObject(detail)) return false
    return this.state.quantity && detail.left_quantity && this.state.quantity <= detail.left_quantity ? true : false
  }

  // 确认支付
  onValid = () => {
      this.refs.isAuth.isbindSecurityCard(this.successsFn,this.props.push,'/user/setting/securityCard')
  }
    successsFn=()=>{
        let coupon = this.state.useCoupon&&this.getCoupon()||null
        // 调用支付流程
        this.refs.payProcess.open({
            id: this.directInvestId,
            num: this.state.quantity,
            couponId: coupon && coupon.id || '',
            borrowPwd: this.borrowPwd
        })
    }
  changeQuantity = (value) => {
    if (value<=0){
        this.refs.tipbar.open('购买份数必须为正整数!');
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
 
  getPayTotal = (type) => {
    const coupon = this.getCoupon();
      if (type){
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
    const detail = this.props.detail
    if (utils.isPlainObject(detail)) return ''
    let totalRate = detail.rate / 100
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
                borrowPwd
            }=data,
            payPwd='',
            type=2;
        const url=util.combineUrl(`https://${hostName}/mobile_api/directInvest/buy/${id}`,{num,payPwd,type,couponId,borrowPwd})
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
    if (this.state.couponsFetching) {
      return (
        <div className={styles.discountBarTouch}>
          <p className={styles.discountBarName}>正在加载优惠券</p>
        </div>
      )
    }

    const coupon = this.getCoupon()

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

      return (
        <div 
          className={styles.discountBarTouch}
          onClick={()=>{this.openDy()}}>
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
            useCoupon:false
        })
    }
    useCoupon=()=>{
        this.setState({
            top:'100%',
            useCoupon:true
        })
    }
  render(){
    const detail = this.props.detail

    return(
      <div className={styles.root}>
        <div className={styles.bg}>
        <NavBar title='购买支付' onLeft={()=>this.props.goBack()}></NavBar>
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
              <p className={styles.name}>预期收益（元）</p>
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
            type='directInvest'
            go={this.props.push}
            overPay={this.overPay}
            user={this.props.user}
            balance={this.props.user.balance || 0}
            onRequestBalancePay={this.directInvestBuy}
            inputValue={Number(utils.padMoney(this.getPayTotal()))}
            balancePayPending={this.props.buyPending}
            balancePayData={this.props.buyData} />

          <div className={styles.payBtn}>
            <p onClick={()=>this.props.push('/directContract')}>《借贷及担保服务协议》</p>
          </div>
          <Button 
            containerStyle={{margin: '40px 15px 20px'}}
            text='确认支付' 
            disable={this.canPay() > 0 ? false : true}
            onClick={this.onValid}
            status={this.canPay() > 0 ? '' : 'disable'}
          />
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
          <Pay url={this.state.url} closeFn={()=>{this.setState({payTop:'100%'})}}/>
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
      useCoupon: state.useCoupons.getIn(['coupons', 'useCoupon'])
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>({
  getDirectInvestDetail(id) {
    dispatch({
      type: actionTypes.DIRECTINVEST_DETAIL,
      params: [id]
    })
  },
  getAvailableCoupons(month) {
    dispatch({
      type: actionTypes.AVAILABLE_COUPONS,
      params: ['直投',month]
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

export default (connect(mapStateToProps, mapDispatchToProps)(wrap(DirectBuy)))

