/**
 * Tipbar 顶部错误提示条
 * author lyc
 */

import React from 'react'
import cn from 'classnames'
import styles from './index.styl'
import PropTypes from 'prop-types'
class Tipbar extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			disable: true,
			message: ''
		}
	}

	static propTypes = {
		text: PropTypes.string,     // 显示文本
	}

	// componentWillReceiveProps(nextProps) {
	// 	this.setState({disable: false})

	// 	if (this.interval) clearInterval(this.interval)

	// 	this.interval = setInterval(() => {
	// 		this.setState({disable: true})
	// 	}, 2000)
	// }

	open(message,callBackFun) {
		this.setState({disable: false, message})

		if (this.interval) clearInterval(this.interval)

		this.interval = setInterval(() => {
			this.setState({disable: true})
            if(callBackFun&&typeof callBackFun == 'function')
                callBackFun();
		}, 2000)
	}
	componentWillUnmount(){
		if (this.interval){
			clearInterval(this.interval)
		}
	}
	render() {
		if (this.state.disable) return null

		return (
			<div className={cn(styles.Tipbar, this.props.className)}>
				<span className={styles.text}>{this.state.message || this.props.text}</span>
			</div>
		)
	}
}

export default Tipbar