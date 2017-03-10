import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import NavBar from '../../../../components/NavBar'
import styles from './index.styl'
import TimeLine from '../../../../components/TimeLine'
import Utils from '../../../../utils/utils.js'

class InvestSuccess extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.depositBuyData && this.props.depositBuyData.data || {}
    return (
      <div className={styles.root}>
        <NavBar>投资成功</NavBar>
        <div className={styles.content}>
          <div className={styles.amount}>
            <span>投资金额</span>
            <span>¥{ data && data.amount || ''}</span>
          </div>
          <div className={styles.timeLine}>
            <TimeLine
              data={[
                {
                  title: '你已投资成功',
                  date: data && data.buy_time || ''
                },
                {
                  title: '起息日',
                  date: data && data.start_date || ''
                },
                {
                  title: '到期日',
                  date: data && data.maturityDate || '',
                  curStep: true
                },
              ]}
            />
          </div>
        </div>
        <div onClick={() => {this.props.push('/user/setting/Manage')}} className={styles.finish}>完成</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    depositBuyData: state.infodata.getIn([actionTypes.DEPOSIT_BUY, 'data'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(InvestSuccess))