import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar'
import IconMessage from '../../../assets/images/messicon.png'
import Iconfrend from '../../../assets/images/licaiicon.png'
import Tab from "../../../components/BottomTabs";
import styles from './index.css'
import classNames from 'classnames'
import Loading from '../../../components/pageLoading'
class findHome extends Component{
    componentDidMount(){
      this.props.load();
    } 
    loadingDom(){
        return(<Loading/>)
    }
    loadingEndDom(massegeNum,activeList){  
        const massegeNums=massegeNum.data;
        let  massage;
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
                {massegeNums&&massegeNums.has_new_activity!=0&&massage}
                <span className={styles.glyphiconChevronRight}></span>
                </Link>
                </li>
                <li className={classNames(styles.cavLi,styles.changeTop)}>
                 <Link to='/find/inviteFriends' className={styles.Link}>
                <span>
                 <img src={Iconfrend} className={styles.cavIcon}/>
                </span>
                <span className={styles.changeLeft}>
                 邀请好友投资返现
                </span>
                <span className={styles.glyphiconChevronRight}></span>
                </Link>
                </li>
            </ul>
            {
             activeList&&activeList.data.map(({title,img,url},i)=>{
                  return(
                      <div className={styles.activeBox} key={i}>
                        <a href={url} className={styles.activeHref}>
                        <p className={styles.activeTitle}>
                         {title}
                        </p>
                        <div className={styles.activeImg}>
                        <img src={img}/>
                        </div>
                        </a>
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
      }
})
export default connect(findeActiveInin,findeActiveIninfn)(findHome)