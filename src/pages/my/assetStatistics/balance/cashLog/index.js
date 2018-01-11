/**
 * Created by xiangguo .
 * time:2018/1/10 0010.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../../components/NavBar'
import LoadingPage from '../../../../../components/pageLoading'
import utils from '../../../../../utils/utils'
import {connect} from 'react-redux'
import Alert from '../../../../../components/Dialog/alert'
import {goBack,push} from 'react-router-redux'
class Box extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false
        }
    }
    handleCancel=(id)=>{
        this.props.parent.refs.alert.show({
                content:"确定取消该提现申请？",
                okText:"确定",
                cancel:"取消",
                okCallback:()=>{
                    this.props.cancelFn({txid:id})
                }
            })
    };
    componentWillReceiveProps(nextProps){
        alert('s')
        const {
            cancelData
        }=nextProps
        if(cancelData){
            if(cancelData.code==100){
                // this.props.clearCancelData();
                this.props.parent.refs.alert.show({
                    content:"撤销成功",
                    okText:"确定",
                    okCallback:()=>{
                        // this.props.getList();
                    }
                })
            }else{
                // this.props.clearCancelData();
                this.props.parent.refs.alert.show({
                    content:"撤销失败",
                    okText:"确定",
                    okCallback:()=>{
                        // this.props.getList();
                    }
                })
            }
        }
    }
    render(){
        const {
            label,
            data,
        }=this.props;
        console.log(data)
     return(
         <div className={styles.cashBox}>
         <div className={styles.month}>{label}</div>
             {
                 data.map((item,i)=>{
                   return(
                     <div key={i} className={styles.cashContent}>
                         <div className={styles.left}>
                             <ul className={styles.cashUl}>
                                 <li className={styles.text}>提现金额  {item.access_sys=='platform'&&<span className={styles.plat}>托管</span>||<span className={styles.store}>存管</span> }   </li>
                                 <li className={styles.money}>￥{item.txwithdrawmoney} </li>
                                 <li className={styles.bankName}>{item.bankName} (尾号{item.bank_card.substr(item.bank_card.length-4)})</li>
                                 <li className={styles.time}>申请时间：{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(item.txaddtime*1000))}</li>
                             </ul>
                         </div>
                         <div className={styles.right}>
                             <div className={styles.status}>
                                 {(()=>{
                                     switch (item.txwithdrawstatus){
                                         case 0:
                                             return <div className={styles.statusText}><span className={styles.orange}>申请中</span><span className={styles.cancel} onClick={()=>{this.handleCancel(item.txid)}}>撤销</span></div>
                                         case 1:
                                             return <div className={styles.statusText}><span className={styles.blue}>处理中</span></div>;
                                             break;
                                         case 2:
                                             return <div className={styles.statusText}><span className={styles.blue}>处理成功</span></div>;;
                                             break;
                                         case 3:
                                             return <div className={styles.statusText}><span className={styles.red}>审核不通过</span></div>;;
                                             break;
                                         case 4:
                                             return <div className={styles.statusText}><span className={styles.blue}>已取消</span></div>;;
                                             break;
                                         case 5:
                                             return <div className={styles.statusText}><span className={styles.red}>银行处理失败</span></div>;;
                                         default:
                                             return <div className={styles.statusText}><span className={styles.blue}>提现失败</span></div>;
                                             break
                                     }
                                 })()}
                             </div>
                         </div>

                     </div>)
                 })
             }
         </div>)
    }
}


class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
        this.props.getList();
    }
    componentDidMount(){
        //组件渲染完成时调用
    }
    componentWillUnmount(){
        //组件将要被移除时调用
    }

    render(){
        const{
            pop,data,cancelCash,cancelData
        }=this.props;
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop} rightNode={<div>筛选</div>}>
                    提现明细
                </NavBar>
                <div className={styles.content}>
                    {(()=>{
                      if(data&&data.code==100){
                          let BoxList=[];
                          for (let label in data.data){
                              BoxList.push(<Box key={label} label={label} data={data.data[label]} cancelFn={cancelCash} parent={this} cancelData={cancelData}></Box>)
                          }
                          return BoxList;
                      }else{
                          return <LoadingPage></LoadingPage>
                      }
                    })()}
                </div>
                <Alert ref="alert"></Alert>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    data:state.infodata.getIn(['GET_CASH_LOG','data']),
    cancelData:state.infodata.getIn(['CANCEL_CASH','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getList(data){
        dispatch({
            type:'GET_CASH_LOG',
            params:[data]
        })
    },
    cancelCash(data){
        dispatch({
            type:'CANCEL_CASH',
            params:[data]
        })
    },
    clearCancelData(){
        dispatch({
            type:"CLEAR_INFO_DATA",
            key:"CANCEL_CASH"
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)