import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Swiper from 'react-mobile-swiper';
import Notice from '../../../assets/images/find/notice.png'
import Mall from '../../../assets/images/find/mall.png'
import Signon from '../../../assets/images/find/signOn.png'
import Member from '../../../assets/images/find/member.png'
import newHand from '../../../assets/images/find/newHand.png'
import invite from '../../../assets/images/find/invite.png'
import special1 from '../../../assets/images/find/special1.png'
import special2 from '../../../assets/images/find/special2.png'
import special3 from '../../../assets/images/find/special3.png'
import special4 from '../../../assets/images/find/special4.png'
import special5 from '../../../assets/images/find/special5.png'
import special6 from '../../../assets/images/find/special6.png'
import Sign from '../../../components/Sign/index'
import styles from './index.css'
import Loading from '../../../components/pageLoading'
import Product from '../../../components/Product'
import setAuthUrl from '../../../components/setAuthUrl/index'
import utils from '../../../utils/utils'
class findHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            signNumbers:'',
            coins:'',
            isSign:false,
            index:0,
            id:0
        }
    }
    componentWillMount(){
        this.props.clearData("GET_GOODS_LIST");
        this.props.getGoodsList();
        this.props.getUser();
        this.props.getHotActivityList();
        this.props.findBanner();
        let userInfo = JSON.parse(sessionStorage.getItem("bao-auth"));
        if(userInfo){
            this.props.getVip();
        }
    }
    componentWillReceiveProps(next){
        const {user}=next;
        if (user){
            user.code==100&&this.set(user.data);
        }
    }
    set=(userInfo)=>{
        this.setState({
            signNumbers:userInfo.signNumbers,
            coins:userInfo.coins,
            isSign:userInfo.isSign,
        })
    }
    doSign=()=>{
        this.refs.SignModel.show();
    };
    signSuccess=(data)=>{
        this.setState({
            isSign:true,
            coins:data.data.coins
        });
        let userInfo = JSON.parse(sessionStorage.getItem("bao-user"));
        userInfo.isSign=true;
        userInfo.coins=data.data.coins;
        sessionStorage.setItem('bao-user',JSON.stringify(userInfo));
        this.refs.SignModel.hide();
    };
    handleBasic=(basicindex)=>{
        this.props.push("/find/memberCenter");
        sessionStorage.setItem("basicIndex",JSON.stringify(basicindex));
    };
    qdDom=()=>{
        let {coins,signNumbers,isSign} = this.state;
        return( <Sign ref="SignModel" coin={+coins} days={+signNumbers} sign={isSign} callBackFun={(data)=>{this.signSuccess(data)}}/>)
    };
    go=()=>{
        this.props.push("/login?baoBackUrl=/home/findIndex")
    };
    toActivity=(url)=>{
        window.location.href=url;
    };
    loadingDom=()=>{
        return(<Loading/>)
    };
    loadingEndDom(){
        const {
            goodsListData,
            activityData,
            bannerData,
            VipData
        }=this.props;
        let inviteUrl;
        let userInfo = JSON.parse(sessionStorage.getItem("bao-auth"));
        let level;
        if(userInfo&&VipData){
            level = VipData.data.vip_level;
        }
        if (userInfo){
            inviteUrl = "/find/inviteFriends";
        }else {
            inviteUrl = "/find/inviteRule";
        }
        let productList=[];
        goodsListData&&goodsListData.map((item,i)=>{
            let restTime = utils.millisecondToDate(item.down_time - item.server_time);
            if(i<4){
             productList.push(
                 <Product  key={i} load={false} level={level} alone_price={item.alone_price} down_time={item.down_time} image={item.image} label_name={item.label_name} price={item.price} product_id={item.product_id} product_name={item.product_name} restTime={restTime}>
                 </Product>
             )
            }
        });
        let activityList=[];
        activityData&&activityData.data.map((item,i)=>{
            if(i<2){
                activityList.push(
                    <li key={i} onClick={item.status&&(()=>{this.toActivity(item.url_wap)})}>
                        <div className={item.status!=1 && styles.shadow}>{item.status == '0'&&"活动未开始"||(item.status == '2'&&"活动已结束")}</div>
                        <img src={item.image_wap}/>
                    </li>
                )
            }
        });
        let bannerList=[];
        bannerData&&bannerData.data.map((item,i)=> {
            bannerList.push(
                <div className='banner-box' style={{textAlign: "center",overflow:"hidden",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} key={i}>
                    {/*<span onClick={()=>{setAuthUrl(item.url)}}><img src={item.image_wap} className='banner-img'/></span>*/}
                    <img onClick={(item.url!="")&&(()=>{this.toActivity(item.url)})} width="100%" src={item.image_wap} className='banner-img' />
                </div>
            )
        });
        return(
            <div>
                { bannerData&&<Swiper loop={bannerData.data.length==1?false:true} type="card" width={0.8} pagination={false} className={styles.swiperBg} autoPlay={false}>
                        {
                            bannerList
                        }
                    </Swiper>
                }

                <div className={styles.tabContainer}>
                    <ul className={styles.productTab}>
                        <li className={styles.indexCavli}>
                            <Link to='/find/messages' className={styles.Link}>
                                    <span className={styles.cavContent}>
                                     <img src={Notice}/>
                                     <p>消息</p>
                                     </span>
                            </Link>
                        </li>
                        <li className={styles.indexCavli}>
                            <Link to='/find/shoppingMall' className={styles.Link}>
                                <img src={Mall}/>
                                <p>商城</p>
                            </Link>
                        </li>
                        <li className={styles.indexCavli}>
                            <span onClick={!userInfo&&this.go||(!this.state.isSign&&this.doSign)}>
                                <img src={Signon}/>
                                <p>{this.state.isSign&&'已签到'||'签到'}</p>
                            </span>
                        </li>
                        <li className={styles.indexCavli}>
                            <Link to="/find/memberCenter" className={styles.Link}>
                                <img src={Member}/>
                                <p>会员</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>优享福利</span>
                    </div>
                    <ul className={styles.welfare}>
                        <a href="https://www.bao.cn/special/newHandActivities/index.html">
                            <li>
                                <img src={invite}/>
                                <div className={styles.info}>
                                    <p className={styles.topTxt}>新手专享</p>
                                    <p className={styles.bottomTxt}>800元福利包</p>
                                </div>
                            </li>
                        </a>
                        <li style={{width:"4%"}}>
                            <span className={styles.split}></span>
                        </li>
                        <Link to={inviteUrl}>
                            <li>
                                <img src={newHand}/>
                                <div  className={styles.info}>
                                    <p  className={styles.topTxt}>邀友返现</p>
                                    <p className={styles.bottomTxt}>邀请好友返现</p>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>会员特权</span>
                        <Link to='/find/memberCenter'>
                            <span className={styles.rightTxt}>更多></span>
                        </Link>
                    </div>
                    <ul className={styles.special}>
                        <li onClick={()=>{this.handleBasic(0)}}>
                            <img src={special1}/>
                            <p>生日特权</p>
                        </li>
                        <li onClick={()=>{this.handleBasic(1)}}>
                            <img src={special2}/>
                            <p>节日礼包</p>
                        </li>
                        <li onClick={()=>{this.handleBasic(2)}}>
                            <img src={special3}/>
                            <p>商城折扣</p>
                        </li>
                    </ul>
                    <ul className={styles.special}>
                        <li onClick={()=>{this.handleBasic(3)}}>
                            <img src={special4}/>
                            <p>免费提现</p>
                        </li>
                        <li onClick={()=>{this.handleBasic(0)}}>
                            <img src={special5}/>
                            <p>抵用券</p>
                        </li>
                        <li onClick={()=>{this.handleBasic(0)}}>
                            <img src={special6}/>
                            <p>加息券</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>商城</span>
                        <Link to='/find/shoppingMall'>
                            <span className={styles.rightTxt}>更多></span>
                        </Link>
                    </div>
                    <ul className={styles.shop}>
                        {productList}
                    </ul>
                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>热门活动</span>
                        <Link to='/find/hotActivity'>
                            <span className={styles.rightTxt}>更多></span>
                        </Link>
                    </div>
                    <ul className={styles.hotActive}>
                        {activityList}
                    </ul>
                </div>
            </div>
        )
    }
     render(){
         let {coins} = this.state;
         const {
             goodsListData,
             activityData
         }=this.props;
         let contentDom,qdDom;
         if (goodsListData&&(coins||coins==0)){
             contentDom=this.loadingEndDom();
             qdDom=this.qdDom();
         }else{
             contentDom=this.loadingDom();
         }
         return(
             <div className={styles.finderHome}>
                <div className={styles.findContent} >
                    {
                        contentDom
                    }
                    {
                        qdDom
                    }
                </div>
             </div>
         )
     }
}
const initMymassege=(state,own)=>({
    goodsListData: state.listdata.getIn(['GET_GOODS_LIST', 'data']),
    user:state.infodata.getIn(['USER_INFO','data']),
    activityData:state.infodata.getIn(['GET_HOT_ACTIVITY','data']),
    bannerData:state.infodata.getIn(['GET_FIND_BANNER','data']),
    VipData: state.infodata.getIn(['GET_VIP', 'data']),
})
const initMymassegefn=(dispatch,own)=>({
    getVip(){
        dispatch({
            type:'GET_VIP'
        })
    },
    getGoodsList(){
        dispatch({
            type:'GET_GOODS_LIST'
        })
    },
    getUser(){
        dispatch({
            type:'USER_INFO',
            lx:true
        })
    },
    getHotActivityList(){
        dispatch({
            type:'GET_HOT_ACTIVITY'
        })
    },
    findBanner(){
        dispatch({
            type:'GET_FIND_BANNER'
        })
    },
    push(url){
        dispatch(push(url))
    },
    clearData(key){
        dispatch({
            type:'CLEAR_DATA',
            key:key
        })
    },

})
export default connect(initMymassege,initMymassegefn)(findHome)