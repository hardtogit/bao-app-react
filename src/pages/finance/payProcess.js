/**
 * 支付流程
 */
import React from 'react'
import ConfirmDialog from '../../components/Dialog/confirm'
import ReddemDialog from '../../components/Dialog/reddem'
import LoadingDialog from '../../components/Dialog/loading'
import Choice from '../../components/Dialog/ChoiceCard'
import util from '../../utils/utils'
import styles from './payProcess.styl'
import cn from 'classnames'
import PropTypes from 'prop-types'
class PayProcess extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      chosen: props.BALANCEINDEX,
      disable: [],
      bankName:'',
      bankCode:'',
      bankCard:''
    }  

    this.options = ['账户余额', '连连支付']
  }

  static propTypes = {
    type: PropTypes.string, // demand deposit creditors directInvest
    inputValue: PropTypes.number, // 初始购买金额
    onClose: PropTypes.func, //
    type: PropTypes.string,  // type 类型 ‘demand’ 'deposit' 'directInvest' 'creditors'
    go: PropTypes.func, // go 路由跳转
  }

  // 余额支付序列号
  static defaultProps = {
    BALANCEINDEX: 1,  
    priorityINDEX: 2   // 除去余额支付外，优先选择的银行
  }
  componentDidMount() {
    if (this.props.balancePay === false) {
      // 不使用余额支付，默认选择优先定义的银行
      this.setState({chosen: this.props.priorityINDEX})
    }

    this.changeValueHandler(this.props.inputValue, this.props.user.balance || 0)
  }

  componentWillReceiveProps(nextProps) {
      const {go,banks} = this.props;
      console.log(nextProps)
      this.setState({
        bankName:banks[0].bankName,
        bankCode:banks[0].bankCard.substr(banks[0].bankCard.length-4,4),
        bankCard:banks[0].bankCard

      })

    if (nextProps.balance != this.props.balance || this.props.inputValue != nextProps.inputValue) {
      // this.changeValueHandler(nextProps.inputValue, nextProps.user.balance, (chosen) => {
      //   this._onSelectPay(chosen)
      // })
      this.changeValueHandler(nextProps.inputValue, nextProps.balance)
    }

    this.setState({visiblePay: nextProps.visiblePay, visible: nextProps.visiblePay ? true : false})

    if (nextProps.balancePayPending) {
      this.refs.loading.show('支付中...')
    } else {
      if (this.props.type!='depositB'){
          this.refs.loading.hide()
      }
    }
    if (nextProps.balancePayData&&nextProps.verifyData){
        const status = nextProps.balancePayData.status;
        const msgId= nextProps.balancePayData.msgId;
        if (nextProps.verifyData.code=='0001'){
            go('/depositInvestSuccess/B');
            nextProps.clear();
        }else {
            if (this.props.time<3){

            }else {
                nextProps.clear();
                //nextProps.changePending();
                this.refs.loading.hide();
                this.openErrorDialog('支付出错了')
            }
        }
    }
    if (nextProps.cardPayData&&nextProps.cardVerifyData){
      const status = nextProps.cardPayData.status;
      const msgId= nextProps.cardPayData.msgId;
      if (nextProps.cardVerifyData.code=='0001'){
        go('/depositInvestSuccess/B');
        nextProps.clear();
      }else {
        if (this.props.time<3){

        }else {
          nextProps.clear();
          nextProps.changePending();
          this.refs.loading.hide();
          this.openErrorDialog('支付出错了')
        }
      }
    }

    //if (nextProps.balancePayData && nextProps.balancePayData.code && !this.balancePayRedirectFlag) {
    //  const code = nextProps.balancePayData.code;
    //  const pending=nextProps.balancePayPending;
    //  if (code == 100&&pending) {
    //    // 支付成功
    //      let user=JSON.parse(sessionStorage.getItem('bao-user'));
    //          user.isInvest=1;
    //      sessionStorage.setItem('bao-user',JSON.stringify(user));
    //      nextProps.changePending();
    //    switch(this.props.type) {
    //      case 'depositA': go('/depositInvestSuccess/A'); break;
    //      case 'directInvest': go('/directInvestSuccess/A'); break;
    //      case 'creditors': go('/creditorInvestSuccess/A'); break;
    //      case 'depositB':
    //
    //        (nextProps.balancePayData) ; break;
    //    }
    //    this.balancePayRedirectFlag = true
    //
    //  } else if  (code == 342&&pending) { // 输错5次密码
    //    this.openExceedErrorDialog(nextProps.balancePayData.data.minute)
    //    util.savePassErrorDate(this.props.user.username || '')
    //      nextProps.changePending();
    //      nextProps.clear()
    //  } else if (pending){
    //    let message = '支付出错了'
    //    if (code == 343) message = '密码输入错误，请重新输入'
    //    this.openErrorDialog(message)
    //      nextProps.changePending();
    //      nextProps.clear()
    //  }
    //}
  }

  // 根据金额和余额决定支付方式
  changeValueHandler = (val = this.props.inputValue, balance) => {
    if (this.props.balancePay === false) {
      return this.setState({chosen: this.state.chosen === this.props.BALANCEINDEX ? this.props.priorityINDEX : this.state.chosen})
    }

    if (val > +balance) {
      if (this.state.chosen === this.props.BALANCEINDEX) {
        this.setState({chosen: this.props.priorityINDEX, disable: [this.props.BALANCEINDEX]})
      } else {
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

  // 交易密码错误弹出框
  openErrorDialog = (message) => {
    const {type, money, go} = this.props
    this.refs.confirm.show({
      content: message,
      okText: '忘记密码',
      cancelText: '重试',
      okCallback: (close) => {
        go('/user/setting/tradePasswordForget')
        close&&close()
      },
      cancelCallback: () => {
        this.gotoPay()
      }
    })
  }

  // 交易密码输错5次弹出框
  openExceedErrorDialog = (minute) => {
    this.refs.confirm.show({
      content: '密码输入错误超过5次，请'+ minute +'分钟后重试或点击忘记密码重设密码',
      okText: '忘记密码',
      cancelText: '取消',
      okCallback: () => {
        this.props.go('/user/setting/tradePasswordForget')
      }
    })
  }  

  // 选择支付方式
  selectPayWay(index) {
    if (index + 1 == this.state.chosen) return false
    this.setState({chosen: index + 1})
      this.props.getChoose(index + 1)
  }
  gotoPay = () => {
    util.getPassErrorNums(this.props.user.username || '', () => {
      const money = this.props.inputValue

      this.reddem = this.refs.reddem.show({
        title: '购买',
        money: money,
        okCallback: (close, value,money) => {
          if(this.state.chosen==1){
            this._balancePay(value, money)
          }else{
            this._cardPay(value, money)
          }
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

  _balancePay(value, money) {
    this.props.onRequestBalancePay && this.props.onRequestBalancePay(value, money)
  }
  _cardPay(value,money){
    this.props.onRequestCardPay&&this.props.onRequestCardPay(value,money,this.state.bankCard)
}
  // 余额支付逻辑
  filterBalancePay = (user, go, data) => {
    if (!user.isSetTradePassword) {
      // 如果没有设置交易密码
      return this.refs.confirm.show({
        title: '安全提示',
        content: '　投资需要设置交易密码,立即去设置？',
        okCallback: (close) => {
          go('/user/setting/TradePasswordSet', {redirectTo: 'Buy'})
          close()
        }
      })
    }

    if (user.ispaypwdeqloginpwd) {
      // 老用户 交易密码和登录密码一致
      return this.refs.confirm.show({
        title: '安全提示',
        content: '您的交易密码和登录密码一致，为了您的账户安全，请重置交易密码',
        okCallback: (close) => {
          go('/user/setting/tradePasswordForget', {redirectTo: 'Buy'})
          close()
        }
      })
    }
      
    this.gotoPay()
  }

  // 银行卡支付逻辑
  filterBankPay = (user, go, data) => {
    let type = this.props.type
    const chosen = this.state.chosen

  }

  // @params data 支付方式 1:京东支付  2:连连支付  3:余额支付
  open(data = {}) { 
    const user = JSON.parse(sessionStorage.getItem('bao-user'));
    const go = this.props.go
    // 京东支付 或者 连连支付
    if (this.state.chosen == 2) {
      data.chosen = 2
      this.filterBalancePay(user, go, data)
    }

    // 余额支付
    if (this.state.chosen == 1) {
      this.filterBalancePay(user, go, data)
    }
  }  

  // 余额支付方式
  renderBalanceContent (disable) {
    return (
      <div className={ disable ? styles.contentTextDisable : styles.contentText}>
        {!isNaN(this.props.balance)&&this.props.balance+'元'|| ''}
        {disable ? <span className={styles.contentMark}> (余额不足)</span> : null}
      </div>
    )
  }

  renderRadio = (label, index) => {
    const disable = ~this.state.disable.indexOf(index + 1);

    return (
      <div className={styles.Radio} key={index} >
        { disable ? <img  className={styles.RadioImg} src={require('../../assets/images/0k_disable.png')} /> :
            this.state.chosen == index + 1 ? <img onClick={() => {if(!disable) {this.selectPayWay(index)}}} className={styles.RadioImg} src={require('../../assets/images/0k.png')} /> :
                <img onClick={() => {if(!disable) {this.selectPayWay(index)}}} className={styles.RadioImg} src={require('../../assets/images/0k_no.png')} /> }
        <span className={cn(styles.RadioLabel, disable && styles.disableText)}>{index==1?this.state.bankName+"("+this.state.bankCode+")":'账户余额'}</span>
        <div className={styles.RadioContent}>
          { index + 1 == this.props.BALANCEINDEX && this.renderBalanceContent(disable) }
        </div>
        {index==1? <img onClick={this.choiceBank} width="15px" src={require('../../assets/images/arrow2.png')} alt=""/>:''}
      </div>
    )
  }
  choiceCallback=(a,b,c)=>{
    this.setState({
      bankName:b,
      bankCard:c.substr(c.length-4,4),
      bankCode:c
    })
    a()
  }
  choiceBank=()=>{
    this.refs.choice.show()
  }
  render() {
      let banks={};
        banks.data=this.props.banks;

    return (
      <div style={{}}>
        <ConfirmDialog ref='confirm' />
        <ReddemDialog ref='reddem' />
        <LoadingDialog ref='loading' />
        { this.options.map((option, index) => {
          if (this.props.balancePay === false && this.props.BALANCEINDEX === index + 1) {
            return null
          }
          return this.renderRadio(option, index)
        })}
        <Choice options={{banks:banks,choiceCallback:this.choiceCallback}} ref="choice"></Choice>
        {/*<ActionSheet 
          ref='act'
          onClose={() => {this.setState({visible: false, visiblePay: false}); this.props.onClose && this.props.onClose()}}
          options={this.state.options}
          chosen={this.state.chosen}
          disable={this.state.disable}
          visible={this.state.visible}
          onSelectPay={this.onSelectPay} />*/}
      </div>  
    )
  }
}

export default PayProcess