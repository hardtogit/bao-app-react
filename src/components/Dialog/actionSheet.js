import React from 'react'
import Boron from '../../customized_node_modules/boron'
import styles from './index.styl'
import PropTypes from 'prop-types'
export default class ActionSheet extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			chosen: this.props.chosen || '',
			visible: this.props.visible || false
		}
	}

	static propTypes = {
		options: PropTypes.array.isRequired,
		visible: PropTypes.bool.isRequired,
		disable: PropTypes.oneOfType([
		    PropTypes.string,
		    PropTypes.number,
		    PropTypes.array,
	    ]),
	    //modalWillClose: PropTypes.func.isRequired,
	    onSelectPay: PropTypes.func,
	    onClose: PropTypes.func
	}

  	static defaultProps = {
    	mode: 'DropModal'
  	}

  	componentWillReceiveProps(nextProps) {
  		if (nextProps.visible) {
  			this.show()
  		} else {
  			this.hide()
  		}

  		this.setState({chosen: nextProps.chosen})
  	}

  	show = () => {
  		this.refs.actionSheet && this.refs.actionSheet.show()
  	}

  	hide = () => {
  		this.refs.actionSheet && this.refs.actionSheet.hide()
  	}

  	selectItem(index) {
  		if (index + 1 == this.state.chosen) {
  			this.hide()
  		} else {
  			this.setState({
  				chosen: index + 1
  			})
  			this.hide()
  			this.props.onSelectPay && this.props.onSelectPay.call(null, index + 1)
  		}
  	}

  	renderOption(option, index) {
  		let disable = false

  		if (this.props.disable) {
  			if (typeof this.props.disable === 'string' || typeof this.props.disable === 'number') {
		        disable = +this.props.disable === index + 1
		    }else {
		        disable = this.props.disable.indexOf(index + 1) !== -1
		    }
  		}

  		if (disable)
  			return (<li key={index} className={styles.disableItem}>{option}</li>)

  		if (this.props.chosen == index + 1)
  			return (<li key={index} className={styles.selectItem}>{option}</li>)

  		return (<li key={index} onClick={() => this.selectItem(index)}>{option}</li>)
  	}

	render() {
		const Modal = Boron[this.props.mode]
		return (
			<Modal 
				ref='actionSheet'
				onHide={this.props.onClose}
				modalStyle={{padding: '25px 0', transform: 'none', animation: 'none', backgroundColor: '#fff', width: '100%', bottom: 0, left: 0, top: 'auto'}}>
				<ul className={styles.asList}>
					{this.props.options && this.props.options.map((option, i) => this.renderOption(option, i))}
				</ul>
			</Modal>
		)
	}
}