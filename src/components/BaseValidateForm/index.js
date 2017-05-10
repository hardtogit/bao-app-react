/**
 * VertifyForm
 * 表单验证组件 验证BaseInput BasePasswordInput等自定义的组件
 * author lyc
 */
import React from 'react'
import cn from 'classnames'
import BaseInput from '../BaseInput'
import PropTypes from 'prop-types'
class ValidateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: false
    }
  }

  static propTypes = {
    className: PropTypes.string,
    onValid: PropTypes.func,   // 验证成功回调函数
    onInvalid: PropTypes.func, // 验证失败回调函数
  }

  submitHandle() {
		if (!this.state.valid) return
		var result = this.validateRun()

		if (result.result) {
			this.props.onValid()
		} else {
			this.props.onInvalid(result.name, result.value, result.message)
		}
		return false;
  }

  validateRun(initFlag) {
    const regChild = this.regChild
    for(let i = 0; i < regChild.length; i++) {
      //let result = regChild[i].type.prototype.validateRun.call()
      let result = this.refs[regChild[i].ref] ?
                   this.refs[regChild[i].ref].validateRu(initFlag) : {}
      if (!result.result) {
        return (result)
      }
    }
    return {result: true}
  }

  getValue() {
    const regChild = this.regChild
    let result = {}
    for(let i = 0; i < regChild.length; i++) {
      let name, value
      if (name = this.refs[regChild[i].ref] && this.refs[regChild[i].ref].props.name) {
        result[name] = this.refs[regChild[i].ref].state.value
      }
    }
    return result
  }

  checkValid(initFlag) {
		var result = this.validateRun(initFlag)
		if (result.result) {
			this.setState({valid: true})
		} else {
			this.setState({valid: false})
		}
	}

  componentDidMount() {
    this.checkValid(true)
  }

  renderBaseInput=(child, index)=>{
    let onChange = child.props.onChange,
        _this = this,
        innerClickFlag = false

    const ref = child.ref ? child.ref : 'baseInput' + index
    const baseInput = React.cloneElement(child, {onChange: function(e) {
      onChange && onChange(e)
      _this.checkValid()
    }, onInvalid: _this.props.onInvalid, key: index, ref: ref, parent: _this /*child._owner._instance.refs.form*/})
    this.regChild.push({reactElement: baseInput, ref: ref, type: 'BaseInput'})
    return baseInput
  }

  renderBaseText=(child, index)=>{
    let onChange = child.props.onChange,
        _this = this

    const ref = child.ref ? child.ref : 'baseText' + index
    const baseText = React.cloneElement(child, {onChange: function(e) {
      onChange && onChange(e)
      _this.checkValid()
    }, key: index, ref: ref, parent: _this })
    this.regChild.push({reactElement: baseText, ref: ref, type: 'BaseText'})
    return baseText
  }

  /*renderRadioGroup(child, index) {
    let changeHandle = child.props.onChange,
      _this = this
    return React.cloneElement(child, {onChange: function() {
      changeHandle && changeHandle.apply(null, arguments);
      _this.checkValid()
    }, key: index})
  }*/

  renderSubmitButton=(child, index)=>{
    let _this = this
    return React.cloneElement(child, {
      disable: _this.state.valid ? false : true,
      key: new Date().getTime(),
      onClick: _this.submitHandle.bind(_this)
    })
  }

  render() {
    this.regChild = [];
		return (
			<div className={this.props.className}>
        { /* TODO 之后再改 */ }
				{this.props.children.map((child, index)=>{
					const name = child.props.name;
          if (child.props.type == 'validateItem' && child.props.blurValidate != false) {
            if (child.type.nameq == 'BaseInput') {
              return this.renderBaseInput(child, index)
            } else if (child.type.nameq == 'BasePasswordInput') {
              return  this.renderBaseInput(child, index)
            }/*else if (child.type.name == 'radioGroup') {
              return _this.renderRadioGroup(child, index)
            } */ else if (child.type.nameq == 'BaseText') {
              return this.renderBaseText(child, index)
            }
          } else  if (child.props.type == 'submit') {
            return this.renderSubmitButton(child, index)
					} else {
						return child
					}
				})}
			</div>
		)
	}
}

export default ValidateForm
