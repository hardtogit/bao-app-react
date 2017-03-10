import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import styles from './index.styl'
import NavBar from '../../../../components/NavBar'
import wrap from '../../../../utils/pageWrapper'

class InvestFail extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <NavBar
          noBack
        >
          投资失败
        </NavBar>
        <div className={styles.center}>
          <span className={styles.x}>×</span>
          <p className={styles.p1}>投资失败</p>
          <p className={styles.p2}>当前剩余份数不足，购买金额已退回到账户余额</p>
          <button>重新投资</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(InvestFail))
