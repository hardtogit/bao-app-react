import React from 'react'
import cn from 'classnames'
import styles from './index.styl'
export default ({children, className, style}) => (
  <div className={cn(styles.page, className)} style={style}>{children || ''}</div>
)
