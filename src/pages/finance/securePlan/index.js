import React from 'react'
import { goBack } from 'react-router-redux'
import styles from './index.styl'
import NavBar from '../../../components/NavBar'
import wrap from '../../../utils/pageWrapper'
import {connect} from 'react-redux'

import banner from '../../../assets/images/secure_plan_banner.jpg'

class SecurePlan extends React.PureComponent {

  render() {
    const dispatch = this.props.dispatch
    return (
      <div className={styles.root}>
        <NavBar onLeft={() => dispatch(goBack())}>安全保障计划</NavBar>
        <img className={styles.banner} src={banner} alt/>
        <div className={styles.plan}>
          <h1>安全保障计划</h1>
          <p>
            安全保障计划”是宝点网（www.bao.cn）为保护平台全体受保障借款的出借人以及受让出借人所持有的受让人（统称“债权人”）的共同权益而建立的信用风险共担计划。宝点网对应产品“零钱宝”、“定存宝”、“直投项目”对应所有项目均已加入安全保障计划，债权人无需为此支付任何费用。
          </p>
          <p>当受保障借款出现严重逾期时（即逾期超过30天），合作担保金融机构优先赔付，合作金融机构丧失赔付能力，宝点网将通过“风险备用金”向债权人垫付剩余出借本金和逾期利息（具体情况视投资标的的类型具体偿付规则为准）。</p>
          <p>
            安全保障计划“为债权人提供了有效的风险共担机制，分散了债权人的投资行为带来的信用风险，营造了一个安全健康的投资环境，保障了债权人权益。
          </p>
        </div>
        <div className={styles.control}>
          <h1>风险控制</h1>
          <div>
            <p>宝点网通过同认证金融机构联合贷前审核和贷后管理，双重风控，从源头避免不良客户的信用问题。</p>
          </div>
          <div>
            <p>“定存宝”、“直投项目”对应投标项目均由宝点网认证金融机构提供担保，若发生严重逾期，认证金融机构优先赔付。</p>
          </div>
          <div>
            <p>“定存宝”、“直投项目”对应项目，若发生严重逾期同时合作金融机构丧失偿付能力，宝点网风险备用金优先偿付。</p>
          </div>
          <div>
            <p>宝点网从公司自有资金中划拨人民币100万元作为法律援助金，为平台上的融资项目提供法律支持。如融资项目发生争议须通过法律程序解决时，宝点网将启用法律援助金为投资人保障合法权利。</p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(wrap(SecurePlan))
