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
import NewContract from './newContract'
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
                就各方在丁方运营管理的宝点网平台（域名 为：www.bao.cn，"宝点网"，以下简称平台）上进行出借、融资、担保、出借咨询、
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
                    1.4 风险保障金：指甲方在丁方平台上出借的资金安全考虑，丙方将每笔担保服务费的5%划归至风险保障金专用账户，
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
class Index extends Component{
    componentWillMount(){
        const id=this.props.params.id;
        const access_sys=this.props.location.query.access_sys;
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
      getInfo(id,access_sys){
          dispatch({
              type:'DIRECT_INVEST_CONTRACT',
              params:[id,access_sys]
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