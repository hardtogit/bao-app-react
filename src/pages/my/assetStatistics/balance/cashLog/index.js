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
import DatePicker from '../../../../../components/DatePicker'
import {goBack,push} from 'react-router-redux'
class Item extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    handleClick=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    };
    dateLine=(status,startTime,txdoing_time,endTime)=>{
        switch(parseInt(status)) {
            case 0:
                return "";
                break;
            case 1:return(<div className={styles.lineContainer}>
                            <ul className={styles.lineUl}>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>提交申请</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(startTime*1000))}</p>
                                </li>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>处理中</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(endTime*1000))}</p>
                                </li>
                            </ul>
                         </div>);
                break;
            case 2:return(<div className={styles.lineContainer}>
                            <ul className={styles.lineUl}>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>提交申请</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(startTime*1000))}</p>
                                </li>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>信息核实成功</p>
                                    <p className={styles.time} style={{height:"13px"}}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(txdoing_time*1000))}</p>
                                </li>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>处理成功</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(endTime*1000))}</p>
                                </li>
                            </ul>
                         </div>);
                 break;
            case 3:return(<div className={styles.lineContainer}>
                            <ul className={styles.lineUl}>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>提交申请</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(startTime*1000))}</p>
                                </li>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={cs([styles.stepName,styles.red])}>审核不通过</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(endTime*1000))}</p>
                                </li>
                            </ul>
                          </div>);
                 break;
            case 4:return(<div className={styles.lineContainer}>
                            <ul className={styles.lineUl}>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>提交申请</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(startTime*1000))}</p>
                                </li>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>已取消</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(endTime*1000))}</p>
                                </li>
                            </ul>
                         </div>);
                 break;
            case 5:return(<div className={styles.lineContainer}>
                            <ul className={styles.lineUl}>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>提交申请</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(startTime*1000))}</p>
                                </li>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={styles.stepName}>信息核实成功</p>
                                    <p className={styles.time} style={{height:"13px"}}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(txdoing_time*1000))}</p>
                                </li>
                                <li className={styles.lineLi}>
                                    <span className={styles.point}></span>
                                    <p className={cs([styles.stepName,styles.red])}>银行处理失败</p>
                                    <p className={styles.time}>{utils.formatDate('yyyy-MM-dd hh:mm:ss',new Date(endTime*1000))}</p>
                                </li>
                            </ul>
                        </div>);
                 break;
            default:return "";
                 break;
        }
    };
    render(){
        const {
            item
        }=this.props;
        return(<div  className={cs([styles.box,this.state.isOpen?"":styles.hidden])} onClick={this.handleClick}>
            <div className={styles.cashContent}>
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
                            switch (parseInt(item.txwithdrawstatus)){
                                case 0:
                                    return <div className={styles.statusText}><span className={styles.orange}>申请中</span><span className={styles.cancel} onClick={(event)=>{event.stopPropagation();
                                    if(item.access_sys=='platform'){
                                        this.props.cancelFn(item.txid,"platform")
                                    }else{
                                        this.props.cancelFn(item.txid,"")
                                    }

                                     }}>撤销</span></div>
                                case 1:
                                    return <div className={styles.statusText}><span className={styles.blue}>处理中</span></div>;
                                    break;
                                case 2:
                                    return <div className={styles.statusText}><span className={styles.blue}>处理成功</span></div>;
                                    break;
                                case 3:
                                    return <div className={styles.statusText}><span className={styles.red}>审核不通过</span></div>;
                                    break;
                                case 4:
                                    return <div className={styles.statusText}><span className={styles.blue}>已取消</span></div>;
                                    break;
                                case 5:
                                    return <div className={styles.statusText}><span className={styles.red}>银行处理失败</span></div>;
                                default:
                                    return <div className={styles.statusText}><span className={styles.blue}>提现失败</span></div>;
                                    break
                            }
                        })()}
                    </div>
                </div>
                <Alert ref="alert"></Alert>
            </div>
            {this.dateLine(item.txwithdrawstatus,item.txaddtime,item.txdoing_time,item.txdealtime)}
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
            flag:3,
            date:''
        }
    }
    static defaultProps = {//设置初始props
    };
    filters=()=>{
        this.refs.datePicker.toggle();
    };
    confirm=(data)=>{
        this.setState({
            date:data.year+"年"+data.month+"月"
        })
    }
    componentDidMount(){
        const{params:{
            type
        }}=this.props;

        this.props.getList({type:type,})
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
    render(){
        const{
            pop,data,pending
        }=this.props;
        let dealData={};
        const{
            date
        }=this.state;
        if(data&&date){
            if(data.data[date]){
                dealData={
                    [date]:data.data[date]
                }
            }else{
                dealData=[]
            }
        }else if(data){
            dealData=data.data
        }
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop} rightNode={<div>筛选</div>} onRight={this.filters} >
                    提现明细
                </NavBar>
                <DatePicker ref="datePicker" labels="year,month"
                            onConfirm={this.confirm} >
                </DatePicker>
                <div className={styles.content}>
                    {(()=>{
                      if(!pending){
                          if(dealData){
                              if(dealData.length===0){
                                  return <div><img className={styles.nodata} src={nullImg} alt=""/></div>
                              }else{
                                  let BoxList=[];
                                  for (let label in dealData){
                                      BoxList.push(<Box key={label} label={label} data={dealData[label]} cancelFn={this.cancelCashFn} ></Box>)
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
    data:state.infodata.getIn(['GET_CASH_LOG','data']),
    cancelData:state.infodata.getIn(['CANCEL_CASH','data']),
    pending:state.infodata.getIn(['GET_CASH_LOG','pending'])
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