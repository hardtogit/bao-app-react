/**
 * confirm dialog
 * 
 */
import React from 'react'
import Dialog from './index'
import helper from './helper.js'
import styles from './index.styl'

export default class ConfirmDialog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			options: {}
		}
	}

	static propTypes = {
		title: React.PropTypes.string,             // 标题
		content: React.PropTypes.oneOfType([       // 内容
			React.PropTypes.string,
			React.PropTypes.element
		]),
		okText: React.PropTypes.string,             // 确认按钮文本 （右侧按钮）
		okCallback: React.PropTypes.func,           // 确定回调函数
		cancelText: React.PropTypes.string,         // 取消按钮文本（左侧按钮）
		cancelCallback: React.PropTypes.func,       // 取消回调函数
	}

	show(options) {
		this.setState({options: options})
		this.refs.dialog.show()
	}

	hide() {
		this.refs.dialog.hide()
	}

	okHandle = () => {
		const options = this.state.options
		options.okCallback && options.okCallback.call(null)
		this.hide()
	}

	cancelHandle = () => {
		const options = this.state.options
		options.cancelCallback && options.cancelCallback.call(null)
		this.hide()
	}

	render() {
		const options = this.state.options
		return (
			<Dialog ref='dialog'>
				<div className={styles.modal} style={{width: helper.getWidth()}}>
					{ options.title ?
					<p className={styles.title}>{options.title}</p> : null }
					<div className={styles.content}>
						{ React.isValidElement(options.content) ? options.content :
						<div className={styles.contentWrap}> {options.content} </div> }
					</div>
					<div className={styles.bottom}>
						<span onClick={this.cancelHandle} className={styles.cancelBtn}>{options.cancelText || '取消'}</span>
						<span onClick={this.okHandle} className={styles.okBtn}>{options.okText || '确定'}</span>
					</div>
				</div>
			</Dialog>
		)
	}
}