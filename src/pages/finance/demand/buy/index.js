import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import styles from './index.styl'
import NavBar from '../../../../components/NavBar'
import BaseInput from '../../../../components/BaseInput'
import Button from '../../../../components/BaseButton'
import ValidateForm from '../../../../components/BaseValidateForm'
import ActionSheet from '../../../../components/Dialog/actionSheet'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import util from '../../../../utils/utils'
import PayProcess from '../../payProcess'

class DemandBuy extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      inputValue: 10000,
      chosenPay: ''
    }
  }

  static defaultProps = {
    BALANCEINDEX: 2,
  }

  componentDidMount() {
    this.refs.form.checkValid()
  } 

  incomeOneDay = (value) => {
    return util.padMoney(this.props.interesRate / 100 * +this.state.inputValue /365)
  }

  demandBuy = (password, money) => {
    this.props.balancePay(password, this.state.inputValue)
  }

  onValid = () => {
    if (this.props.balancePayPending) return false
    this.refs.payProcess.gotoPay()
  }

  onInValid = (name, value, message) => {
    this.openTipbar(message)
  }

  openTipbar(message) {
    this.refs.tipbar.open(message)
  }

  selectPayHandle = (payWay) => {
    this.setState({chosenPay: payWay})
  }

  checkPayWayHandle = (isOpen) => {
    this.refs.payProcess.checkPayWay(this.refs.form.getValue().money, isOpen ? true : false)
  }

  render() {
    return (
      <div className={styles.root}>
        <NavBar>购买支付</NavBar>
        <ValidateForm 
          ref='form'
          onValid={this.onValid}
          onInValid={this.onInValid} >
          <p className={styles.moneyWrap}>购买金额<span className={styles.moneyTip}>(最少购买100元)</span></p>
          <BaseInput
              containerStyle={{padding: '0 15px', border: 0}}    
              wrapStyle={{border: '1px solid rgb(0,166,266)', marginLeft:0, paddingLeft: 15}}               
              ref='money'
              name='money'
              right={<span style={{marginRight: 15}}>元</span>}
              type='validateItem'
              format='number'
              defaultValue={this.state.inputValue}
              reg={{ required: {message: '请输入正确的金额'},
                     reg: {reg: function(value) {
                       if (value >= 100) {
                         return true
                       } else {
                         return false
                       }}, message: '请输入正确的金额'} }}
              onChange={val => {
                if(isNaN(val)) return
                if(val.length > 15) return
                this.setState({inputValue:val})
              }}
          />
          <div className={styles.status}>
            <div>
              <span>预期收益（元）</span>
              <span className={styles.colored}>{this.incomeOneDay(this.state.inputValue)}</span>
            </div>
            <div>
              <span>账户余额（元）</span>
              <span>{this.props.user.balance}</span>
            </div>
          </div>
          <div className={styles.pay} onClick={() => {this.refs.payProcess.openPay()}}>
            {this.state.chosenPay}
          </div>
          <p className={styles.protocol}>《零钱宝投资咨询及管理服务协议》</p>
          <Button containerStyle={{margin: '40px 15px 0'}}
            type='submit'
            text='确认购买' />
        </ValidateForm>  
        <PayProcess 
          ref='payProcess' 
          type='demand'
          go={this.props.push}
          user={this.props.user}
          onRequestBalancePay={this.demandBuy}
          inputValue={+this.state.inputValue}
          onSelectPay={this.selectPayHandle}
          balancePayPending={this.props.demandBuyPending}
          balancePayData={this.props.demandBuyData} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data'])
  const user = userData ? userData.data : {}
  const rates = state.infodata.getIn([actionTypes.RATE, 'data'])
  return {
    user,
    demandBuyPending: state.infodata.getIn([actionTypes.DEMAND_BUY, 'pending']) || false,
    demandBuyData: state.infodata.getIn([actionTypes.DEMAND_BUY, 'data']) || {},
    interesRate: rates && rates.code == 100 && rates.data.demand || 0
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  },

  balancePay(password, amount) {
    dispatch({
      type: actionTypes.DEMAND_BUY,
      params: [
        {
          amount: amount,
          password: password,
          type: 3
        }
      ]
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(DemandBuy))
