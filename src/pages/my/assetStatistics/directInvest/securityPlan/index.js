/**
 * Created by wangdongfang on 17/2/20.
 */
import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import styles from './index.less'
import classNames from 'classnames'
import seal from '../../../../../assets/images/z.png'
import {connect} from 'react-redux'
import Loading from '../../../../../components/pageLoading'
import {goBack} from 'react-router-redux'
const OldContract=(data)=>{
    const {
        amount,card,connect_address,date,number,
        percent,providers,purpose,real_name,repayment,
        sponsor,username,term,loan_detail,repayment_detail
    }=data;
    const standardDate=new Date(Date.parse(date)),
        year=standardDate.getFullYear(),
        month=standardDate.getMonth()+1,
        day=standardDate.getDate(),
        strDate=year+'年'+month+'月'+day+'日';
    return(<div className={styles.content}>
        <div className={styles.title}>
            宝点网（bao.cn）合同编号：{number}
        </div>
        <h1>宝点网--借贷及担保服务协议</h1>
        <p className={styles.text}>
            本借款协议（ 下称"本协议" ）由以下各方于{strDate}签署：
        </p>
        <p className={styles.text}>
            甲方（出借人）：
        </p>
        <div className={styles.tableBox}>
            <table>
                <thead>
                <tr>
                    <th>
                        宝点网用户名
                    </th>
                    <th>
                        借出金额
                    </th>
                    <th>
                        借款时间
                    </th>
                    <th>
                        应收本息
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    loan_detail.map(({username,amount,date,profit},i)=>(<tr key={i}>
                        <td>
                            {
                                username
                            }
                        </td>
                        <td>
                            {
                                amount
                            }
                        </td>
                        <td>
                            {
                                date
                            }
                        </td>
                        <td>
                            {
                                parseFloat(amount)+parseFloat(profit)
                            }
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
        </div>
        <div className={styles.masterNews}>
            <p className={classNames(styles.text,styles.pd)}>
                注：因计算中存在四舍五入，最后一期应收本息与之前略有不同
            </p>
            <p className={styles.text}>
                乙方（借款人）：{username}
            </p>
            <p className={styles.text}>
                真实姓名：{real_name}
            </p>
            <p className={styles.text}>
                身份证号：{card}
            </p>
            <p className={styles.text}>
                宝点网用户名：{username}
            </p>
            <p className={classNames(styles.text,styles.pd2)}>
                丙方（担保人）：{sponsor}
            </p>
            <p className={styles.text}>
                丁方（平台服务方） ：{providers}
            </p>
            <p className={classNames(styles.text,styles.pd)}>
                联系地址：{connect_address}
            </p>
            <p className={styles.text}>
                借贷条款
            </p>
            <p className={styles.text}>
                债务人借款用途：{purpose}
            </p>
            <p className={styles.text}>
                债权本金：{amount}
            </p>
            <p className={styles.text}>
                债权年化利率（365天/年）：{percent}%
            </p>
            <p className={styles.text}>
                债权期限：{term}
            </p>
            <p className={styles.text}>
                还款方式：{repayment}
            </p>
            <p className={styles.text}>
                还款详情：
            </p>
            <div className={styles.tableBox}>
                <table>
                    <thead>
                    <tr>
                        <th>
                            期数
                        </th>
                        <th>
                            应还本金
                        </th>
                        <th>
                            应还利
                        </th>
                        <th>
                            还款时间
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        repayment_detail.map(({periods,amount,profit,date},i)=>(
                            <tr key={i}>
                                <td>
                                    {
                                        periods
                                    }
                                </td>
                                <td>
                                    {
                                        amount
                                    }
                                </td>
                                <td>
                                    {
                                        profit
                                    }
                                </td>
                                <td>
                                    {
                                        date
                                    }
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <p className={styles.text}>
                特别提示：
            </p>
            <p className={styles.text}>
                甲方、乙方、丙方、丁方请认真阅读本合同项下的全部条款。一旦签订本合同，即认为各方已理解并同意本合同的所有条款。
                根据《中华人民共和国合同法》及相关法律法规的规定，各方遵循平等、自愿、互利和诚实信用原则，友好协商，
                就各方在丁方运营管理的宝点网平台（域名 为：www.bao.cn，"宝点网"，以下简称平台）上进行投资、融资、担保、投资咨询、
                风险管理及贷后管理服务达成一致，以资信守。
            </p>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第一条 释义
                </h3>
                <p className={styles.text1}>
                    在本合同中，除非上下文另有解释，下列词语具有以下含义：
                </p>
                <p className={styles.text1}>
                    1.1 债权人：指已经注册为丁方平台的会员，并通过丁方平台自主选择出借一定数量资金予他人的自然人。
                </p>
                <p className={styles.text1}>
                    1.2 债务人：指经丙方、丁方评估审查、在丁方的互联网平台发布融资需求的自然人、法人以及其他形式的经济组织。
                </p>
                <p className={styles.text1}>
                    1.3 担保人：指已经与丁方平台签署战略合作协议的第三方担保机构，并有资格提供担保的自然人、法人以及其他形式的经济组织。
                </p>
                <p className={styles.text1}>
                    1.4 风险保障金：指甲方在丁方平台上投资的资金安全考虑，丙方将每笔担保服务费的5%划归至风险保障金专用账户，
                    并由丁方共同监管。在融资期间此笔保障金不允许被挪用，直至乙方及丙方按时履约付清所有款项（包括本金及利息），则丁方解除对丙方风险保障金的监管。
                </p>
                <p className={styles.text1}>
                    1.5 债权：指在债权债务关系存续期间债权人拥有的全部本金及利息。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第二条 甲方权利与义务
                </h3>
                <p className={styles.text1}>
                    2.1 甲方有利用丁方提供的平台自由选择资金出借的权利。
                </p>
                <p className={styles.text1}>
                    2.2 甲方有权按照约定时间收取利息和本金。
                </p>
                <p className={styles.text1}>
                    2.3 甲方有义务按照丁方平台要求向丁方提供真实的个人信息，因甲方提供虚假 信息而造成的一切法律后果（包括但不限于民事赔偿，行政处罚等）均由甲方承担。
                </p>
                <p className={styles.text1}>
                    2.4 甲方有义务按照丁方要求操作平台软件以及查收丁方发出的所有消息（包括但不限于站内通知、电子邮件、手机短信等）。
                    因甲方个人操作不当以及疏于查收信息造成的损失由甲方自行承担。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第三条 乙方的权利和义务
                </h3>
                <p className={styles.text1}>
                    3.1 乙方作为企业指定的法定代表人或股东有权代表企业按照约定在丁方平台上获得借款。
                </p>
                <p className={styles.text1}>
                    3.2 乙方应按期偿还借款本金及利息。
                </p>
                <p className={styles.text1}>
                    3.3 乙方未经甲方及丙方同意，不得擅自改变借款用途。
                </p>
                <p className={styles.text1}>
                    3.4.1 借款期限为 三个月 的，不得提前还款，否则应当偿还甲方所有未到期的利息。
                </p>
                <p className={styles.text1}>
                    3.4.2 借款期限为 六个月 的，可申请提前还款。
                </p>
                <p className={styles.text1}>
                    3.4.3 借款期限为 一年 的，可申请提前还款。
                </p>
                <p className={styles.text1}>
                    3.5 乙方有义务按照丁方平台要求向丁方提供真实的借款信息，因乙方提供虚假信息而造成的一切法律后果（包括但不限于民事赔偿，行政处罚等）均由乙方承担。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第四条 丙方的权利和义务
                </h3>
                <p className={styles.text1}>
                    4.1 丙方为本合同项下借款的本金以及利息提供不可撤销的连带保证。如在借款期限内乙方不能按照约定向甲方支付利息，则丙方当日按照约定向甲方支付利息。
                    如借款 期限届满之日乙方不能偿还甲方本金及利息，
                    丙方将于债权届满第3个工作日按照本合同约定向甲方偿付借款的本金和利息。如丙方未代乙方履行连带责任义务，则 视丙方需向甲方按日万分之五支付违约赔偿金。
                </p>
                <p className={styles.text1}>
                    4.2 甲乙双方任何一方需变更合同借贷条款，均须书面通知丙方及丁方，经四方协商一致，达成书面意见，
                    征得丙方书面同意后可变更合同。如甲方和乙方未经丙方和丁方同意变更合同的，自合同变更之日起，丙方解除担保义务。
                </p>
                <p className={styles.text1}>
                    4.3 乙方出现违约风险时，丙方在按照本合同约定向甲方偿付借款的本金和利息后，有权对乙方抵押质押的资产进行处置。
                </p>
                <p className={styles.text1}>
                    4.4 丙方的保证期限自债权到期之日起壹年
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第五条 丁方的权利和义务
                </h3>
                <p className={styles.text1}>
                    5.1 丁方应当按照本协议的规定，恪尽职守，以诚实、守信、谨慎、有效管理的原则为甲方、乙方、丙方进行服务。
                </p>
                <p className={styles.text1}>
                    5.2 丁方须对甲方、乙方及丙方信息、资产情况及其他服务相关事务的具体情况和资料依法保密；当其中一方出现违约时，
                    丁方有义务在平台上向其它各方披露公开违约方个人或企业的全部相关信息，并积极协助各方维护自身权益。
                </p>
                <p className={styles.text1}>
                    5.3 丁方有义务对乙方、丙方的资格进行形式审查，保证在平台上注册的债务人真实存在并取得相关资质。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第六条 风险提示
                </h3>
                <p className={styles.text1}>
                    6.1 政策风险 国家因宏观政策、财政政策、货币政策、行业政策、地区发展、法律法规等因素引发的政策风险。
                </p>
                <p className={styles.text1}>
                    6.2 信用风险 当债务人发生资金状况的风险，或者债务人的还款意愿发生变化时，甲方的出借资金可能无法按时收回；
                    当风险保障金专用账户余额不足弥补所有的逾期借款方的违约金额时，甲方应得到的本息可能延迟回收。
                </p>
                <p className={styles.text1}>
                    6.3 不可抗力 由于战争、动乱、自然灾害等不可抗力因素的出现而可能导致甲方资产损失的风险。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第七条 税务处理
                </h3>
                <p className={styles.text1}>
                    甲方在资金出借过程产生的相关税费，由甲方自行向其主管税务机关申报、缴纳，乙方、丁方不负责相关事宜处理。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第八条 保密条款
                </h3>
                <p className={styles.text1}>
                    8.1 本协议签署后，除非事先得到另三方的书面同意，本协议各方均应承担以下保密义务：
                </p>
                <p className={styles.text1}>
                    （1）任何一方不得向非本协议方披露本协议以及本协议项下的事宜以及与此等事宜有关的任何文件、资料或信息（"保密信息"）；
                </p>
                <p className={styles.text1}>
                    （2）任何一方只能将保密信息和其内容用于本协议项下的目的，不得用于任何其他目的。本款的约定不适用于下列保密信息：
                </p>
                <p className={styles.text1}>
                    A、从披露方获得时，已是公开的；
                </p>
                <p className={styles.text1}>
                    B、从披露方获得前，接受方已经获知的；
                </p>
                <p className={styles.text1}>
                    C、从有正当权限并不受保密义务制约的第三方获得的；
                </p>
                <p className={styles.text1}>
                    8.2 本协议各方因下列原因披露保密信息，不受前款的限制：
                </p>
                <p className={styles.text1}>
                    （1）向本协议各方的董事、监事、高级管理人员和雇员及其聘请的会计师、律师、咨询公司披露；
                </p>
                <p className={styles.text1}>
                    （2）因遵循可适用的法律、法规的强制性规定而披露；
                </p>
                <p className={styles.text1}>
                    （3）依据其他应遵守的法规向审批机构或权力机构进行的披露；
                </p>
                <p className={styles.text1}>
                    8.3 甲方和乙方提供给丙方和丁方的信息，及甲方和乙方享受丙方和丁方服务产生的信息（包括本协议签署之前提供和产生的），可由丙方和丁方共享，法律禁止的除外。
                </p>
                <p className={styles.text1}>
                    8.4 本协议任何一方应采取所有其他必要、适当和可采取的措施，以确保保密信息的保密性。
                </p>
                <p className={styles.text1}>
                    8.5 本协议各方应促使其向之披露保密信息的人亦严格遵守本条约定。
                </p>
                <p className={styles.text1}>
                    8.6 各方在本条项下的权利和义务应在本协议终止或到期后继续有效。
                </p>
            </div>
            <div>
                <h3 className={classNames(styles.text,styles.pd1,styles.hColor)}>
                    第九条 其他条款
                </h3>
                <p className={styles.text1}>
                    9.1 乙方不依本合同约定偿还本合同项下债务，甲方或丙方、丁方享有追索权。甲方或丙方、丁方因行使上述追索权而支出的合理费用，均由乙方承担。
                </p>
                <p className={styles.text1}>
                    9.2 四方同意，为办理与本合同借款相关的反担保登记手续，乙方与甲方指定的代理人可就本合同借款另行签订借款合同，该借款所涉及权利义务以本合同为准。
                    乙方依 本合同（或乙方与甲方代理人签订的借款合同）约定偿还合同项下债务，
                    可将相关借款本金及利息汇入甲方或甲方指定代理人指定的账户，甲方同意均视同为甲方已 经收到了乙方相应款项。
                </p>
                <p className={styles.text1}>
                    9.3 如果甲方出现出借资金的继承或赠与，必须由主张权利的继承人或受赠人向丁方出示经国家权威机关认证的继承或赠与权利归属证明文件，
                    丁方确认后方予协助进行 资产的转移。由此产生的相关税费，由主张权利的继承人或受赠人，向其主管税务机关申报、缴纳，丁方不负责相关事宜处理。
                </p>
                <p className={styles.text1}>
                    9.4 本合同一部分无效，不影响其他部分的法律效力。
                </p>
                <p className={styles.text1}>
                    9.5 本合同一式四份，各方均有一份。合同自甲乙丙丁四方确认后生效。
                </p>
                <p className={styles.text1}>
                    9.6 本合同的传真件、复印件、扫描件等有效复本的效力与本协议原件效力一致。
                </p>
                <p className={styles.text1}>
                    9.7 如果各方在协议履行过程中发生任何争议，应友好协商解决；如协商不成，任何一方均有权向丁方所在地的人民法院提起诉讼。
                </p>
            </div>
            <div className={styles.autoGraph}>
                <p>
                    甲方（债权人）：
                </p>
                <p>
                    乙方（债务人）：{real_name}
                </p>
                <p>
                    丙方（担保人）：{sponsor}
                </p>
                <p>
                    丁方（平台服务方）：{providers}
                    <img src={seal} />
                </p>
                <p>
                    合同签署日期：{strDate}
                </p>
            </div>
        </div>
    </div>)
};
const zhDate=(date)=>{
    const standardDate=new Date(Date.parse(date)),
        year=standardDate.getFullYear(),
        month=standardDate.getMonth()+1,
        day=standardDate.getDate();
    return year+'年'+month+'月'+day+'日';
}
const NewContract=(data)=>{
    const {
        amount,card,connect_address,date,number,
        percent,providers,real_name,repayment,
        sponsor,username,loan_detail,identity,userphone
        ,contact,borrow_use,amount_cny,start_date,end_date,overdue,penalty
    }=data;
    let startDate,endDate;
    if (start_date!=''){
        startDate=zhDate(start_date)
    }
    if (end_date!=''){
        endDate=zhDate(end_date);
    }
    const strDate=zhDate(date);
    return(<div className={styles.content}>
         <h1 className={styles.newTitle}>借款合同</h1>
        <p className={classNames(styles.text,styles.textRight)}>合同编号:{number}</p>
        <p className={styles.text}>
            本借款合同（ 下称“本合同” ）由以下各方于{strDate}签署：
        </p>
        <p className={styles.text}>
            甲方（出借人）：
            <br/>详见本合同第一条
        </p>
        <div className={styles.masterNews}>
            <p className={styles.text}>
                乙方（借款人）：
            </p>
            <p className={styles.text}>
                姓名：{real_name}
            </p>
            <p className={styles.text}>
                证件类型：{identity}
            </p>
            <p className={styles.text}>
                证件证号：{card}
            </p>
            <p className={styles.text}>
                宝点网用户名：{username}
            </p>
            <p className={styles.text}>
                联系方式：{userphone}
            </p>
            <p className={styles.text}>
                丙方（居间平台服务商）：{providers}
            </p>
            <p className={styles.text}>
                联系方式：{connect_address}
            </p>
            <p className={styles.text}>
                联系电话：{contact}
            </p>
            <p className={classNames(styles.text,styles.pd1)}>
                鉴于:
            </p>
            <p className={styles.text1}>
                1、居间平台服务商是一家合法成立并有效存续的有限公司，系（互联网域名bao.cn，宝点网）的运营管理人，向网站注册用户提供咨询、信息及各种委托服务等居间服务。
            </p>
            <p className={styles.text1}>
                2、出借人有出借资金进行投资需求，借款人因生产经营或消费所需，有借款需求。双方均已阅读并同意遵守宝点网的《注册合同》，注册成为宝点网的用户，
                并认可宝点网通过网站公开发布关于注册用户的各种规则。
            </p>
            <p className={styles.text1}>
                3、出借人和借款人同意通过居间服务人的服务，以电子合同的形式达成本借款合同，本借款合同的内容经双方充分阅读且知晓每一条款的含义，
                是双方真实意思表示，并认可该形式之合同的法律效力。
            </p>
            <div className={styles.tableBox}>
                <p  className={classNames(styles.text,styles.pd)}>
                    第一条 出借人详情如下表所示:
                </p>
                <table>
                    <thead>
                    <tr>
                        <th>
                            出借人用户名
                        </th>
                        <th>
                            出借人姓名
                        </th>
                        <th>
                            出借金额
                        </th>
                        <th>
                            出借期限
                        </th>
                        <th>
                            年利率
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        loan_detail.map(({username,amount,real_name,percent,term},i)=>(
                            <tr key={i}>
                                <td>
                                    {
                                        username
                                    }
                                </td>
                                <td>
                                    {
                                        real_name
                                    }
                                </td>
                                <td>
                                    {
                                        amount
                                    }
                                </td>
                                <td>
                                    {
                                        term
                                    }
                                </td>
                                <td>
                                    {
                                        percent
                                    }
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <p  className={classNames(styles.text1,styles.pd1)}>
                第二条  乙方的借款用途为：{borrow_use}，
                借款金额为：{amount}（大写：人民币{amount_cny}），借款利率：{percent}%，还款方式：{repayment}，借款期限为：{startDate}到{endDate}止。
            </p>
            <p  className={styles.text1}>
                第三条 借款、还款的支付方式
            </p>
            <p className={styles.text1}>
                1、甲方、乙方就借款事宜未面洽，系经丙方经营的宝点网网络平台撮合达成借贷交易，为保证交易资金安全。
                甲方同意向借款人出借相应款项时,委托丙方在本借款合同生效后将该笔借款从甲方注册帐户中直接划付至乙方帐户。
            </p>
            <p className={styles.text1}>
                2、乙方承诺按本合同足额还款，并委托第三方支付平台从其银行帐户中代扣应还款金额，并委托丙方将还款划付至各出借人帐户。
            </p>
            <p className={styles.text1}>
                3、丙方网站通过公告或其他各种方式明示出借人应享有的各种收益（包括但不限于利息等），均已包含在本合同的借款利息中。
                甲方、乙方均同意，丙方接受其委托所采取的划付款项行为，所产生的法律后果均由相应委托方借款人或出借人自行承担。
            </p>
            <p className={styles.text1}>
                第四条  甲方的权利和义务
            </p>
            <p className={styles.text1}>
                1、甲方保证具有签订和履行本合同所必需的民事权利能力和民事行为能力，有权签订本合同，并能独立承担民事责任。
            </p>
            <p className={styles.text1}>
                2、甲方自愿向乙方提供借款，其在本合同项下的全部意思表示是真实。
            </p>
            <p className={styles.text1}>
                3、甲方保证其出借款项的资金来源合法，甲方是该资金的合法所有人，如果第三人对资金归属、合法性问题发生争议，
                由甲方负责解决。如甲方未能解决，则放弃享有其所有出借款项所带来的利息收益。
            </p>
            <p className={styles.text1}>
                4、甲方享有其所出借款项所带来的利息收益，并应主动缴纳由利息所带来的可能的税费。
            </p>
            <p className={styles.text1}>
                5、甲方确认所提供的通讯地址和联系方式真实有效，如有错误或出现变更，甲方承诺于变更后5个工作日内向丙方进行书面通知，
                如不通知，导致的商业信函和诉讼文书送达不能的法律后果由自己承担。
            </p>
            <p className={styles.text1}>
                第五条 乙方权利和义务
            </p>
            <p className={styles.text1}>
                1、乙方保证具有签订和履行本合同所必需的民事权利能力和民事行为能力，有权签订本合同，并能独立承担民事责任。
            </p>
            <p className={styles.text1}>
                2、乙方自愿向甲方申请借款，其在本合同项下的全部意思表示是真实的。
            </p>
            <p className={styles.text1}>
                3、乙方必须按期足额向甲方归还每期应还本金和利息，向丙方按期足额支付相关的服务费用，并支付与乙方逾期及提前还款有关的费用。
            </p>
            <p className={styles.text1}>
                4、乙方承诺所借款项不用于任何违法用途。
            </p>
            <p className={styles.text1}>
                5、乙方应确保其提供的信息和资料的真实性，不得提供虚假信息或隐瞒重
                要事实。若乙方违反本合同约定，丙方有权根据本合同及有关条款对乙方的信息和资料予以合理的披露。
            </p>
            <p className={styles.text1}>
                6、乙方同意，甲方和丙方有权使用其自行收集或乙方提供的乙方资料和信息用于以下用途（包括但不限于）:
            </p>
            <p className={styles.text1}>
                （1）为了提供本合同项下的服务，丙方向有关的合作机构提供必要之资料；
            </p>
            <p className={styles.text1}>
                （2）用于解决争议、对纠纷进行调停等。
            </p>
            <p className={styles.text1}>
                7、乙方确认所提供的通讯地址和联系方式真实有效，如有错误或出现变更，甲方承诺于变更后5个工作日内向丙方进行书面通知，
                如不通知，导致的商业信函和诉讼文书送达不能的法律后果由自己承担。
            </p>
            <p className={styles.text1}>
                第六条 丙方的权利和义务
            </p>
            <p className={styles.text1}>
                1、丙方有权根据乙方提供的各项信息及丙方独立获得的信息评定乙方在丙方处所拥有的个人信用等级，并根据对乙方个人信息的评审结果，
                决定是否审核通过并将乙方的借款需求向甲方进行推荐。
            </p>
            <p className={styles.text1}>
                2、丙方有权就为本合同借款所提供的服务向甲方、乙方收取管理费、服务费及其它费用。
            </p>
            <p className={styles.text1}>
                3、甲、乙双方同意丙方有权代甲方在必要时对乙方进行借款的违约提醒及催收工作，包括但不限于电话催收、上门催收、发律师函、对乙方提起诉讼等。甲方在此确认委托丙方为其进行以上工作，并授权丙方可以将此工作委托给其他方进行。乙方对前述委托的提醒、催收事项已明确知晓并应积极配合，
                同时应承担因乙方逾期还款而产生的催收费用及一切甲方为实现债权而产生的费用（包括但不限于律师费、诉讼费、工作人员上门的人工费、差旅费等）。
            </p>
            <p className={styles.text1}>
                4、丙方接受甲方双方的委托行为所产生的法律后果由相应委托方承担。如因乙方或甲方或其他方（包括但不限于技术问题）造成的延误或错误，丙方不承担任何责任。
            </p>
            <p className={styles.text1}>
                5、丙方应对甲方和乙方的信息及本合同内容保密；如任何一方违约，或因相关权力部门要求（包括但不限于法院、仲裁机构、金融监管机构等），丙方有权披露。
            </p>
            <p className={styles.text1}>
                第七条 债权的转让
            </p>
            <p className={styles.text1}>
                1、 甲方、乙方一致同意，本合同项下甲方对乙方的债权可以部分或全部向第三方转让。该转让仅使债权人发生变更，对本合同中的借款金额、借款期限、年利率、还款方式等相关事项均不产生影响。
                乙方仍应按本合同的约定将应还本息存入其银行帐户，由第三方支付平台进行代扣，再由丙方根据届时债权转让的情况将乙方还款转入新债权人的帐户。
            </p>
            <p className={styles.text1}>
                2、甲方、乙方一致同意由丙方将前述债权转让相关事宜通知乙方。丙方可采用手机短信、电子邮件、宝点网网络平台站内信件等方式向乙方发送债权转让通知，
                对上述任一通知方式乙方均认可其效力，并承诺继续按本合同的约定偿还借款本息。
            </p>
            <p className={styles.text1}>
                第八条 违约责任
            </p>
            <p className={styles.text1}>
                1、 在本合同有效期内，任何一方未履行本合同项下的任何义务，均构成违约，应按法律规定及本合同的约定对守约方承担违约责任。
            </p>
            <p className={styles.text1}>
                2、若乙方未按本合同的约定按期向甲方偿付借款本息，除应继续履行偿付义务外，每迟延一天，还应按应付未付金额的 {overdue}% 向甲方支付滞纳金。
            </p>
            <p className={styles.text1}>
                3、乙方有下列情形之一的，视为乙方违约，甲方有权提前解除本合同，乙方需在甲方要求解除合同后三日内一次性支付包括但不限于剩余本金、应付未付的利息和其他费用（包括但不限于法院或仲裁机构费用、律师费、执行费、评估费、鉴定费、拍卖费、保管费、手续费及相关人员的差旅费等），
                并按照全部借款金额的{penalty}%向甲方支付违约金；构成犯罪的，甲方有权向国家机关报案，追究其刑事责任。
            </p>
            <p className={styles.text1}>
                （1）乙方擅自改变本合同规定的借款用途或逾期还款15日以上；
            </p>
            <p className={styles.text1}>
                （2）乙方提供虚假资料或者隐瞒事实；
            </p>
            <p className={styles.text1}>
                （3）乙方卷入或即将卷入刑事案件、经济纠纷或其他法律纠纷；
            </p>
            <p className={styles.text1}>
                （4）按照乙方提供的联系方式无法联系上乙方；
            </p>
            <p className={styles.text1}>
                （5）乙方在丙方发现的其他借款合同中出现违约情形；
            </p>
            <p className={styles.text1}>
                （6）乙方转移财产的；
            </p>
            <p className={styles.text1}>
                （7）乙方丧失商业信誉或资信状况恶化的；
            </p>
            <p className={styles.text1}>
                （8）乙方违反其在本合同约定的义务；
            </p>
            <p className={styles.text1}>
                （9）乙方有丧失或可能丧失履行债务能力的其他情形；
            </p>
            <p className={styles.text1}>
                （10）乙方被工商部门列入黑名单的（如乙方为企业法人的）；
            </p>
            <p className={styles.text1}>
                （11）出现其他有可能导致甲方权益受到损害的情形。
            </p>
            <p className={styles.text1}>
                第九条 鉴于本合同各方均是通过丙方网络平台电子合同签署系统进行签署的，甲、 乙双方在此确认，本合同的签订地为丙方所在地即成都市锦江区。
            </p>
            <p className={styles.text1}>
                第十条 本合同项下的任何争议，应由各方友好协商解决，若协商不成，各方在合同签订地即丙方所在地的人民法院提起诉讼。
            </p>
            <p className={styles.text1}>
                第十一条 本合同采用电子文本形式制成，经各方通过宝点网网络平台电子合同签署系统在线点击确认签署后生效，合同各方均认可本合同的真实性，并认可该形式之合同的法律效力。
            </p>
            <div className={styles.autoGraph}>
                <p>
                    甲方（债权人）：
                </p>
                <p>
                    乙方（债务人）：{real_name}
                </p>
                <p>
                    丙方（担保人）：{sponsor}
                </p>
                <p>
                    丁方（平台服务方）：{providers}
                    <img src={seal} />
                </p>
                <p>
                    合同签署日期：{strDate}
                </p>
            </div>
        </div>
    </div>)
}
class Index extends Component{
    componentWillMount(){
        const id=this.props.params.id;
        this.props.getInfo(id);
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
           return (<OldContract {...data}/>)
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
      infoData:state.infodata.getIn(['DIRECT_INVEST_CONTRACT','data'])
});
const dispatchFn=(dispatch)=>({
      getInfo(id){
          dispatch({
              type:'DIRECT_INVEST_CONTRACT',
              params:[id]
          })
      },
    pop(){
          dispatch(goBack())
    },
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'DIRECT_INVEST_CONTRACT'
        })
    }
})
export default connect(datas,dispatchFn)(Index)