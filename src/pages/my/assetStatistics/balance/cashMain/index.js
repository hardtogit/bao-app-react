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
import classNames from 'classnames'
import cunguan_icon from '../../../../../assets/images/my-index/cunguan.png'
import tuoguan_icon from '../../../../../assets/images/my-index/tuoguan.png'
class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {

        }
    }
    componentWillMount(){
        this.props.getDefault()
    }
    componentDidMount(){
     this.props.load();
    }
    goCash=(balance)=>{
        let $this=this;
        let storeData=JSON.parse(sessionStorage.getItem('bao-store'));
        if(storeData.isBindBankcard&&storeData.isRegister){
            if(storeData.isUploadIdcard){
                $this.money(balance)
            }else{
                if($this.props.uploadData){
                    if($this.props.uploadData.code==100){
                        switch ($this.props.uploadData.data.status){
                            case '-1': $this.refs.alert.show({content:'审核失败',okText:'重新上传',okCallback:()=>{$this.props.push('/user/IdCardUpload');}})
                                break;
                            case '0':$this.refs.alert.show({content:'审核中，请稍后再试',okText:'确定'})
                                $this.props.queryUpload()
                                break;
                            case '1':$this.money(balance)
                                break;
                            case '9':$this.props.push('/user/IdCardUpload');
                                break;
                            default:
                                $this.props.push('/user/IdCardUpload');
                        }
                    }else{
                        $this.refs.alert.show({content:'审核中，请稍后再试',okText:'确定'})
                        $this.props.queryUpload()
                    }
                }
            }
        }else{
            if(storeData.isRegister){
                this.props.push('/user/setting/cardBind')
            }else{
                this.refs.store.show();
            }
        }
    }
    goCashOld = (balance) => {
        let storeData = JSON.parse(sessionStorage.getItem('bao-store'));
        if (storeData && storeData.isAuthIdentity && storeData.isSecurityCard) {
            this.moneyOld(balance)
            return;
        }
        if (storeData.isBindBankcard && storeData.isRegister) {
            this.moneyOld(balance)
        } else {
            if (storeData.isRegister) {
                this.props.push('/user/setting/cardBind')
            } else {
                this.refs.tip.show();
            }
        }
    }
    money = (balance)=> {
        //const baoBank = sessionStorage.getItem('bao-bank');
        //if (parseFloat(balance) < 50) {
        //    this.refs.alert.show({
        //        content: '对不起余额不足！',
        //        okText: '确定'
        //    })
        //} else {
        this.props.push('/user/withdrawals')
        //if (baoBank != null) {
        //    this.props.push('/user/withdrawals')
        //} else {
        //    this.props.push('/user/setting/securityCard')
        //}
        //}
    }
    moneyOld = (balance)=> {
        //const baoBank = sessionStorage.getItem('bao-bank');
        //if (parseFloat(balance) < 50) {
        //    this.refs.alert.show({
        //        content: '对不起余额不足！',
        //        okText: '确定'
        //    })
        //} else {
        this.props.push('/user/withdrawalsOld')
        //if (baoBank != null) {
        //    this.props.push('/user/withdrawals')
        //} else {
        //    this.props.push('/user/setting/securityCard')
        //}
        //}
    }
    render() {
        const {pop,push,userInfo}=this.props;
        let disable1=true;
        let disable2=true;
        if(userInfo&&cashSetting){
            if(userInfo.data.banlance<cashSetting.data.withdrawSingleMinMoney){
                disable1=false
            }
            if(userInfo.data.balance_platform<cashSetting.data.withdrawSingleMinMoney){
                disable2=false
            }
        }
        return(
            <div className={styles.container}>
                <Store ref="store"></Store>
                <NavBar onLeft={pop} rightNode={<div>明细</div>} onRight={()=>{push('/user/cashLog')}}>
                    提现
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
                        <div className={styles.footer} >
                            <div className={classNames([styles.btn,disable1&&styles.disable||""])  } onClick={()=>{if(disable1) return; this.goCash(userInfo&&userInfo.data.balance)}}>
                                提现
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
                            <div className={classNames([styles.btn,disable2&&styles.disable||""])} onClick={()=>{
                                if(disable2) return false;
                                this.goCashOld(userInfo&&userInfo.data.balance_platform)
                            }}>
                                提现
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
       uploadData: state.infodata.getIn(['QUERY_UPLOAD', 'data']),
       cashSetting:state.infodata.getIn(['GET_DEFAULT_TAB','data'])
});
const mapDispatchProps=(dispatch)=>({
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
    getDefault(){
        dispatch({
            type:'GET_DEFAULT_TAB',
        })
    },
    queryUpload(){
        dispath({
            type:'QUERY_UPLOAD'
        })
    }
});
export default connect(mapStateToProps,mapDispatchProps)(Index)