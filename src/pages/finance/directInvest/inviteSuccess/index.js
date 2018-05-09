import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import wrap from '../../../../utils/pageWrapper'
import * as actionTypes from '../../../../actions/actionTypes'
import NavBar from '../../../../components/NavBar'
import styles from '../../deposit/investSuccess/index.styl'
import TimeLine from '../../../../components/TimeLine'
import RedPacket from '../../../../components/RedPacket'
class InvestSuccess extends React.Component {
  constructor(props) {
    super(props)
  }
    componentDidMount(){
        this.props.getUser();
        console.log(this.props)
    }
    componentWillUnmount(){
        this.props.clearData();
    }
  render() {
    const data = this.props.directInvestData && this.props.directInvestData.data || {}
    return (
      <div className={styles.root}>
        <NavBar onLeft={this.props.goBack}>出借成功</NavBar>
        <RedPacket  productId={this.props.location.query.productId} num={this.props.location.query.num} productType={this.props.location.query.access_sys&&4||3}></RedPacket>
        <div className={styles.content}>
          <div className={styles.amount}>
            <span>出借金额</span>
            <span>¥{ this.props.params.money}</span>
          </div>
          <div className={styles.timeLine}>
            <TimeLine
              data={[
                {
                  title: '你已出借成功',
                  date: data.date || ''
                },
                {
                  title: '竞标中',
                  date: '若竞标失败，出借金额退回到账户余额'
                },
                {
                  title: '竞标成功',
                  date: '竞标成功后进行复审',
                  curStep: true
                },
                {
                  title: '复审中',
                  date: '若复审失败，出借金额退回到账户余额',
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
    getUser(){
        dispatch({
            type:'USER_INFO'
        })
    },
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'DIRECTINVEST_BUY'
        })
    },
  goBack() {
    dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(InvestSuccess))