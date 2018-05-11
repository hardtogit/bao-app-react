import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import styles from './index.less'
import arrow2 from '../../../../../assets/images/arrow2.png'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import {Link} from 'react-router'
import Loading from '../../../../../components/pageLoading'

class Index extends Component{
    componentWillMount(){
       const id=this.props.params.id;
       const access_sys=this.props.location.query.access_sys;
       if(access_sys){
           this.props.getInfo(id,access_sys);
           this.props.getDetailByProductId({borrow_id:id,product_type:'A'})
       }else{
           this.props.getInfo(id);
           this.props.getDetailByProductId({borrow_id:id,product_type:'D'})
       }
    }
    componentWillUnmount(){
        this.props.clearData()
    }
    loadDom=()=>{
        return(<Loading/>)
    }
    loadEndDom=()=>{
        const {
            infoData:{
                data
            },
            params:{
                id
            },
            location:{
                query:{
                    access_sys
                }
            },
            contractData
        }=this.props;
        let url;
        if(access_sys){
           if((contractData&&contractData.data.length!=0)||(contractData&&contractData.code==300)){
               url='/fillDetail/'+id+'?type=A'
           }else{
               url="/user/securityPlan/"+id+"?access_sys=platform"
           }
        }else{
            if((contractData&&contractData.data.length!=0)||(contractData&&contractData.code==300)){
                url='/fillDetail/'+id+'?type=D'
            }else{
                url="/user/securityPlan/"+id
            }
        }
        const {name,total,rate,term,type,interest_start_time,interest_end_time,repayment}=data;
        return(<div className={styles.content}>
            <div className={styles.messageBox}>
                <div className={styles.title}>
                    产品信息
                </div>
                <ul className={styles.messageUl}>
                    <li>
                     <span className={styles.messageName}>
                         产品名称
                     </span>
                        <span className={styles.productName}>
                            {name}
                        </span>
                    </li>
                    <li>
                     <span className={styles.messageName}>
                         借款总额
                     </span>
                        <span className={styles.productName}>
                            {total}
                        </span>
                    </li>
                    <li>
                     <span className={styles.messageName}>
                         参考年回报率
                     </span>
                        <span className={styles.productName}>
                            {rate}%
                        </span>
                    </li>
                    <li>
                     <span className={styles.messageName}>
                        产品期限
                     </span>
                        <span className={styles.productName}>
                            {term}个月
                        </span>
                    </li>
                    <li>
                     <span className={styles.messageName}>
                         产品到期日
                     </span>
                        <span className={styles.productName}>
                            {interest_end_time}
                        </span>
                    </li>
                    <li>
                     <span className={styles.messageName}>
                         产品起息日
                     </span>
                        <span className={styles.productName}>
                            {interest_start_time}
                        </span>
                    </li>
                    <li>
                     <span className={styles.messageName}>
                         产品类型
                     </span>
                        <span className={styles.productName}>
                                {
                                    (()=>{
                                        switch (type){
                                            case 1:
                                                return '信用';
                                                break;
                                            case 5:
                                                return  '抵押';
                                                break;
                                            default:return '抵押'
                                        }
                                    })()
                                }
                        </span>
                    </li>
                </ul>
            </div>
            <div className={styles.modeBox}>
                 <span>
                    还款方式
                  </span>
                <span className={styles.modeText}>
                    {repayment}
                    </span>
            </div>
            <Link to={url}>
                <div className={styles.modeBox}>
                 <span>
                   产品合同
                  </span>
                    <span className={styles.modeText}>
                       <img src={arrow2}/>
                    </span>
                </div>
            </Link>
        </div>)
    }
    render(){
        const {
            infoData,
            pop
        }=this.props;
        let Dom=this.loadDom();
        if (infoData){
            Dom=this.loadEndDom()
        }
        return(<div className={styles.body}>
            <NavBar onLeft={pop}>
                产品详情
            </NavBar>
            {
                Dom
            }
        </div>)
    }
}
const datas=(state)=>({
      infoData:state.infodata.getIn(['DIRECT_INVEST_PRODUCT_INFO','data']),
      contractData:state.infodata.getIn(['GET_DETAIL_BY_PRODUCT_ID','data'])
})
const dispatchFn=(dispatch)=>({
       getInfo(id,access_sys){
           dispatch({
               type:'DIRECT_INVEST_PRODUCT_INFO',
               params:[id,access_sys]
           })
       },
    pop(){
        dispatch(goBack())
    },
    getDetailByProductId(data){
        dispatch({
            type:'GET_DETAIL_BY_PRODUCT_ID',
            params:[data]
        })
    },
    clearData(){
        dispatch({
           type:'CLEAR_INFO_DATA',
            key:'DIRECT_INVEST_PRODUCT_INFO'
        })
    }
})
export default connect(datas,dispatchFn)(Index)