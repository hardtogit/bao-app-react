/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
//聚点+项目列表
import React from 'react'
import styles from './index.less'
import * as actionTypes from '../../../../actions/actionTypes'
import {connect} from 'react-redux'
import wrap from '../../../../utils/pageWrapper'
import {goBack, push} from 'react-router-redux'
import Dimensions from 'react-dimensions'
import IsAuth from '../../../../components/isAuth'
import Moment from 'moment'
import Couponimg from '../../../../assets/images/coupon1.png'
import Coupon1 from '../../../../assets/images/registerVoucher.png'
import Store from '../../../../components/Dialog/store'
import CusDialog from '../../../../components/Dialog/alert.js'
import Scroll from '../../../../components/scroll/index.js'
import PassWord from '../../../../components/Dialog/reddem.js'
import setUrl from '../../../../components/setUrl'
import {getAuthDetail} from '../../../../components/Permission'
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
    componentWillReceiveProps(props){
        const {verifyAssign,userInfoCode}=props;
        const {id,term,pwd}=this.state;
        if (verifyAssign){
            if (verifyAssign.code==100&&id!=''){
                this.succsseFn();
                this.props.push({pathname:`/directBuy/${id}/${term}`,state:pwd})
            }else if (verifyAssign.code!=100){
                this.props.passwordRef.hide()
                this.props.wrongRef.show({
                    content:'请输入正确的约标密码',
                    okText:'知道了'
                })
            }
        }
    }
    toBuy=(event)=>{
        event.stopPropagation();
        this.yz(this.qgSuccess)
    }
    qgSuccess=()=>{
        const {
            id,
            term
            }=this.props.data;
        const{push}=this.props;
        switch (getAuthDetail()){
            case 1:
                this.props.isAuth.Verification(`/gatherBuy/${id}/2`,this.props.isAuthPush,this.succsseFn)
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
    yz=(success)=>{
        const is_login = true;
        const {
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
                        detailText:'由于本标为定向标，因此需要输入约标密码之后才可出借',
                        cancelCallback:()=>this.props.passwordRef.hide(),
                        okCallback:this.appoint
                    })
                }else{
                    //推送到购买页面
                    success();
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
            type,//还款类型
            month,
            rate,
            has_money,//剩余份数
            money,
            title,
            status,//4 还款中 3复审中
            start_time,//开始时间
            reveal_rate,
            active_rate
            } = this.props.data
        const nowDate =Date.parse(new Date()); //当前时间戳
        const beginDate=Date.parse(new Date(start_time)); //格式时间戳
        const percent=((has_money/money)*100).toFixed(0);
        return(
            <div className={styles.cell} style={{width:this.props.screenW}}>
                <Store ref="store"></Store>
                <div onClick={this.clickYz}>
                    <div className={styles.cellHead}>
                        <div>
                            <p>{title}

                            </p>
                        </div>
                    </div>
                    <div className={styles.cellBody}>
                        <div>
                            <p style={{fontSize: '20px',color: '#ff7700'}}>{reveal_rate}<span>%</span>{active_rate=="0.00"?'':<span style={{position:'relative',top:'-12px',left:'-4px'}}>+{active_rate}%</span>}</p>
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
                                }else if(has_money === 0){
                                    return (
                                        <p>已满标</p>
                                    )
                                }else if(beginDate > nowDate){
                                    return  (
                                        <p className={styles.begin}>{Moment(date).format('H:mm')}开始</p>
                                    )
                                }else{
                                    return  ((<div className={styles.canbuy} onClick={(event)=>this.toBuy(event)}>
                                        <p>出借</p>
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
                            }else if(has_money === 0){
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
            init:false
        }
    }
    componentDidMount() {
        this.setState({init:true})
    }
    setUserCardInfo=()=>{
        const user=sessionStorage.getItem("bao-auth");
        const userInfo=JSON.parse(sessionStorage.getItem("bao-user"));
        return(
            <div className={styles.userInfoCard}>
                {
                    userInfo ?
                        userInfo.voucher || userInfo.interestRateSecurities ?
                            <div>
                          <span style={{fontSize: 14, color: '#aaa'}}>您当前有
                              {userInfo.voucher ? <span style={{color: '#ff7700'}}>{userInfo.voucher}张抵用券{userInfo.interestRateSecurities ? '和' : ''}</span> : null}
                              {userInfo.interestRateSecurities ? <span style={{color: '#ff7700'}}>{userInfo.interestRateSecurities}张加息券</span> : null}未使用
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
                                           onClick={() => this.props.push(`/gatherMain/${data.id}/2`)}
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
        let Dom;
        if (this.state.init){
            Dom=this.ScrollDom()
        }
        const user=sessionStorage.getItem("bao-auth");
        const userInfo=JSON.parse(sessionStorage.getItem("bao-user"));
        const {data}=this.props;
        return(
            <div className={styles.content}>
                    <div className={styles.root}>
                        <CusDialog ref='wrong'></CusDialog>
                        <PassWord ref="passWord" hasMoney={false} hasDetailText={true}></PassWord>
                        { user ?
                            <div className={styles.noticeDiv}>
                                {this.setUserCardInfo()}
                            </div> :
                            <TopGuide goRegist={() => this.props.push('/register')}></TopGuide>
                        }
                        <div className={styles.list}>
                            {Dom}
                        </div>
                    </div>


                <IsAuth ref="isAuth"/>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    const key = actionTypes.DEPOSITS_GATHER
    const userInfoCode= state.infodata.getIn([actionTypes.USER_INFO, 'data']) && state.infodata.getIn([actionTypes.USER_INFO, 'data']).code || 0;
    const verifyAssign=state.infodata.getIn([actionTypes.VERIFY_ASSIGN,'data']);
    const user=sessionStorage.getItem("bao-auth");
    const userInfo=JSON.parse(sessionStorage.getItem("bao-user"));
    let ListHeight= user? document.body.clientHeight-88 : document.body.clientHeight-88-78;
    //去除一个月的新手标
    let data=state.listdata.getIn([key, 'data']);
    let copyData=[];
    if(data&&data._tail){
        for(let i=0; i<data._tail.array.length;i++){
            if(data._tail.array[i].month!=1){
                copyData.push(data._tail.array[i])
            }
        }
    }
    data=copyData;
    if (user) {
        if (userInfo) {
            if ((userInfo.voucher && userInfo.voucher>0) || userInfo.interestRateSecurities && userInfo.interestRateSecurities>0) {
                ListHeight -=44;
            }
        }
    }
    return {
        ListHeight,
        userInfoCode,
        verifyAssign,
        data, 
        appointPassword:state.finance.getIn(['appointPassword','passWord']),
        pending: state.listdata.getIn([key, 'pending']),
        //data: state.listdata.getIn([key, 'data']),
        curPage: state.listdata.getIn([key, 'curPage']),
        pageEnd: state.listdata.getIn([key, 'pageEnd'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    nextPage() {
        dispatch({
            type: actionTypes.DEPOSITS_GATHER
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
