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
import nullImg from "../../../../../assets/images/record.png";
import Alert from '../../../../../components/Dialog/alert'
import {goBack,push} from 'react-router-redux'
class Item extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {
            isOpen: false
        }
    }
    handleClick=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    };
    render(){
        const {
            item
        }=this.props;
        return(<div  className={cs([styles.box,this.state.isOpen?"":styles.hidden])} onClick={this.handleClick}>
            <div className={styles.cashContent}>
                <div className={styles.left}>
                    <ul className={styles.cashUl}>
                        <li className={styles.text}>充值金额  {item.access_sys=='platform'&&<span className={styles.plat}>托管</span>||<span className={styles.store}>存管</span> }   </li>
                        <li className={styles.money}>￥{item.pnmoney} </li>
                        <li className={styles.bankName}><span className={styles.time}>手续费：</span>  {item.pnfee}</li>
                        <li className={styles.bankName}> <span className={styles.time}>充值方式：</span>  {item.pnoffbank}</li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <div className={styles.status}>
                        {(()=>{
                            switch (parseInt(item.pnstatus)){
                                case 0:
                                    return <div className={styles.statusText}><span className={styles.orange}>充值未完成</span> <div className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(item.pnaddtime*1000))} </div></div>
                                case 1:
                                    return <div className={styles.statusText}><span className={styles.blue}>充值成功</span><div className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(item.pnaddtime*1000))} </div></div>;
                                    break;
                                case 2:
                                    return <div className={styles.statusText}><span className={styles.blue}>签名不符</span><div className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(item.pnaddtime*1000))} </div></div>;
                                    break;
                                case 3:
                                    return <div className={styles.statusText}><span className={styles.red}>充值失败</span><div className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(item.pnaddtime*1000))} </div></div>;
                                    break;
                                case 4:
                                    return <div className={styles.statusText}><span className={styles.blue}>自己撤销</span><div className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(item.pnaddtime*1000))} </div></div>;
                                    break;
                                default:
                                    return <div className={styles.statusText}><span className={styles.blue}>充值失败</span><div className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(item.pnaddtime*1000))} </div></div>;
                                    break
                            }
                        })()}
                    </div>
                </div>
                <Alert ref="alert"></Alert>
            </div>
        </div>)
    }


}
class Box extends Component{
    constructor(props) {//构造器
        super(props);
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
                       <Item key={i} item={item}  cancelFn={this.props.cancelFn}></Item>
                     )
                 })
             }
         </div>)
    }
}


class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {
            filterShow:false,
            flag:3
        }
    }
    static defaultProps = {//设置初始props
    };
    filters=()=>{
        this.setState({
            filterShow:!this.state.filterShow
        })
    };
    componentDidMount(){
        const{params:{
            type
        }}=this.props;

        this.props.getList({type:type})
    }
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
                    this.props.getList({type:this.state.flag});
                }
            });
        }else if(cancelData&&cancelData.code!=100){
            this.props.clearCancelData()
            this.refs.tip.show({
                content:"撤销失败",
                okText:"确定",
                okCallback:()=>{
                   // this.props.getList({type:this.state.flag});
                }
            });
        }
    }
    cancelCashFn=(id,from)=>{
        this.refs.alert.show({
            content:"确定取消该提现申请？",
            okText:"确定",
            cancel:"取消",
            okCallback:()=>{
                if(from=="platform"){
                    this.props.cancelCash({txid:id,access_sys:"platform"})
                }else{
                    this.props.cancelCash({txid:id})
                }

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
            pop,data,pending
        }=this.props;
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop} >
                    充值明细
                </NavBar>
                <div className={cs(styles.filter,this.state.filterShow?styles.active:"hide")}>
                    <ul>
                        <li onClick={()=>{this.choose(3)}} className={cs(this.state.flag===3?styles.current:"")}>全部数据</li>
                        <li onClick={()=>{this.choose(1)}} className={cs(this.state.flag===1?styles.current:"")}>存管数据</li>
                        <li onClick={()=>{this.choose(2)}} className={cs(this.state.flag==2?styles.current:"")}>托管数据</li>
                    </ul>
                </div>
                <div className={styles.content}>
                    {(()=>{
                      if(!pending){
                          if(data&&data.code==100){
                              if(data.data.length===0){
                                  return <div><img className={styles.nodata} src={nullImg} alt=""/></div>
                              }else{
                                  let BoxList=[];
                                  for (let label in data.data){
                                      console.log('s')
                                      BoxList.push(<Box key={label} label={label} data={data.data[label]} cancelFn={this.cancelCashFn} ></Box>)
                                  }
                                  return BoxList;
                              }
                          }
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
    data:state.infodata.getIn(['GET_RECHARGE_LOG','data']),
    cancelData:state.infodata.getIn(['CANCEL_CASH','data']),
    pending:state.infodata.getIn(['GET_RECHARGE_LOG','pending'])
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
            type:'GET_RECHARGE_LOG',
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