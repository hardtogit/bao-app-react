import React from 'react'
import RadialBarChart from '../../../../components/RadialBarChart'
import Page from '../../../../components/Page'
import styles from './index.styl'
import safeplan from '../../../../assets/images/safeplan.png'
import arrowwhite from '../../../../assets/images/arrowwhite.png'
import  { connect } from 'react-redux'
import { push } from 'react-router-redux'
import {Motion, spring, presets} from 'react-motion'
import {RATE, USER_INFO} from '../../../../actions/actionTypes'

class DemandIndex extends React.Component {
  buyHandle = () => {
    this.props.push('/demand-buy')
  }

  render() {
    const {
      rate,
      push,
      userInfoCode,
    } = this.props
    let demandRate = 0
    if (rate) {
      demandRate = rate.data.demand
    }
    return (
      <Page>
        <div className={styles.Content}>
          <div className={styles.header}>
            <p onClick={() => push('/safeplan')} className={styles.safeplan}>
              <img src={safeplan} alt="安全保障计划" width={13} height={15}/>
              已加入安全保障计划
            </p>
            <div className={styles.rate}>
              <p>约定年化收益</p>
              <Motion defaultStyle={{x: 0}} style={{x: spring(+demandRate, presets.stiff)}}>
                {value => <p>{value.x.toFixed(2)}<span>%</span></p>}
              </Motion>
              <RadialBarChart rate={+demandRate} max={15}/>
            </div>
            <p onClick={() => push('/demand-product')} className={styles.detail}>
              产品详情
              <img src={arrowwhite} alt="产品详情" width={8} height={15}/>
            </p>
          </div>
          <div className={styles.content}>
            {/* <p className={styles.voucher}>您当前有<span>4张抵用券</span>和<span>1张加息券</span>未使用</p> */}
            {userInfoCode != 100 && (<div onClick={() => push('/register')} className={styles.newUser}>
              <p>新用户注册送<span>800元</span>抵用券</p>
              <p>去注册</p>
            </div>)}
            <button onClick={this.buyHandle} className={styles.buyButton}>马上出借</button>
            <p className={styles.desc}>按日复息，随存随取</p>
          </div>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rate: state.infodata.getIn([RATE, 'data']),
    userInfoCode: state.infodata.getIn([USER_INFO, 'data']) && state.infodata.getIn([USER_INFO, 'data']).code || 0,
  }
}

const mapDispatchToProps = (dispatch) => ({
  push(path) {
    dispatch(push(path))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DemandIndex)
