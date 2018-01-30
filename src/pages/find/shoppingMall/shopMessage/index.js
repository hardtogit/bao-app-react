import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import Loading from '../../../../components/pageLoading'
import {connect} from 'react-redux'
import Scroll from '../../../../components/scroll'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    push=(id)=>{
        this.props.push(id);
    };
    loadingDom=()=>{
        return <Loading/>
    };
    loadEndDom=()=>{
        const{
            listData,
            pending,
            end,
        }=this.props;
        const Height=document.body.clientHeight-44;
        return(
            <div className={styles.messageContent}>
                <Scroll height={Height} fetch={this.props.getNoticeList()}
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
        )
    }
    render(){
        const{
           listData,
           pending,
           end,
            pop
        }=this.props;
        let Dom;
        if(listData){
            Dom = this.loadEndDom();
            console.log(listData)
        }else{
            Dom = this.loadingDom();
        }

        return(
            <div className={styles.announceMent}>
            <div className={styles.announceMentHeader}><NavBar title="商城通知" onLeft={pop} backgroundColor="#fff" color="#666"/></div>
                {
                    Dom
                }
            </div>
        )
    }
}
const mapStateToProps=(state,own)=>({
       listData:state.listdata.getIn(['GET_NOTICE_LIST','data']),
       pending:state.listdata.getIn(['GET_NOTICE_LIST','pending']),
       end:state.listdata.getIn(['GET_NOTICE_LIST','pageEnd']),
})
const mapDispatchToProps=(dispatch,own) =>({
    getNoticeList(){
        dispatch({
            type:'GET_NOTICE_LIST'
        })
    },
    pop(){
        dispatch(goBack())
    },
    push(id){
        dispatch(push(`/find/shoppingMall/shopMessageDetail/${id}`))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)