import React from 'react'
import styles from './index.styl'

export default class Loading extends React.Component {

  static propTypes = {
    text: React.PropTypes.string 
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
