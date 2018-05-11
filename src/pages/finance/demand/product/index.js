import React from 'react'
import NavBar from '../../../../components/NavBar'
import styles from './index.styl'
import arrow from '../../../../assets/images/arrow2.png'
import arrowDetail from '../../../../assets/images/arrowdetail.png'
import { connect } from 'react-redux'
import wrap from '../../../../utils/pageWrapper'
import {Motion, spring, presets} from 'react-motion'
import {push, goBack} from 'react-router-redux'
import {DEMAND_DETAIL, RATE, USER_INFO} from '../../../../actions/actionTypes'
import Calculator from '../../../../components/Calculator'

class ProductDetail extends React.Component {

  state = {
    descActive: false
  }

  componentDidMount() {
    this.props.init()
  }

  render() {
    const {
      push,
      pop,
      rate,
      detail,
      userInfoCode,
    } = this.props
    let total = 0
    let demandRate = 0
    if (detail) total = detail.data.total
    if (rate) demandRate = rate.data.demand
    return (
      <div className={styles.root}>
        <NavBar onLeft={pop}>零钱宝详情</NavBar>
        <div className={styles.header}>
          <p>参考年回报率</p>
          <Motion defaultStyle={{x: 0}} style={{x: spring(+demandRate || 0, presets.stiff)}}>
            {value => <p>{value.x.toFixed(2)}<span>%</span></p>}
          </Motion>
          <Motion defaultStyle={{x: 0}} style={{x: spring(+total || 0, presets.stiff)}}>
            {value => <p>累计加入{value.x.toFixed(0)}人</p>}
          </Motion>
        </div>
        {userInfoCode != 100 && <p className={styles.newUser}>新手注册送800元抵用券</p>}
        <div className={styles.row} style={{backgroundColor: '#fff'}}>
          <span>投标范围</span>
          <span className={styles.notice}>机构担保标</span>
          <span onClick={() => push('/demand-related-projects')}>本期涉及项目</span>
        </div>
        <div className={styles.row} style={{backgroundColor: '#f5f5f5'}}>
          <span>流动性</span>
          <span>随存随取</span>
          <span></span>
        </div>
        <div onClick={() => push('/safeplan')} className={styles.row} style={{backgroundColor: '#fff'}}>
          <span>安全保证</span>
          <span>加入安全保障计划</span>
          <span>
            <img src={arrow} alt="安全保障计划" height={15} width={9}/>
          </span>
        </div>
        <div className={styles.desc}>
          <div onClick={() => this.setState({descActive: !this.state.descActive})} className={styles.title}>
            <span>什么是活期宝？</span>
            <img style={!this.state.descActive ? {transform: 'rotateZ(90deg)'} : {}} src={arrow} height={15} width={9}/>
          </div>
          <p className={
            this.state.descActive ? styles.detail : styles.detailHide
          }>零钱宝是宝点网为您提供的本息自动循环出借及赎回自动转让的理财工具。零钱宝所对应的借款均100%加入宝点网安全保障计划，安全性高。同时为您实现分散出借，流动性的多样化需求。</p>
        </div>
        <p className={styles.moreDetail}>更多详情<img src={arrowDetail} alt="更多详情"/></p>
        <div className={styles.bottom}>
          <div onClick={() => this.refs.calculator.show()} className={styles.calculator}></div>
          <button>马上出借</button>
        </div>
        <Calculator
          ref="calculator"
          unit="d"
          rate={demandRate}
          term={365}
          amount={10000}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rate: state.infodata.getIn([RATE, 'data']),
    detail: state.infodata.getIn([DEMAND_DETAIL, 'data']),
    userInfoCode: state.infodata.getIn([USER_INFO, 'data']) && state.infodata.getIn([USER_INFO, 'data']).code || 0,
  }
}

const mapDispatchToProps = (dispatch) => ({
  push(path) {
    dispatch(push(path))
  },
  pop() {
    dispatch(goBack())
  },
  init() {
    dispatch({type: DEMAND_DETAIL})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(ProductDetail))
