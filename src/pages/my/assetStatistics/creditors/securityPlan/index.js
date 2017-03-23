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
    zhDate=(date)=>{
        const standardDate=new Date(Date.parse(date)),
            year=standardDate.getFullYear(),
            month=standardDate.getMonth()+1,
            day=standardDate.getDate();
        return year+'年'+month+'月'+day+'日';
    }
    loadEndDom=()=>{
        const {
            infoData:{
                data
            }
        }=this.props;
        const {
            contract_number,date,first_real_name,first_card,first_username,
            second_real_name,second_card,second_username,providers,connect_address,
            purpose,term_months,profit_unit,term_start_date,term_end_date,repayment_start_date,
            repayment_end_date,bond_value,transferee_principal,repay_amount_month,transfer_fee,
            transfer_date,expiration_date
        }=data;
        const strDate=this.zhDate(date),
              termStrDate=this.zhDate(term_start_date),
              termStrDateEnd=this.zhDate(term_end_date),
              repaymentStrDate=this.zhDate(repayment_start_date),
              repaymentStrDateEnd=this.zhDate(repayment_end_date),
              transferStrdate=this.zhDate(transfer_date),
              expirationStrDate=this.zhDate(expiration_date);
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
                        预期收益/月:￥{repay_amount_month}
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
                        1.2.1 双方同意并确认，双方通过自行或授权根据宝点网网站有关规则和说明，在宝点网网站进行债权转让和受让购买操作等方式确认签署本协议。
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
    getInfo(id){
        dispatch({
            type:'CREDITORS_CONTRACT',
            params:[id]
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