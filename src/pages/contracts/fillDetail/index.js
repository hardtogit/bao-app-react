/**
 * Created by xiangguo .
 * time:2018/4/16 0016.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {goBack,push}from 'react-router-redux'
import NavBar from '../../../components/NavBar'
import LoadingPage from '../../../components/pageLoading'
import styles from './index.less'
import noData from '../../../assets/images/noData.png'
class Index extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        const {
            params: {
                id
            },
            location: {
                query: {
                    type,
                }
            },
            getDetailByProductId,
            getDetailByContractId
        } = this.props;
        if(type){
            getDetailByProductId({borrow_id:id,product_type:type})
        }else{
            getDetailByContractId({id:id})
        }
    }
    renderDomOne=()=>{
        const {
            contextOne
        }=this.props;
        if(contextOne&&contextOne.code==300){
            return <div className={styles.empty}><img src={noData} alt=""/><p>{contextOne.msg}</p></div>
        }else{
            return contextOne&&<div className={styles.myStyle} dangerouslySetInnerHTML={{
                __html: contextOne.data.htmls
            }}/> || <LoadingPage></LoadingPage>
        }

    };
    renderDomTwo=()=>{
        const {
            contextTwo
        }=this.props;
        return contextTwo&&<div className={styles.myStyle} dangerouslySetInnerHTML={{
            __html: contextTwo.data.htmls
        }}/> || <LoadingPage></LoadingPage>
    };
    render(){
        const {
            location:{
               query:{
                   type,
                   name
               }
            },
            pop
        }=this.props;
        return(<div className={styles.container}>
            <NavBar onLeft={pop}>{name!=undefined?decodeURIComponent(name):"借款协议"}</NavBar>
            {type&&this.renderDomOne()||this.renderDomTwo()}
        </div>)

    }
}
const mapStateToProps=(state)=>({
    contextOne:state.infodata.getIn(['GET_DETAIL_BY_PRODUCT_ID','data']),
    contextTwo:state.infodata.getIn(['GET_DETAIL_BY_CONTRACT_ID','data']),
});
const mapDispatchToProps=(dispatch)=>({
    pop(){
        dispatch(goBack())
    },
    getDetailByProductId(data){
        dispatch({
            type:'GET_DETAIL_BY_PRODUCT_ID',
            params:[data]
        })
    },
    getDetailByContractId(data){
        dispatch({
            type:'GET_DETAIL_BY_CONTRACT_ID',
            params:[data]
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)