/**
 * loading dialog
 * author lyc
 */
import React from 'react'
import cn from 'classnames'
import Boron from '../../customized_node_modules/boron'
import Dialog from './index'
import helper from './helper.js'
import styles from './index.styl'
import PropTypes from 'prop-types'
class Loading extends React.Component {

	static propTypes = {
		text: PropTypes.string,
    mode: PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal'])
	}

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  static defaultProps = {
    mode: 'ScaleModal'
  }

  show(text) {
    this.setState({text})
    this.refs.dialog.show()
  }

  hide() {
    this.refs.dialog.hide()
  }

  componentWillUnmount() { }

	setText = (text) => {
		this.refs.text.setText(text)
	}

  render() {
    const options = this.state.options
    const Modal = Boron[this.props.mode]

    return (
      <Modal ref='dialog' closeOnClick={false} className={styles.successDialog} contentStyle={{backgroundColor: 'transparent'}} >
        <div className={cn(styles.modal, styles.successModal)}>
          <img src={require('./images/default.gif')} style={{marginTop: 30, width: 30 , height: 30}} />
          <span className={styles.successTitle}>{this.state.text}</span>
        </div>  
      </Modal>
    )
  }
}

export default Loading
