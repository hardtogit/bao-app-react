import React from 'react';
import styles from './index.styl';
import {connect} from 'react-redux'
import {push, goBack} from 'react-router-redux'
import List from '../../../../components/depositList/index'
import {RATE, USER_INFO} from '../../../../actions/actionTypes'
import cns from 'classnames'
import Loading from '../../../../components/pageLoading'
import Couponimg from '../../../../assets/images/coupon1.png'
import Coupon1 from '../../../../assets/images/registerVoucher.png'
class DepositIndex extends React.Component {
    componentDidMount(){
        const deposit=JSON.parse(sessionStorage.getItem("bao-deposit"));
        if (deposit==null){
            this.props.getList();
        }
    }
    bannerDom=()=>{
        const {push}=this.props;
        const user=sessionStorage.getItem("bao-auth");
        const userInfo=JSON.parse(sessionStorage.getItem("bao-user"));
        if (!user){
            return <div className={styles.xsBox} onClick={()=>{push('/register')}}>
                <img src={Couponimg} className={styles.bg}/>
                <img src={Coupon1} className={styles.bj}/>
                <div className={styles.text}>
                     <span>
                    新用户注册注册即送<span className={styles.money}>800</span>￥
                </span>
                    <span className={styles.right}>
                    点击<br/>领取
                </span>
                </div>
            </div>
        }else {
            let {voucher,interestRateSecurities}=userInfo;
            if (!voucher&&!interestRateSecurities){
                return false
            }else {
                return <p className={cns(styles.title,styles.pdTitle)}>
                    您当前有{voucher&&<span>{voucher}张抵用券</span>||null}{(interestRateSecurities&&voucher)&&'和'||null}{interestRateSecurities&&<span>{interestRateSecurities}张加息券</span>||null}未使用
                </p>
            }
        }
    }
    loadDom=()=>{
        return <Loading/>
    }
    loadEndDom=(deposit)=>{
        const {push}=this.props;
        return(<div>
            <List go={(index,id)=>{push(`/deposit-product/${index}/A/${id}`)}}  goBuy={(index,id)=>{push(`/deposit-buy/${index}/A/${id}`)}} data={deposit}/>
        </div>)
    }
      render(){
          const deposit=JSON.parse(sessionStorage.getItem("bao-deposit"));
          let Dom=this.loadDom();
          if (deposit){
              Dom=this.loadEndDom(deposit)
          }
          return(
              <div className={styles.planb}>
                  {this.bannerDom()}
                  {Dom}
              </div>
          )
      }
}
const mapStateToProps = (state) => {
    return {
        rate: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.deposit || [],
        serverTime: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data['server_time'] || 0,
        userInfoCode: state.infodata.getIn([USER_INFO, 'data']) && state.infodata.getIn([USER_INFO, 'data']).code || 0,
        pageIndex:state.global.getIn(['PRODUCT_INDEX_PAGE'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    push(path) {
        dispatch(push(path))
    },

    pop() {
        dispatch(goBack())
    },
    pageIndexs(){
        dispatch({
            type:'PRODUCT_INDEX_PAGE',
            index:1
        })
    },
    getList(){
        dispatch({
            type:'RATE'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DepositIndex)
