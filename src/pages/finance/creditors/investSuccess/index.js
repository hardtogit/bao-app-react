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
    componentDidMount(){
        this.props.getUser();
    }
    componentWillUnmount(){
        this.props.clearData();
    }
  render() {
    const data = this.props.creditorsData && this.props.creditorsData.data || {}
    return (
      <div className={styles.root}>
        <NavBar onLeft={this.props.goBack}>出借成功</NavBar>
        <div className={styles.content}>
          <div className={styles.amount}>
            <span>出借金额</span>
            <span>¥{ this.props.location.query.money}</span>
          </div>
          <div className={styles.timeLine}>
            <TimeLine
              data={[
                {
                  title: '你已出借成功',
                  date: '等待竞标'
                },
                {
                  title: '竞标中',
                  date: '若竞标失败，出借金额退回到账户余额'
                },
                {
                  title: '竞标成功',
                  date: '竞标成功后当日计息',
                  curStep: true
                }
              ]}
            />
          </div>
        </div>
        <div onClick={() => {this.props.push('/Creditors')}} className={styles.finish}>完成</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    creditorsData: state.infodata.getIn([actionTypes.CREDITORS_BUY, 'data'])
  }
}

const mapDispatchToProps = (dispatch) => ({
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
            key:'CREDITORS_BUY'
        })
    },
  goBack() {
    dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(InvestSuccess))