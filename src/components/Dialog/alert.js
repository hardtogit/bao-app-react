/**
 * alert dialog
 *
 */
import React from 'react'
import Dialog from './index'
import helper from './helper.js'
import styles from './index.styl'
import close from '../../assets/images/calclose.png'
import PropTypes from 'prop-types'
export default class AlertDialog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			options: {
				content: props.content,
				title: props.title,
				okText: props.okText,
				okCallback: props.okCallback,
                cancel:props.cancel,
                cancelCallback:props.cancelCallback,
                closeFn:props.closeFn,
                close:props.close
			}
		}
	}

	static propTypes = {
		title: PropTypes.string,             // 标题
		content: PropTypes.oneOfType([       // 内容
			PropTypes.string,
			PropTypes.element
		]),
		okText: PropTypes.string,             // 按钮文本
        cancel:PropTypes.string,              // 取消文本
		okCallback: PropTypes.func,           // 确定回调
        cancelCallback:PropTypes.func,
        closeFn:PropTypes.func,
        close:PropTypes.bool
	}

	show(options){
		this.setState({options: options})
		this.refs.dialog.show()
	}
    cancel=()=>{
         const {
             cancelCallback
		 }=this.state.options;
         cancelCallback&&cancelCallback()
         this.refs.dialog.hide()
	}
	okHandle = () => {
		const options = this.state.options;
        const returns=options.okCallback && options.okCallback.call(null)||null;
        if (!returns){
            this.refs.dialog.hide()
		}
	}
    closeFn=()=>{
        const options = this.state.options
        options.closeFn && options.closeFn.call(null);
        this.refs.dialog.hide()
	}
    hasCancel=(options)=>{
		return(
			<div className={styles.bottom}>
				<span onClick={this.cancel}>{options.cancel}</span>
				<span onClick={this.okHandle}>{options.okText}</span>
			</div>
		)
	}
	close=()=>{
		return(<div className={styles.close}><span onClick={this.closeFn}><img src={close} className={styles.closeIcon}/></span></div>)
	}
	render() {
		const options = this.state.options
		return (
			<Dialog ref='dialog'>
				<div className={styles.modal} style={{width: helper.getWidth()}}>
					{options.close&&this.close()}
					{ options.title ?
					<p className={styles.title}>{options.title}</p> : null }
					<div className={styles.content}>
						{ React.isValidElement(options.content) ? options.content :
						<div className={styles.contentWrap}> {options.content} </div> }
					</div>
					{
						options.cancel&&this.hasCancel(options)||<div className={styles.bottom}>
							<span onClick={this.okHandle} className={styles.okBtn}>{options.okText}</span>
						</div>
					}
				</div>
			</Dialog>
		)
	}
}
