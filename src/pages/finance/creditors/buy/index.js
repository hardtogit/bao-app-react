//债权购买
import React from 'react'
import { connect } from 'react-redux'
import {goBack, push} from 'react-router-redux'
import cn from 'classnames'
import NavBar from '../../../../components/NavBar'
import Button from '../../../../components/BaseButton'
import styles from './index.less'
import wrap from '../../../../utils/pageWrapper'
import BuyInput from '../../../../components/customInput'
import Tipbar from '../../../../components/Tipbar'
import PayProcess from '../../payProcess'
import * as actionTypes from '../../../../actions/actionTypes'
import utils from '../../../../utils/utils'
import IsAuth from '../../../../components/isAuth'
import Pay from '../../../../pages/finance/pay/index'
import util from '../../../../utils/utils'
import setUrl from '../../../../components/setUrl'
const hostName=window.location.origin;
class CreditorBuy extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      copies: 200,
      chosenPay: '',
        payTop:'100%',
        url:'',
        select:1,
        time:0,
        pending:false
    }
    this.creditorsId = this.props.params.id
  }

  componentDidMount() {
    window['closeFn']=this.closeFn;
    this.props.getCreditorDetail(this.creditorsId)
      this.props.getUser();
      this.props.getMyBankCards()
  }

  componentWillReceiveProps(nextProps) {
    if (!utils.isPlainObject(nextProps.detail)) {
      const copies = nextProps.detail.left_quantity ?
          nextProps.detail.left_quantity < this.state.copies ?
          nextProps.detail.left_quantity : this.state.copies : 1  
      this.setState({copies})
    }
    const{cardBuyData,balanceBuyData,verifyData,cardVerifyData}=nextProps;
      //验证余额是否购买成功
      if(balanceBuyData&&balanceBuyData.status==1){
          if(this.state.time<=3){
              this.setState({
                  time:this.state.time+1
              });
              if(verifyData&&verifyData.data.status==1&&verifyData.code=='0001'){
              }else{
                  if(this.state.time>=3){
                      if(verifyData&&verifyData.data.status==1&&verifyData.code!='0001'){
                          this.changePending()
                      }else{
                          this.changePending()
                      }
                  }else{
                      setTimeout(function(){
                          $this.props.payVerify({id:balanceBuyData.msgId})
                      },2000)

                  }
              }
          }
      }
      //验证银行卡是否购买才成功
      if (cardBuyData&&cardBuyData.status==1){
          if(this.state.time<=3){
              this.setState({
                  time:this.state.time+1
              });
              if(cardVerifyData&&cardVerifyData.data.status==1&&cardVerifyData.code=='0001'){
                  const time=Date.parse(new Date()),
                      cash_amount=this.state.val;
                  push(time,cash_amount)
              }else{
                  if(this.state.time>=3){
                      if(cardVerifyData&&cardVerifyData.data.status==1&&cardVerifyData.code!='0001'){
                          this.changePending()
                      }else{
                          this.changePending()
                      }

                  }else{
                      setTimeout(function(){
                          $this.props.cardPayVerify({id:cardBuyData.msgId})
                      },2000)

                  }
              }
          }
      }
  }
    changePending=()=>{
        this.setState({
            pending:false
        })
    }
  changeCopies = (value) => {
      if (value<=0){
          this.refs.tipbar.open('购买份数必须为正整数!');
      }else if (value>parseFloat(this.props.detail.left_quantity)){
          this.refs.tipbar.open('剩余份数不足!');
      }
    this.setState({copies: Number(value)})
  }

  onValid = () => {
      const {select}=this.state;
      if (select==1){
          this.refs.isAuth.isSecurityCard(this.successsFn,this.props.push,'/user/setting/tradePasswordSet')
      }else {
          this.refs.isAuth.isbindSecurityCard(this.successsFn,this.props.push,'/user/setting/securityCard')
      }
  }
    successsFn=()=>{
        this.refs.payProcess.open({
            id: this.creditorsId,
            copies: this.state.copies
        })
     }
  canPay = () => {
    // if (utils.isPlainObject(this.props.detail)) return false
    return this.state.copies <= (this.props.detail.left_quantity || 0)&&this.state.copies>0 ? true : false
  }
    //余额购买
    creditorBalanceBuy = (password, money) => {

        const {copies}=this.state;
        const {balancePay}=this.props;
        const coupon = '';//债权转让不能使用优惠卷

        this.props.clearData()
        this.setState({
            pending:true,
            time:0
        });
        balancePay(this.creditorsId,copies, password,sessionStorage.getItem('passwordFactor'), coupon && coupon.id || '',"WAP",sessionStorage.getItem('mapKey'))

    }
    //银行卡购买
    creditorCardBuy=(password,money,bankCard)=>{
        const {copies}=this.state;
        const coupon = '';//债权转让不能使用优惠卷
        this.props.clearData()
        this.setState({
            pending:true,
            time:0
        })
        this.props.cardPay(bankCard,Number(utils.padMoney(this.getPayTotal())),this.creditorsId, this.state.quantity, password,sessionStorage.getItem('passwordFactor'), coupon && coupon.id || '',"WAP",sessionStorage.getItem('mapKey'))
    }
  getPrice () {
    return utils.accAdd(this.props.detail.price, this.props.detail.prepaid_interest || 0)
  }

  getPayTotal = () => {
    if (utils.isPlainObject(this.props.detail)) return ''
    return Number(utils.toFixed(this.state.copies * this.getPrice(), 2))
  }

  //预期收益
  expectIncome = (nub) => {
    const detail = this.props.detail
    if (utils.isPlainObject(detail)) return ''
    let moneyIn = +this.state.copies * +detail.rate/100 * +detail.term * 50 /12 //原直投对应收益
    let moneyByCut = +this.state.copies * (50- +detail.price) //折价收益
    let moneyOut = +this.state.copies * +detail.prepaid_interest //预付利息
    return utils.padMoney(moneyIn + moneyByCut - moneyOut)
  }
    overPay=(val,data)=>{
        const{
                id,
                copies
            }=data,
            payPass='',
            type=2;
        const url=util.combineUrl(`${hostName}/mobile_api/creditors/pay-bond/${id}`,{copies,payPass,type})
        this.setState({
            url,
            payTop:'0px'
        })
    }
  closeFn=()=>{
      this.setState({payTop:'100%',url:''})
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
  render(){
    const detail = this.props.detail
      let banksList={};
      if(this.props.banks&&this.props.banks.data){
          banksList=this.props.banks.data
      }
    return(
      <div className={styles.root}>
        <div className={styles.bg}>
        <NavBar title='购买支付' onLeft={this.pop}></NavBar>
        <div style={{height:44}}></div>
        <div className={styles.scroll}>
          <div className={styles.infomation}>
            <div className={cn(styles.infomationItem, styles.infomationItemLeft)}>
              <p>单价<span>(元/份)</span></p>
              <p>{detail.price || ''}</p>
            </div>
            <div className={styles.infomationItem}>
              <p>剩余<span>(份)</span></p>
              <p>{detail.left_quantity || ''}</p>
            </div>
            <div className={cn(styles.infomationItem, styles.infomationItemRight)}>
              <p>预付利息<span>(元/份)</span></p>
              <p>{detail.prepaid_interest || ''}</p>
            </div>
          </div>
          <div className={styles.buyInput}>
            <p>份数<span>(最少买一份)</span></p>
            <BuyInput
                containerStyle={{marginTop: 12}}
                value={this.state.copies}
                onChange={this.changeCopies} />
          </div>
          <div className={styles.expectIncome}>
            <div className={styles.wrap}>
              <p className={styles.name}>预期收益（元）</p>
              <p className={styles.profit}>{this.expectIncome(this.state.quantity)}</p>
            </div>
          </div>

          <div className={styles.payMoney}>
            <p>还需支付（元）</p>
            <p>{utils.padMoney(this.getPayTotal())}</p>
          </div>

            { banksList.length!=undefined&&banksList.length!=0 ?<PayProcess
            ref='payProcess' 
            type='creditors'
            getChoose={this.getChoose}
            go={this.props.push}
            user={this.props.user}
            banks={banksList}
            overPay={this.overPay}
            balance={this.props.user.balance || 0}
            onRequestBalancePay={this.creditorBalanceBuy}//传递余额支付方法
            onRequestCardPay={this.creditorCardBuy}//传递银行卡支付
            balancePayData={this.props.balanceBuyData}//余额支付数据
            cardPayData={this.props.cardBuyData}//银行卡支付数据
            verifyData={this.props.verifyData}//余额是否支付成功验证
            cardVerifyData={this.props.cardVerifyData}//银行卡是否支付成功验证
            inputValue={Number(utils.padMoney(this.getPayTotal()))}
            balancePayPending={this.state.pending}
            changePending={this.changePending}
            clear={this.props.clear}/>:''}

          <div className={styles.payBtn}>
            <p onClick={()=>this.props.push('/creditorProtocol')}>《债权转让及受让协议》</p>
          </div>
          <Button 
            containerStyle={{margin: '40px 15px 20px'}}
            text='确认支付' 
            disable={this.canPay() > 0 ? false : true}
            onClick={this.onValid}
            status={this.canPay() > 0 ? '' : 'disable'}/>
          <Tipbar ref="tipbar"/>
          <IsAuth ref="isAuth"/>
        </div>
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
  const detail = state.infodata.getIn(['CREDITORS_DETAIL', 'data'])
  return{
    user: userData && userData.data || {},
    detail: detail && detail.data || {},
    banks:state.infodata.getIn(['GET_MY_CARD_LIST','data']),
      balanceBuyData:state.infodata.getIn([actionTypes.CREDITOR_BALANCE_BUY,'data']),
      cardBuyData:state.infodata.getIn([actionTypes.CREDITOR_CARD_BUY,'data']),
      verifyData:state.infodata.getIn([actionTypes.CREDITOR_PAY_VERIFY,'data']),
      cardVerifyData:state.infodata.getIn([actionTypes.CREDITOR_CARD_VERIFY,'data']),
    creditorsBuyPending: state.infodata.getIn([actionTypes.CREDITORS_BUY, 'pending']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    //余额支付
    balancePay(productId, num, password, passwordFactor, couponId,device,mapKey) {
        dispatch({
            type: actionTypes.CREDITOR_BALANCE_BUY,
            params: [{
                productId,
                num,
                password,
                passwordFactor,
                couponId,
                productType:'TRANSFER',
                device,
                mapKey:mapKey
            }]
        })
    },
    //银行卡支付
    cardPay(bankCard,transferAmount,productId, num, password, passwordFactor, couponId,device,mapKey){
        dispatch({
            type:actionTypes.CREDITOR_CARD_BUY,
            params:[{
                bankCard,
                transferAmount,
                productId,
                num,
                password,
                passwordFactor,
                couponId,
                productType:'POINT',
                device,
                mapKey:mapKey
            }]
        })
    },
    //余额购买验证
    payVerify(id){
        dispatch({
            type:'CREDITOR_PAY_VERIFY',
            params:[id]
        })
    },
    //银行卡购买验证
    cardPayVerify(id){
        dispatch({
            type:'CREDITOR_CARD_VERIFY',
            params:[id]
        })
    },
    clearData(key){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'CREDITOR_BALANCE_BUY'
        }),
            dispatch({
                type:'CLEAR_INFO_DATA',
                key:'CREDITOR_CARD_BUY'
            }),
            dispatch({
                type:'CLEAR_INFO_DATA',
                key:'CREDITOR_PAY_VERIFY'
            }),
            dispatch({
                type:'CLEAR_INFO_DATA',
                key:'CREDITOR_CARD_VERIFY'
            })
    },
  getCreditorDetail(id) {
    dispatch({
      type: actionTypes.CREDITORS_DETAIL,
      params: [id]
    })
  },
    getUser(){
        dispatch({type:actionTypes.USER_INFO})
    },
  push(path) {
    dispatch(push(path))
  },
  getMyBankCards(){
        dispatch({
            type:'GET_MY_CARD_LIST'
        })
  },
  goBack() {
    dispatch(goBack())
  },
    clear(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'CREDITORS_BUY'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(CreditorBuy))
