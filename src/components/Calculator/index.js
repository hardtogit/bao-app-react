import React from 'react'
import _ from 'lodash'
import styles from './index.styl'
import Cross from '../Cross'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import cn from 'classnames'
import './transition.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'
export default class Calculator extends React.Component {

  static propTypes = {
    unit: PropTypes.oneOf(['d', 'm', 'day', 'month']).isRequired,
    rate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    term: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    amount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    termFixed: PropTypes.bool,
    rateMap: PropTypes.array,
  }

  state = {
    _active: false,
    rate: this.props.rate,
    amount: this.props.amount,
    term: this.props.term,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rate !== this.state.rate) {
      this.setState({rate: nextProps.rate})
    }

    if (nextProps.amount !== this.state.amount) {
      this.setState({amount: nextProps.amount})
    }

    if (nextProps.term !== this.state.term) {
      this.setState({term: nextProps.term})
    }

  }

  show = () => this.setState({_active: true})

  hide = () => this.setState({_active: false})

  toggle = () => this.setState({_active: !this.state._active})

  handleAmount = e => {
    const val = e.target.value
    if (isNaN(+val)) return
    this.setState({amount: val})
  }

  handleTerm = e => {
    const val = e.target.value
    if (isNaN(+val)) return
    this.setState({term: val})
  }

  calculateProfit = () => {
    const {
      unit,
    } = this.props
    const {
      rate,
      amount,
      term,
    } = this.state
    const wholeYear = /d/.test(unit) ? 365 : 12
    return _.round(+amount * (+term / wholeYear) * (+rate / 100), 2)
  }

  handleTermChoose = () => {
    if (!this.props.rateMap) return
    this.refs.select.show()
  }

  changeTerm = ({rate, term}) => this.setState({rate, term})

  render() {
    const {
      unit,
      termFixed,
      rateMap,
      modalStyle,
      modalBody,
    } = this.props
    const {
      rate,
    } = this.state
    return (
      <ReactCSSTransitionGroup
        transitionName="calculator"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {this.state._active && (
          <div onClick={this.hide} className={classNames(styles.modal,modalStyle)}>
            <div onClick={e => e.stopPropagation()} className={classNames(styles.container,modalBody)} style={{width: window.innerWidth}}>
              <Cross
                className={styles.cross}
                lineClass={styles.crossLine}
                onClick={this.hide}
              />
              <p className={styles.p1}>参考回报</p>
              <p className={styles.p2}>¥{this.calculateProfit()}</p>
              <div className={styles.form}>
                <div className={styles.row}>
                  <span>买入金额</span>
                  <input
                    ref="amount"
                    type="tel"
                    maxLength={10}
                    value={this.state.amount}
                    onChange={this.handleAmount}
                  />
                  <span>元</span>
                </div>
                <div className={styles.border}></div>
                <div onClick={this.handleTermChoose} className={styles.row}>
                  <span>买入期限</span>
                  <input
                    ref="term"
                    type="tel"
                    maxLength={5}
                    value={this.state.term}
                    onChange={this.handleTerm}
                    disabled={!!termFixed || !!rateMap}
                  />
                  <span>{/d/.test(unit) ? '天' : '个月'}</span>
                </div>
              </div>
              <p className={styles.p3}>参考年化回报：{rate}%</p>
            </div>
            <OverlaySelect
              ref="select"
              rate={rate}
              rateMap={rateMap}
              changeTerm={this.changeTerm}
              unit={unit}
            />
          </div>
        )}
      </ReactCSSTransitionGroup>
    )
  }
}

class OverlaySelect extends React.PureComponent {

  state = {
    _active: false,
  }

  show = () => this.setState({_active: true})

  hide = () => this.setState({_active: false})

  toggle = () => this.setState({_active: !this.state._active})

  render() {
    const {
      rate,
      rateMap,
      changeTerm,
      unit,
    } = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName="select"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        >
        {this.state._active && (
          <div onClick={e => {
            e.stopPropagation()
            this.hide()
          }} className={styles.selectRoot}>
            <div onClick={e => e.stopPropagation()} className={styles.box}>
              {rateMap.map((item, i) => {
                const active = +rate === +item.rate
                return (
                  <div onClick={() => {
                    changeTerm(item)
                    this.hide()
                  }} key={i} className={cn(styles.row, active && styles.active)}>
                    <div className={cn(styles.radioButton, active && styles.active)}></div>
                    {item.term}{/d/.test(unit) ? '天' : '个月'}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </ReactCSSTransitionGroup>
    )
  }
}
