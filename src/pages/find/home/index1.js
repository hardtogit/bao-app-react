import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import NavBar from '../../../components/NavBar'
import IconMessage from '../../../assets/images/messicon.png'
import Iconfrend from '../../../assets/images/licaiicon.png'
import IconJf from '../../../assets/images/jfsc.png'
import Tab from "../../../components/BottomTabs";
import styles from './index.css'
import classNames from 'classnames'
import Loading from '../../../components/pageLoading'
import setAuthUrl from '../../../components/setAuthUrl/index'
class findHome extends Component{
    componentDidMount(){
      this.props.load();
    } 
    loadingDom(){
        return(<Loading/>)
    }
    go=()=>{
        const user=sessionStorage.getItem('bao-auth'),
            {push}=this.props;
        if (user){
            push('/user/coinShop');
        }else {
            sessionStorage.setItem('bao-sc',true);
            push('/login');
        }
    }
    loadingEndDom(massegeNum,activeList){  
        const massegeNums=massegeNum.data,
              user=sessionStorage.getItem('bao-user');
        let  massage
        if(massegeNums){
            if (massegeNums.msg_count+massegeNums.notice_count!=0){
                massage=<span className={styles.newsNum}>{parseInt(massegeNums.msg_count+massegeNums.notice_count)}</span>
            }
        }
        return(
             <div>
            <ul className={styles.cavUl}>
                <li className={styles.cavLi}>
                <Link to='/find/message' className={styles.Link}>
                <span>
                 <img src={IconMessage} className={styles.cavIcon}/>
                </span>
                <span className={styles.changeLeft}>
                 消息动态
                </span>
                {user&&massegeNums&&massegeNums.has_new_activity!=0&&massage}
                <span className={styles.glyphiconChevronRight}></span>
                </Link>
                </li>
                <li className={classNames(styles.cavLi,styles.changeTop)}>
                 <Link to='/find/inviteFriends' className={styles.Link}>
                <span>
                 <img src={Iconfrend} className={styles.cavIcon}/>
                </span>
                <span className={styles.changeLeft}>
                 呼朋唤友同享千元红包
                </span>
                <span className={styles.glyphiconChevronRight}></span>
                </Link>
                </li>
                <li className={classNames(styles.cavLi,styles.changeTop)} onClick={this.go}>
                <span>
                 <img src={IconJf} className={styles.cavIcon}/>
                </span>
                        <span className={styles.changeLeft}>
                 积分商城换好礼
                </span>
                        <span className={styles.glyphiconChevronRight}></span>
                </li>
            </ul>
            {
             activeList&&activeList.data.map(({title,img,url},i)=>{
                  return(
                      <div className={styles.activeBox} key={i}>
                        <span  className={styles.activeHref} onClick={()=>{setAuthUrl(url)}}>
                        <p className={styles.activeTitle}>
                         {title}
                        </p>
                        <div className={styles.activeImg}>
                        <img src={img}/>
                        </div>
                        </span>
                       </div>
                  )
              }) 
            }
            </div> 
        )
    }
     render(){
         let {
            ListPending,
            massegePending,
            activeList,
            massegeNum
         } = this.props;
         let contentDom;
         if(ListPending||massegePending || ListPending ==undefined || massegePending==undefined){
            contentDom=this.loadingDom();
         }else if(!ListPending&&!massegePending){
              contentDom=this.loadingEndDom(massegeNum,activeList);
         }
         return(
             <div className={styles.finderHome}>
            <div className={styles.finderHomeHeader}>
           <NavBar leftNode={null} backgroundColor='#fff'>
                <span className={styles.title}>发现</span>
            </NavBar>
            </div> 
            <div className={styles.findContent}>
             {
                 contentDom
             }
            </div>
                 <Tab/>
            </div>
         )
     }
}
const findeActiveInin=(state,own)=>{
    return{
        ListPending:state.infodata.getIn(['FETCH_ACTIVE_LIST','pending']),
        massegePending:state.infodata.getIn(['FETCH_ACTIVE_MASSAGE','pending']),
        activeList:state.infodata.getIn(['FETCH_ACTIVE_LIST','data']),
        massegeNum:state.infodata.getIn(['FETCH_ACTIVE_MASSAGE','data'])
    }
}
const findeActiveIninfn=(dispatch,own)=>({
      load(){
          dispatch({
               type:'FETCH_ACTIVE_LIST'
           })
              dispatch({
                  type:'FETCH_ACTIVE_MASSAGE'
              })
      },
    push(url){
          dispatch(push(url))
    }
})
export default connect(findeActiveInin,findeActiveIninfn)(findHome)