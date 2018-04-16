/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../../components/NavBar'
import Alert from '../../../../../components/Dialog/alert'
import {connect} from 'react-redux'
import {goBack,push,replace} from 'react-router-redux'
import utils from '../../../../../utils/utils'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            data: {},
            type:""
        }
    }
    componentWillMount(){
     //组件将要渲染时调用
    }
    componentDidMount(){
        if(!this.props.data){
            this.refs.alert.show({
                content: '请先选择你需要查看的聚点+',
                okText: '确定',
                okCallback: () => {this.props.pop()},
            })
        }else{
            this.props.getFillContractsList(this.props.data.invest_id,'F')
        }
        this.setState({
            data:this.props.data,
            type:this.props.data&&this.props.data.type||''
        })
     //组件渲染完成时调用
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
      this.props.clearData()
    }
    render(){
        const{
            pop,
            push,
            contractsFillList
            }=this.props;
        const{
            data,
            type
            }=this.state;
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  聚点+详情
              </NavBar>
               {data&&<div>
                   <div className={styles.header}>
                       <div className={styles.left}>{data.name}</div>
                       <div className={styles.right}>{type}</div>
                   </div>
                   <div className={styles.center}>
                       <div className={styles.num}>{data.plan_income}</div>
                       <div className={styles.title}>预期收益(元)</div>
                   </div>
                   <div className={styles.detailItem}>
                       <div className={styles.item}>
                           <div className={styles.left}>加入金额</div>
                           <div className={styles.right}>{data.invest_money}</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>预计年化利率</div>
                           <div className={styles.right}>{data.rate}%</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>锁定期限(月)</div>
                           <div className={styles.right}>{data.month}</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>产品起息日</div>
                           <div className={styles.right}>{utils.formatDate('yyyy-MM-dd',new Date(data.start_time*1000))}</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>锁定结束时间</div>
                           <div className={styles.right}>{utils.formatDate('yyyy-MM-dd',new Date(data.end_time*1000))}</div>
                       </div>
                   </div>
                   <div className={styles.linkItem}>
                       <div className={styles.item} onClick={()=>{push('/user/gatherProjects/'+data.invest_id+'/'+data.type)}}>
                           <div className={styles.left}>投资项目</div>
                           <span className={styles.arrow}></span>
                       </div>
                       <div className={styles.item}>
                           {contractsFillList&&contractsFillList.data.length!=0&&<div className={styles.left} onClick={()=>{this.props.push('/fillList/'+data.invest_id+'/F')}}>服务协议</div>
                           ||<div className={styles.left} onClick={()=>{this.props.push('/serviceContract/'+data.invest_id+'/1')}}>服务协议</div>}
                           <span className={styles.arrow}></span>
                       </div>
                   </div>
               </div>
               }
               <Alert ref="alert"> </Alert>
           </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
       data:state.regStore.getIn(["SAVE_GATHER_DATA",'data']),
       contractsFillList:state.infodata.getIn(['GET_FILL_CONTRACTS_LIST','data'])
    }
};
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    replace(url){
        dispatch(replace(url))
    },
    getFillContractsList(id,type){
        dispatch({
            type:'GET_FILL_CONTRACTS_LIST',
            params:[{product_id:id,product_type:type}]
        })
    },
    clearData(){
        dispatch({
            type: 'CLEAR_INFO_DATA',
            key: 'GET_FILL_CONTRACTS_LIST'
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)