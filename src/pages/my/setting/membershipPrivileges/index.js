import React,{Component} from 'react'
import Nav from '../../../../components/NavBar'
import classNames from 'classnames'
import style from './index.css'
import {connect} from 'react-redux'
import privilege_wak from '../../../../assets/images/privilege_wak.png'
import privilege_bg_bar from '../../../../assets/images/privilege_bg_bar.png'
import privilege_yh from '../../../../assets/images/privilege_yh.png'
import privilege_yh2 from '../../../../assets/images/privilege_yh2.png'
import privilege_yh3 from '../../../../assets/images/privilege_yh3.png'
import privilege_quan1 from '../../../../assets/images/spe1.png'
import privilege_quan2 from '../../../../assets/images/spe2.png'
import privilege_quan3 from '../../../../assets/images/spe3.png'
import privilege_quan4 from '../../../../assets/images/spe4.png'
import privilege_quan5 from '../../../../assets/images/spe5.png'
import privilege_quan6 from '../../../../assets/images/spe6.png'
import privilege_quan7 from '../../../../assets/images/spe7.png'
import privilege_quan8 from '../../../../assets/images/spe8.png'
import privilege_vip1 from '../../../../assets/images/privilege_vip1.png'
import privilege_vip2 from '../../../../assets/images/privilege_vip2.png'
import privilege_vip3 from '../../../../assets/images/privilege_vip3.png'
import sign_closex from  '../../../../assets/images/sign_closex.png'
class membershipPrivileges extends Component{
    constructor(props){
        super(props)
        this.state={
            bannerTxet:['待收金额达到20万，升级为铂金用户','待收金额达到50万，升级为钻石用户','待收金额达到100万，升级为至尊用户'],
            vipList:[{url:privilege_quan1,text:'专属标识',popText:'特有标识',bg:{backgroundColor:'#ffb275'}},{url:privilege_quan2,text:'优先特权',popText:'将对您的提现、自动投标优先处理',bg:{backgroundColor:'#83cdc9'}},
            {url:privilege_quan3,text:'精美礼品',popText:'精美礼品(在节假日我们会为您准备一份精美礼品)',bg:{backgroundColor:'#c391bf'}},{url:privilege_quan4,text:'特惠专区',popText:'积分商城将为您开放会员专区兑换',bg:{backgroundColor:'#f29d9e'}},
            {url:privilege_quan5,text:'客服约标',popText:'享10万起约标 不限期限',bg:{backgroundColor:"#8bbae1"}},{url:privilege_quan6,text:'活动邀约',popText:'宝点大型活动邀约参与,我们在等你',bg:{backgroundColor:'#afa0ec'}},
            {url:privilege_quan7,text:'上门拜访',popText:'说好的约，那我们就一定要约',bg:{backgroundColor:'#d1c1a5'}},{url:privilege_quan8,text:'考察机会',popText:'每年您都有一次来成都总部免费考察的机会',bg:{backgroundColor:'#7cc2e1'}}],
            page:0,
            cavImg:[privilege_yh,privilege_yh2,privilege_yh3],
            initnum:[[0,1,2,3],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7]],
            liClass:[style.vipProjectliend,style.vipProjectlifs,style.vipProjectlited],
            icon:[privilege_vip1,privilege_vip2,privilege_vip3],
            Dan:['您将拥有铂金会员','您将拥有钻石会员','您将拥有至尊会员'],
            zgnum:0,
            nPop:{
              popText:'',
              icon:'',
              bg:{backgroundColor:'#fff'},
              position:{bottom:'-100%'},
              url:'',  
            },
            scroll:{overflow:'auto'} 
        }
    }
    componentDidMount(){
       this.props.load(); 
       membershipPrivileges.Self=this
    }
    changeCav(e){
       const num=e.target.dataset.id;
       membershipPrivileges.Self.setState({
           page:num   
       })
    }
    zg(e){
       const Self=membershipPrivileges.Self,
             numVip=Self.state.page,
             vipList=Self.state.vipList,
             iconList=Self.state.icon,
             num = e.target.dataset.id,
             position={bottom:'0px'},
             icon=iconList[numVip],
             Nobj=vipList[num],
             danText=Self.state.Dan;
            let {popText,bg,url}=Nobj;
             if(num==0){
               popText=danText[numVip]+popText  
             };
            membershipPrivileges.Self.setState({
                scroll:{overflow:'hidden'},
                nPop:{
                  popText,
                  icon,
                  bg,
                  position,
                  url,  
                }
            })
    }
    close(){
         const nPop= membershipPrivileges.Self.state.nPop;
               nPop.position={bottom:'-100%'};
         membershipPrivileges.Self.setState({
                scroll:{overflow:'auto'},
                nPop:nPop
            })
    }
    render(){
        const{bannerTxet,vipList,page,cavImg,initnum,liClass,nPop}=this.state,
             ListArry=[];
             initnum[page].map((num,i)=>{
                 let Obj=vipList[num],
                     index=parseInt(i)+1;  
                ListArry.push(<li className={classNames(style.vipProjectli,liClass[index%3])} key={i} >
                              <div className={style.vipProjectClick} onClick={this.zg} data-id={i} ></div>
                              <div className={style.vipProjectImg} style={Obj.bg}><img src={Obj.url} /></div>
                              <p className={style.liText}>{Obj.text}</p>
                              </li>) 
             })
        return(
            <div className={style.mebConent} style={this.state.scroll}>
            <Nav title='我的特权' backgroundColor="transparent"/>
             <div className={style.bannerBox}>
              <img src={privilege_wak} className={style.bannerImg}/>
              <img src={privilege_bg_bar}  className={style.privilege_bg_bar}/>
              <div className={style.bottomBg}></div>
              <div className={style.userCav}>
               <img src={cavImg[page]} className={style.cavImg}/>
               <ul className={style.userCavList}>
                <li className={classNames(style.userCavLi,page==0&&style.action||'')} onClick={this.changeCav} data-id='0'>
                 <span className={style.jtBox}></span>
                </li>
                <li className={classNames(style.userCavLi,page==1&&style.action||'')} onClick={this.changeCav} data-id='1'>
                 <span className={style.jtBox}></span>
                </li>
                <li className={classNames(style.userCavLi,page==2&&style.action||'')} onClick={this.changeCav} data-id='2'>
                <span className={style.jtBox}></span>
                </li>
               </ul>
              </div>
             </div>
             <div className={style.vipBox}>
              <div className={style.sliderVip}>
               <div className={style.vipBanner}>
                {
                  bannerTxet[page]  
                }
               </div>
               <div className={style.vipProject}>
                <ul className={style.vipProjectul}>
                 {
                  ListArry
                 }
                </ul>
               </div> 
              </div>
             </div>
             <div className={style.popBox} style={nPop.position}>
             <div className={style.popZg}></div>
             <div className={style.popBoxContent}>
             <div className={style.popBoxContentImg} style={nPop.bg}><img src={nPop.url} /></div>
             <div className={style.popBoxContentfooter}>
              <p>{nPop.popText}</p>
               <img src={nPop.icon}  className={style.flageImg}/>
              <span className={style.closeFlage}>
              <img src={sign_closex}  onClick={this.close} />
              </span>
             </div>
             </div>
             </div>
            </div>)
    }
}
const membershipPrivilegesinit=(state,own)=>({

})
const membershipPrivilegesinitfn=(dispath,own)=>({
        load(){
              dispath({
                  type:'USER_INFO_WITH_LOGIN'
              })
        }
})
export default connect(membershipPrivilegesinit,membershipPrivilegesinitfn)(membershipPrivileges)