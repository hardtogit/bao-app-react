import React,{Component} from 'react'
import style from './index.css'
import Swiper from '../../components/swiper/index';
import classNames from 'classnames'
import {connect} from 'react-redux'
import Loaders from '../../customized_node_modules/halogen'
import {Link} from 'react-router'
import {push} from 'react-router-redux'
import Classnames from 'classnames'
import gz from '../../assets/images/gz.png'
import hj from '../../assets/images/hj.png'
import yq from '../../assets/images/yq.png'
import newHead from '../../assets/images/newHand.png'
import noisAuth from '../../assets/images/realName.png'
import setAuthUrl from '../../components/setAuthUrl/index'
import first from '../../assets/images/firstTz.png'
class FinancialIndex extends Component{
    constructor(props) {
        super(props)
        this.state={
            isInvest:true,
            flage:false,
            isAuth:0,
            show:{display:'block'},
            gatherRate:'',
            gatherTitle:'',
            xsRate:'',
            xsId:'',
            openUrl:'cn.bao://',
            openApp:false,
            equipment:1,
            isSafari:false
        }
    }
    componentWillMount(){
        const user=JSON.parse(sessionStorage.getItem("bao-user"));
        if (user){
            if (user.isInvest==1){
                this.setState({
                    isInvest:false
                })
            }
        }else {
            this.setState({
                flage:true
            })
        }
    }
    equipment=()=>{
        const u = navigator.userAgent;
        const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid){
            this.setState({
                openUrl:'http://a.app.qq.com/o/simple.jsp?pkgname=cdwd.example.ui',
                equipment:1
            })
        }else if (isiOS){
            this.setState({
                openUrl:'http://a.app.qq.com/o/simple.jsp?pkgname=cdwd.example.ui',
                equipment:2
            })
        }
    }
    componentDidMount(){
        this.getuserAgent();
        this.props.getActivity();
        this.props.getGatherData();
        const Height=this.getHeight();
        this.equipment();
        this.setState({
            height:{height:Height+'px'}
        })
        const {
            location:{
                query:{
                    auth
                }
            },
            load
        }=this.props;
        if (auth){
            this.getLogin(auth)
        }else {
            load();
        }
    }
    componentWillReceiveProps(next){
        const store=JSON.parse(sessionStorage.getItem("bao-store"));
        if(store){
           if(store.isRegister){
               this.setState({
                   isAuth:1
               })
           }
        }
        const {location:{
            query:{
                auth
            }
        },activity,getActivity,gatherData}=next;
        if (auth&&activity){
            if (activity.code=='0000'){
                getActivity();
            }
        }
        if(gatherData&&gatherData._tail&&gatherData._tail.array.length!=0){
                const {gatherTitle,gatherRate}=this.getGatherMessage(gatherData._tail.array);
                const {xsId,xsRate}=this.getGatherNewMessage(gatherData._tail.array)
                this.setState({
                    sessionGatherData:true,
                    gatherTitle,
                    gatherRate,
                    xsId,
                    xsRate
                })
        }

    }
    getuserAgent=()=>{
        const userAgent = navigator.userAgent;
        if (userAgent.indexOf("Safari") > -1) {
           this.setState({
               isSafari:true
           })
        }
    };
    getGatherMessage=(gatherData)=>{
        for (let i=0;i<gatherData.length;i++){
            if (gatherData[i].month=='6'){
                return{gatherTitle:gatherData[i].month+'月期'+gatherData[i].title, gatherRate:gatherData[i].rate}
            }
        }
    };
    getGatherNewMessage=(gatherData)=>{
        for (let i=0;i<gatherData.length;i++){
            if (gatherData[i].month=='1'){
                return{xsId:gatherData[i].id, xsRate:gatherData[i].rate}
            }
        }
    }
    getLogin=(auth)=>{
        this.props.login(auth)
    };
    listLoad=()=>{
        const Loading=Loaders['BeatLoader']
        return(<div className={style.loading}>
            <Loading color="#00a6e2" size='20px' />
            <span className={style.loadingText}>加载中...</span>
        </div>)
    }
    oldList=()=>{
        const {gatherTitle,gatherRate}=this.state;
        const Gather=this.depot(gatherTitle,gatherRate,()=>{this.change(0,0);this.props.push('/home/productIndex')})
        const Depot2=this.depot('3月标直投','11.80',()=>{this.change(1,1);this.props.push('/home/productIndex')},50,2);
        return(<ul className={style.productUl}>
            {
                Gather
            }
            {
                Depot2
            }
        </ul>)
    }
    newList=(auth)=>{
        const {gatherTitle,gatherRate}=this.state;
        const {activity}=this.props;
        const Gather=this.depot(gatherTitle,gatherRate,()=>{this.change(0,0);this.props.push('/home/productIndex')})
        const newDep=this.newDep();
        const isAuth=auth;
        let rz;
        if (isAuth==0){
            rz=this.noisAuth();
        }
        if (activity.data[0]==1){
            rz=this.fistTz();
        }
        return(<ul className={style.productUl}>
            {rz}
            {
                newDep
            }{
            Gather
        }
        </ul>)
    }
    noLogin=()=>{
        const {gatherTitle,gatherRate}=this.state;
        const Gather=this.depot(gatherTitle,gatherRate,()=>{this.change(0,0);this.props.push('/home/productIndex')})
        const newDep=this.newDep();
        const noImg=this.newImg();
        return(<ul className={style.productUl}>
            {
                noImg
            }
            {
                newDep
            }{
            Gather
        }
        </ul>)
    }
    showList=()=>{
        const {
            isInvest,
        }=this.state;
        const login=sessionStorage.getItem("bao-auth");
        let Dom;
        if (login){
            if (!isInvest){
                Dom=this.oldList();
            }else {
                Dom=this.newList(this.state.isAuth);
            }
        }else {
            Dom=this.noLogin();
        }
        return Dom
    }
    noisAuth=()=>{
        return(<li className={style.headerLi}>
            <Link to="/user/setting/identityAuth">
                <img src={noisAuth} className={style.headerImg}/>
            </Link>
        </li>)
    }
    fistTz=()=>{
        return(<li className={style.headerLi}>
            <Link to="/user/active">
                <img src={first} className={style.headerImg}/>
            </Link>
        </li>)
    }
    userInfo=()=>{
        const {
            userData
        }=this.props;
        let Dom;
        if (userData.code==100){
            const isInvest=userData.data.isInvest;
            if (isInvest==0){
                Dom=this.newList(userData.data.isAuth);
            }else {
                Dom=this.oldList();
            }
        }else {
            Dom=this.noLogin();
        }
        return Dom
    }
    hide=()=>{
        this.setState({
            show:{display:'none'}
        })
    }
    change=(num,num1)=>{
        this.props.changeDc(num1);
        this.props.change(num);
    }
    getHeight(){
        const Width=document.body.clientWidth,
            Height=Width*0.533;
        return  Height
    }
    loadingDom(){
        return(<div className={style.loadingBox} style={this.state.height}>

        </div>)
    }
    loadingEndDom(datas){
        return(
            <Swiper className={style.swiperBg}>
                {
                    datas.data.map(({img,url},i)=>(
                        <div key={i} className='banner-box'><span onClick={()=>{setAuthUrl(url)}}><img src={img} className='banner-img'/></span></div>
                    ))
                }
            </Swiper>
        )
    }
    newImg=()=>{
        return(<li className={style.headerLi}>
            <Link to="/register">
                <img src={newHead} className={style.headerImg}/>
            </Link>
        </li>)
    }
    depot=(text,rate,fn,start=1000,type=1)=>{
        return(<li className={style.productLi}  onClick={()=>{fn()}} >
            <p className={style.productTitle}>{text}</p>
            <div className={style.productContent}>
                <div className={style.productInterest}>
                    <div className={style.productIm}>
                        <p className={style.productIt}>{rate}<span className={style.productIp}>%</span></p>
                        <p className={style.productItext}>预计年化收益率</p>
                    </div>
                </div>
                <div className={style.productTz}>
                    <p className={style.productSe}>起投<span className={style.productIp}>{start}</span>元</p>
                    <p className={style.productMs}>{type==1&&'到期还本付息'||<span><span>每月还息</span><span style={{paddingLeft:'8px'}}>到期还本</span></span>}</p>
                </div>
            </div>
        </li>)
    }
    newDep=()=>{
        const {xsRate,xsId}=this.state;
        return(<li className={style.xsBox} >
            <div className={style.xsHeader}>
                       <span className={style.xsTitle}>
                          新手标
                       </span>
                <span className={style.xsText}>
                           每人限额一万，首次投资有效
                       </span>
            </div>
            <div className={style.xsContent}>
                <div className={style.xsIcon}>
                    新手专享
                </div>
                <p className={Classnames(style.mgl,style.xsProduct)}>
                    {xsRate}<span className={style.Percentage}>%</span>
                </p>
                <p className={classNames(style.mgl,style.tzText)}>
                          <span className={style.borderBox}>
                              <span className={style.textColor}>50</span>
                              元起投
                          </span>
                    <span className={style.mgls}>
                              投资期限1个月
                          </span>
                </p>
                <p className={Classnames(style.mgl)}>
                    <Link className={style.tzButtom} to={`/gatherMain/${xsId}`}>
                        立即投资
                    </Link>
                </p>
            </div>
        </li>)
    }
    openApp=()=>{
        const {openUrl,equipment,isSafari}=this.state;
        if (!isSafari){
            window.location.href='cn.bao://'
        }
        setTimeout(()=>{
            if (equipment==1){
                window.open(openUrl)
            }else {
                window.location.href=openUrl;
            }
        },1000)
    }
    endApp=()=>{
        this.setState({
            openApp:false
        })
    }
    render(){
        const{
                show,
                flage,
                openApp,
            }=this.state,
            user=sessionStorage.getItem('bao-auth');
        const {
            pending,
            banner,
            userData,
            activity,
            location:{
                query:{
                    auth
                }
            }
        }=this.props;
        let bannerDom,
            bodyDom;
        if(!pending&&pending!=undefined){
            bannerDom=this.loadingEndDom(banner);
        }else{
            bannerDom=this.loadingDom();
        }
        let active=false;
        if (typeof activity!='undefined'){
            if (activity.code!=='0000'){
                active=true
            }
        }
        if(active){
            if (user){
                if (!flage){
                    bodyDom=this.showList();
                }else {
                    if (userData){
                        bodyDom=this.userInfo();
                    }else {
                        bodyDom=this.newDep();
                    }
                }
            }else {
                if (auth){
                    if (userData&&userData.code==100){
                        bodyDom=this.newList(userData.data.isAuth)
                    }
                }else {
                        bodyDom=this.noLogin();
                }
            }
        }else {
            bodyDom=this.noLogin();
        }
        return(
            <div className={style.financialIndexContent}>
                <div className={style.Pop} style={show}>
               <span className={style.close} onClick={this.hide}>
                X
               </span>
                    <span className={style.tb}>

               </span>
                    <span className={style.text}>
               上客户端，领专属大礼包
               </span>
                    <a  className={style.openApp} onClick={this.openApp} >
                        立即打开
                    </a>
                </div>
                {
                    bannerDom
                }
                <div className={style.indexCav}>
                    <ul className={style.indexCavul}>
                        <li className={style.indexCavli}>
                            <a href="https://www.bao.cn/special/gzbj/index.html">
                 <span className={style.cavContent}>
                 <img src={gz}/>
                 <span>国资控股</span>
                 </span>
                            </a>
                        </li>
                        <li className={style.indexCavli}>
                            <a href="https://static.bao.cn/static/web/zt/325_mobile/index.html">
                   <span className={classNames(style.cavContent,style.boder)}>
                 <img src={hj}/>
                 <span>互金会员</span>
                 </span>
                            </a>
                        </li>
                        <li className={style.indexCavli}>
                            <Link to="/find/inviteFriends">
                   <span className={style.cavContent}>
                 <img src={yq}/>
                 <span>邀请有礼</span>
                 </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.productList}>
                    {
                        bodyDom
                    }
                </div>
            </div>
        )
    }
}
const  financialIndexInit=(state,own)=>({
    pending:state.infodata.getIn(['BANNER_LIST','pending']),
    banner:state.infodata.getIn(['BANNER_LIST','data']),
    gatherData:state.listdata.getIn(['DEPOSITS_GATHER_INDEX','data']),
    userData:state.infodata.getIn(['USER_INFO','data']),
    activity:state.infodata.getIn(['NEW_USER_ACTIVITY','data'])
})
const financialIndexInitfn=(dispath,own)=>({
    load(){
        dispath({
            type:'BANNER_LIST'
        })
    },
    change(num){
        dispath({
            type:'PRODUCT_INDEX',
            index:num
        })
    },
    getGatherData() {
        dispath({
            type:'DEPOSITS_GATHER_INDEX',
        })
    },
    changeDc(num){
        dispath({
            type:'PRODUCT_INDEX_PAGE',
            index:num
        })
    },
    getStore(){
      dispath({
          type:'STORE_STATUS_INFO',
          index:num
      })
    },
    push(url){
        dispath(push(url))
    },
    login(auth){
        const nauth=auth.split('?("')[1].split('")')[0];
        dispath({type:'USER_INFO',params:[encodeURIComponent(nauth)]})
    },
    getListB(){
        dispath({
            type:'DEPOSITBS_PLANB'
        })
    },
    getDeposit(){
        dispath({
            type:'RATE'
        })
    },
    getActivity(){
        dispath({
            type:'NEW_USER_ACTIVITY'
        })
    }
})

export default connect(financialIndexInit,financialIndexInitfn)(FinancialIndex)
