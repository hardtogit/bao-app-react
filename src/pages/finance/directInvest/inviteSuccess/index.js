import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import NavBar from '../../../../components/NavBar'
import styles from '../../deposit/investSuccess/index.styl'
import TimeLine from '../../../../components/TimeLine'
import Utils from '../../../../utils/utils.js'

class InvestSuccess extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.directInvestData && this.props.directInvestData.data || {}
    return (
      <div className={styles.root}>
        <NavBar>投资成功</NavBar>
        <div className={styles.content}>
          <div className={styles.amount}>
            <span>投资金额</span>
            <span>¥{ data && data.money || ''}</span>
          </div>
          <div className={styles.timeLine}>
            <TimeLine
              data={[
                {
                  title: '你已投资成功',
                  date: data.date || ''
                },
                {
                  title: '竞标中',
                  date: '若竞标失败，投资金额退回到账户余额'
                },
                {
                  title: '竞标成功',
                  date: '竞标成功后进行复审',
                  curStep: true
                },
                {
                  title: '复审中',
                  date: '若复审失败，投资金额退回到账户余额',
                  curStep: true
                },
                {
                  title: '复审通过',
                  date: '复审通过后当日开始计息',
                  curStep: true
                }
              ]}
            />
          </div>
        </div>
        <div onClick={() => {this.props.push('/MyDirectProjects')}} className={styles.finish}>完成</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    directInvestData: state.infodata.getIn([actionTypes.DIRECTINVEST_BUY, 'data'])
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