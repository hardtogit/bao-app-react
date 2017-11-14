/**
 * BaseInput
 * author lyc
 */
import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import validate from './validate'
import styles from './index.styl'
import PropTypes from 'prop-types'
// limit the type of input
const checkRegs = {
  // 整数或者保留两位小数点的数字
	number: function(value) {
		return /^\d*$/.test(value) || /^\d+\.\d{0,2}$/.test(value)
	},
	tel: function(value) {
		return /^\d*$/.test(value)
	},
  integer: function(value) {
    return /^[1-9]\d*$/.test(value)
  }
}

class BaseInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       value: this.props.defaultValue || ''
    }
    this.disable = false
    this.innerClickFlag = false
    this.validateRu = this.validateRun
  }

  static nameq = "BaseInput";

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    right: PropTypes.element,
    name: PropTypes.string,
    maxValue: PropTypes.number,
    reg: PropTypes.object,
    format: PropTypes.string,
    onInvalid: PropTypes.func,
    borderType: PropTypes.string,
    placeholder: PropTypes.string,
    noleftPadding: PropTypes.bool,     // 是否有左边内边距
    containerStyle: PropTypes.object,
    wrapStyle: PropTypes.object,
    leftTextStyle: PropTypes.object,
    inputStyle:PropTypes.object,
    icon:PropTypes.element
  }

  setValue(value) {
    this.setState({ value })
    this.props.onChange && this.props.onChange(value)
  }

  validateRun(flag) {
    if (flag)
      return this.disable
    return this.validateInstance.validateItem(this.state.value, this.props.reg, this.props.name)
  }

  checkValid() {
    this.disable = this.validateRun().result ? true : false
  }

  shouldComponentUpdate(prevProps, prevState) {
    return !_.isEqual(prevProps, this.props) || !_.isEqual(prevState, this.state)
  }

  onChange(e, changeHandle) {
    const value = e.nativeEvent.target.value
		this.preValue = this.state.value
		this.setState({value: value})
    // if the value is not accord with format of props. recovery previous value
    const format = this.props.format
    if (this.state.value && format && checkRegs[format] && !checkRegs[format](this.state.value)) {
    	this.setState({value: this.preValue})
    }

    // set disable when exceed maxValue
    if (this.props.maxValue != 'undefined' ) {
      var maxValue = Number(this.props.maxValue)
      if (this.state.value > maxValue) {
        this.disable = false
      }
    }

    setTimeout(() => {
      this.checkValid()
      changeHandle && changeHandle(value)
    }, 100)
	}

  onBlur(e, blurHandle) {
    //if (this.innerClickFlag) {
      // if click the inner area of BaseInput, do not validate reg
    //  this.innerClickFlag = false
    //  return false
    //}

    blurHandle && blurHandle()
    const result = this.validateRun()
    if (!result.result) {
      this.props.onInvalid && this.props.onInvalid(result.name, result.value, result.message);
    }

    //innerClickFlag = false;
		this.props.onBlur && this.props.onBlur()
	}

	onFocus(e, focusHandle) {
    focusHandle && focusHandle()
		this.props.onFocus && this.props.onFocus()
	}

	clearValue = () => {
		this.setState({
      value: ''
    })
    this.checkValid()
    this.props.onChange && this.props.onChange('')
	}

  componentDidMount() {
		this.validateInstance = validate()
    this.checkValid()
  }

  blur() {
    this.refs.textInput.blur()
  }

  focus() {
    this.refs.textInput.focus()
  }

  renderLabel() {
    if (!this.props.label) return null
    return (
      <div className={ !this.props.noleftPadding && styles.left }>
        {<span className={styles.leftText} style={this.props.leftTextStyle}>{ this.props.label }</span>}
      </div>
    )
  }

  renderRight() {
    return (
      <div className={styles.right}>
        { this.state.value ?
          <div onClick={ this.clearValue } >
            <img className={styles.rightIcon}
              src={require('./images/delete_icon.png')} />
          </div> : null }
          { this.props.right || null }
      </div>
    )
  }
  render() {
    const props = this.props
    return (
      <div className={cn([
        styles.container, props.borderType && styles[props.borderType],styles[this.props.className]])}
        style={this.props.containerStyle}>
        <div className={styles.wrap} style={this.props.wrapStyle}>
            {
              props.icon
            }
          { this.renderLabel() }
          <div className={styles.center}>
            <input
              ref='textInput'
              className={styles.centerInput}
              style={this.props.inputStyle}
              placeholder={ props.placeholder }
              value={this.state.value}
              id={props.id}
              onChange={(e) => { this.onChange(e, props.onChange) } }
              onBlur={(e) => {this.onBlur(e, props.onBlur) } }
              onFocus={(e) => { this.onFocus(e, props.onFocus) } } />
          </div>
          { this.renderRight() }
        </div>
      </div>
    )
  }
}

export default BaseInput
