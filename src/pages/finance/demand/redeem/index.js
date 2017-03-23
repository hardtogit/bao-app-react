import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import styles from './index.styl'
import NavBar from '../../../../components/NavBar'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import {Motion, spring, presets} from 'react-motion'

class DemandRedeem extends React.Component {

  componentDidMount() {
    this.refs.input.focus()
    this.props.init()
  }

  render() {
    const {
      myDemand: {
        total,
        freeQuota,
      }
    } = this.props
    return (
      <div className={styles.root}>
        <NavBar>
          活期宝赎回
        </NavBar>
        <div className={styles.form}>
          <p className={styles.title}>赎回到余额</p>
          <div className={styles.content}>
            <p>赎回金额（元）</p>
            <div onClick={() => this.refs.input.focus()} className={styles.input}>
              <span>￥</span>
              <div className={styles.wrapper}>
                <input ref="input" type="text" onChange={(e) => console.log(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <Motion defaultStyle={{x: 0}} style={{x: spring(+total || 0, presets.stiff)}}>
              {value => <span>活期宝资产{value.x.toFixed(2)}元</span>}
            </Motion>
            <span>今日还有{freeQuota}次赎回机会</span>
          </div>
        </div>
        <div className={styles.next}>
          <button>下一步</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myDemand: state.infodata.getIn([actionTypes.DEMAND_ACCOUNT_DETAIL, 'data']) && state.infodata.getIn([actionTypes.DEMAND_ACCOUNT_DETAIL, 'data']).data || {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  },

  init() {
    dispatch({type: actionTypes.DEMAND_ACCOUNT_DETAIL})
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(DemandRedeem))
