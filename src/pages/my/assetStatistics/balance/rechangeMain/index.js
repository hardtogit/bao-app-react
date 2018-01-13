/**
 * Created by xiangguo .
 * time:2018/1/9 0009.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import NavBar from '../../../../../components/NavBar'
import Store from '../../../../../components/Dialog/store'
import styles from './index.less'
import cunguan_icon from '../../../../../assets/images/my-index/cunguan.png'
import tuoguan_icon from '../../../../../assets/images/my-index/tuoguan.png'
class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
       this.props.load();
    }
    render() {
        const {pop,push,userInfo}=this.props
        return(
            <div className={styles.container}>
                <Store ref="store"></Store>
                <NavBar onLeft={pop}>
                    充值
                </NavBar>
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
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div className={styles.store}>
                                存
                            </div>
                            <div className={styles.detail} onClick={()=>{push('/user/moneyLog')}}>
                                余额明细 <span className={styles.arrow}></span>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.left}>
                                <img src={cunguan_icon} alt=""/>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.title}>存管账户余额 (元)</p>
                                <p className={styles.money}>{userInfo&&userInfo.data.balance}</p>
                            </div>
                        </div>
                        <div className={styles.footer} onClick={()=>{
                            let storeData=JSON.parse(sessionStorage.getItem('bao-store'));
                            if(storeData.isBindBankcard&&storeData.isRegister){
                                this.props.push('/user/newRecharge')
                            }else{
                                if(storeData.isRegister){
                                    this.props.push('/user/setting/cardBind')
                                }else{
                                    this.refs.store.show();
                                }
                            }
                        }}>
                            <div className={styles.btn}>
                                充值
                            </div>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <div className={styles.header}>
                            <div className={styles.store}>
                                托
                            </div>
                            <div className={styles.detail} onClick={()=>{push('/user/moneyLogOld')}}>
                                余额明细 <span className={styles.arrow}></span>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.left}>
                                <img src={tuoguan_icon} alt=""/>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.title}>托管账户余额 (元)</p>
                                <p className={styles.money}>{userInfo&&userInfo.data.balance_platform}</p>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.btn} onClick={() => {
                                let storeData = JSON.parse(sessionStorage.getItem('bao-store'));
                                if (storeData && storeData.isAuthIdentity && storeData.isSecurityCard) {
                                    push('/user/oldRecharge')
                                    return;
                                }
                                if (storeData.isBindBankcard && storeData.isRegister) {
                                    push('/user/oldRecharge')
                                } else {
                                    if (storeData.isRegister) {
                                        this.props.push('/user/setting/cardBind')
                                    } else {
                                        this.refs.tip.show();
                                    }
                                }
                            }}>
                                充值
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )

    }
}
const mapStateToProps=(state)=>({
       userInfo:state.infodata.getIn(['USER_INFO','data'])
});
const mapDispatchProps=(dispatch)=>({
    pop(){
        dispatch(goBack())
    },
    load(){
        dispatch({
            type: "USER_INFO_WITH_LOGIN"
        })
    },
    push(url){
        dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapDispatchProps)(Index)