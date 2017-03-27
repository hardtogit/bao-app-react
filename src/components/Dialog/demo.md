## usage

import React from 'react'
import AlertDialog from './alert'
import ConfirmDialog from './alert'
import ReddemDialog from './alert'
import SuccessDialog from './alert'

export default Demo extends React.Component {
	constructor(props) { super(props) }

	alertHandle = () => {
		this.refs.alertDialog.open({
			title: '',
			content: '',
			okText: '',
			okCallback: () => {}
		})
	}

	confirmHandle = () => {
		this.refs.confirmDialog.open({
			title: '',
			content: '',
			okText: '',
			okCallback: () => {},
			cancelText: '',
			cancelCallback: () => {},
		})
	}

	reddemHandle = () => {
		this.refs.reddemDialog.open({
			title: '',
			money: '',
			okText: '',
			okCallback: () => {},
			cancelText: '',
			cancelCallback: () => {},
			placeholder: '',
			detailText: ''
		})
	}

	successHandle = () => {
		this.refs.successDialog.open({
			text: '',
		})
	}		


	render() {
		return (
			<div>
				<button onClick={this.alertHandle}>test alert</button>
				<button onClick={this.confirmHandle}>test confirm</button>
				<button onClick={this.reddemHandle}>test reddem</button>
				<button onClick={this.successHandle}>test success</button>
				<AlertDialog ref='alertDialog' />
				<ConfirmDialog ref='confirmDialog' />
				<ReddemDialog ref='reddemDialog' />
				<SuccessDialog ref='successDialog' />
			</div>
		)
	}
}