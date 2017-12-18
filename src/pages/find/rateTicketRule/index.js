import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import classNames from 'classnames'
import Scroll from '../../../components/scroll'
import ruleTable from '../../../assets/images/find/ruleTable.png'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class rateTicketRule extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {
            pop
        }=this.props;

        return(
             <div className={styles.findMessage} >
             <div className={styles.findMessageHeader}><NavBar title="加息券领取规则" backgroundColor="#d0a15e" onLeft={pop}/>
             </div>
              <div className={styles.messageContent}>
                <div className={styles.tacket}>
                    <img src={ruleTable} style={{width:"100%"}}/>
                    <p>1、VIP3级以上可享受领取加息劵权利；</p>
                    <p>2、每种加息券类别每月仅限领取一次，每月定义为每月1日0:00至每月左后一日23:59:59；</p>
                    <p>3、VIP3每月限量两张，VIP4、VIP5、VIP6每月限领4张（类别不限）；</p>
                    <p>4、加息券有效期限为领取日起7天内投资使用有效；</p>
                    <p>注：宝点网会员若在当月会员等级升级可领取下个等级的加息券福利，若降级，则不追回当月领取的加息券。</p>
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
export default connect(initMymassege,initMymassegefn)(rateTicketRule)