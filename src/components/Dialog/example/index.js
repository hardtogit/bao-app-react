import React from 'react'
import Dialog from '../'
import styles from './index.styl'

export default class Example extends React.Component {

  toggle = () => this.refs.dialog.toggle()

  render() {
    return (
      <div className={styles.root}>
        <button onClick={this.toggle}>Open</button>
        <Dialog ref="dialog">
          <div className={styles.dialog} onClick={this.toggle}>
            content
          </div>
        </Dialog>
      </div>
    )
  }
}
