import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import classNames from 'classnames'
import Scroll from '../../../components/scroll'
import ticket from '../../../assets/images/find/ticket.png'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class ticketRule extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {
            pop
        }=this.props;

        return(
             <div className={styles.findMessage} >
             <div className={styles.findMessageHeader}><NavBar title="抵用券领取规则" backgroundColor="#d0a15e" onLeft={pop}/>
             </div>
              <div className={styles.messageContent}>
                <div className={styles.tacket}>
                    <p>1、每种抵用券类别每月仅限领取一次，每月定义为当月1日0:00至当月最后一日23:59:59；</p>
                    <p>2、VIP1、VIP2、VIP3每月限领2张，VIP4、VIP5、VIP6每月限领4张（金额不限）；</p>
                    <p>3、抵用券有效期限为领取日起7天内投资使用有效；</p>
                    <p>注：宝点网会员若在当月会员等级升级可领取下个等级的抵用券福利，若降级，则不追回当月领取的抵用券。</p>
                </div>
            </div>
            </div>
        )
    }
}
const initMymassege=(state,own)=>{
    return{

    }
}
const initMymassegefn=(dispath,own)=>({
    pop(){
         dispath(goBack())
    }
})
export default connect(initMymassege,initMymassegefn)(ticketRule)