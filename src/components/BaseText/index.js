/**
 * BaseText
 * author lyc
 */
import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import styles from './index.styl'

class BaseText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue || '',
    }

    this.validateRu = this.validateRun
  }
    static nameq = "BaseText";
  static propTypes = {
    className: React.PropTypes.string,
    defaultValue: React.PropTypes.string,   // 默认值
    label: React.PropTypes.string,          // 左侧文本
    content: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),                                     // 中间内容　
    right: React.PropTypes.oneOfType([      // 右侧图标
      React.PropTypes.bool,
      React.PropTypes.element
    ]),
    borderType: React.PropTypes.string,    // 边框类型
    onClick: React.PropTypes.func,         // 点击触发事件
    onChange: React.PropTypes.func,        // 值发生变化触发事件
    containerStyle: React.PropTypes.object,
    contentStyle: React.PropTypes.object,
  }

  validateRun() {
    return !this.state.value ? { result: false } : { result: true }
  }

  setValue(value) {
    if (value) {
      this.setState({ value })
      this.props.onChange && this.props.onChange(value)
    }
  }

  clickHandle = () => {
    this.props.onClick && this.props.onClick()
  }

  renderLeft() {
    return (
      <div className={styles.left}>
        {this.props.label && <span style={this.props.leftStyle} className={styles.leftText}>{this.props.label}</span>}
      </div>
    )
  }

  renderContent() {
    const content = this.props.content
    let children

    if (content) {
      if (typeof content == 'object') {
        children = content
      } else {
        children = <span className={styles.contentText} style={this.props.contentStyle}>{content}</span>
      }
    }

    return (
      <div className={cn(styles.content)}>
        {children}
      </div>
    )
  }

  // 右侧显示内容
  renderRight() {
    const right = this.props.right

    if ( right === false ) 
      return null

    return (
      <div className={styles.right}>
        { typeof right == 'object' ? right : 
          <img className={styles.arrowIcon} src={require('../../assets/images/arrow2.png')} /> }
      </div>
    )
  }

  render() {
    const props = this.props
    const borderType = props.borderType

    return (
      <div 
        className={cn([styles.container, borderType && styles[borderType], props.className])}
        style={this.props.containerStyle} >
        <div className={styles.wrap} onClick={this.clickHandle}>
          { this.renderLeft() }
          { this.renderContent() }
          { this.renderRight() }
        </div>
      </div>
    )
  }
}

export default BaseText
