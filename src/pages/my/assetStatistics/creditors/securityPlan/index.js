/**
 * Created by wangdongfang on 17/3/20.
 */
/**
 * Created by wangdongfang on 17/2/20.
 */
import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import styles from './index.less'
import classNames from 'classnames'
import {connect} from 'react-redux'
import Loading from '../../../../../components/pageLoading'
import {goBack} from 'react-router-redux'
const zhDate=(date)=>{
    const standardDate=new Date(Date.parse(date)),
        year=standardDate.getFullYear(),
        month=standardDate.getMonth()+1,
        day=standardDate.getDate();
    return year+'年'+month+'月'+day+'日';
}
const OldContract=(data)=>{
    const {
        contract_number,date,first_real_name,first_card,first_username,
        second_real_name,second_card,second_username,providers,connect_address,
        purpose,term_months,profit_unit,term_start_date,term_end_date,repayment_start_date,
        repayment_end_date,bond_value,transferee_principal,repay_amount_month,transfer_fee,
        transfer_date,expiration_date,penalty
    }=data;
    const strDate=zhDate(date),
        termStrDate=zhDate(term_start_date),
        termStrDateEnd=zhDate(term_end_date),
        repaymentStrDate=zhDate(repayment_start_date),
        repaymentStrDateEnd=zhDate(repayment_end_date),
        transferStrdate=zhDate(transfer_date),
        expirationStrDate=zhDate(expiration_date);
    return(<div className={styles.content}>
        <div className={styles.title}>
            宝点网（bao.cn）合同编号：{contract_number}
        </div>
        <h1>债权转让及受让协议</h1>
        <p className={styles.text}>
            本债权转让及受让协议（下称“本协议”）由以下双方于{strDate}签署：
        </p>
        <p className={styles.text}>
            甲方（转让人）：{first_real_name}
        </p>
        <p className={styles.text}>
            身份证号：{first_card}
        </p>
        <p className={styles.text}>
            宝点网用户名：{first_username}
        </p>
        <div className={styles.masterNews}>
            <p className={styles.text}>
                乙方（受让人）：{second_real_name}
            </p>
            <p className={styles.text}>
                身份证号：{second_card}
            </p>
            <p className={styles.text}>
                宝点网用户名：{second_username}
            </p>
            <p className={styles.text}>
                就甲方通过成都伟品信息技术服务有限公司（以下“宝点网”系指成都伟品信息技术服务有限公司和下述宝点网网站的统称）
                运营管理的www.bao.cn 网站（下称“宝点网网站”）向乙方转让债权事宜，双方经协商一致，达成如下协议：
            </p>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    1.债权转让
                </h3>
                <p className={styles.text1}>
                    1.1 标的债权信息及转让
                </p>
                <p className={styles.text1}>
                    甲方同意将现有债权（下称“标的债权”）通过宝点网的居间协助转让给乙方，乙方同意受让该等债权。标的债权具体信息如下：
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    标的债权信息：
                </h3>
                <p className={styles.text1}>
                    债权人姓名：
                </p>
                <p className={styles.text1}>
                    债务人姓名：{providers}
                </p>
                <p className={styles.text1}>
                    借款本金数额：￥{connect_address}
                </p>
                <p className={styles.text1}>
                    借款年利率：{purpose}%
                </p>
                <p className={styles.text1}>
                    原借款期限：{term_months}个月
                </p>
                <p className={styles.text1}>
                    月偿还本息数额：￥{profit_unit};{termStrDate}起，{termStrDateEnd}止
                </p>
                <p className={styles.text1}>
                    还款日：自{repaymentStrDate}起，{repaymentStrDateEnd}（ 前，节 假日不顺延）
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    标的债权转让信息:
                </h3>
                <p className={styles.text1}>
                    标的债权价值:￥{bond_value}
                </p>
                <p className={styles.text1}>
                    受让本金:￥{transferee_principal}
                </p>
                <p className={styles.text1}>
                    参考回报/月:￥{repay_amount_month}
                </p>
                <p className={styles.text1}>
                    转让管理费: ￥{transfer_fee}
                </p>
                <p className={styles.text1}>
                    转让日期:{transferStrdate}
                </p>
                <p className={styles.text1}>
                    结息日及本金到期日: 每月15日为结息日，本金于{expirationStrDate}到期
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    1.2 债权转让流程
                </h3>
                <p className={styles.text1}>
                    1.2.1 双方同意并确认，双方通过自行或授权根据宝点网网站有关规则和说明，在宝点网网站进行债权转让和受让出借操作等方式确认签署本协议。
                </p>
                <p className={styles.text1}>
                    1.2.2 双方接受本协议且宝点网审核通过时，本协议立即成立,并待转让价款支付完成时生效。协议成立的同时甲方不可撤销地授权宝点网自行或委托第三方支付机构或合作的金融机构，将转让价款在扣除甲方应支付给宝点网的转让管理费之后划转，上述转让价款划转完成即视为本协议生效且标的债权转让成功；
                    同时甲方不可撤销地授权宝点网将其代为保管的甲方与标的债权借款人签署的电子文本形式的《借款协议》（下称“借款协议”）及借款人相关信息在宝点网网站有关系统板块向乙方进行展示。
                </p>
                <p className={styles.text1}>
                    1.2.3 本协议生效且标的债权转让成功后，双方特此委托宝点网将标的债权的转让事项及有关信息通过站内信等形式通知与标的债权对应的借款人。
                </p>
                <p className={styles.text1}>
                    1.2.3 本协议生效且标的债权转让成功后，双方特此委托宝点网将标的债权的转让事项及有关信息通过站内信等形式通知与标的债权对应的借款人。
                </p>
                <p className={styles.text1}>
                    1.2.3 本协议生效且标的债权转让成功后，双方特此委托宝点网将标的债权的转让事项及有关信息通过站内信等形式通知与标的债权对应的借款人。
                </p>
                <p className={styles.text1}>
                    1.3 自标的债权转让成功之日起，乙方成为标的债权的债权人，承继借款协议项下出借人的权利并承担出借人的义务。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    2. 保证与承诺
                </h3>
                <p className={styles.text1}>
                    2.1 甲方保证其转让的债权系其合法、有效的债权，不存在转让的限制。甲方同意并承诺按有关协议及宝点网网站的相关规则和说明向宝点网支付债权转让管理费。
                </p>
                <p className={styles.text1}>
                    2.2 乙方保证其所用于受让标的债权的资金来源合法，乙方是该资金的合法所有人。如果第三方对资金归属、合法性问题发生争议，乙方应自行负责解决并承担相关责任。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    3. 违约
                </h3>
                <p className={styles.text1}>
                    3.1 双方同意，如果一方违反其在本协议中所作的保证、承诺或任何其他义务，致使其他方遭受或发生损害、损失等责任，违约方须向守约方赔偿守约方因此遭受的一切经济损失。
                </p>
                <p className={styles.text1}>
                    3.2 双方均有过错的，应根据双方实际过错程度，分别承担各自的违约责任。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    4. 适用法律和争议解决
                </h3>
                <p className={styles.text1}>
                    4.1 本协议的订立、效力、解释、履行、修改和终止以及争议的解决适用中国的法律。
                </p>
                <p className={styles.text1}>
                    4.2 本协议在履行过程中，如发生任何争执或纠纷，双方应友好协商解决；若协商不成，任何一方均有权向有管辖权的人民法院提起诉讼。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    5. 其他
                </h3>
                <p className={styles.text1}>
                    5.1 双方可以书面协议方式对本协议作出修改和补充。经过双方签署的有关本协议的修改协议和补充协议是本协议组成部分，具有与本协议同等的法律效力。
                </p>
                <p className={styles.text1}>
                    5.2 本协议及其修改或补充均通过宝点网网站以电子文本形式制成，可以有一份或者多份并且每一份具有同等法律效力；
                    同时双方委托宝点网代为保管并永久保存在宝点网为此设立的专用服务器上备查。双方均认可该形式的协议效力。
                </p>
                <p className={styles.text1}>
                    5.3 甲乙双方均确认，本协议的签订、生效和履行以不违反中国的法律法规为前提。
                    如果本协议中的任何一条或多条违反适用的法律法规，则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力。
                </p>
                <p className={styles.text1}>
                    5.4 除本协议上下文另有定义外，本协议项下的用语和定义应具有宝点网网站服务协议及其有关规则中定义的含义。若有冲突，则以本协议为准。
                </p>
            </div>
        </div>
    </div>)
};
const NewContract=(data)=>{
    const {
        contract_number,date,first_real_name,first_card,first_username,
        second_real_name,second_card,second_username,
        purpose,term_start_date,term_end_date,
        bond_value,transferee_principal,
        transfer_date,company_address,company_contact,company_name,bond_value_cny,
        transferee_principal_cny,has_rate,brokerage_rate,brokerage_type,penalty
    }=data;
    const strDate=zhDate(date),
        termStrDateEnd=zhDate(term_end_date),
        transferStrdate=zhDate(transfer_date);
    return(<div className={styles.content}>
        <h1 className={styles.newTitle}>
            债权转让协议
        </h1>
        <p className={classNames(styles.text,styles.textRight)}>合同编号:{contract_number}</p>
        <p className={styles.text}>
            甲方（转让人）：{first_real_name}
        </p>
        <p className={styles.text}>
            身份证号：{first_card}
        </p>
        <p className={styles.text}>
            宝点网用户名：{first_username}
        </p>
        <div className={styles.masterNews}>
            <p className={styles.text}>
                乙方（受让人）：{second_real_name}
            </p>
            <p className={styles.text}>
                身份证号：{second_card}
            </p>
            <p className={styles.text}>
                宝点网用户名：{second_username}
            </p>
            <p className={styles.text}>
                丙方（居间平台服务商）：{company_name}
            </p>
            <p className={styles.text}>
                住所地：{company_address}
            </p>
            <p className={styles.text}>
                联系电话：{company_contact}
            </p>
            <p className={styles.text}>
                鉴于居间平台服务商是一家合法成立并有效存续的有限公司，系（互联网域名bao.cn，宝点网）的运营管理人，向网站注册用户提供咨询、信息及各种委托服务等居间服务；
                现甲方通过宝点网网络平台向乙方转让债权，经各方协商一致，达成如下协议：
            </p>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor,styles.textCenter)}>
                    第一章   债权转让
                </h3>
                <p className={styles.text1}>
                    第一条 甲方将其享有的债权通过宝点网网络平台向受证人转让， 债权的总额为人民币{bond_value}（大写人民币{bond_value_cny}），该债权的具体的情况详见本协议附件（债权清单）。
                </p>
                <p className={styles.text1}>
                    第二条  转让的债权，其期限起始日为{transferStrdate}，到期日为{termStrDateEnd}。如乙方实际支付债权转让价款日与本协议约定不一致的，
                    起始日为乙方实际支付债权转让价款之日。
                </p>
                <p className={styles.text1}>
                    第三条 甲方所转让债权的参考年回报率为{purpose}％。乙方向甲方支付转让价款人民币{transferee_principal}（大写人民币  {transferee_principal_cny}），乙方受让的债权比
                    例为总债权的{has_rate}%，其受让的债权所对应的借款本息金额 = 乙方债权受让比例x截止起始日按照借款合同约定甲方享有的债权总额。
                </p>
                <p className={styles.text1}>
                    第四条 因甲、乙双方就本次债权转让事宜不直接当面接触，系在丙方网络平台上撮合成交的，为保证交易资金安全。
                    乙方委托丙方将债权转让款直接划付到甲方帐户，同时，在债权转让期届满时，甲方委托丙方将所转让债权对应的借款本息直接划付到乙方帐户。
                </p>
                <p className={styles.text1}>
                    第五条 丙方为甲乙双方债权转让提供信息咨询及其它居间撮合服务。服务商为甲方债权转让提供了多项居间服务，
                    有鉴于此，丙方按照{brokerage_rate}%的标准向甲方收取服务费（以下简称“服务费”），收取方式为{brokerage_type}。
                </p>
                <p className={styles.text1}>
                    第六条 债权转让后，甲方仍负有对债权清单项下借款本息进行管理及催收的义务，并通过丙方网络平台将乙方受让债权对应的借款本金及收益支付给乙方。
                </p>
                <p className={styles.text1}>
                    第七条 债权转让成功后，本协议项下的相关信息的更新将由甲方通过丙方网站平台进行公告，乙方应当及时查看。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor,styles.textCenter)}>
                    第二章   债权回购
                </h3>
                <p className={styles.text1}>
                    第八条 甲方承诺：当债权回购条件成就时，乙方有权要求甲方立即回购其已经根据本协议受让的债权，回购价格为甲方依据本协议应向乙方支付的与乙方受让债权对应的借款本息及收益；甲方需在乙方发出书面回购通知之日起三个工作日内完成债权回购程序并支付回购价款。乙方的回购通知一经发出即启动债权回购程序，
                    甲方须按照本条约定向乙方支付全部回购价款，双方无需另行签署债权回购协议。甲方确认：如下任一条件发生时视为“债权回购条件成就”：
                </p>
                <p className={styles.text1}>
                    1.在本协议约定的所转让债权到期日，甲方未按时向乙方支付甲方负责清收的乙方受让债权对应的借款本息的；
                </p>
                <p className={styles.text1}>
                    2.当甲方发生法定或本协议约定情形导致乙方要求甲方提前回购所转让债权的。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor,styles.textCenter)}>
                    第三章 甲方的权利和义务
                </h3>
                <p className={styles.text1}>
                    第九条 自转让生效日起，甲方应按照本协议约定内容支付服务商服务费。
                </p>
                <p className={styles.text1}>
                    第十条 甲方向乙方承诺和保证如下：
                </p>
                <p className={styles.text1}>
                    1. 甲方有权实施本协议项下债权转让行为，其债权清单项下债权中不含有禁止甲方向第三方全部或部分转让的权利限制；
                </p>
                <p className={styles.text1}>
                    2.其债权清单项下的债权合法有效且原借款合同在正常履行；
                </p>
                <p className={styles.text1}>
                    3.所转让的债权对应的借款本息属尚未到期且借款人尚未支付的借款本息，该等债权属甲方合法所有，甲方对其享有独立、完整的权利；
                </p>
                <p className={styles.text1}>
                    5.甲方承诺不会对转让给乙方的债权进行重复转让。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor,styles.textCenter)}>
                    第四章  乙方的权利和义务
                </h3>
                <p className={styles.text1}>
                    第十一条 发生如下情形之一时，乙方有权要求甲方提前回购所转让债权：
                </p>
                <p className={styles.text1}>
                    1.甲方提供虚假资料、故意隐瞒重要事实或违反其在本协议中所做的陈述和保证；
                </p>
                <p className={styles.text1}>
                    2.甲方在由服务商服务的其他债权转让协议中出现违约情形；
                </p>
                <p className={styles.text1}>
                    3.甲方转移资产、抽逃资金，或卷入或即将卷入重大（重大情形包含但不限于本协议标的金额五倍及五倍以上的财产纠纷，破产，被宣告失踪或死亡等）
                    的诉讼或仲裁程序及其他法律纠纷，或出现甲方丧失或可能丧失履行债务能力的其他情形；
                </p>
                <p className={styles.text1}>
                    4.甲方出现重疾、死亡、被宣告失踪或被宣告死亡，被撤销、吊销营业执照、责令关闭或者出现其他解散事由的；
                </p>
                <p className={styles.text1}>
                    5.出现其他对乙方权益造成重大影响，且由甲方导致的行为或事项。
                </p>
                <p className={styles.text1}>
                    乙方要求甲方提前回购所转让债权时可经由服务商向甲方发出要求回购债权的书面通知，该通知应就要求甲方回购债权的理由做出说明，从该通知发出之日起三日内甲方应做出回复或提供担保，
                    乙方接受甲方的回复或担保的，可以撤销通知；否则，三日后通知发生效力 ，甲方需按照本协议的约定回购债权。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor,styles.textCenter)}>
                    第五章 违约责任
                </h3>
                <p className={styles.text1}>
                    第十二条 甲、乙双方均应遵守本协议的约定，任何一方对本协议构成违约给对方造成实际损失的，均应承担违约赔偿责任。
                </p>
                <p className={styles.text1}>
                    第十三条 若甲方未能按本协议约定的时间将本协议项下借款本息或回购价款通过丙方划付直乙方，则视为甲方违约，甲方必须自逾期之日起按日向乙方支付应付未付款项
                    {penalty}%的违约金，
                    直至甲方付清所有应付款项为止。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor,styles.textCenter)}>
                    第六章 协议的生效和终止
                </h3>
                <p className={styles.text1}>
                    第十三条 本协议采用电子文本形式制成，经各方通过宝点网网络平台电子合同签署系统在线点击确认签署后生效，合同各方均认可本协议的真实性，并认可该形式之协议的法律效力。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor,styles.textCenter)}>
                    第七章 其他事项
                </h3>
                <p className={styles.text1}>
                    第十四条 本协议项下回购价款、违约金及其他应付款项的支付、划转方式与借款本金的支付、划转方式相同；除本协议约定的相关责任外，
                    由于本协议各方不可抗力因素导致本协议各方收到的相关款项时间与原始债权合同约定不一致的，平台方不承担相关违约责任，包括但不限于支付系统，银行账户划转等原因。
                </p>
                <p className={styles.text1}>
                    第十五条 甲方、乙方委托宝点网网络平台保管所有与本协议有关的书面文件或电子信息，
                    一致确认并同意宝点网网络平台提供的与本协议有关的书面文件或电子信息应作为本协议有关事项的有效证明。
                </p>
                <p className={styles.text1}>
                    第十六条 甲方、乙方依照相关法律规定各自承担本协议订立和履行过程中发生的税费。
                </p>
                <p className={styles.text1}>
                    第十七条 本协议中部分条款依据相关法律、法规的规定成为无效或部分无效时，该等无效或部分无效不影响本协议项下其他条款的效力。
                </p>
                <p className={styles.text1}>
                    第十八条 甲方、乙方同意并授权服务商根据甲、乙任何一方的合理要求向其提供另一方向宝点网网络平台提供的所有信息。
                    一方向另一方提出的所有要求均经由服务商转达，包括但不限于甲方向乙方发出的回购通知。
                </p>
                <p className={styles.text1}>
                    第十九条 甲方、乙方授权和委托服务商根据本协议所采取的全部行动和措施的法律后果均各自承担，服务商不承担任何责任。
                </p>
                <p className={styles.text1}>
                    第二十条 鉴于本协议各方均是通过丙方网络平台电子合同签署系统进行签署的，甲方、乙方在此确认，本协议的签订地为丙方所在地即成都市锦江区。
                </p>
                <p className={styles.text1}>
                    第二十一条 本协议项下的任何争议，应由双方友好协商解决，若协商不成，任一方可向本协议的签订地即丙方住所地成都市锦江区人民法院管辖。
                </p>
                <p className={styles.text1}>
                    （以下无正文）
                </p>
            </div>
            <div>
                <p className={styles.text1}>
                    附债权清单
                </p>
                <p className={styles.text1}>
                    甲方（转让人）：{first_real_name}
                </p>
                <p className={styles.text1}>
                    日期:{strDate}
                </p>
                <p className={styles.text1}>
                    乙方（受让人）：{second_real_name}
                </p>
                <p className={styles.text1}>
                    日期：{strDate}
                </p>
                <p className={styles.text1}>
                    丙方（服务商）：{company_name}
                </p>
                <p className={styles.text1}>
                    日期：{strDate}
                </p>
            </div>
        </div>
    </div>)
}
class Index extends Component{
    componentWillMount(){
        const id=this.props.params.id;
        const access_sys=this.props.location.query.access_sys
        this.props.getInfo(id,access_sys);
    }
    componentDidMount(){

    }
    componentWillUnmount(){
        this.props.clearData();
    }
    loadDom=()=>{
        return(<Loading/>)
    }
    loadEndDom=()=>{
        const {
            infoData:{
                data
            }
        }=this.props;
        if (data.version==1){
            return <OldContract {...data}/>
        }
        return(<NewContract {...data}/>)
    }
    render(){
        const {
            infoData,
            pop
        }=this.props;
        let Dom=this.loadDom();
        if (infoData){
            Dom=this.loadEndDom()
        }
        return(<div className={styles.bodyBox}>
            <NavBar onLeft={pop}>安全保障计划</NavBar>
            {
                Dom
            }
        </div>)
    }
}
const datas=(state)=>({
    infoData:state.infodata.getIn(['CREDITORS_CONTRACT','data'])
});
const dispatchFn=(dispatch)=>({
    getInfo(id,access_sys){
        dispatch({
            type:'CREDITORS_CONTRACT',
            params:[id,access_sys]
        })
    },
    pop(){
        dispatch(goBack())
    },
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'CREDITORS_CONTRACT'
        })
    }
})
export default connect(datas,dispatchFn)(Index)