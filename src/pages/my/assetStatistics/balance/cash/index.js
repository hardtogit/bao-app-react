import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/'
import styles from './index.css'
import {connect} from 'react-redux'
import {Link} from 'react-router';
import Loading from '../../../../../components/pageLoading/'
class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles.bg}>
                <NavBar>余额提现</NavBar>
                <p className={styles.test}>ssss</p>
            </div>
        )
    }
}
const Rechargeinit=(state,own)=>({
    balance:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data'])
});
const Rechargeinitfn=(dispath,own)=>({
    load(){
        dispath({
            type:"USER_INFO_WITH_LOGIN"
        })
    }
});
export default connect(Rechargeinit,Rechargeinitfn)(Index)