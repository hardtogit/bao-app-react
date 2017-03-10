//直投项目 直投项目列表
import React from 'react'
import styles from './index.less'
import * as actionTypes from '../../../actions/actionTypes'
import Fetch from '../../../request/fetch'
import {connect} from 'react-redux'
import wrap from '../../../utils/pageWrapper'
import {goBack, push} from 'react-router-redux'
import Dimensions from 'react-dimensions'
import CircularProgress from '../../../customized_node_modules/circularProgress/'
import Moment from 'moment'
import Couponimg from '../../../assets/images/coupon1.png'
import Coupon1 from '../../../assets/images/registerVoucher.png'
import CusDialog from '../../../components/Dialog/alert.js'
import Scroll from '../../../components/scroll/index.js'
import Loading from '../../../components/pageLoading'
import PassWord from '../../../components/Dialog/reddem.js'
import type_hongwu from '../../../assets/images/type_hongwu.png'
import type_danbao from '../../../assets/images/type_danbao.png'
import type_diya from '../../../assets/images/type_diya.png'
class DirectInvestCell extends React.Component{
    appoint = (value) => {
        this.props.postPasswordAction(value)
        Fetch.verifyAssign(this.props.data.id,value).then(result => {
            if (result.code === 100 ) {
                //输入约标密码成功
                this.props.push(`/directBuy/${this.props.data.id}`)
            }else{
                this.props.wrongRef.show({
                    content:'请输入正确的约标密码',
                    okText:'知道了'
                })
            }
        }).catch(error => console.log(error))
    }

    toBuy=(event)=>{
        event.stopPropagation()
        const is_login = true;
        const {
            id,
            is_assign,//是否是约标
            is_overdue,//是否已过投标期限
        } = this.props.data

        // const is_assign = true;

        if (is_login) {
            if (is_overdue) {
                //提示过期
                this.props.wrongRef.show({
                    content:'投标时间已过',
                    okText:'知道了'
                })
            }else{
                if (is_assign) {
                    //弹出约标密码框
                    this.props.passwordRef.show({
                        title:'约标密码',
                        okText:'确定',
                        placeholder:'请输入约标密码',
                        hasMoney:false,
                        cancelText:'取消',
                        hasDetailText:true,
                        detailText:'由于本标为定向标，因此需要输入约标密码之后才可购买',
                        cancelCallback:()=>this.props.passwordRef.hide(),
                        okCallback:this.appoint
                    })
                }else{
                    //推送到购买页面
                    this.props.push(`/directBuy/${id}`)
                }
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
            status,//4 还款中 3复审中
            date,//开始时间
            is_assign,//是否是约标
            is_overdue,//是否已过投标期限
        } = this.props.data
        const nowDate =Date.parse(new Date()); //当前时间戳
        const beginDate=Date.parse(new Date(date)); //格式时间戳
        const percent=((1-left_quantity/total_quantity)*100).toFixed(0);
        const{
            pageEnd,
            goBack,
            onClick,
        } = this.props
        // const activity = 'haha'
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
                <div className={styles.cellBody}>
                  <div>
                    <p>{rate}<span>%</span></p>
                    <p>{month}个月</p>
                  </div>
                  <div>
                      {(()=>{
                          if(status === 4){
                              return (
                                  <p>还款中</p>
                              )
                          }else if(status === 3){
                              return (
                                  <p>复审中</p>
                              )
                          }else if(left_quantity === 0){
                              return (
                                  <p>已满标</p>
                              )
                          }else if(beginDate > nowDate){
                              return  (
                                  <p className={styles.begin}>{Moment(date).format('H:mm')}开始</p>
                              )
                          }else{
                              return  ((<div className={styles.canbuy} onClick={(event)=>this.toBuy(event)}>
                                <p>抢购</p>
                              </div>))
                          }
                      })()}
                  </div>
                </div>
                <div className={styles.cellFoot}>
                  <div>
                    <p>年利率</p>
                    <p>期限</p>
                  </div>
                    {(()=>{
                        if(status === 4){
                            return null
                        }else if(status === 3){
                            return null
                        }else if(left_quantity === 0){
                            return null
                        }else if(beginDate > nowDate){
                            return  null
                        }else{
                            return(
                                <div className={styles.percent}>
                                  <p>{percent}%</p>
                                  <div>
                                    <div style={{width:percent + '%'}}></div>
                                  </div>
                                </div>
                            )
                        }
                    })()}
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


class DirectInvestList extends React.Component{
    componentDidMount() {

    }
    setUserCardInfo=()=>{
        const {user} =this.props
        return(
            <div className={styles.userInfoCard}>
                {
                  user ?
                      user.voucher || user.interestRateSecurities ?
                        <div>
                          <span style={{fontSize: 14, color: '#888'}}>您当前有
                              {user.voucher ? <span style={{color: '#ff7700'}}>{user.voucher}张抵用券{user.interestRateSecurities ? '和' : ''}</span> : null}
                              {user.interestRateSecurities ? <span style={{color: '#ff7700'}}>{user.interestRateSecurities}张加息券</span> : null}未使用
                          </span>
                        </div>
                      :
                      null
                  :
                  null
                }
            </div>
        )
    }
    render(){
        const screenW=this.props.containerWidth
        const{
            data,
            pending,
            pageEnd,
            curPage,
            user,
            is_login,
            userData
        }=this.props
        return(
            <div className={styles.content}>
                {
                    user &&
                    <div className={styles.root}>
                      <CusDialog ref='wrong'></CusDialog>
                      <PassWord ref="passWord" hasMoney={false} hasDetailText={true}></PassWord>
                        { is_login && is_login ?
                            <div className={styles.noticeDiv}>
                                {this.setUserCardInfo()}
                            </div> :
                            <TopGuide goRegist={() => this.props.push('/register')}></TopGuide>
                        }
                      <div className={styles.list}>
                        <Scroll height={this.props.ListHeight} fetch={this.props.nextPage}
                                isLoading={pending} distance={5} endType={pageEnd}>
                            {
                                this.props.data && this.props.data.map((data,i) => {
                                    const name=encodeURI(data.name)
                                   return(
                                       <DirectInvestCell key={i}
                                                         data={data}
                                                         onClick={() => this.props.push(`/directInvestDetails/${data.id}`)}
                                                         push={(path) => this.props.push(path)}
                                                         passwordRef={this.refs.passWord}
                                                         wrongRef={this.refs.wrong}
                                                         screenW={screenW}
                                                         postPasswordAction={(value) => this.props.setAppointPassword(value)}
                                       />
                                   )
                                })}
                        </Scroll>
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
    const key = actionTypes.FETCH_DIRECTLIST_DATA
    const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data'])
    const user = (userData.code == 100) ? userData.data : {}
    const is_login = (userData.code == 100) ? true : false
    let ListHeight= is_login ? document.body.clientHeight-88 : document.body.clientHeight-88-78
    if (is_login) {
      if (user) {
        if ((user.voucher && user.voucher>0) || user.interestRateSecurities && user.interestRateSecurities>0) {
            ListHeight -=44;
        }
      }
    }
    return {
        user,
        userData,
        is_login,
        ListHeight,
        appointPassword:state.finance.getIn(['appointPassword','passWord']),
        pending: state.listdata.getIn([key, 'pending']),
        data: state.listdata.getIn([key, 'data']),
        curPage: state.listdata.getIn([key, 'curPage']),
        pageEnd: state.listdata.getIn([key, 'pageEnd'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    nextPage() {
        dispatch({
            type: actionTypes.FETCH_DIRECTLIST_DATA
        })
    },
    setAppointPassword(value){
        dispatch({
            type: actionTypes.SET_APPOINT_PASSWORD,
            payload:value
        })
    },
    push(path) {
        dispatch(push(path))
    },

    goBack() {
        dispatch(goBack())
    },
})

export default Dimensions()(connect(mapStateToProps, mapDispatchToProps)(wrap(DirectInvestList)))
