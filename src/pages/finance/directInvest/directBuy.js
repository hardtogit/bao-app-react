import React from 'react'
import NavBar from '../../../components/NavBar'
import styles from './directBuy.less'
import * as actionTypes from '../../../actions/actionTypes'
import {Link} from 'react-router'
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
        checkBox:true,
       useCoupon:true,
        payTop:'100%',
        url:'',
        select:1,
        rate:false,
        init:true,
        pending:false,
        time:0
    }

    this.directInvestId = this.props.params.id
    this.borrowPwd = utils.getParams().borrowPwd
  }

  componentDidMount(){
      this.refs.choice.checked =true
      window['closeFn']=this.closeFn;
    this.props.getDirectInvestDetail(this.directInvestId)
    this.props.getAvailableCoupons(this.props.params.month)
    this.props.getUse(this.props.params.id);
    this.props.getMyBankCards()
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
      const {buyData,verifyData,carBuyData,cardVerifyData}=nextProps;
      const $this=this;
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
      if (carBuyData&&carBuyData.status==1){
          if(this.state.time<=3){
              this.setState({
                  time:this.state.time+1
              });
              if(cardVerifyData&&cardVerifyData.code=='0001'){

              }else{
                  if(this.state.time>=3){
                      if(cardVerifyData&&cardVerifyData.code!='0001'){
                          this.setState({
                              time:0
                          })
                      }else{
                      }

                  }else{
                      setTimeout(function(){
                          $this.props.cardPayVerify({id:carBuyData.msgId})
                      },2000)

                  }
              }
          }
      }
      if (buyData&&buyData.status==1){
          if(this.state.time<=3){
              this.setState({
                  time:this.state.time+1
              });
              if(verifyData&&verifyData.code=='0001'){

              }else{
                  if(this.state.time>=3){
                      if(verifyData&&verifyData.code!='0001'){
                          this.setState({
                              time:0
                          })
                          this.changePending()
                      }else{
                          this.changePending()
                      }
                  }else{
                      setTimeout(function(){
                          $this.props.payVerify({id:buyData.msgId})
                      },2000)

                  }
              }
          }
      }else if(buyData&&buyData.status!=1){

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
      this.setState({
          pendding:true
      })

    this.props.balancePay(this.directInvestId, this.state.quantity, password,sessionStorage.getItem('passwordFactor'), coupon && coupon.id || '',"WAP",sessionStorage.getItem('mapKey'))
  }
    directCardBuy=(password,money,bankCard)=>{
        let coupon = this.props.useCoupon ? this.getCoupon() : null
        const {useCoupon}=this.state;
        if (!useCoupon&&coupon){
            coupon.id=''
        }
        this.setState({
            pending:true
        })
        this.props.cardPay(bankCard,Number(utils.padMoney(this.getPayTotal())),this.directInvestId, this.state.quantity, password,sessionStorage.getItem('passwordFactor'), coupon && coupon.id || '',"WAP",sessionStorage.getItem('mapKey'))
    }

  // 能否支付
  canPay() {
    const detail = this.props.detail
    if (utils.isPlainObject(detail)) return false
      if(!this.state.checkBox){
          return false
      }
    return this.state.quantity && detail.left_quantity && this.state.quantity <= detail.left_quantity ? true : false
  }

  // 确认支付
  onValid = () => {
      const {select}=this.state;
      if (select==1){
          this.refs.isAuth.isSecurityCard(this.successsFn,this.props.push,'/user/setting/tradePasswordSet')
      }else {
          this.successsFn()
      }
  }
    successsFn=()=>{
        let coupon = this.state.useCoupon&&this.getCoupon()||null;
        const {use}=this.props;
        if (use){
            if (use.code==100){
                if (use.data.is&&coupon){
                    coupon.id=''
                }
            }
        }
        this.setState({
            time:0
        })
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

  // 计算预期收益
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
        const url=util.combineUrl(`${hostName}/mobile_api/directInvest/buy/${id}`,{num,payPwd,type,couponId,borrowPwd})
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
      //let banksList={}
      if(this.props.banks&&this.props.banks.data){
        let  banksList=this.props.banks.data
      }
    return(
      <div className={styles.root}>
        <div className={styles.bg}>
        <NavBar title='购买支付' onLeft={this.pop}></NavBar>
        <div style={{height:44}}></div>
        <p className={styles.title}>购买产品：直投 {detail.term}个月 年化利率（{detail.rate || ''}%）</p>
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
            getChoose={this.getChoose}
            overPay={this.overPay}
            user={this.props.user}
            banks={this.props.banks&&this.props.banks.data}
            time={this.state.time}
            balance={this.props.user.balance || 0}
            onRequestBalancePay={this.directInvestBuy}
            onRequestCardPay={this.directCardBuy}
            verifyData={this.props.verifyData}
            inputValue={Number(utils.padMoney(this.getPayTotal()))}
            balancePayPending={this.state.pending}
            balancePayData={this.props.buyData}
            cardPayData={this.props.carBuyData}
            cardVerifyData={this.props.cardVerifyData}
            changePending={this.changePending}
            clear={this.props.clear}/>

              <p className={styles.textContent}><input ref="choice"   onChange={this.ifScan} style={{marginRight:'6px'}} type="checkbox"/>我已阅读并同意宝点网
                  <Link to={`/directContract`} className={styles.protocol}>《借贷及担保服务协议》</Link>
              </p>
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
      buyPending: state.infodata.getIn([actionTypes.NEW_DIRECTINVEST_BUY, 'pending']),
      buyData: state.infodata.getIn([actionTypes.NEW_DIRECTINVEST_BUY, 'data']),
      carBuyData:state.infodata.getIn([actionTypes.NEW_CARD_BUY, 'data']),
      selectedCoupon: state.useCoupons.getIn(['coupons', 'selectedCoupon']),
      useCoupon: state.useCoupons.getIn(['coupons', 'useCoupon']),
      use:state.infodata.getIn(['DIRECT_INVEST_COUPON','data']),
      banks:state.infodata.getIn(['GET_MY_CARD_LIST','data']),
      verifyData:state.infodata.getIn(['PAY_VERIFY','data']),
      cardVerifyData:state.infodata.getIn(['CARD_PAY_VERIFY','data'])
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>({
  getDirectInvestDetail(id) {
    dispatch({
      type: actionTypes.DIRECTINVEST_DETAIL,
      params: [id]
    })
  },
  getUser(){
      dispatch({type:actionTypes.USER_INFO})
  },
  getAvailableCoupons(month) {
    dispatch({
      type: actionTypes.AVAILABLE_COUPONS,
      params: ['直投',month]
    })
  },
  getUse(id){
    dispatch({
        type: actionTypes.DIRECT_INVEST_COUPON,
        params: [id]
    })
  },
  push(path){
    dispatch(push(path))
  },
  goBack() {
    dispatch(goBack())
  },
  balancePay(productId, num, password, passwordFactor, couponId,device,mapKey) {
    dispatch({
      type: actionTypes.NEW_DIRECTINVEST_BUY,
      params: [{
        productId,
        num,
        password,
        passwordFactor,
        couponId,
          productType:'DIRECT',
          device,
          mapKey:mapKey
        }]
    })
  },
  cardPay(bankCard,transferAmount,productId, num, password, passwordFactor, couponId,device,mapKey){
     dispatch({
         type:actionTypes.NEW_CARD_BUY,
         params:[{
             bankCard,
             transferAmount,
             productId,
             num,
             password,
             passwordFactor,
             couponId,
             productType:'DIRECT',
             device,
             mapKey:mapKey
         }]
     })
    },
  payVerify(id){
      dispatch({
          type:'PAY_VERIFY',
          params:[id]
      })
  },
  cardPayVerify(id){
      dispatch({
          type:'CARD_PAY_VERIFY',
          params:[id]
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
            key:'NEW_CARD_BUY'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'NEW_DIRECTINVEST_BUY'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'PAY_VERIFY'
        });
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'CARD_PAY_VERIFY'
        });
    },
    clearData(){
         dispatch({
             type:'CLEAR_CONPONS'
         })
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'AVAILABLE_COUPONS'
        })
        //dispatch({
        //    type:'CLEAR_INFO_DATA',
        //    key:'GET_MY_CARD_LIST'
        //})
        //dispatch({
        //    type:'CLEAR_INFO_DATA',
        //    key:'DIRECTINVEST_DETAIL'
        //})
    },
    getMyBankCards(){
        dispatch({
            type:'GET_MY_CARD_LIST'
        })
    },
})

export default (connect(mapStateToProps, mapDispatchToProps)(wrap(DirectBuy)))

