//直投项目 直投项目列表
import React from 'react'
import styles from './index.less'
import * as actionTypes from '../../../actions/actionTypes'
import Fetch from '../../../request/fetch'
import {connect} from 'react-redux'
import wrap from '../../../utils/pageWrapper'
import {goBack, push} from 'react-router-redux'
import Dimensions from 'react-dimensions'
import IsAuth from '../../../components/isAuth'
import Moment from 'moment'
import Couponimg from '../../../assets/images/coupon1.png'
import Coupon1 from '../../../assets/images/registerVoucher.png'
import CusDialog from '../../../components/Dialog/alert.js'
import Scroll from '../../../components/scroll/index.js'
import Store from '../../../components/Dialog/store'
import Loading from '../../../components/pageLoading'
import PassWord from '../../../components/Dialog/reddemOld.js'
import type_hongwu from '../../../assets/images/type_hongwu.png'
import type_danbao from '../../../assets/images/type_danbao.png'
import type_xinyong from '../../../assets/images/type_xinyong.png'
import type_diya from '../../../assets/images/type_diya.png'
import setUrl from '../../../components/setUrl'
import  {platFormGetAuthDetail,getAuthDetail} from '../../../components/Permission'
class DirectInvestCell extends React.Component{
    constructor(props){
        super(props)
        this.state={id:'',term:'',pwd:''}
    }
    appoint = (fn,value) => {
        const {
            id,
            term
        }=this.props.data;
        this.setState({
            id,
            term,
            pwd:value
        },()=>{
            this.props.postPasswordAction(value);
            this.props.sendAssign(id,value);
        })
    }
    from='platform'
    componentWillReceiveProps(props){
            const {verifyAssign}=props;
            const {id,term,pwd}=this.state;
            if (verifyAssign){
                if (verifyAssign.code==100&&id!=''){
                    this.succsseFn();
                    let storeData=JSON.parse(sessionStorage.getItem('bao-store'));
                    if(this.from=='platform'){
                        if(storeData&&storeData.isAuthIdentity&&storeData.isSecurityCard){
                            this.props.push({pathname:`/directBuyOld/${id}/${term}`,state:pwd})
                            return;
                        }else{
                            if(storeData.isRegister){
                                push('/user/setting/cardBind')
                            }else{
                                this.refs.store.show()
                            }
                        }
                    }else{
                        if(storeData&&storeData.isRegister&&storeData.isBindBankcard){
                            this.props.isAuth.Verification(`/directBuy/${id}/${term}`,this.props.isAuthPush,this.succsseFn)
                        }else{
                            if(storeData.isRegister){
                                this.props.push({pathname:`/directBuy/${id}/${term}`,state:pwd})
                            }else{
                                this.refs.store.show()
                            }
                        }
                    }
                }else if (verifyAssign.code!=100){
                    this.props.passwordRef.hide()
                    this.props.wrongRef.show({
                        content:'请输入正确的约标密码',
                        okText:'知道了'
                    })
                }
            }
    }
    toBuy=(event,flag)=>{
        event.stopPropagation();
        this.yz(this.qgSuccess,flag)
    }
    qgSuccess=(flag)=>{
        const {
            id,
            term
        }=this.props.data;
        const{push}=this.props
        if(flag){
            switch (platFormGetAuthDetail()){
                case 1:
                    this.props.isAuth.Verification(`/directBuyOld/${id}/${term}`,this.props.isAuthPush,this.succsseFn)
                    break;
                case 2:
                    push('/user/setting/cardBind');
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
                    this.props.isAuth.Verification(`/directBuy/${id}/${term}`,this.props.isAuthPush,this.succsseFn)
                    break;
                case 2:
                    push('/user/setting/cardBind');
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
        let $this=this;
        const {
            is_assign,//是否是约标
            is_overdue,//是否已过投标期限
        } = this.props.data
        // const is_assign = true;

        if (is_login) {
            if (is_overdue) {
                //提示过期
                // alert('c')
                $this.props.wrongRef.show({
                    content:'投标时间已过',
                    okText:'知道了'
                })
            }else{
                if (is_assign) {
                    if(flag){
                        this.from="platform"
                    }else{
                        this.from="store"
                    }

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
                    success(flag);
                }
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
            rate,
            left_quantity,//剩余份数
            total_quantity,
            activityName,
            borrow_interest_rate_one,
            borrow_interest_rate_two,
            term:month,
            status,//4 还款中 3复审中
            date,//开始时间
        } = this.props.data
        const nowDate =Date.parse(new Date()); //当前时间戳
        const beginDate=Date.parse(new Date(date)); //格式时间戳
        const percent=((1-left_quantity/total_quantity)*100).toFixed(0);
        return(
            <div className={styles.cell} style={{width:this.props.screenW}}>
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
                    <div className={styles.cellBody}>
                        <div>
                            {
                                (() => {
                                    let arr = activityName.split("|");
                                    let flag=false;
                                    if(arr.length>0 && activityName!=""){
                                        arr.map((value, i)=> {
                                           if(value=='扶农贷'){
                                               flag=true;
                                           }
                                        });
                                    }
                                    // if(flag){
                                        return <p>{borrow_interest_rate_one}<span>%</span>{borrow_interest_rate_two=="0.00"?'':<span style={{position:'relative',top:'-12px',left:'-4px'}}>+{borrow_interest_rate_two}%</span>}</p>

                                    // }else{
                                    //     return <p>{rate}<span>%</span></p>
                                    //
                                    // }

                                })()

                            }

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
                                    return  ((<div className={styles.canbuy} onClick={(event,flag)=>this.toBuy(event,this.props.data.access_sys)}>
                                        <p>抢购</p>
                                    </div>))
                                }
                            })()}
                        </div>
                    </div>
                    <div className={styles.cellFoot}>
                        <div>
                            <p>预期年化利率</p>
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
    constructor(props){
        super(props);
        this.state={
            init:false,
            flag:0
        }
    }
    componentDidMount() {
      this.setState({
          init:true,
      })
    }
    setUserCardInfo=()=>{
        const {user} =this.props
        return(
            <div className={styles.userInfoCard}>
                {
                  user ?
                      user.voucher || user.interestRateSecurities ?
                        <div>
                          <span style={{fontSize: 14, color: '#aaa'}}>您当前有
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
    ScrollDom=()=>{
        const screenW=this.props.containerWidth
        const {
            pending,
            nextPage,
            pageEnd,
            data,
            ListHeight
        }=this.props;
        return(<Scroll height={ListHeight} fetch={nextPage}
                       isLoading={pending} distance={5} endType={pageEnd} endload={<div></div>}>
            {
                data && data.map((data,i) => {
                    return(
                        <DirectInvestCell key={i}
                                          data={data}
                                          onClick={() => { if(data.access_sys){this.props.push(`/directInvestDetails/${data.id}?access_sys=platform`)}else{this.props.push(`/directInvestDetails/${data.id}`)}}}
                                          push={(path) => this.props.push(path)}
                                          passwordRef={this.refs.passWord}
                                          wrongRef={this.refs.wrong}
                                          screenW={screenW}
                                          postPasswordAction={(value) => this.props.setAppointPassword(value)}
                                          sendAssign={this.props.sendAssign}
                                          isAuth={this.refs.isAuth}
                                          isAuthPush={this.props.push}
                                          verifyAssign={this.props.verifyAssign}
                        />
                    )
                })}
        </Scroll>)
    }
    componentWillUnmount(){
          this.props.clearData();
    }
    render(){
        const{
            user,
            is_login,
        }=this.props;
        let Dom;
        if (this.state.init){
            Dom=this.ScrollDom()
        }
        const sessionUser=sessionStorage.getItem("bao-auth");
        return(
            <div className={styles.content}>
                {
                    user &&
                    <div className={styles.root}>
                      <CusDialog ref='wrong'></CusDialog>
                      <PassWord ref="passWord" hasMoney={false} hasDetailText={true}></PassWord>
                        { is_login && is_login && sessionUser ?
                            <div className={styles.noticeDiv}>
                                {this.setUserCardInfo()}
                            </div> :
                            <TopGuide goRegist={() => this.props.push('/register')}></TopGuide>
                        }
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
    const key = actionTypes.FETCH_DIRECTLIST_DATA
    const userData = state.infodata.getIn([actionTypes.USER_INFO, 'data']);
    const verifyAssign=state.infodata.getIn([actionTypes.VERIFY_ASSIGN,'data']);
    const user = (userData.code == 100) ? userData.data : {}
    const is_login = (userData.code == 100) ? true : false
    const sessionUser=sessionStorage.getItem("bao-auth");
    let ListHeight= is_login && sessionUser? document.body.clientHeight-88 : document.body.clientHeight-88-78
    if (is_login && sessionUser) {
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
        verifyAssign,
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
    sendAssign(id,pwd){
        dispatch({
            type:actionTypes.VERIFY_ASSIGN,
            params:[{id:id,password:pwd}]
        })
    },
    clearData(){
        dispatch({
            type:actionTypes.CLEAR_INFO_DATA,
            key:actionTypes.VERIFY_ASSIGN
        })
    }
})

export default Dimensions()(connect(mapStateToProps, mapDispatchToProps)(wrap(DirectInvestList)))
