import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import styles from './index.styl'
import NavBar from '../../../../components/NavBar'
import BaseInput from '../../../../components/BaseInput'
import Button from '../../../../components/BaseButton'
import ValidateForm from '../../../../components/BaseValidateForm'
import ConfirmDialog from '../../../../components/Dialog/confirm'
import ReddemDialog from '../../../../components/Dialog/reddem'
import ActionSheet from '../../../../components/Dialog/actionSheet'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import util from '../../../../utils/utils'
import PayProcess from '../../payProcess'

class DemandBuy extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      options: ['连连支付', '余额支付'],
      disabled: false,
      inputValue: 10000,
      visible: false,
      chosen: props.user.balance > 0 ? props.BALANCEINDEX : 1,
      disable: props.user.balance > 0 ? [] : [props.BALANCEINDEX],
    }
  }

  static defaultProps = {
    BALANCEINDEX: 2,
  }

  componentDidMount() {
    this.changeValueHandler(this.state.inputValue)
    this.refs.form.checkValid()
  } 

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.balance != this.props.user.balance) {
      this.changeValueHandler(this.state.inputValue, nextProps.user.balance)
    }
  }

  incomeOneDay = (value) => {
    return util.padMoney((this.props.interesRate || 0.13) / 100 * +this.state.inputValue /365)
  }

  // 零钱宝购买接口
  demandBuy = (password, money) => {
    if (this.fetching) return false
    this.openPayingDialog()
    this.fetching = true
    // Fetch.demandBuy({
    //   amount: money,
    //   password: password,
    //   type: 0
    // }).then(result => {
    //   this.fetching = false
    //   if (result.code == 100) {
    //     this.props.navigator.replace({id: 'DemandInvestSuccess', data: result.data, type: 'demand'})
    //     this.props.updateUser()
    //     this.props.getUnreadMessages()
    //   } else if (result.code == 342) { // 输错5次密码
    //     this.openExceedErrorDialog(result.data.minute)
    //     util.savePassErrorDate(this.props.user.username || '')
    //   } else {
    //     let message = ''
    //     if (result.code == 343) message = '密码输入错误，请重新输入'
    //     this.openErrorDialog(message)
    //   }
    // }).catch(err => {
    //   this.fetching = false
    // })
  }

  //弹出
  openPayingDialog = () => {
   // this.refs.loading.show('支付中...')
  }

  // 交易密码错误弹出框
  openErrorDialog = (message) => {
    const {type, money, navigator} = this
    this.refs.confirm.show({
      content: message || '支付出错了',
      okText: '忘记密码',
      cancelText: '重试',
      okCallback: (close) => {
        this.props.navigator.push({id: 'TradePasswordForget'})
        close()
      },
      cancelCallback: () => {
        this.gotoPay()
      }
    })
  }  

  // 交易密码输错5次弹出框
  openExceedErrorDialog = (minute) => {
    //this.setState({isOpen: true})
    this.refs.confirm.show({
      content: '密码输入错误超过5次，请'+ minute +'分钟后重试或点击忘记密码重设密码',
      okText: '忘记密码',
      cancelText: '取消',
      okCallback: () => {
        // this.props.navigator.push({id: 'TradePasswordForget'})
        
      }
    })
  }  

  gotoPay = () => {
    util.getPassErrorNums(this.props.user.username || '', () => {
      const data = this.refs.form.getValue()
      this.reddem = this.refs.reddem.show({
        title: '购买',
        money: data.money,
        okCallback: (close, value) => {
          if (!util.checkPassword(value)) {
            return this.refs.reddem.setState({error: '请输入正确的交易密码'})
          }
          this.demandBuy(value, data.money)
          close()
        },
        cancelCallback: () => {
          //this.props.navigator.push({id: 'TradePasswordForget'})
        }
      })
    }, (minute) => {
      this.openExceedErrorDialog(minute)
    })
  }

  modalWillClose = (chosen = this.state.chosen) => {
    this.setState({visible: false, chosen})
  }

  onValid = () => {
    const data = this.refs.form.getValue()
    this.refs.payProcess.open('demand', {chosen: this.state.chosen, money: data.money}, this.props.user, this.props.push, () => {
      this.gotoPay()
    })
  }

  onInValid = (name, value, message) => {
    this.openTipbar(message)
  }

  openTipbar(message) {
    this.refs.tipbar.open(message)
  }

  getBalanceText = () => {
    return this.state.disable.indexOf(this.props.BALANCEINDEX) === -1 ?
          '余额' + this.props.user.balance + '元' :
          '余额' + this.props.user.balance + '元' + '（余额不足）'
  }  

  changeValueHandler = (val, balance) => { 
    if(val > +(balance || this.props.user.balance || 0)) {
      if (this.state.chosen === this.props.BALANCEINDEX) {
        this.setState({chosen: 1, disable: [this.props.BALANCEINDEX]})
      }else {
        this.setState({disable: [this.props.BALANCEINDEX]})
      }
    } else {
      const index = this.state.disable.indexOf(this.props.BALANCEINDEX)
      let states = {chosen: this.props.BALANCEINDEX}
      if (index !== -1) {
        this.state.disable.splice(index, 1)
        states.disable = this.state.disable
      }
      this.setState(states)
    }
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

                this.changeValueHandler(val)
              }}
          />
          <div className={styles.status}>
            <div>
              <span>参考回报（元）</span>
              <span className={styles.colored}>{this.incomeOneDay(this.state.inputValue)}</span>
            </div>
            <div>
              <span>账户余额（元）</span>
              <span>{this.props.user.balance}</span>
            </div>
          </div>
          <div className={styles.pay} onClick={() => {this.setState({visible: true})}}>
            {this.state.options[this.state.chosen - 1]}
          </div>
          <p className={styles.protocol}>《零钱宝出借咨询及管理服务协议》</p>
          <Button containerStyle={{margin: '40px 15px 0'}}
            type='submit'
            text='确认购买' />
        </ValidateForm>  
        <PayProcess ref='payProcess' />
        <ConfirmDialog ref='confirm' />
        <ReddemDialog ref='reddem' />
        <ActionSheet 
          ref='act'
          options={['连连支付', this.getBalanceText()]}
          chosen={this.state.chosen}
          disable={this.state.disable}
          visible={this.state.visible}
          modalWillClose={this.modalWillClose} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data'])
  const user = userData ? userData.data : {}

  return {
    user,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(DemandBuy))
