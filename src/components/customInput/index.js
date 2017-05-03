/**
 * BuyNumberInput
 * author lyc
 */
import React from 'react'
import lodash from 'lodash'
import util from '../../utils/utils.js'
import styles from './index.styl'
import PropTypes from 'prop-types'
export default class BuyNumberInput extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.type == 'number') {
      this.initValue = 7.5
      this.unit = 0.1
    } else {
      this.initValue = 1
      this.unit = 1
    }
    this.label = this.props.label || ''

    this.state = {
      value: this.props.value || String(this.initValue),
      change: false,
      isFocus: false
     }
  }

  static propTypes = {
    onChange: PropTypes.func,  // 输入框内数值发生变化触发回调 第一个参数为值
    type: PropTypes.string,     // 输入框数值类型 默认 integer、 number
    label: PropTypes.string,   // 输入框内容后面的文本
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),   // 初始值
    containerStyle: PropTypes.object
  }
  decreaseHandle() {
    this.blur()
    if (this.state.value) {
      const value = Number(this.state.value)
      if (!isNaN(value) && (value > (this.props.minValue || 0))) {
        this.changeHandle(util.accSub(value, this.unit).toString())
      }
    }
  }
    componentWillReceiveProps(next){
    this.setState({
        value:next.value
    })
    }
  increaseHandle() {
    this.blur()
    const value = Number(this.state.value);
    if (!isNaN(value)) {
      this.changeHandle(util.accAdd(value, this.unit).toString())
    }
  }

  _changeHandle(value) {
    const {
      id
    }=this.props;
    if (value>200&&id==5){
        this.setState({value:200});
    }else {
        this.setState({value})
    }
    this.props.onChange && this.props.onChange(value || 0)
  }

  changeHandle = (value) => {
    if (this.props.minValue && value < this.props.minValue) {
      return this._changeHandle(this.props.minValue)
    }

    if (!value)
      return this._changeHandle('')

    if (value == 0)
      return this._changeHandle(0)

    if (this.props.type == 'number' && (/^\d*$/.test(value) || /^\d+\.\d{0,1}$/.test(value))) {
      return this._changeHandle(value)
    }

    if (util.checkInteger(value))
      return this._changeHandle(value)

    this.setState({value: this.state.value})
  }

  blur() {
    this.refs.textInput.blur()
  }

  blurHandle() {
    if (this.props.type == 'number') {
      this.changeHandle(util.accSub(util.accAdd(this.state.value, 0.1), 0.1).toString())
    }
    this.setState({isFocus: false})
  }

  setValue(value) {
    this.setState({value})
  }

  render() {
    const value = this.state.isFocus ? this.state.value : this.state.value + this.label;
    return (
      <div className={styles.container} style={this.props.containerStyle}>
        <span className={styles.opeBtnWrap} onClick={this.decreaseHandle.bind(this)}>
          <span className={styles.opeBtn}>－</span>
        </span>
        <div className={styles.inputWrap}>
          <input className={styles.input}
            ref='textInput'
            placeholder=''
            value={value}
            onFocus={()=>this.setState({isFocus: true})}
            onBlur={this.blurHandle.bind(this)}
            onChange={(e) => { this.changeHandle(e.nativeEvent.target.value) }} />
        </div>
        <span className={styles.opeBtnWrap} onClick={this.increaseHandle.bind(this)}>
          <span className={styles.opeBtn}>＋</span>
        </span>
      </div>
    )
  }
}