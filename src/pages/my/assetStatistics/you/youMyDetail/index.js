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
import classNames from 'classnames'
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
                content: '请先选择你需要查看的优享+',
                okText: '确定',
                okCallback: () => {this.props.pop()},
            })
        }else{
            this.props.getFillContractsList(this.props.data.invest_id,'I')
        }
        this.setState({
            data:this.props.data,
            type:this.props.data&&this.props.data.zh_type||''
        })
     //组件渲染完成时调用
    }
    componentWillReceiveProps(nextProps){
      const{quitData}=nextProps;
        if(quitData&&quitData.code==100){
            setTimeout( ()=>{ //除去动画时间
            this.refs.alert.show({
                content: '你已成功申请退出，退出成功后本息自动回款到余额',
                okText: '确定',
                okCallback: () => {this.props.pop()},
            })
            },1000)
        }else if(quitData&&quitData.code!=100){
           setTimeout( ()=>{ //除去动画时间
               this.refs.alert.show({
                   content: '申请退出失败，请重新尝试',
                   okText: '确定',
               })
           },1000)

        }
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
                  优享+详情
              </NavBar>
               {data&&<div>
                   <div className={styles.header}>
                       <div className={styles.left}>{data.name}</div>
                       <div className={styles.right}>{type}</div>
                   </div>
                   <div className={styles.center}>
                        <div className={styles.item}>
                            <div className={styles.num}>{data.actual_account}</div>
                            <div className={styles.title}>已到帐收益(元)</div>
                        </div>
                       <div className={styles.item}>
                           <div className={classNames([styles.num,styles.default]) }>{data.nper}</div>
                           <div className={styles.title}>已到账期数</div>
                       </div>
                   </div>
                   <div className={styles.detailItem}>
                       <div className={styles.item}>
                           <div className={styles.left}>加入金额</div>
                           <div className={styles.right}>{data.invest_money}</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>参考年回报率</div>
                           <div className={styles.right}>{data.rate}%</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>服务期限(月)</div>
                           <div className={styles.right}>{data.month}</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>参考回报(月)</div>
                           <div className={styles.right}>{data.plan_income}</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>产品起息日</div>
                           <div className={styles.right}>{utils.formatDate('yyyy-MM-dd',new Date(data.start_time*1000))}</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>产品到期日</div>
                           <div className={styles.right}>{utils.formatDate('yyyy-MM-dd',new Date(data.end_time*1000))}</div>
                       </div>
                   </div>
                   {type=="退出中"&&
                   <div className={styles.detailItem}>
                       <div className={styles.item}>
                           <div className={styles.left}>已转让债权金额（元）</div>
                           <div className={styles.right}>{data.successMoney}</div>
                       </div>
                       <div className={styles.item}>
                           <div className={styles.left}>待转让债权金额（元）</div>
                           <div className={styles.right}>{data.waitMoney}</div>
                       </div>
                   </div>
                   }

                   <div className={styles.linkItem}>
                       <div className={styles.item} onClick={()=>{push('/user/youProjects/'+data.invest_id+'/'+data.type)}}>
                           <div className={styles.left}>出借项目</div>
                           <span className={styles.arrow}></span>
                       </div>
                       <div className={styles.item}>
                           {contractsFillList&&contractsFillList.data.length!=0&&<div className={styles.left} onClick={()=>{this.props.push('/fillList/'+data.invest_id+'/I')}}>服务协议</div>
                           ||<div className={styles.left} onClick={()=>{this.refs.alert.show({content:'合同暂未生成',okText:'确定'})}}>项目协议</div>}
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
       data:state.regStore.getIn(["SAVE_YOU_DATA",'data']),
       contractsFillList:state.infodata.getIn(['GET_FILL_CONTRACTS_LIST','data']),
       quitData:state.infodata.getIn(['YOU_QUIT','data'])
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
    quit(id){
        dispatch({
          type:"YOU_QUIT",
          params:[id]
        })
    },
    clearData(){
        dispatch({
            type: 'CLEAR_INFO_DATA',
            key: 'YOU_QUIT'
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)