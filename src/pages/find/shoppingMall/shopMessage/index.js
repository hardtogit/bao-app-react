import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import classNames from 'classnames'
import Scroll from '../../../../components/scroll'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class shopMessage extends Component{
    push=(id)=>{
        this.props.push(id);
    };
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
                      const {id,title,status,ctime,day,info}=item;
                      return(
                          <div className={status == 1 && styles.massageList || styles.active} key={i} onClick={()=>{this.push(id)}}>
                            <div className={styles.massageOne}>
                                <div className={styles.massageTitle}>
                                    <div  className={styles.Link} >
                                        <p className={styles.massageNew}>{title}{status}{id}</p>
                                    </div>
                                </div>
                                <div className={styles.massageBody}>
                                {info}
                                </div>
                                <div className={styles.massagefooter}>
                                 {ctime}
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
    push(id){
      dispath(push(`/find/shoppingMall/shopMessageDetail/${id}`))
    }
})
export default connect(initAnment,initAnmentfn)(shopMessage)