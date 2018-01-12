/**
 * Created by xiangguo .
 * time:2018/1/10 0010.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import cs from 'classnames'
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
    render(){
        const {
            label,
            data,
        }=this.props;
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
                                             return <div className={styles.statusText}><span className={styles.orange}>申请中</span><span className={styles.cancel} onClick={()=>{this.props.cancelFn(item.txid)}}>撤销</span></div>
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
                        <Alert ref="alert"></Alert>
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
            filterShow:false,
            flag:""
        }
    }
    static defaultProps = {//设置初始props
    };
    filters=()=>{
        this.setState({
            filterShow:!this.state.filterShow
        })
    };
    componentWillReceiveProps(nextProps){
       const {
           cancelData
       }=nextProps;
        if(cancelData&&cancelData.code==100){
            this.props.clearCancelData()
            this.refs.tip.show({
                content:"撤销成功",
                okText:"确定",
                okCallback:()=>{
                    this.props.getList();
                }
            });
        }else if(cancelData&&cancelData.code!=100){
            this.props.clearCancelData()
            this.refs.tip.show({
                content:"撤销失败",
                okText:"确定",
                okCallback:()=>{
                    this.props.getList();
                }
            });
        }
    }
    cancelCashFn=(id)=>{
        this.refs.alert.show({
            content:"确定取消该提现申请？",
            okText:"确定",
            cancel:"取消",
            okCallback:()=>{
                this.props.cancelCash({txid:id})
            }
        });
    };
    choose=(type)=>{
        this.setState({
            flag:type
        });
        this.props.getList({type:type})
        this.filters();
    };
    render(){
        const{
            pop,data
        }=this.props;
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop} rightNode={<div onClick={this.filters}>筛选</div>}>
                    提现明细
                </NavBar>
                <div className={cs(styles.filter,this.state.filterShow?styles.active:"hide")}>
                    <ul>
                        <li onClick={()=>{this.choose('')}} className={cs(this.state.flag===""?styles.current:"")}>全部</li>
                        <li onClick={()=>{this.choose(0)}} className={cs(this.state.flag===0?styles.current:"")}>申请中</li>
                        <li onClick={()=>{this.choose(1)}} className={cs(this.state.flag==1?styles.current:"")}>处理中</li>
                        <li onClick={()=>{this.choose(2)}} className={cs(this.state.flag==2?styles.current:"")}>处理成功</li>
                        <li onClick={()=>{this.choose(3)}} className={cs(this.state.flag==3?styles.current:"")}>审核不通过</li>
                        <li onClick={()=>{this.choose(4)}} className={cs(this.state.flag==4?styles.current:"")}>会员自行取消</li>
                        <li onClick={()=>{this.choose(5)}} className={cs(this.state.flag==5?styles.current:"")}>银行处理失败</li>
                    </ul>
                </div>
                <div className={styles.content}>
                    {(()=>{
                      if(data&&data.code==100){
                          let BoxList=[];
                          for (let label in data.data){
                              BoxList.push(<Box key={label} label={label} data={data.data[label]} cancelFn={this.cancelCashFn} ></Box>)
                          }
                          return BoxList;
                      }else{
                          return <LoadingPage></LoadingPage>
                      }
                    })()}
                </div>
                <Alert ref="alert"></Alert>
                <Alert ref="tip"></Alert>
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