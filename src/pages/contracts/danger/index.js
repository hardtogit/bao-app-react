/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack,push,replace} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
     //组件将要渲染时调用
    }
    componentDidMount(){
     //组件渲染完成时调用
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }

    render(){
        const{
            pop,
            push
            }=this.props
        return(
           <div className={styles.container}>
              <NavBar onLeft={()=>{push('')}}>
                  理财
              </NavBar>
               <div className={styles.content}>
                   <div className={styles.title}>
                       风险提示
                   </div>
                   <div className={styles.sign}>
                       尊敬的宝点网投资人：
                   </div>
                   <div className={styles.text}>
                       您好！感谢您关注宝点网。您向宝点网提供的身份等信息应真实、准确、完整，您出借的资金应为来源合法的自有资金。
                       您承诺已完全理解并知悉本提示函及相关文件的全部内容，已具备投资风险意识、风险识别能力、拥有非保本类金融产品投资的经历并熟悉互联网，
                       同时保证已充分了解本提示函基本情况及风险特征，确认具有相应的风险认知和承受能力；且愿意自行承担可能产生的本金或收益损失。
                   </div>
                   <div className={styles.text}>
                       根据网络借贷相关法律法规及监管要求，请您在投资之前，仔细阅读以下重要内容:
                   </div>
                   <div className={styles.text}>
                       当您点击“抢购”、“立即投资”、“确认投资”、“马上买入”、”确认”、”再次购买”或其他类似涵义选项时，即视为您已经阅读并完全理解、认同并接受以下关于投资标的的各种风险，并为自身的投资决策自行承担全部风险。
                   </div>
                   <div className={styles.sign}>
                       1.政策风险
                   </div>
                   <div className={styles.text}>
                       因国家相关法律、法规、部门规章或政策发生重大调整、变化或其他不可预知的意外事件，导致投资人无法实现预期收益乃至本金遭受损失。
                   </div>
                   <div className={styles.sign}>
                       2.市场风险
                   </div>
                   <div className={styles.text}>
                       市场风险是指债权标的的收益因受经济因素、政治因素和交易制度等各种因素影响而引起的波动，导致收益水平变化而产生的风险。市场风险主要包括：经济周期风险、利率风险和购买力风险。
                   </div>
                   <div className={styles.sign}>
                       3.信用风险
                   </div>
                   <div className={styles.text}>
                       无论何种原因，当债务人短期或者长期丧失还款能力，不能按时偿还本金和利息，导致投资人无法实现预期收益，甚至本金遭受损失。宝点网作为信息中介平台，不承诺本息保障。
                   </div>
                   <div className={styles.sign}>
                       4.技术风险
                   </div>
                   <div className={styles.text}>
                       由于无法控制和不可预测的系统故障、设备故障、通讯故障、电力故障、网络故障、黑客或计算机病毒攻击以及其它因素，可能导致宝点理财平台出现非正常运行或者瘫痪，由此导致您无法及时进行查询、出借、提现等操作。
                   </div>
                   <div className={styles.sign}>
                       5.提前终止风险
                   </div>
                   <div className={styles.text}>
                       根据政策及市场环境变化，宝点理财有权停止系统实时匹配交易功能、停止提供账户服务、技术服务及其他相关服务，在提前终止情形下，投资人面临丧失投资机会及再投资的风险，并导致投资人无法实现预期收益。
                   </div>
                   <div className={styles.sign}>
                       6.信息风险
                   </div>
                   <div className={styles.text}>
                       信息风险是指在项目运作过程中，因信息中介方的知识、经验、判断等会影响其对获取的信息的判断。若信息中介方获取的信息不够全面、准确将可能导致投资人判断有误，从而影响最终的投资收益。
                   </div>
                   <div className={styles.sign}>
                       7.信息传递风险
                   </div>
                   <div className={styles.text}>
                       宝点理财将按协议约定进行信息披露，投资人应充分关注并及时主动查询项目相关信息，如未及时查询，或由于通讯故障、系统故障以及其他不可抗力等因素的影响使得无法及时了解项目信息，由此产生责任和风险应由投资人承担。
                   </div>
                   <div className={styles.sign}>
                       8.不可抗力风险
                   </div>
                   <div className={styles.text}>
                       包括但不限于自然灾害、金融市场危机、战争、黑客攻击、病毒感染等不能预见、不能避免、不能克服的不可抗力事件，对于由于不可抗力及意外事件风险导致的任何损失，客户须自行承担。
                   </div>
                   <div className={styles.sign}>
                       9.操作风险
                   </div>
                   <div className={styles.text}>
                       如果投资人缺乏必要的互联网经验，可能出现因操作不当导致资金交易失败或失误。如投资人未能谨慎保管自己的账号或密码，或者设置的密码简单导致密码被破解，以及在进行资金交易时未能确保所使用的操作终端、网络或者周围环境的安全性，导致账号或密码被他人盗取、使用，可能导致违反本人意愿的资金交易以及资金损失。
                   </div>

               </div>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)