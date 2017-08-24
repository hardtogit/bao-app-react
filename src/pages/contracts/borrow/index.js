/**
 * Created by wangdongfang on 17/2/20.
 */
import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import styles from './index.less'
import classNames from 'classnames'
import seal from '../../../assets/images/z.png'
import {connect} from 'react-redux'
import Loading from '../../../components/pageLoading'
import {goBack} from 'react-router-redux'
import NewContract from './newContract'
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
    return (<div className={styles.bodyBox}>
        <div className={styles.content}>
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
                    姓名：
                </p>
                <p className={styles.text}>
                    证件类型：
                </p>
                <p className={styles.text}>
                    证件证号：
                </p>
                <p className={styles.text}>
                    宝点网用户名：
                </p>
                <p className={styles.text}>
                    联系方式：
                </p>
                <p className={styles.text}>
                    丙方（居间平台服务商）：
                </p>
                <p className={styles.text}>
                    联系方式：
                </p>
                <p className={styles.text}>
                    联系电话：
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
                <p className={styles.text1}>据此，出借人与借款人，在居间服务人的撮合下，就借款事宜达成以下合同：</p>
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
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <p  className={classNames(styles.text1,styles.pd1)}>
                    第二条  乙方的借款用途为：，
                    借款金额为：（大写：人民币），借款利率：%，还款方式：，借款期限为：到止。
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
                    2、若乙方未按本合同的约定按期向甲方偿付借款本息，除应继续履行偿付义务外，每迟延一天，还应按应付未付金额的 2% 向甲方支付滞纳金。
                </p>
                <p className={styles.text1}>
                    3、乙方有下列情形之一的，视为乙方违约，甲方有权提前解除本合同，乙方需在甲方要求解除合同后三日内一次性支付包括但不限于剩余本金、应付未付的利息和其他费用（包括但不限于法院或仲裁机构费用、律师费、执行费、评估费、鉴定费、拍卖费、保管费、手续费及相关人员的差旅费等），
                    并按照全部借款金额的30%向甲方支付违约金；构成犯罪的，甲方有权向国家机关报案，追究其刑事责任。
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
                    第九条 鉴于本合同各方均是通过丙方网络平台电子合同签署系统进行签署的，甲、 乙双方在此确认。
                </p>
                <p className={styles.text1}>
                    第十条 本合同经各方协商一致，可以电子文本形式签订补充协议，补充协议是本合同的组成部分，与本合同具有同等的法律效力。本合同项下的任何争议，应由各方友好协商解决，若协商不成，各方向丙方住所地有管辖权的人民法院提起诉讼。
                </p>
                <p className={styles.text1}>
                    第十一条 各方同意，本合同项下的债权发生转让时，为便于各方明确责任主体更好的履行本合同，丙方有权制作债权转让交易记录作为本合同的附件（详见债权转让列表）。
                </p>
                <p className={styles.text1}>
                    第十二条 本合同采用电子文本形式制成，经各方通过宝点网网络平台电子合同签署系统在线点击确认签署后生效，合同各方均认可本合同的真实性，并认可该形式之合同的法律效力。
                </p>
                <div className={styles.tableBox}>
                    <p  className={classNames(styles.text,styles.pd)}>
                        附件 债权转让列表:
                    </p>
                    <table>
                        <thead>
                        <tr>
                            <th>
                                债权受让者
                            </th>
                            <th>
                                债权转让者
                            </th>
                            <th>
                                交易金额（人民币/元）
                            </th>
                            <th>
                                交易日期
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            //loan_detail.map(({username,amount,real_name,percent,term},i)=>(
                            //    <tr key={i}>
                            //        <td>
                            //            {
                            //                username
                            //            }
                            //        </td>
                            //        <td>
                            //            {
                            //                real_name
                            //            }
                            //        </td>
                            //        <td>
                            //            {
                            //                amount
                            //            }
                            //        </td>
                            //        <td>
                            //            {
                            //                term
                            //            }
                            //        </td>
                            //        <td>
                            //            {
                            //                percent
                            //            }
                            //        </td>
                            //    </tr>
                            //))
                        }
                        </tbody>
                    </table>
                </div>


                <div className={styles.autoGraph}>
                    <p>
                        甲方（出借人）：详见本合同第一条
                    </p>
                    <p>
                        乙方（借款人）：
                    </p>
                    <p>
                        丙方（居间平台服务商）：
                    </p>
                    <p>
                        <img src={seal} />
                    </p>
                    <p>
                        合同签署日期：
                    </p>
                </div>
            </div>
        </div>
    </div>)

    }
    loadEndDomTwo=()=>{
        const {
            infoData:{
                data
                }
            }=this.props;
        console.log(data)
        let startDate,endDate;
        //if (data.startTime!='0'){
        //    startDate=zhDate(data.startTime)
        //}
        //if (end_date!='0'){
        //    endDate=zhDate(end_date);
        //}
        const strDate=zhDate(data.startTime);
        return (<div className={styles.bodyBox}>
            <div className={styles.content}>
                <h1 className={styles.newTitle}>借款合同</h1>
                <p className={classNames(styles.text,styles.textRight)}>合同编号:</p>
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
                        姓名：
                    </p>
                    <p className={styles.text}>
                        证件类型：
                    </p>
                    <p className={styles.text}>
                        证件证号：
                    </p>
                    <p className={styles.text}>
                        宝点网用户名：
                    </p>
                    <p className={styles.text}>
                        联系方式：
                    </p>
                    <p className={styles.text}>
                        丙方（居间平台服务商）：
                    </p>
                    <p className={styles.text}>
                        联系方式：
                    </p>
                    <p className={styles.text}>
                        联系电话：
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
                    <p className={styles.text1}>据此，出借人与借款人，在居间服务人的撮合下，就借款事宜达成以下合同：</p>
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
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <p  className={classNames(styles.text1,styles.pd1)}>
                        第二条  乙方的借款用途为：，
                        借款金额为：（大写：人民币），借款利率：%，还款方式：，借款期限为：到止。
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
                        2、若乙方未按本合同的约定按期向甲方偿付借款本息，除应继续履行偿付义务外，每迟延一天，还应按应付未付金额的 2% 向甲方支付滞纳金。
                    </p>
                    <p className={styles.text1}>
                        3、乙方有下列情形之一的，视为乙方违约，甲方有权提前解除本合同，乙方需在甲方要求解除合同后三日内一次性支付包括但不限于剩余本金、应付未付的利息和其他费用（包括但不限于法院或仲裁机构费用、律师费、执行费、评估费、鉴定费、拍卖费、保管费、手续费及相关人员的差旅费等），
                        并按照全部借款金额的30%向甲方支付违约金；构成犯罪的，甲方有权向国家机关报案，追究其刑事责任。
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
                        第九条 鉴于本合同各方均是通过丙方网络平台电子合同签署系统进行签署的，甲、 乙双方在此确认。
                    </p>
                    <p className={styles.text1}>
                        第十条 本合同经各方协商一致，可以电子文本形式签订补充协议，补充协议是本合同的组成部分，与本合同具有同等的法律效力。本合同项下的任何争议，应由各方友好协商解决，若协商不成，各方向丙方住所地有管辖权的人民法院提起诉讼。
                    </p>
                    <p className={styles.text1}>
                        第十一条 各方同意，本合同项下的债权发生转让时，为便于各方明确责任主体更好的履行本合同，丙方有权制作债权转让交易记录作为本合同的附件（详见债权转让列表）。
                    </p>
                    <p className={styles.text1}>
                        第十二条 本合同采用电子文本形式制成，经各方通过宝点网网络平台电子合同签署系统在线点击确认签署后生效，合同各方均认可本合同的真实性，并认可该形式之合同的法律效力。
                    </p>
                    <div className={styles.tableBox}>
                        <p  className={classNames(styles.text,styles.pd)}>
                            附件 债权转让列表:
                        </p>
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    债权受让者
                                </th>
                                <th>
                                    债权转让者
                                </th>
                                <th>
                                    交易金额（人民币/元）
                                </th>
                                <th>
                                    交易日期
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                //loan_detail.map(({username,amount,real_name,percent,term},i)=>(
                                //    <tr key={i}>
                                //        <td>
                                //            {
                                //                username
                                //            }
                                //        </td>
                                //        <td>
                                //            {
                                //                real_name
                                //            }
                                //        </td>
                                //        <td>
                                //            {
                                //                amount
                                //            }
                                //        </td>
                                //        <td>
                                //            {
                                //                term
                                //            }
                                //        </td>
                                //        <td>
                                //            {
                                //                percent
                                //            }
                                //        </td>
                                //    </tr>
                                //))
                            }
                            </tbody>
                        </table>
                    </div>


                    <div className={styles.autoGraph}>
                        <p>
                            甲方（出借人）：详见本合同第一条
                        </p>
                        <p>
                            乙方（借款人）：
                        </p>
                        <p>
                            丙方（居间平台服务商）：
                        </p>
                        <p>
                            <img src={seal} />
                        </p>
                        <p>
                            合同签署日期：
                        </p>
                    </div>
                </div>
            </div>
        </div>)

    }
    render(){
        const {
            infoData,
            pop
        }=this.props;
        let dom;
        if(infoData){
           dom=this.loadEndDomTwo();
        }else{
           dom=this.loadDom()
        }
        return(<div>
            <NavBar onLeft={pop}>安全保障计划</NavBar>
            {dom}
        </div>)
    }
}
const datas=(state)=>({
      infoData:state.infodata.getIn(['GATHER_CONTRACT','data'])
});
const dispatchFn=(dispatch)=>({
      getInfo(id){
          dispatch({
              type:'GATHER_CONTRACT',
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