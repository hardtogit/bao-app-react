/**
 * 赎回 dialog (赎回，提现，约标等都会用到)
 * 
 */
import React from 'react'
import ReactDom from 'react-dom'
import Dialog from './index'
import helper from './helper.js'
import cn from 'classnames'
import styles from './index.styl'
import Utils from '../../utils/utils.js'
import _ from 'lodash'

export default class ReddemDialog extends React.Component {
  constructor(props) {
    super(props)
    this.password = ''
    this.state = {
      isOpen: false,
      top: 0,
      error: '',
      options: {}
    }
  }

  static propTypes = {
    title: React.PropTypes.string,
    money: React.PropTypes.number,
    okText: React.PropTypes.string,             // 确认按钮文本 （右侧按钮）
    okCallback: React.PropTypes.func,           // 确定回调函数
    cancelText: React.PropTypes.string,         // 取消按钮文本（左侧按钮）
    cancelCallback: React.PropTypes.func,       // 取消回调函数
    placeholder: React.PropTypes.string,
    detailText: React.PropTypes.string
  }

  static defaultProps = {
    hasMoney: true,
    hasDetailText: false,
  }


  show = (options) => {
    const _options = Object.assign({}, options, {money: Utils.moneyFormat(options.money || '')})
    this.setState({top: 0, error: '', options: _options})
    this.refs.dialog.show()
  }

  hide = () => {
    this.refs.dialog.hide()
  }

  okHandle = () => {
    const options = this.state.options
    if (options.okCallback) { 
      return options.okCallback.call(null, this.hide, this.password)
    }

    this.hide()
  }

  cancelHandle = () => {
    const options = this.state.options
    options.cancelCallback && options.cancelCallback.call(null)
    this.hide()
  }

  focusHandle = () => {
    ReactDom.findDOMNode(this.refs.dialog).getElementsByTagName('div')[0].style.top = '200px'
  }

  blurHandle = () => {
    ReactDom.findDOMNode(this.refs.dialog).getElementsByTagName('div')[0].style.top = '50%'
  }

  render() {
    const options = this.state.options

    return (
      <Dialog ref='dialog' style={{top: 0}}>
        <div className={cn(styles.modal, styles.reddemModal)} style={{width: helper.getWidth()}}>
          <a onClick={this.hide} className={styles.deleteIconWrap} >
            <img className={styles.deleteIcon}  src={require('./images/close2.png')} />
          </a>
          { options.title ? <p className={styles.title}>{options.title}</p> : null }
          { this.props.hasMoney ? (
            <div className={styles.content}>
              <span className={styles.money}>￥{options.money}</span>
            </div>
          ) : (
            <div className={styles.content}></div>
          ) }
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              ref='textInput'
              placeholder={options.placeholder}
              onFocus={this.focusHandle}
              onBlur={this.blurHandle}
              onChange={(e)=>{this.password=e.nativeEvent.target.value}} type="password"/>
          </div>
          {
           this.state.error ? <span className={styles.errorText}>{this.state.error}</span> : null
          }
          { this.props.hasDetailText ?
          <div className={styles.detailText}>
            <p>{options.detailText}</p>
          </div> : null
          }
          <div className={styles.bottom} style={{marginTop: 26}} >
            <span onClick={this.cancelHandle} className={styles.cancelBtn}>{options.cancelText || '取消'}</span>
            <span onClick={this.okHandle} className={styles.okBtn}>{options.okText || '确定'}</span>
          </div>
        </div>  
      </Dialog>
    )
  }
}