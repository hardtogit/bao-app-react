/**
 * Created by wangdongfang on 17/3/14.
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import styles from './index.less'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    render(){
        return(<div className={styles.bg}>
            <NavBar onLeft={this.props.pop}>理财</NavBar>
            <div className={styles.content}>
                <p>宝点网（bao.cn）合同编号：</p>
                <h1 className={styles.title}>定存宝出借咨询及管理服务协议</h1>
                <div className={styles.text}>
                    尊敬的出借客户：为了维护您的自身权益、防范出借风险，请在出借前仔细阅读本协议各条款（尤其是风险提示）、以及与本产品相关的全部产品规则，特别是加粗字体条款，以充分知悉、
                    了解宝点网零钱宝产品的运作规则、出借范围以及协议双方的权利、义务和责任。一旦加入本出借计划即视为对本协议全部条款及相关业务规则已充分理解并完全接受。
                </div>
                <div className={styles.text}>
                    在乙方充分了解并清楚知晓本产品出借风险的前提下,本《定存宝出借协议》（以下简称“本协议”）由以下双方于 2015年08月19日签订：
                </div>
                <div className={styles.text}>
                    甲方：<span>成都伟品信息技术服务有限公司（简称宝点网www.bao.cn）</span>
                </div>
                <div className={styles.text}>
                    注：甲方具有提供互联网信息服务的资质并拥有（www.bao.cn）的经营权。
                </div>
                <div className={styles.text}>
                    场所：<span>四川省成都市锦江区红星路三段1号IFS国际金融中心办公楼三号楼41楼4102-06</span>
                </div>
                <div className={styles.text}>
                    <p>乙方：</p>
                    <p>宝点网用户名：</p>
                    <p>身份证号码：</p>
                </div>
                <div className={styles.text}>
                    甲乙双方经友好协商，本着平等自愿、诚实信用的原则，就提供的“定存宝”出借计划的相关事项订立有效合约，达成如下协议：
                </div>
                <div className={styles.text}>
                    <p>释义：</p>
                    <p>除非本协议另有规定，以下词语在本协议中定义如下：</p>
                    <p>a.宝点网：指由甲方运营和管理的网站，域名为：www.bao.cn。</p>
                </div>
                <div className={styles.text}>
                    b.出借人（乙方）：指通过甲方网站成功注册账户的会员，可参考甲方的推荐自主选择出借一定金额的资金给借款客户，且具有完全民事权利/行为能力的自然人。
                </div>
                <div className={styles.text}>
                    c.合作机构：指与甲方建立合作关系的机构，包括但不限于小额贷款公司、融资性担保公司、第三方支付机构等。
                </div>
                <div className={styles.text}>
                    d.借款客户：指有一定的资金需求，经过甲方合作机构的筛选推荐并且得到甲方合作机构（包括但不限于小额贷款公司或融资性担保公司）全额本息担保后，在甲方网站注册账户，由甲方推荐给出借人并得到出借人资金，且具有完全民事权利/行为能力的自然人。
                </div>
                <div className={styles.text}>
                    e. 借款：出借人拟向借款客户提供的借款。
                </div>
                <div className={styles.text}>
                    f. 监管账户：以甲方名义在银行开立的、账户内资金独立于甲方自有资金的银行监管/保管账户。
                </div>
                <div className={styles.text}>
                    g. 宝点网账户：指出借人或借款客户以自身名义在宝点网注册后系统自动产生的虚拟账户，通过第三方支付机构及/或其他通道进行充值或提现。
                </div>
                <div className={styles.text}>
                    h.《宝点网借款合同》：指通过宝点网平台完成撮合的借款的借款合同（包括债权转让协议）。
                </div>
                <div className={styles.text}>
                    i. 担保：指合作机构为出借人的借款提供的全额本息保障方式，包括但不限于以保证、抵押、质押等方式提供担保，或承诺进行代偿、债权回购或发放后备贷款等方式。
                </div>
                <div className={styles.text}>
                    j. 债权：指乙方通过向借款客户出借加入资金而在《借款协议》项下享有的所有权利.
                </div>
                <div className={styles.sign}>
                    一、主要内容
                </div>
                <div className={styles.text}>
                    j. 债权：指乙方通过向借款客户出借加入资金而在《借款协议》项下享有的所有权利.
                </div>
                <div className={styles.text}>
                    1.1 定存宝：定存宝是宝点网推出的对经合作机构全额本息担保的借款项目进行自动优先出借及出借期限届满时自动转让债权的出借计划，可通过系统实现自动化的分散出借。
                    定存宝现阶段分为3个月、6个月及12个月三种期限模式，乙方出借的本金和收益将在出借期限届满后一次性返回其宝点网账户。
                </div>
                <div className={styles.text}>
                    1.2 额度：本期定存宝的总额度为  元人民币 。
                </div>
                <div className={styles.text}>
                    1.3 期限：本期定存宝的期限为  个月，自本协议生效日起计。
                </div>
                <div className={styles.text}>
                    1.4 出借金额及参考回报：乙方知悉、了解并同意，本协议项下涉及的任何收益均为参考回报，甲方未以任何方式对本金及参考回报进行承诺或担保，
                    乙方出借本金存在不能够按期收回的风险，同时，在实际收益未达到参考回报的情况下，乙方仅能收取其期初加入本金数额所对应的实际收益，在前述前提下，
                    乙方同意通过宝点网平台加入甲方提供的本期定存宝，具体如下：
                </div>
                <div className={styles.text}>
                    <p>名称：定存宝1月 /3月 /6月/12月</p>
                    <p>参考年化回报：12.10%/12.10%/12.80%/13.80%</p>
                    <p>期初加入本金数额:</p>
                    <p>期末偿还本金数额:</p>
                    <p>期末偿还收益数额:</p>
                    <p>期限:1个月/3个月/6个月/12个月</p>
                    <p>出借范围：合作金融机构担保的借款项目</p>
                    <p>1.5 借款资金来源保证：乙方保证其所用于出借的资金来源合法，
                        乙方是该资金的合法所有人，如果第三方对资金归属、合法性问题提出异议，由乙方自行解决。如未能解决，则乙方承诺放弃享有其所出借资金带来的利息等收益。</p>
                </div>
                <div className={styles.sign}>
                    二、本协议的成立
                </div>
                <div className={styles.text}>
                    2.1 本协议成立：乙方按照宝点网的规则，通过在宝点网上勾选“我同意《宝点网定存宝出借协议》”以及点击“加入”按钮
                    （按钮名称以宝点网网站显示为准，下同）确认后，即视为乙方与甲方已达成协议并同意接受本协议的全部约定以及宝点网网站所包含的其他与本协议有关的各项规则的规定。
                </div>
                <div className={styles.text}>
                    2.2 加入资金冻结：乙方点击“加入”按钮确认后，即视为乙方已经向甲方发出不可撤销的授权指令，授权甲方委托相应的第三方支付机构及/或甲方开立监管账户的监管银行（“监管银行”）等合作机构，
                    在乙方宝点网账户中，冻结金额等同于本协议第1.4条所列的“期初加入本金数额”的资金。上述冻结在本协议生效时或本协议确定失效时解除。
                </div>
                <div className={styles.text}>
                    2.3 资金划转：
                </div>
                <div className={styles.text}>
                    2.3.1 本期定存宝所对应的加入资金全部冻结，且甲方系统完成所有资金的自动出借后，根据本期定存宝所投特定项目的《宝点网借款合同》的相关约定，乙方及上述特定项目的借款客户即不可撤销地授权甲方委托相应的第三方支付机构及/或监管银行等合作机构，将金额等同于本协议1.4条所列的“期初加入本金数额”的资金，
                    逐笔按照《宝点网借款合同》第1条所列的“借款本金数额”，由监管账户划转至相应的借款客户的指定银行账户，划转完毕即视为借款发放成功。
                </div>
                <div className={styles.text}>
                    2.3.2 甲方将在本期定存宝所对应的加入资金全部冻结后的2个工作日内完成本期定存宝资金的统一出借及划转。
                    如2个工作日未完成上述操作，则甲方将乙方冻结资金退回乙方的宝点网账户，资金冻结期间不计收益。
                </div>
                <div className={styles.text}>
                    2.4 本协议生效：本协议于甲方完成本期定存宝所对应的全部资金划转之日（“生效日”）立即生效，收益及相关费用自生效日开始计算。
                </div>
                <div className={styles.text}>
                    2.5 在定存宝存续期限内，除本协议双方协商一致或本协议另有约定外，本协议项下的期限、收益分配方式、还款日期等均不得变更。
                </div>
                <div className={styles.sign}>
                    三、出借管理
                </div>
                <div className={styles.text}>
                    3.1 乙方全权委托甲方按照本协议的约定，对等同于本协议1.4条所列的“期初加入本金”进行自动优先出借，作为出借资金出借给宝点网平台上经甲方及合作机构推荐、
                    并且得到合作机构全额本息担保的借款客户；同时，乙方授权甲方在完成上述自动优先出借后以乙方名义代为签署相应的《宝点网借款合同》。
                </div>
                <div className={styles.text}>
                    3.2 出借范围：宝点网平台上的经甲方及合作机构推荐、并且得到合作机构全额本息担保的借款项目。
                </div>
                <div className={styles.text}>
                    3.3 乙方加入定存宝后，甲方将按照乙方加入本期定存宝的时间的先后顺序，
                    对加入资金进行自动优先出借。先加入定存宝的资金，在同期定存宝所对应的全部资金内具有自动优先出借和到期赎回的更高优先级。
                </div>
                <div className={styles.text}>
                    3.4 后续管理：在本期定存宝的存续期限内，乙方全权委托甲方对本期定存宝所出借项目的后续回款进行如下处理并以乙方名义代为签署相应的《宝点网借款合同》：
                </div>
                <div className={styles.text}>
                    3.4.1 甲方将把本期定存宝所出借项目返还的本金（包括但不限于借款项目当期还款所还本金、提前还款所还本金等）自动优先出借到新的项目中，出借范围参见本协议第3.2条。
                </div>
                <div className={styles.text}>
                    3.4.2 对于定存宝所出借项目产生的收益，甲方将根据第4.3条约定进行收益复投，出借范围参见本协议第3.2条。
                </div>
                <div className={styles.text}>
                    3.5 在本期定存宝期限届满后，乙方全权委托甲方将乙方所持有的未到期的债权代为进行债权转让并以乙方名义代为签署相应的《宝点网债权转让协议》。
                </div>
                <div className={styles.text}>
                    3.6 本息返还时间：本期定存宝期限届满后3个工作日内（含3个工作日）。
                </div>
                <div className={styles.text}>
                    3.7 特殊处理方式：如本期定存宝期限届满后3个工作日后，甲方仍未能将乙方持有的本期定存宝中所对应的全部债权成功转让，则成功转让的债权所对应的资金，
                    将显示在乙方宝点网账户中；未成功转让的债权将自动退出本出借计划，并以借款项目的形式显示在乙方宝点网账户中，
                    乙方将按该借款项目的还款方式及剩余还款期限，获得相应的本金及/或利息回款直至该借款项目完成全部还款；同时，甲方向乙方退还其在本期定存宝中已实际收取的所有管理费用。
                </div>
                <div className={styles.text}>
                    3.8 逾期项目：若甲方按本协议约定为乙方出借的借款项目，在乙方持有该借款项目期间出现逾期还款且合作机构未立即履行担保义务的情况，则此借款项目将自动退出本出借计划，
                    并以借款项目的形式显示在乙方宝点网账户中，乙方将按该借款项目的还款方式及剩余还款期限，获得相应的本金及/或利息回款直至该借款项目完成全部还款。
                </div>
                <div className={styles.sign}>
                    四、收益及费用
                </div>
                <div className={styles.text}>
                    4.1 收益来源：乙方委托甲方通过自动优先出借将资金出借给宝点网平台上的借款客户后，借款本金所产生的利息或借款本息复投所产生的利息在扣除管理费用剩余部分作为定存宝收益支付给乙方。
                </div>
                <div className={styles.text}>
                    4.2 收益起算时间：自本协议生效日开始计算收益。
                </div>
                <div className={styles.text}>
                    4.3 收益分配方式：收益复投、到期分配的方式，即在本期定存宝存续期限内，乙方加入本期定存宝后产生的收益将按照自动优先出借的原则进行出借，出借范围参见本协议第3.2条。
                </div>
                <div className={styles.text}>
                    4.4 定存宝费用种类：定存宝费用包括管理费用以及提前赎回费用。
                </div>
                <div className={styles.text}>
                    4.5 管理费用来源：本协议项下管理费用来源于乙方加入的本期定存宝所对应的借款项目利息中超过定存宝参考年化回报以外的部分
                    （本期定存宝参考年化回报率参见本协议第1.4条）。本期定存宝实际收益不及参考年化回报的，甲方不收取管理费用。
                </div>
                <div className={styles.text}>
                    4.6 管理费用收取方式：甲方每月进行收益复投时自动扣除当月管理费用，管理费用按月计算并收取。
                </div>
                <div className={styles.sign}>
                    五、本协议的修改及终止
                </div>
                <div className={styles.text}>
                    5.1 本协议的任何修改、补充均须以宝点网平台电子文本形式作出。
                </div>
                <div className={styles.text}>
                    5.2 双方均确认，本协议的签订、生效和履行以不违反法律为前提。如果本协议中的任何一条或多条被司法部门认定为违反所须适用的法律，
                    则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力。
                </div>
                <div className={styles.text}>
                    5.3 乙方同意甲方有权根据国家法律法规、监管政策、自律规定、市场变化等对本协议及与本协议相关的规则进行调整，甚至终止本出借计划。
                </div>
                <div className={styles.text}>
                    5.4 调整或修改后的协议内容及相关业务规则将在宝点网（包括但不限于官网公告、站内信、手机平台等方式）进行公布并立即生效，无需另行通知乙方。如果乙方不接受修改，
                    可立即以赎回本出借计划中全部加入资金的方式终止本服务；如乙方继续使用本出借计划的即被视为接受修改，并受修改后的协议及相关业务规则约束。
                </div>
                <div className={styles.text}>
                    5.5 乙方同意，在甲方终止本协议的提供时，乙方持有的本出借计划项下的借款项目将以借款项目的形式显示在乙方宝点网账户中，
                    乙方将按该借款项目的还款方式及剩余还款期限，获得相应的本金及/或利息回款直至该借款项目完成全部还款。
                </div>
                <div className={styles.sign}>
                    六、其他
                </div>
                <div className={styles.text}>
                    6.1 如双方在本协议履行过程中发生任何争议，应友好协商解决；如协商不成，则须提交甲方所在地有管辖权的人民法院诉讼解决。
                </div>
                <div className={styles.text}>
                    6.2 与本协议相关的其他具体操作规则以甲方网站展示为准，并作为本协议的附件，如具体规则与本协议不一致的，以具体规则为准。乙方同意本协议即视为同意本协议相关附件。
                </div>
            </div>
        </div>)
    }
}
const datas=(state)=>({})
const dispatchFn=(dispatch)=>({
    pop(){
        dispatch(goBack())
    }
})
export default connect(datas,dispatchFn)(Index)