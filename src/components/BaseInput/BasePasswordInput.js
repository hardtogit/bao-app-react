/**
 * BaseInput
 * 
 */
import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import validate from './validate'
import styles from './index.styl'

class BasePasswordInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       value: this.props.defaultValue || '',
       status: true
    }
    this.disable = false
    this.innerClickFlag = false
    this.validateRu = this.validateRun
  }

  static propTypes = {
    className: React.PropTypes.string,
    noleftPadding: React.PropTypes.bool,     // 是否有左边内边距
    label: React.PropTypes.string,
    right: React.PropTypes.element,
    name: React.PropTypes.string,
    maxValue: React.PropTypes.number,
    reg: React.PropTypes.object,
    onInvalid: React.PropTypes.func,
    borderType: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    noleftPadding: React.PropTypes.bool,     // 是否有左边内边距
    containerStyle: React.PropTypes.object,
    leftTextStyle: React.PropTypes.object,
     icon:React.PropTypes.element,
      imgSty:React.PropTypes.object
  }

  setValue(value) {
    this.setState({ value })
    this.props.onChange && this.props.onChange(value)
  }

  validateRun(flag) {
    if (flag)
      return this.disable

    return this.validateInstance.validateItem(this.state.value, this.props.reg, this.props.name,
      this.props && this.props.parent && this.props.reg.equalTo && this.props.parent.getValue())
  }

  checkValid() {
    this.disable = this.validateRun().result ? true : false
  }

  shouldComponentUpdate(prevProps, prevState) {
    return !_.isEqual(prevProps, this.props) || !_.isEqual(prevState, this.state)
  }

  onChange(e, changeHandle) {
    const value = e.target.value
    this.preValue = this.state.value
    this.setState({value: value})
    //this.props.setValue && this.props.setValue(e.nativeEvent.text)

    // set disable when exceed maxValue
    if (this.props.maxValue != 'undefined' ) {
      var maxValue = Number(this.props.maxValue)
      if (this.state.value > maxValue) {
        this.disable = false
      }
    }

    setTimeout( () => { 
      this.checkValid()
      changeHandle && changeHandle(value)
    }, 100)
  }

  onBlur(e, blurHandle) {
    // if (this.innerClickFlag) {
    //   // if click the inner area of BaseInput, do not validate reg
    //   this.innerClickFlag = false
    //   return false
    // }

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

  switchShowStatus = () => {
    this.setState({
      status: !this.state.status,
      //value: this.state.value
    })

   // this.setState({value: this.state.value.substring(0, this.state.value.length)})
  }  

  componentDidMount() {
		this.validateInstance = validate()
    this.checkValid()
  }

  blur() {
    this.refs.textInput.blur()
  }

  renderLeft() {
    if (!this.props.label) return null
    return (
      <div className={ !this.props.noleftPadding && styles.left }>
        {<span className={styles.leftText} style={this.props.leftTextStyle}>{ this.props.label }</span>}
      </div>
    )
  }

  renderRight=()=>{
    const {
      imgSty
    }=this.props
    return (
      <div className={styles.right}>
        <div onClick={this.switchShowStatus} >
          <img
            className={styles.rightIcon}
            style={imgSty}
            src={this.state.status ? require('./images/eye_hide_icon.png') : require('./images/eye_icon.png')} />
        </div>
      </div>
    )
  }


  render() {
    const props = this.props
    return (
      <div className={cn([
        styles.container, props.borderType && styles[props.borderType], 
        this.props.className])}
        style={this.props.containerStyle}>
        <div className={styles.wrap}>
            {
              this.props.icon
            }
          { this.renderLeft() }
          <div className={styles.center}>
            <input
              ref='textInput'
              type={this.state.status ? 'password' : 'text'}
              className={styles.centerInput}
              placeholder={ props.placeholder }
              value={this.state.value}
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

export default BasePasswordInput
