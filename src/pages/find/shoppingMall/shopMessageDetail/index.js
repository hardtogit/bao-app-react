import React,{Component} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../../../components/NavBar'
import Loading from '../../../../components/pageLoading/index'
import detail from '../../../../assets/images/find/detail.png'
import styles from './index.css'
import {goBack} from 'react-router-redux'
class messageDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            date:'',
            description:'',
        }
    }
    componentWillMount(){
        const {
            id
        }=this.props.params;
        this.props.getNoticeDetail(id);
    }
    loadDom=()=>{
        return <Loading/>
    }
    loadEndDom=(data)=>{
        const {
            title,
            ctime,
            content,
        }=data;
        return(<div className={styles.detailWraper}>
            <img src={detail} className={styles.xiongImg} />
            <div className={styles.detailMain}>
                <div className={styles.detailTitle}>
                    <p>{title}</p>
                </div>
                <div className={styles.content} dangerouslySetInnerHTML={{__html:content}}></div>
                <div className={styles.detailBtm}>
                    <p>更新时间：{ctime}</p>
                </div>


            </div>

        </div>)
    };
    render(){
        const{
            shopMessageData,
        }=this.props;
        let Dom;
        Dom=this.loadDom();
        if (shopMessageData){
            console.log(shopMessageData);
            Dom=this.loadEndDom(shopMessageData.data.detail);
        }

        return(
            <div className={styles.finderDetail}>
                <div className={styles.finderDetailHeader}>
                    <NavBar title="商城通知" onLeft={this.props.pop} backgroundColor="#fff" color="#666"/>
                </div>
                {
                    Dom
                }

            </div>
        )
    }
}
const messageDetailInit=(state,own)=>({
    shopMessageData: state.infodata.getIn(['GET_NOTICE_DETAIL', 'data']),
})
const messageDetailInitfn=(dispatch,own)=>({
    getNoticeDetail(id){
        dispatch({
            type:'GET_NOTICE_DETAIL',
            params:[
                id
            ]
        })
    },

    pop(){
        dispatch(goBack())
    }
})
export default connect(messageDetailInit,messageDetailInitfn)(messageDetail)