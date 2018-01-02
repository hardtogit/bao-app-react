import React,{Component} from 'react'
import ReactDOM from "react-dom"
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import NavBar from '../../../components/NavBar'
import Swiper from '../../../components/mySwiper/index';
import b1 from '../../../assets/images/find/b1.png';
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
import private1 from '../../../assets/images/find/private2.png'
import Sign from '../../../components/Sign/index'
import coin from '../../../assets/images/find/coin.png'
import shop from '../../../assets/images/find/shop.png'
import ac1 from '../../../assets/images/find/ac1.png'
import ac2 from '../../../assets/images/find/ac2.png'
import Tab from "../../../components/BottomTabs";
import styles from './index.css'
import classNames from 'classnames'
import Loading from '../../../components/pageLoading'
import setAuthUrl from '../../../components/setAuthUrl/index'

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
    componentDidMount(){
        this.props.getGoodsList();
        this.props.getUser();
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
    }
    qdDom=()=>{
        let {coins,signNumbers,isSign} = this.state;
        return( <Sign ref="SignModel" coin={+coins} days={+signNumbers} sign={isSign} callBackFun={(data)=>{this.signSuccess(data)}}/>)
    }
    loadingDom(){
        return(<Loading/>)
    }
    loadingEndDom(){
        const {
            goodsListData,
        }=this.props;
        let inviteUrl;
        let userInfo = JSON.parse(sessionStorage.getItem("bao-user"));
        if (userInfo){
            inviteUrl = "/find/inviteFriends";
        }else {
            inviteUrl = "/find/inviteRule";
        }
        let productList=[]

        goodsListData&&goodsListData.map((item,i)=>{
            if(i<4){
             productList.push( <li key={i}>
                 <p className={styles.shopTitle1}>{item.product_name}</p>
                 <p className={styles.shopTitle2}>
                     <span>{item.price}</span>
                     <span><img src={coin} /></span>
                     <img src={private1} className={styles.specialIcon}/>
                 </p>
                 <img src={item.image} className={styles.shopImg}/>
             </li>)
            }
        })
        return(
            <div>
                <Swiper className={styles.swiperBg} autoPlay={false}>
                    <div className='banner-box' style={{textAlign:"center"}}>
                        <img src={b1} className='banner-img'  />
                    </div>
                    <div  className='banner-box' style={{textAlign:"center"}}>
                        <img src={b1} className='banner-img' />
                    </div>
                </Swiper>
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
                            <span onClick={!this.state.isSign&&this.doSign}>
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
                        <li>
                            <img src={special1}/>
                            <p>生日特权</p>
                        </li>
                        <li>
                            <img src={special2}/>
                            <p>节日礼包</p>
                        </li>
                        <li>
                            <img src={special3}/>
                            <p>商城折扣</p>
                        </li>
                    </ul>
                    <ul className={styles.special}>
                        <li>
                            <img src={special4}/>
                            <p>免费提现</p>
                        </li>
                        <li>
                            <img src={special5}/>
                            <p>抵用券</p>
                        </li>
                        <li>
                            <img src={special6}/>
                            <p>加息券</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.findItem}>
                    <div className={styles.itemTitle}>
                        <span className={styles.leftTxt}>会员商城</span>
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
                        <Link to='/find/shoppingMall'>
                            <span className={styles.rightTxt}>更多></span>
                        </Link>
                    </div>
                    <ul className={styles.hotActive}>
                        <li>
                            <img src={ac1}/>
                        </li>
                        <li>
                            <div className={styles.shadow}>活动已结束</div>
                            <img src={ac2}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
     render(){
         let {coins} = this.state;
         const {
             goodsListData,
         }=this.props;
         let contentDom,qdDom;
         if (goodsListData&&(coins||coins==0)){
             contentDom=this.loadingEndDom();
             qdDom=this.qdDom();
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
    user:state.infodata.getIn(['USER_INFO','data'])
})
const initMymassegefn=(dispatch,own)=>({
    getGoodsList(){
        dispatch({
            type:'GET_GOODS_LIST'
        })
    },
    getUser(){
        dispatch({
            type:'USER_INFO'
        })
    },
    pop(){
        dispatch(goBack())
    }
})
export default connect(initMymassege,initMymassegefn)(findHome)