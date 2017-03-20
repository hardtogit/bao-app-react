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
import type_danbao from '../../../../assets/images/type_danbao.png'
import type_diya from '../../../../assets/images/type_diya.png'
import Scroll from '../../../../components/scroll/index.js'
import Coupon1 from '../../../../assets/images/registerVoucher.png'
import Loading from '../../../../components/pageLoading'
import nozhaiquan from '../../../../assets/images/nozhaiquan.png'

class CreditorCell extends React.Component{
  toBuy=(event)=>{
    event.stopPropagation()
    const is_login = true;
    const {
      id,
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
        //推送到购买页面
        this.props.push(`/creditorBuy/${id}`)
      }
    }else{
      //跳转登录
      this.props.push(`/login/`)
    }
  }

  render(){
    const {
      name:title,
      type,//标类型
      activity,//活动名称
      rate,
      id,
      left_quantity,//剩余份数
      total_quantity,
      term:month,
      is_overdue,//是否已过投标期限
    } = this.props.data
    const{
      pageEnd,
      goBack,
      onClick,
    } = this.props
    return(
        <div className={styles.cell} style={{width:this.props.screenW}}>
          <div onClick={onClick}>
            <div className={styles.cellHead}>
              <div>
                <p>{title}</p>
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
                  <img src={type===1 ? type_diya : type_danbao}/>
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
                  <p>年利率</p>
                  <p>期限</p>
                  <p>剩余</p>
                </div>
              </div>
              <div className={styles.buyBtn}>
                <div className={styles.canbuy} onClick={(event)=>this.toBuy(event)}>
                              <p>抢购</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
class TopGuide extends React.Component{
    goSign=()=>{
        //跳转注册
        this.props.goRegist()
    }
    render(){
        return(
            <div style={{backgroundColor:"#f0eff5"}}>
              <CusDialog ref='overTime'></CusDialog>
              <div className={styles.TopGuide} onClick={this.goSign}>
                <div className ={styles.area1}>
                  <img src={Couponimg} className={styles.areaBg}/>
                  <div className={styles.areaBox}>
                     <img src={Coupon1} className={styles.areaIcon}/>
                      <span className={styles.areaText}>
                          <span>新用户注册即送</span>
                          <span className={styles.areaMny}>800</span>
                          <span>￥</span>
                      </span>
                      <div>
                          <p>点击</p>
                          <p>领取</p>
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
                                onClick={() => this.props.push(`/creditorDetail/${data.id}`)}
                                push={(path) => this.props.push(path)}
                                passwordRef={this.refs.passWord}
                                wrongRef={this.refs.wrong}
                                screenW={screenW}
                                postPasswordAction={(value) => this.props.setAppointPassword(value)}
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
    return(
      <div className={styles.root}>
        {
          userData &&  
            <div className={styles.root}>
              <CusDialog ref='wrong'></CusDialog>
                {is_login ?
                  null
                   :
                  <TopGuide goRegist={() => this.props.push('/regist/')}></TopGuide>
                }
                <div className={styles.list}>
                    {Dom}
                </div>
            </div>
          
        ||
        <Loading></Loading>
        }
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  const key =actionTypes.FETCH_CREDITORSLIST_DATA
  const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data'])
  const is_login = (userData.code == 100) ? true : false
  let ListHeight= is_login ? document.body.clientHeight-88 : document.body.clientHeight-88-78
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
            index:2
        })
    }
})

export default Dimensions()(connect(mapStateToProps, mapDispatchToProps)(CreditorList))