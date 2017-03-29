/**
 * VerifyCode
 * author lyc
 */
import React from 'react'
import cn from 'classnames'
import lodash from 'lodash'
import styles from './index.styl'

class VerifyCode extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
	      active: true,
	      count: 0,
		 text:'发送验证码',
	     time:0
		}
		this.exitTime = ''
	}

	static propTypes = {
	    label: React.PropTypes.string,      // 文本
	    countdown: React.PropTypes.number,  // 倒计时时长
	    format: React.PropTypes.string,     // 验证码显示文本
	    onClick: React.PropTypes.func,       // 点击事件
	    containerStyle: React.PropTypes.object, 
		containerDisableStyle: React.PropTypes.object,
		textStyle: React.PropTypes.object,
	    textDisableStyle: React.PropTypes.object,
	}

	static defaultProps = {
	    label: '重新发送', // 默认文字显示
	    countdown: 60,  // 默认的倒计时时长
	    format: '$timeS' // 正在发送状态时的文字显示
	}

	tick() {
	    const {count,time} = this.state;
	    if (count > 0) {
	      this.setState({count: count-1})
	    } else {
	      this.setState({active: true,time:time+1})
	      clearInterval(this.interval)
	    }
  	}

	setInterval() {
		this.interval = setInterval(this.tick.bind(this), 1000)
	}

	handleClick() {
	    if (this.state.active) {
	      	this.setState({active: false, count: this.props.countdown || this.props.countdown});
	      	this.setInterval()
	      	if (this.props.onClick && this.props.onClick() == false) {
	        	this.setState({active: true, count: 0})
	      	}
	    }
	}

	handleAppStateChange = (currentAppState) => {
		if (currentAppState == 'inactive') {
			this.exitTime = new Date().getTime()
		} else if (currentAppState == 'background') {
			this.exitTime = new Date().getTime()
		} else if (currentAppState == 'active') {
			if (!this.exitTime) return false
			const seconds = Math.round((new Date().getTime() - this.exitTime)/1000)
			if (seconds <= this.state.count) {
				this.setState({count: this.state.count - seconds})
			} else {
				this.setState({active: true, count: 0})
	      clearInterval(this.interval)
			}
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

  	renderActiveStatus() {
	    const {label,init} = this.props;
	    const {text,time}=this.state;
	    let Stext=label;
	    if (init&&time==0){
	    	Stext=text
		}
	    return 	(
	    	<div className={cn(styles.verifyCode, this.props.className)} style={this.props.containerStyle} onClick={this.handleClick.bind(this)}>
				<span className={styles.text} style={this.props.textStyle}>{Stext}</span>
			</div>
		)
  	}

  	renderUnactiveStatus(count) {
	   	const text = (this.props.format || this.props.format).replace(/\$time/, count)
	    return (
	    	<div className={cn(styles.verifyCode, styles.verifyCodeDisable, this.props.className)} style={this.props.containerDisableStyle}>
				<span className={cn(styles.text, styles.textDisable)} style={this.props.textDisableStyle}>{text}</span>
			</div>
		)
  	}

	render() {
		if (this.state.active) {
			return this.renderActiveStatus(styles);
		}
		return this.renderUnactiveStatus(this.state.count, styles)
	}

	open() {
		this.handleClick()
	}
}

export default VerifyCode
