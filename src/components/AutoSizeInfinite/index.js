import React from 'react'
import Dimensions from 'react-dimensions'
import Infinite from 'react-infinite'
import styles from './index.styl'

/**
  封装 react-infinite 和 react-dimensions ，实现自动填充满父组件
  注意： 1. 父组件必须是 display: flex;
        2. 文档地址 https://github.com/seatgeek/react-infinite
*/
@Dimensions({
  containerStyle: {},
  className: styles.fill
})
class AutoSizeInfinite extends React.Component {
  render() {
    return (
      <Infinite {...this.props}></Infinite>
    )
  }
}

export default AutoSizeInfinite
