/**
 * success dialog
 *
 */
import React from 'react'
import cn from 'classnames'
import Boron from '../../customized_node_modules/boron'
import Dialog from './index'
import helper from './helper.js'
import styles from './index.styl'

export default class Success extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {}
    }
  }

  static propTypes = {
    time: React.PropTypes.number,           // 关闭时间
    text: React.PropTypes.string,           // 文本
    mode: React.PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal']),
    callback: React.PropTypes.func,
  }

  static defaultProps = {
    mode: 'ScaleModal'
  }


  show = (options) => {
    this.setState({options})
    this.refs.dialog.show()

    if (this.timer) {
      this.clearTimer()
    }

    this.timer = setTimeout(() => {
      this.state.options.callback&&this.state.options.callback()||this.props.callback ? this.props.callback() : this.refs.dialog.hide()
    }, this.state.options.time || 2000)
  }

  hide = () => {
    this.refs.dialog.hide()
  }

  clearTimer = () => {
    clearTimeout(this.timer)
    this.timer = null
  }

  componentWillUnmount() {
    if (this.timer) {
      this.clearTimer()
    }
  }

  render() {
    const options = this.state.options
    const Modal = Boron[this.props.mode]
    return (
      <Modal ref='dialog' closeOnClick={false} className={styles.successDialog} contentStyle={{backgroundColor: 'transparent'}}>
        <div className={cn(styles.modal, styles.successModal)}>
          <img className={styles.successIcon} src={require('./images/bigok.png')} />
          <span className={styles.successTitle}>{options.text}</span>
        </div>
      </Modal>
    )
  }
}
