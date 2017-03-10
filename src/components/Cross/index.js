import React from 'react'
import styles from './index.styl'
import classnames from 'classnames'

export default class Cross extends React.PureComponent {

  render() {
    const {
      // 容器样式
      className,
      // 线条样式
      lineClass,
      // 点击事件
      onClick,
    } = this.props
    return (
      <div onClick={onClick} className={classnames(styles.container, className)}>
        <div className={lineClass}></div>
        <div className={lineClass}></div>
      </div>
    )
  }
}
