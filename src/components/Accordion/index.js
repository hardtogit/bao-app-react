/**
 * 
 */

import React from 'react'
import styles from './index.styl'
import cn from 'classnames'
import PropTypes from 'prop-types'
class BDAccordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  static propTypes = {
    titleText: PropTypes.string.isRequired, // 标题
    contentText: PropTypes.string.isRequired, // 内容
    titleTextStyle: PropTypes.object, // 标题样式
    contentTextStyle: PropTypes.object, // 内容样式
    titleBarStyle: PropTypes.object, // 标题栏样式
    imageStyle: PropTypes.object, // 右边图片样式
  }

  onChange = () => {
    this.setState({
      isOpen: ! this.state.isOpen
    })
  }

  renderHeader(section) {
    return (
      <div>
        <div className={styles.titleBar} onClick={this.onChange}>
          <span className={styles.titleText}>{section.title}</span>
          <img src={require('../../assets/images/arrow2.png')} className={cn(styles.turnIcon, styles.turnIconDown)} />
        </div>
        <div className={cn(styles.line, !this.state.isOpen && styles.lineIndent)}></div>
      </div>
    )
  }

  renderContent(section) {
    if (!this.state.isOpen) return null

    return (
      <div className={styles.content}>
        <span className={styles.contentText}>{section.content}</span>
      </div>
    )
  }

  render() {
    const sections = {
      title: this.props.titleText,
      content: this.props.contentText,
    }

    return (
      <div className={styles.Accordion}>
        {this.renderHeader(sections)}
        {this.renderContent(sections)}
      </div>
    )
  }
}

export default BDAccordion
