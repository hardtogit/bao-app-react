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
class FinancialIndex extends Component{
   constructor(props) {
     super(props)
     this.state={
       isInvest:true,
       flage:false,
       isAuth:0,
       show:{display:'block'},
       title:'',
       rate:'',
       depositbs:false,
       depositb:false,
       rateA:'',
      xsRate:'',
      xsId:'',
      openUrl:'cn.bao://',

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
               this.setState({
                   isAuth:user.isAuth
               })
       }else {
           this.setState({
               flage:true
           })
       }
   }
   componentDidMount(){
     const Height=this.getHeight();
     const depositbs=JSON.parse(sessionStorage.getItem("bao-depositbs"));
      const depositb=JSON.parse(sessionStorage.getItem("bao-deposit"));
     this.setState({
       height:{height:Height+'px'}
     })
     const {
         location:{
             query:{
                 auth
             }
         },
         load,
         getListB,
         getDeposit
     }=this.props;
     if (auth){
         this.getLogin(auth)
     }else {
        load();
     }
       if (depositbs==null){
         getListB()
       }else {
           const {title,rate}=this.getMessage(depositbs.list);
           this.setState({
               depositbs:true,
               title,
               rate
           })
       }
       if (depositb==null){
           getDeposit();
       }else {
           const {rateA,xsRate,xsId}=this.getMessageA(depositb)
           this.setState({
               depositb:true,
               rateA,
               xsRate,
               xsId
           })
       }
   }
    componentWillReceiveProps(next){
       const {depositbs,depositb}=this.state;
       const {depositbs:ndbs,deposit}=next;
       if (!depositbs&&ndbs){
           if (ndbs.code==100){
               const {title,rate}=this.getMessage(ndbs.data.list);
               this.setState({
                   depositbs:false,
                   title,
                   rate
               })
           }
       }
       if (!depositb&&deposit){
           if (deposit.code==100){
               const {rateA,xsRate,xsId}=this.getMessageA(deposit.data)
               this.setState({
                   depositb:true,
                   rateA,
                   xsRate,
                   xsId
               })
           }
       }
    }
   getMessageA=(depositb)=>{
        const xsRate=depositb.new_deposit.rate;
        const xsId=depositb.new_deposit.id;
        const rateA=depositb.deposit[0].rate;
       return{xsRate,rateA,xsId}
   }
   getMessage=(depositbs)=>{
       for (let i=0;i<depositbs.length;i++){
           if (depositbs[i].month=='6'){
               return{title:depositbs[i].month+'月期'+depositbs[i].title,rate:depositbs[i].rate}
           }
       }
   }
   getLogin=(auth)=>{
       this.props.login(auth)
   }
   listLoad=()=>{
       const Loading=Loaders['BeatLoader']
       return(<div className={style.loading}>
           <Loading color="#00a6e2" size='20px' />
           <span className={style.loadingText}>加载中...</span>
       </div>)
   }
   oldList=()=>{
        const {rate,title}=this.state;
        const {rateA}=this.state;
       const Depot=this.depot('3月期定存宝A计划',rateA,()=>{this.change(0,0);this.props.push('/home/productIndex')});
       const Depot1=this.depot(title,rate,()=>{this.change(1,2);this.props.push('/home/productIndex')},1000,2)
       const Depot2=this.depot('3月标直投','11.80',()=>{this.change(2,1);this.props.push('/home/productIndex')},50,2);
       return(<ul className={style.productUl}>
           {
           Depot1
       }
           {
               Depot
           }
       {
           Depot2
       }
       </ul>)
   }
   newList=(auth)=>{
       const {rate,title}=this.state;
       const {rateA}=this.state;
       const Depot=this.depot('3月期定存宝A计划',rateA,()=>{this.change(0,0);this.props.push('/home/productIndex');});
       const Depot1=this.depot(title,rate,()=>{this.change(1,2);this.props.push('/home/productIndex')},1000,2)
       const newDep=this.newDep();
       const isAuth=auth;
       let rz;
       if (isAuth==0){
           rz=this.noisAuth();
       }
       return(<ul className={style.productUl}>
           {rz}
           {
               newDep
           }{
           Depot1
       }{
           Depot
       }
       </ul>)
   }
    noLogin=()=>{
        const {rate,title}=this.state;
        const {rateA}=this.state;
        const Depot=this.depot('3月期定存宝A计划',rateA,()=>{this.change(0,0);this.props.push('/home/productIndex');});
        const Depot1=this.depot(title,rate,()=>{this.change(1,2);this.props.push('/home/productIndex')},1000,2)
        const newDep=this.newDep();
        const noImg=this.newImg();
       return(<ul className={style.productUl}>
           {
               noImg
           }
           {
               newDep
           }{
           Depot1
       }{
               Depot
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
               Dom=this.newList(this.state.isAuth,);
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
                   <Link className={style.tzButtom} to={`/deposit-product/5/A/${xsId}`}>
                       立即投资
                   </Link>
               </p>
           </div>
       </li>)
   }
    render(){
      const{
        show,
        flage,
        openUrl
      }=this.state,
      user=sessionStorage.getItem('bao-auth'),
      depositbs=JSON.parse(sessionStorage.getItem("bao-depositbs")),
      depositb=JSON.parse(sessionStorage.getItem("bao-deposit"));
      const {
        pending,
        banner,
        userData,
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
       if(depositbs&&depositb){
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
                   if (userData){
                       bodyDom=this.newList(userData.data.isAuth,)
                   }
               }else {
                   bodyDom=this.noLogin();
               }
           }
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
                    <a href={openUrl} className={style.openApp}>
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
  userData:state.infodata.getIn(['USER_INFO','data']),
  depositbs:state.infodata.getIn(['DEPOSITBS_PLANB','data']),
  deposit:state.infodata.getIn(['RATE','data'])
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
    changeDc(num){
        dispath({
            type:'PRODUCT_INDEX_PAGE',
            index:num
        })
    },
     push(url){
         dispath(push(url))
     },
    login(auth){
         dispath({type:'USER_LOGIN_FLOW',params:[{auth}]})
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
    }
})

export default connect(financialIndexInit,financialIndexInitfn)(FinancialIndex)
