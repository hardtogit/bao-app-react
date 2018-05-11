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
import classNames from 'classnames'
import styles from './index.less'
import cunguan_icon from '../../../../../assets/images/my-index/cunguan.png'
import tuoguan_icon from '../../../../../assets/images/my-index/tuoguan.png'
import {platFormGetAuthDetail,getAuthDetail} from '../../../../../components/Permission'
class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
       this.props.load();
    }
    componentWillMount(){
        this.props.getChargeStatus()
    }
    render() {
        const {pop,push,userInfo,btnInfo}=this.props
        return(
            <div className={styles.container}>
                <Store ref="store"></Store>
                <NavBar onLeft={pop} rightNode={<div>规则</div>} onRight={()=>{push('/user/reChargeRule')}}>
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
                            <div className={styles.detail} onClick={()=>{push('/user/rechargeLog/1')}}>
                                充值明细 <span className={styles.arrow}></span>
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
                            switch (getAuthDetail()){
                                case 1:
                                    this.props.push('/user/newRecharge')
                                    break;
                                case 2:
                                    push('/user/setting/authorization');
                                    break;
                                case 3:
                                    this.refs.store.show();
                                    break;
                                default:
                                    break
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
                            <div className={styles.detail} onClick={()=>{push('/user/rechargeLog/2')}}>
                                充值明细 <span className={styles.arrow}></span>
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
                            <div className={classNames([styles.disable,(btnInfo&&!btnInfo.data.hide_platform_recharge_withdraw)&&styles.btn])} onClick={() => {
                                if(btnInfo&&!btnInfo.data.hide_platform_recharge_withdraw){
                                    switch (platFormGetAuthDetail()){
                                        case 1:
                                            push('/user/oldRecharge');
                                            break;
                                        case 2:
                                            push('/user/setting/authorization');
                                            break;
                                        case 3:
                                            this.refs.store.show();
                                            break;
                                        default:
                                            break
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
       userInfo:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
       btnInfo:state.infodata.getIn(['GET_CHARGE_STATUS','data'])
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
    },
    getChargeStatus(){
        dispatch({
            type:'GET_CHARGE_STATUS'
        })
    }
});
export default connect(mapStateToProps,mapDispatchProps)(Index)