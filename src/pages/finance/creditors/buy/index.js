//债权购买
import React from 'react'
import { connect } from 'react-redux'
import {goBack, push} from 'react-router-redux'
import cn from 'classnames'
import NavBar from '../../../../components/NavBar'
import Button from '../../../../components/BaseButton'
import BaseText from '../../../../components/BaseText'
import styles from './index.less'
import wrap from '../../../../utils/pageWrapper'
import BuyInput from '../../../../components/customInput'
import ConfirmDialog from '../../../../components/Dialog/confirm.js'
import Tipbar from '../../../../components/Tipbar'
import PayProcess from '../../payProcess'
import * as actionTypes from '../../../../actions/actionTypes'
import utils from '../../../../utils/utils'

class CreditorBuy extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      copies: 200,
      chosenPay: ''
    }

    this.creditorsId = this.props.params.id
  }

  componentDidMount() {
    this.props.getCreditorDetail(this.creditorsId)
  }

  componentWillReceiveProps(nextProps) {
    if (!utils.isPlainObject(nextProps.detail)) {
      
      const copies = nextProps.detail.left_quantity ?
          nextProps.detail.left_quantity < this.state.copies ?
          nextProps.detail.left_quantity : this.state.copies : 1  
      this.setState({copies})
    }
  }

  changeCopies = (value) => {
    this.setState({copies: Number(value)})
  }

  onValid = () => {
    this.refs.payProcess.open({
      id: this.creditorsId,
      copies: this.state.copies
    })
  }

  canPay = () => {
    // if (utils.isPlainObject(this.props.detail)) return false
    console.log()
    return this.state.copies <= (this.props.detail.left_quantity || 0) ? true : false
  }

  creditorBuy = (password, money) => {
    this.props.balancePay(this.creditorsId, this.state.copies, password)
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

  render(){
    const detail = this.props.detail
    return(
      <div className={styles.root}>
        <NavBar title='购买支付' onLeft={()=>this.props.goBack()}></NavBar>
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

          <PayProcess 
            ref='payProcess' 
            type='creditors'
            go={this.props.push}
            user={this.props.user}
            balance={this.props.user.balance || 0}
            onRequestBalancePay={this.creditorBuy}
            inputValue={Number(utils.padMoney(this.getPayTotal()))}
            balancePayPending={this.props.creditorsBuyPending}
            balancePayData={this.props.creditorsBuyData} />

          <div className={styles.payBtn}>
            <p onClick={()=>this.props.push('/creditorProtocol')}>《投资咨询及管理服务协议》及相关融资文件 </p>
          </div>
          <Button 
            containerStyle={{margin: '40px 15px 20px'}}
            text='确认支付' 
            disable={this.canPay()}
            onClick={this.onValid} />
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
    creditorsBuyPending: state.infodata.getIn([actionTypes.CREDITORS_BUY, 'pending']),
    creditorsBuyData: state.infodata.getIn([actionTypes.CREDITORS_BUY, 'data'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  balancePay(creditorId, copies, payPass) {
    dispatch({
      type: actionTypes.CREDITORS_BUY,
      params: [creditorId, {
        copies,
        payPass,
        type: 3
      }]
    })
  },
  getCreditorDetail(id) {
    dispatch({
      type: actionTypes.CREDITORS_DETAIL,
      params: [id]
    })
  },
  push(path) {
    dispatch(push(path))
  },
  goBack() {
    dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(CreditorBuy))
