import React from 'react'
import NavBar from '../../../../components/NavBar'
import styles from './index.styl'
import TimeLine from '../../../../components/TimeLine'

export default class InvestSuccess extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <NavBar>投资成功</NavBar>
        <div className={styles.content}>
          <div className={styles.amount}>
            <span>投资金额</span>
            <span>¥200.00</span>
          </div>
          <div className={styles.timeLine}>
            <TimeLine
              data={[
                {
                  title: '你已投资成功',
                  date: '2015-10-11 12:10'
                },
                {
                  title: '起息日',
                  date: '2015-10-11 12:10',
                  curStep: true
                },
                {
                  title: '到期日',
                  date: '2015-10-11 12:10'
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.finish}>完成</div>
      </div>
    )
  }
}
