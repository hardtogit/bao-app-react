/**
 * Created by xiangguo .
 * time:2018/1/24 0024.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import cs from 'classnames'
import NavBar from '../../../../../components/NavBar'
import LoadingPage from '../../../../../components/pageLoading'
import utils from '../../../../../utils/utils'
import {connect} from 'react-redux'
import nullImg from "../../../../../assets/images/record.png";
import Alert from '../../../../../components/Dialog/alert'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {
            isOpen: false
        }
    }
    componentDidMount(){
        this.props.load()

    }
    render(){
        const{pop,push,userInfo}=this.props
        return(
            <div className={styles.container}>
              <NavBar onLeft={pop}> 账户余额</NavBar>
                <div className={styles.content}>
                    <h4 className={styles.text}>账户余额 (元)</h4>
                    <div className={styles.num}>{(()=>{
                        if(userInfo) {
                            let value = JSON.stringify((userInfo.data.balance * 100 + userInfo.data.balance_platform * 100) / 100);
                            if(value.split('.')[1]){
                                switch (value.split('.')[1].length) {
                                    case 1:
                                        return value + '0';
                                        break
                                    case 2:
                                        return value;
                                        break
                                    default:
                                        return value + ".00"
                                        break

                                }
                            }else{
                                return value + ".00"
                            }
                        }
                    })()}</div>
                    <div className={styles.boxs}>
                        <div className={styles.left}>
                            <ul>
                                <li className={styles.mx}><span onClick={()=>{push('/user/moneyLog')}}>交易明细 <span className={styles.arrow}></span></span></li>
                                <li className={styles.tx}>存管账户余额(元)</li>
                                <li className={styles.money}>{userInfo&&userInfo.data.balance}</li>
                            </ul>
                        </div>
                        <div className={styles.right}>
                            <ul>
                                <li className={styles.mx}><span onClick={()=>{push('/user/moneyLogOld')}}>交易明细 <span className={styles.arrow}></span></span></li>
                                <li className={styles.tx}>托管账户余额(元)</li>
                                <li className={styles.money}>{userInfo&&userInfo.data.balance_platform}</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div onClick={()=>{push('/user/reChargeMain')}} className={cs([styles.btn,styles.charge])}>
                    充值
                </div>
                <div onClick={()=>{push('/user/CashMain')}} className={cs([styles.btn,styles.cash])}>
                    提现
                </div>


            </div>

        )
    }
}
const mapStateToProps=(state)=>({
    userInfo:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    load(){
        dispatch({
            type: "USER_INFO_WITH_LOGIN"
        })
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)