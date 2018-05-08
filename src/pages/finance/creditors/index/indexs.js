/**
 * 债权
 */
import React from 'react'
import styles from './index.less'
import * as actionTypes from '../../../../actions/actionTypes'
import {connect} from 'react-redux'
import {goBack, push} from 'react-router-redux'
import Dimensions from 'react-dimensions'
import Couponimg from '../../../../assets/images/coupon1.png'
import CusDialog from '../../../../components/Dialog/alert.js'
import type_hongwu from '../../../../assets/images/type_hongwu.png'
import type_xinyong from '../../../../assets/images/type_xinyong.png'
import type_danbao from '../../../../assets/images/type_danbao.png'
import wrap from '../../../../utils/pageWrapper'
import type_diya from '../../../../assets/images/type_diya.png'
import Store from '../../../../components/Dialog/store'
import Scroll from '../../../../components/scroll/index.js'
import Coupon1 from '../../../../assets/images/registerVoucher.png'
import Loading from '../../../../components/pageLoading'
import nozhaiquan from '../../../../assets/images/nozhaiquan.png'
import IsAuth from '../../../../components/isAuth'
import setUrl from '../../../../components/setUrl'
import {platFormGetAuthDetail,getAuthDetail} from  '../../../../components/Permission'
class CreditorCell extends React.Component{
  toBuy=(event,flag)=>{
    event.stopPropagation()
    this.yz(this.qgSuccess,flag)
  }
  qgSuccess=(flag)=>{
      const {
          id
      }=this.props.data
      const{push}=this.props
      if(flag){
          switch (platFormGetAuthDetail()){
              case 1:
                  this.props.isAuth.Verification(`/creditorBuyOld/${id}`,this.props.isAuthPush,this.succsseFn);
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
      }else{
          switch (getAuthDetail()){
              case 1:
                  this.props.isAuth.Verification(`/creditorBuy/${id}`,this.props.isAuthPush,this.succsseFn);
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
  }
  yz=(success,flag)=>{
      const is_login = true;
      const {
          is_overdue,//是否已过投标期限
      } = this.props.data

      // const is_overdue = true;

      if (is_login) {
          if (is_overdue) {
              //提示过期
              this.props.wrongRef.show({
                  content:'投标时间已过',
                  okText:'知道了'
              })
          }else{
              success(flag)
          }
      }else{
          //跳转登录
          this.props.push(`/login/`)
      }
  }
    succsseFn=()=>{
        setUrl.setUrl('/home/productIndex')
    }
    clickYz=()=>{
        const{
            onClick,
        } = this.props;
        this.yz(onClick)
    }
  render(){
    const {
      name:title,
      type,//标类型
      activity,//活动名称
      activityName,
      rate,
      access_sys,
      left_quantity,//剩余份数
      term:month,
    } = this.props.data
    const{
      onClick,
    } = this.props
    return(
        <div className={styles.cell} style={{width:this.props.screenW,marginBottom:'8px'}}>
            <Store ref="store"></Store>
          <div onClick={this.clickYz}>
            <div className={styles.cellHead}>
              <div>
                <p>{title}
                    {
                        (() => {
                            let arr = activityName.split("|");
                            let docArr=new Array();
                            if(arr.length>0 && activityName!=""){
                                arr.map((value, i)=> {
                                    docArr.push(<span key={i} style={{marginLeft:'6px',color:'#77b33f'}}>{"["+value+"]"}</span>)
                                });
                            }
                            return docArr;
                        })()

                    }
                    {!this.props.data.access_sys&&
                    <span className={styles.store}>存</span>
                    }
                </p>
              </div>
              <div className={activity.length>0 ? styles.activitys : styles.actSinggle}>
                {
                  (() => {
                    if (activity.length>0) {
                      return(
                        <img src={type_hongwu} alt="type_hongwu"/>
                      )
                    }
                  })()
                }
                <div>
                    {
                        (() => {
                            switch (type){
                                case 1:
                                    return <img src={type_xinyong} alt=""/>
                                    break;
                                case 5:
                                    return <img src={type_diya} alt=""/>
                                    break;
                                default:return <img src={type_diya} alt=""/>
                            }

                        })()
                    }
                </div>
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.farword}>
                <div className={styles.cellBody}>
                  <p>{rate}<span>%</span></p>
                  <p>{month}个月</p>
                  <p>{left_quantity}份</p>
                  
                </div>
                <div className={styles.cellFoot}>
                  <p>预期年化利率</p>
                  <p>期限</p>
                  <p>剩余</p>
                </div>
              </div>
              <div className={styles.buyBtn}>
                <div className={styles.canbuy} onClick={(event)=>this.toBuy(event,access_sys)}>
                              <p>出借</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
class CreditorList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            init:false
        }
    }
  componentDidMount() {
    this.props.pageIndex();
    this.setState({init:true})
  }
  ScrollDom=()=>{
      const screenW=this.props.containerWidth
      const {
          data,
          pending,
          pageEnd,
          curPage,
          nextPage
      }=this.props;
      return(<Scroll height={this.props.ListHeight} fetch={nextPage}
                     isLoading={pending} distance={5} endType={pageEnd}
                     nullDom={<div className={styles.nullBox}><img src={nozhaiquan}/></div>} endload={<div></div>}>
          {
              data && data.map((data,i) => (
                  <CreditorCell key={i}
                                data={data}
                                onClick={() =>{if(data.access_sys){this.props.push(`/creditorDetail/${data.id}?access_sys=platform`)}else{this.props.push(`/creditorDetail/${data.id}`)}}}
                                push={(path) => this.props.push(path)}
                                passwordRef={this.refs.passWord}
                                wrongRef={this.refs.wrong}
                                screenW={screenW}
                                postPasswordAction={(value) => this.props.setAppointPassword(value)}
                                isAuth={this.refs.isAuth}
                                isAuthPush={this.props.push}
                  />
              ))}
      </Scroll>)
  }
  render(){
    const{
      is_login,
      userData,
    }=this.props;
    let Dom;
    if (this.state.init){
        Dom=this.ScrollDom();
    }
      const sessionUser=sessionStorage.getItem("bao-auth");
    return(
      <div className={styles.root}>
        {
          userData &&  
            <div className={styles.root}>
              <CusDialog ref='wrong'></CusDialog>
                <div className={styles.list}>
                    {Dom}
                </div>
            </div>
          
        ||
        <Loading></Loading>
        }
        <IsAuth ref="isAuth"/>
      </div>
    )
  }
}
const mapStateToProps = (state,ownProps) => {
  const key =actionTypes.FETCH_CREDITORSLIST_DATA
  const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data'])
  const is_login = (userData.code == 100) ? true : false
    const sessionUser=sessionStorage.getItem("bao-auth");
  let ListHeight=  document.body.clientHeight-140
  return {
    is_login,
    ListHeight,
    userData,
    pending: state.listdata.getIn([key, 'pending']),
    data: state.listdata.getIn([key, 'data']),
    curPage: state.listdata.getIn([key, 'curPage']),
    pageEnd: state.listdata.getIn([key, 'pageEnd'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  nextPage() {
      dispatch({
        type: actionTypes.FETCH_CREDITORSLIST_DATA
      })
  },
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  },
    pageIndex(){
        dispatch({
            type:'PRODUCT_INDEX',
            index:3
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(CreditorList)