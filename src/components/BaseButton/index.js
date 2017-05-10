/**
 * BaseButton
 * author lyc
 */
import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import styles from './index.styl'
import PropTypes from 'prop-types'
class BaseButton extends React.Component {
	constructor(props) {
		super(props)
	}

  static propTypes = {
    className: PropTypes.string,
    disable: PropTypes.bool,   // 是否可用状态  disable 默认为无效状态
    text: PropTypes.oneOfType([  // 按钮文本
      PropTypes.string,
      PropTypes.object
    ]),            
    white: PropTypes.bool,    // 白色按钮
    onClick: PropTypes.func,     // 点击回调函数
    containerStyle: PropTypes.object
  }

	handleClick = () => {   
    if (this.props.status == 'disable') {
      return false
    }

		this.props.onClick && this.props.onClick()
	}

  renderContent = () => {
    const content = this.props.text || ''
    
    if (typeof content == 'string') {
      return (
        <span className={styles.text} >
          {content}
        </span>
      )
    }

    return content
  }

	render() {
		const content = this.props.text || ''
		return (
			<div className={ cn([styles.button, 
                        this.props.white && styles.buttonWhite,
                        this.props.disable && styles.buttonDisable,
                        this.props.className]) }
          onClick={this.handleClick}
          style={this.props.containerStyle} >
        { this.renderContent() }        
			</div>
		)
	}
}

export default BaseButton
