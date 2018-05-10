/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import styles from './index.styl'
import NavBar from '../../../../components/NavBar'
import Button from '../../../../components/BaseButton'
import BuyInput from '../../../../components/customInput'
import Tipbar from '../../../../components/Tipbar'
import {RATE} from '../../../../actions/actionTypes'
import PayProcess from '../../payProcessOld'
import * as actionTypes from '../../../../actions/actionTypes'
import utils from '../../../../utils/utils'
import {Link} from 'react-router'
import SelectCoupon from '../../selectCoupon'
import IsAuth from '../../../../components/isAuth/index'
import Pay from '../../../../pages/finance/pay/index'
import setUrl from '../../../../components/setUrl'
const hostName=window.location.origin;
class Index extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      productId:this.props.params.productId,
      inputValue: 10000,
      quantity: 200,  // 购买数量
      unitPrice: 1000, // 单价
      vouchers: [],
      interestRates: [],
      pending:false,
      couponsFetching:true,
      getAvailableCouponsFlag:false,
      top:'100%',
      checkBox:true,
      checkBoxTwo:true,
      choose:'',
        money:'',
        useCoupon:true,
        payTop:'100%',
        url:'',
       sy:'',
        select:1,
        type:0,
        time:0
    }
  }
  componentWillMount(){
      this.props.clean('GATHER_DETAIL')
    const {
        params: {
            productId
        },
    }=this.props;
  }
    componentWillUnmount(){
        this.props.clean('GO_BANK_PAGE')
    }
  componentDidMount() {
      this.refs.choice.checked =true
      this.refs.choiceTwo.checked =true
      window['closeFn']=this.closeFn;
      const {productId}=this.props.params;
      this.props.gatherData(productId)
      this.props.getMyBankCards()
      this.props.userInfo();
      this.props.getEducationInfo();
      this.props.getEmptyContractsList();
  }

  componentWillReceiveProps(nextProps) {
      let $this=this
    if (nextProps.quantityDataB&& nextProps.quantityDataB.code=='100' && !this.state.getAvailableCouponsFlag) {
        this.setState({
            getAvailableCouponsFlag:true,
            unitPrice:parseInt(nextProps.quantityDataB.data.price)
        })
      // 获取可以使用的优惠券
       if (nextProps.params.id==5){
           this.props.getAvailableCoupons(nextProps.quantityDataB.data.month)
       }else {
           this.props.getAvailableCoupons(nextProps.quantityDataB.data.month)
       }
    };
      if(nextProps.quantityDataB&& nextProps.quantityDataB.code=='100'){
          if(nextProps.quantityDataB.data.quantity<this.state.quantity){
              this.setState({
                  quantity:nextProps.quantityDataB.data.quantity
              })
          }
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
      const{goBankData}=nextProps;
      //订单生成成功后跳转
      if(goBankData&&goBankData.code==100){
          this.props.clean("GO_BANK_PAGE")
          this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
      }else if(goBankData&&goBankData.code!=100){
          this.refs.tipbar.open('订单生成失败!');
          this.props.clean("GO_BANK_PAGE")
      }
      }
  gatherBalanceBuy=()=>{
      let coupon = this.props.useCoupon ? this.getCoupon() : null;
      const {useCoupon,depositId,quantity}=this.state;
      const {params:{type,productId},balancePay}=this.props;
      if (!useCoupon&&coupon) {
          coupon.id = '';
      }
      this.props.clearData()
      this.props.goBankPage({
          type:452,
          way:1,
          data:{
            device:"WAP",
            productId:productId,
            type:2,
            num:quantity,
            couponId:coupon&&coupon.id||''
          },
          returnUrl:''
      })
  }
  // 修改购买份数
  changeQuantity = (value) => {
    const {
      params:{id,type},
      quantityDataB
    }=this.props;
    const data=quantityDataB
    if (value<=0){
        this.refs.tipbar.open('购买份数必须为正整数!');
    }else if (value>parseFloat(data.data.quantity)){
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
    //是否阅读合同
    ifScanTwo=(e)=>{
        if(this.state.checkBoxTwo){
            this.setState({
                checkBoxTwo:false
            })
        }else{
            this.setState({
                checkBoxTwo:true
            })
        }
    }
  // 能否支付
  canPay() {
        const {params:{type,id}}=this.props;
    const {
        quantity,
    }=this.state;
    const {quantityDataB}=this.props;
        if (quantityDataB){
            if (quantityDataB.data.buy_status!=0){
                return false
            }
        }
       if(!this.state.checkBox){
           return false
       }
      if(!this.state.checkBoxTwo){
          return false
      }
       if(Number(utils.padMoney(this.getPayTotal()))>this.props.user.balance){
           return false;
       }
        return quantity &&
        quantity <= (quantityDataB && quantityDataB.data.quantity|| 0) ? true : false
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
    let detail = this.props.quantityDataB.data
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
       // this.refs.payProcess.open({
       //     productId: this.state.depositId,
       //     quantity: this.state.quantity,
       //     couponId: coupon && coupon.id || '',
       //     month: curMonth && curMonth.month || ''
       // })
       this.gatherBalanceBuy();
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
    const { deposit,params:{type,id},newDeposit} = this.props;
      const depositId = this.state.depositId;
    if (type=='A'){
        if (id==5){
            return newDeposit
        }
        return deposit[depositId];
    }else {
        const depositbs=JSON.parse(sessionStorage.getItem("bao-depositbs")).list;
        return depositbs[id];
    }
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
      params: { id ,type:lx,productId},
      deposit,
      new_deposit,
      quantityDataB,
        contractData,
        EducationData
    } = this.props;
    let primeContent;
    if(EducationData&&EducationData.code == 100){
        if(EducationData.data.has_num != 0){
            primeContent = "您的风险承受类型："+EducationData.data.name+"，建议投资"+EducationData.data.max_month+"月以内项目";
        }
    }
    const {type}=this.state;
      let depositData = {}
      let String='';
      let quantity;
      let sy;
      if (quantityDataB){
           if (quantityDataB.code==100){
                quantity=quantityDataB.data.quantity
                  sy=this.expectIncome();
              }
          };
    return (
      <div className={styles.root}>
        <div className={styles.bg}>
        <NavBar onLeft={()=>{this.pop()}} style={{position:'absolute',left:'0px',top:'0px'}}>购买支付</NavBar>
        <p className={styles.title}>购买产品：聚点+ {quantityDataB&&quantityDataB.data.month}个月 年化利率（{quantityDataB&&quantityDataB.data.rate || ''}%）</p>
        <div className={styles.status}>
          <div>
            <p>单价<span>（元 / 份）</span></p>
            <p>{this.state.unitPrice}.00</p>
          </div>
          <div>
            <p>份数<span>（剩余{quantity}份）</span></p>
            
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
            <p className={styles.profit}>{sy}</p>
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
                productId={productId}
                num={this.state.quantity}
                type={`gather`}
                data={this.props.quantityDataB&&this.props.quantityDataB.data}
                go={this.props.push}
                getChoose={this.getChoose}
                user={this.props.user}
                banks={this.props.banks&&this.props.banks.data}
                balance={+this.props.user.balance}
                onRequestBalancePay={this.gatherBalanceBuy}//传递余额支付方法
                onRequestCardPay={this.gatherCardBuy}//传递银行卡支付
                balancePayData={this.props.balanceBuyData}//余额支付数据
                cardPayData={this.props.cardBuyData}//银行卡支付数据
                verifyData={this.props.verifyData}//余额是否支付成功验证
                cardVerifyData={this.props.cardVerifyData}//银行卡是否支付成功验证
                inputValue={Number(utils.padMoney(this.getPayTotal()))}//传递付款金额
                balancePayPending={this.state.pending}//控制loading参数
                changePending={this.changePending}
                clear={()=>{this.props.clearData()}}
                money={utils.padMoney(this.getPayTotal())}
                time={this.state.time}/>
        <p className={styles.textContent}><input ref="choice"   onChange={this.ifScan} style={{marginRight:'6px'}} type="checkbox"/>我已阅读并同意宝点网
            {contractData&&contractData.data.map((item,i)=>{
                return <Link key={i} to={`/emptyTemplate/${item.hetong_type?item.hetong_type:0}?name=${encodeURIComponent(item.hetong_name)}`} className={styles.protocol}>《{item.hetong_name}》</Link>
            })}
        </p>
            <p className={styles.textContent}><input ref="choiceTwo"   onChange={this.ifScanTwo} style={{marginRight:'6px'}} type="checkbox"/> 我已同意聚点+到期1天后授权系统自动进行转让</p>
        <Button
          containerStyle={{margin: '40px 15px 0'}}
          text='确认支付'
          disable={this.canPay() > 0 ? false : true}
          onClick={this.onValid}
          status={this.canPay() > 0 ? '' : 'disable'}/>
            <p className={styles.primeTxt}>{primeContent}</p>
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
  const quantityDataB= state.infodata.getIn([actionTypes.YOU_DETAIL, 'data'])
  const quantityDataBLeftFetching = state.infodata.getIn([actionTypes.GATHER_DETAIL, 'pending'])
  return {
    deposit: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.deposit || [],
    newDeposit:state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.new_deposit || [],
    user,
    quantityLeftFetching,
    quantityDataB,
    quantityDataBLeftFetching,
    banks:state.infodata.getIn(['GET_MY_CARD_LIST','data']),
    couponsFetching: state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'pending']),
    couponsData: state.infodata.getIn([actionTypes.AVAILABLE_COUPONS, 'data']),
    rates: state.infodata.getIn([RATE, 'data']),
    selectedCoupon: state.useCoupons.getIn(['coupons', 'selectedCoupon']),
    useCoupon: state.useCoupons.getIn(['coupons', 'useCoupon']),
    new_deposit:state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.new_deposit||{},
    EducationData:state.infodata.getIn(['GET_EDUCATION_INFO', 'data']),
    goBankData: state.infodata.getIn(['GO_BANK_PAGE',"data"]),
    contractData:  state.infodata.getIn(['GET_EMPTY_CONTRACTS_LIST',"data"]),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getEmptyContractsList(){
    dispatch({
        type:'GET_EMPTY_CONTRACTS_LIST',
        params:[{product_type:'F'}]
      })
  },
  push(path) {
    dispatch(push(path))
  },
  userInfo(){
     dispatch({
         type:actionTypes.USER_INFO
     })
  },
  goBack() {
    dispatch(goBack())
  },
  goBankPage(data){
    dispatch({
        type:actionTypes.GO_BANK_PAGE,
        params:[data]
    })
  },
  getDepositDetail(id) {
    dispatch({
      type: actionTypes.DEPOSIT_DETAIL,
      params: [id]
    })
  },
  //获取优惠卷
  getAvailableCoupons(month) {
    dispatch({
      type: actionTypes.AVAILABLE_COUPONS,
      params: ['优享+', month]
    })
  },
    //选择优惠卷
  setUseCoupons(selectedCoupon) {
    dispatch({
      type: actionTypes.SET_USE_COUPONS,
      selectedCoupon
    })
  },
  clearData(key){
      dispatch({
          type:'CLEAR_INFO_DATA',
          key:'GATHER_BALANCE_BUY'
      }),
          dispatch({
              type:'CLEAR_INFO_DATA',
              key:'GATHER_CARD_BUY'
          }),
          dispatch({
              type:'CLEAR_INFO_DATA',
              key:'GATHER_PAY_VERIFY'
          }),
          dispatch({
              type:'CLEAR_INFO_DATA',
              key:'GATHER_CARD_VERIFY'
          })
  },
  clean(key){
      dispatch({
          type:'CLEAR_INFO_DATA',
          key:key
      })
  },
  gatherData(id){
    dispatch({
        type:'YOU_DETAIL',
        params:[id]
    })
  },
  depositbsBuyResult(id){
    dispatch({
        type:'DEPOSITBS_BUYRESULT',
        params:[id]
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
  },
    getMyBankCards(){
        dispatch({
            type:'GET_MY_CARD_LIST'
        })
    },
    getEducationInfo(){
        dispatch({
            type:'GET_EDUCATION_INFO'
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
