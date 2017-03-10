import React from 'react'
import Loaders from '../../../customized_node_modules/halogen'
import styles from './index.styl'

export default () => (
  <div className={styles.root}>
    {Object.keys(Loaders).map((key, i) => {
      console.log(key, i + 1)
      const Component = Loaders[key]
      const size = /pacman/i.test(key) ? 30 : '30px'
      return <div key={key}>{key}<Component color="#00a6e2" size={size}></Component></div>
    })}
  </div>
)
