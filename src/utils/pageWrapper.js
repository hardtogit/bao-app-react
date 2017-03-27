import React from 'react'
import styles from '../components/Page/index.styl'
export default Component => props => (
  <div className={styles.page}>
    <Component {...props} />
  </div>
)
