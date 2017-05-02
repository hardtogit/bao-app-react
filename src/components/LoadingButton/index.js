import React from 'react'
import styles from './index.styl'
import PropTypes from 'prop-types'
export default class Loading extends React.Component {

  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.indicator} src={require('./images/default.gif')} />
        <span className={styles.text}>{this.props.text}</span>
      </div>
    )
  }
}
