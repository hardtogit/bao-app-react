import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import NavBar from '../../../../components/NavBar'
import styles from './index.styl'
import TimeLine from '../../../../components/TimeLine'

class InvestSuccess extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
      this.props.getUser();
  }
    componentWillUnmount(){
      this.props.clearData();
    }
  render() {
    const data = this.props.depositBuyData && this.props.depositBuyData.data || {}
    return (
      <div className={styles.root}>
        <NavBar onLeft={this.props.goBack}>投资成功</NavBar>
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
  getUser(){
     dispatch({
         type:'USER_INFO'
     })
  },
  clearData(){
    dispatch({
        type:'CLEAR_INFO_DATA',
        key:'DEPOSIT_BUY'
    })
  },
  goBack() {
    dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(InvestSuccess))