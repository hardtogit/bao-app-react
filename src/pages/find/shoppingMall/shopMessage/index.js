import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import classNames from 'classnames'
import Scroll from '../../../../components/scroll'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class announceMent extends Component{
    push=(data)=>{
        sessionStorage.setItem("bao-noticeData",JSON.stringify(data));
        this.props.push();
    }
    render(){
        const{
           listData,
           pending,
           end,
            pop
        }=this.props;
         const Height=document.body.clientHeight-44;
        return(
            <div className={styles.announceMent}>
            <div className={styles.announceMentHeader}><NavBar title="商城通知" onLeft={pop} backgroundColor="#fff" color="#666"/></div>
            <div className={styles.messageContent}>
              <Scroll height={Height} fetch={this.props.getNoticeList}
               isLoading={pending} distance={20} endType={end} endload={<div>没有更多了哦</div>}>
              {
                  listData&&listData.map((item,i)=>{
                      const {title,content,description,date,msgKey,id,type,is_read}=item,
                            data={title,msgKey,description,type,id,date};
                      return(
                          <div className={styles.massageList} key={i} onClick={()=>{this.push(data)}}>
                            <div className={styles.massageOne}>
                            <div className={styles.massageTitle}>
                            <div  className={styles.Link} >
                            <span className={classNames(styles.massageIcon,type==1&&styles.system||styles.notice)}>{is_read=='0'&&'New'||type==1&&'系统'||'公告'}</span>
                            <span className={styles.massageNew}>{title}</span>
                            </div>
                            </div>
                            <div className={styles.massageBody}>
                            {content}
                            </div>
                            <div className={styles.massagefooter}>
                             {date}
                            </div>
                            <span className={styles.glyphiconChevronRight}></span>
                            </div>
                        </div>
                      )
                  })
              }
              </Scroll>
            </div>
            </div>
        )
    }
}
const initAnment=(state,own)=>({
       listData:state.listdata.getIn(['GET_NOTICE_LIST','data']),
       pending:state.listdata.getIn(['GET_NOTICE_LIST','pending']),
       end:state.listdata.getIn(['GET_NOTICE_LIST','pageEnd']),
})
const initAnmentfn=(dispath,own) =>({
    getNoticeList(){
        dispath({
            type:'GET_NOTICE_LIST'
        })
    },
    pop(){
           dispath(goBack())
    },
    push(){
      dispath(push('/find/messagedetail'))
    }
})
export default connect(initAnment,initAnmentfn)(announceMent)