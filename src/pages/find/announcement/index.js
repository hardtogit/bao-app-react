import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import classNames from 'classnames'
import Scroll from '../../../components/scroll'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class announceMent extends Component{
      componentWillMount(){
      this.props.clearId();    
    }
    componentWillUnmount(){
       this.props.clearData()
    }
    push=(data)=>{
        sessionStorage.setItem("bao-noticeData",JSON.stringify(data));
        this.props.push();
    }
    render(){
        const{
           listData,
           pending,
           end,
           idList,
            pop
        }=this.props
         const Height=document.body.clientHeight-44;
        return(
            <div className={styles.announceMent}>
            <div className={styles.announceMentHeader}><NavBar title="我的公告" onLeft={pop}/></div>
            <div className={styles.messageContent}>
              <Scroll height={Height} fetch={this.props.getLoad}
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
       listData:state.listdata.getIn(['FETCH_ANNOUNCEMENT_S','data']),
       pending:state.listdata.getIn(['FETCH_ANNOUNCEMENT_S','pending']),
       end:state.listdata.getIn(['FETCH_ANNOUNCEMENT_S','pageEnd']),
})
const initAnmentfn=(dispath,own) =>({
    getLoad(){
        dispath({
            type:'FETCH_ANNOUNCEMENT_S',
            params:[2]
        })
    },
      clearData(){
         dispath({
              type:'CLEAR_DATA',
              key:'FETCH_ANNOUNCEMENT_S'
          }) 
       },
       clearId(){
         dispath({
              type:'CLEAR_ID',
              key:'FETCH_ANNOUNCEMENT_S'
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