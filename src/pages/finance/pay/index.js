/**
 * Created by wangdongfang on 17/3/15.
 */
/**
 * Created by wangdongfang on 17/3/15.
 */
import React,{Component,PropTypes} from 'react';
import NavBar from '../../../components/NavBar'
import styles from './index.less'
const hostName=location.hostname;
`http://${hostName}/mobile_api/deposit/buy`
const Urls={
    deposit:`http://${hostName}/mobile_api/deposit/buy`,
    pay:`http://${hostName}/mobile_api/pay?money=`,
    directInvest:`http://${hostName}/mobile_api/directInvest/buy/`,
    creditors:`http://${hostName}/mobile_api/creditors/pay-bond/`
}
class Index extends Component{

    render(){
           const {url,closeFn}=this.props;
        return(<div className={styles.rechargeBox}>
            <NavBar leftNode={<span className={styles.rechargeTitle}>关闭</span>}
                    onLeft={closeFn} style={{position:'absolute',left:'0px',top:'0px'}}>充值</NavBar>
            <iframe src={url} className={styles.ifr}></iframe>
        </div>)
    }
}
export default Index