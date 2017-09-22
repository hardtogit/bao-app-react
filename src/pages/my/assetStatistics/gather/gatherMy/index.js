/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../../components/NavBar'
import Scroll from '../../../../../components/scroll'
import BaseButton from '../../../../../components/BaseButton'
import icon from '../../../../../assets/images/gather/icon-08.png'
import classNames from 'classnames';
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            index: 0,
            text:"立即购买"
        }
    }
    clientWidth=document.body.clientWidth;
    clientHeight=document.body.clientHeight;

    translateStyle={
        one:{transform:'translateX(0px)'},
        two:{transform:'translateX('+-this.clientWidth+'px)'},
        three:{transform:'translateX('+-this.clientWidth*2+'px)'}
        };
    componentWillUnmount(){
        this.props.clean()
    }
    componentDidMount(){
     //组件渲染完成时调用
        this.refs.tabs.style.width=this.clientWidth*3+'px';
        this.props.gitHeaderData();
    }
    componentWillReceiveProps({dataOne,dataTwo,dataThree}){
       if(dataOne&&dataTwo&&dataThree){
         
       }
    }
    change=(num,num1)=>{
        this.props.changeDc(num1);
        this.props.change(num);
    }

    render(){
        const{
            index,
            translateStyle
            }=this.state
        let myStyle;
        switch (index){
            case 0:myStyle=this.translateStyle.one;
                break;
            case 1:myStyle=this.translateStyle.two;
                break;
            case 2:myStyle=this.translateStyle.three;
                break
        }
        const{
            dataOne,
            pendingOne,
            endOne,
            dataTwo,
            pendingTwo,
            endTwo,
            dataThree,
            pendingThree,
            endThree,
            headerData,
            push,
            pop,
            Height,
            }=this.props;
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  我的聚点+
              </NavBar>
               <div className={styles.header}>
                 <div className={styles.left}>
                     <p className={styles.itemTitle}>待收本息（利息{headerData&&headerData.data.interest}）</p>
                     <p className={styles.itemContent}>{headerData&&headerData.data.leftRevenue} <span className={styles.icon}>￥</span></p>
                 </div>
                 <div className={styles.right}>
                     <p className={styles.itemTitle}>历史累积收益</p>
                     <p className={styles.itemContent}>{headerData&&headerData.data.historyRightRevenue} <span className={styles.icon}>￥</span></p>
                 </div>
               </div>
               <div className={styles.toggle}>
                   <div onClick={()=>{this.setState({index:0})}} className={classNames(styles.item,this.state.index==0?styles.active:'')}>持有中</div>
                   <div onClick={()=>{this.setState({index:1})}} className={classNames(styles.item,this.state.index==1?styles.active:'')}>退出中</div>
                   <div onClick={()=>{this.setState({index:2})}} className={classNames(styles.item,this.state.index==2?styles.active:'')}>已退出</div>
               </div>
               <div className={styles.overFlow}>
               <div ref="tabs"   className={classNames(styles.tabs,styles.clearFixed)} style={myStyle}>
                   <div className={styles.tab}>
                           <Scroll height={Height} fetch={()=>{this.props.gitGatherListOne({type:1})}}
                                   isLoading={pendingOne}  distance={20} endType={endOne}
                           >
                               {dataOne&&dataOne.map((item,i)=>{
                                   return(
                                       <div key={i} className={styles.box} onClick={()=>{push('/user/gatherMyDetail?type=持有中&data='+JSON.stringify(item))}}>
                                       <div  className={styles.data_list_item}>
                                       <div className={styles.item_header}>
                                           <div className={classNames(styles.name,styles.sub_item)} ><img src={icon} alt=""/> {item.name}</div>
                                           <div className={classNames(styles.sub_item,styles.conpon)}>
                                               {(()=>{
                                                   switch (item.coupon_type){
                                                       case 0: break;
                                                       case 1: return <span className={styles.pink}>{item.coupon_info}</span>;
                                                       break;
                                                       case 2:  return <span className={styles.cyan}>{item.coupon_info}</span>;
                                                       break;
                                                       default:break;
                                                   }
                                               })()}


                                           </div>
                                           <div className={classNames(styles.sub_item,styles.days)}>{item.remain_time}天</div>
                                       </div>
                                       <div className={styles.item_body}>
                                           <div className={classNames(styles.one,styles.item)}>
                                              <p className={styles.rate}>{item.plan_income}</p>
                                               <p className={styles.title}>预期收益(元)</p>
                                           </div>
                                           <div className={classNames(styles.two,styles.item)}>
                                               <p className={styles.rate}>{item.rate}%</p>
                                               <p className={styles.title}>预期年化利率</p>
                                           </div>
                                           <div className={classNames(styles.three,styles.item)}>
                                               <p className={styles.rate}>{item.invest_money}</p>
                                               <p className={styles.title}>加入金额(元)</p>
                                           </div>

                                       </div>
                                       </div>
                                       </div>)
                               })}

                           </Scroll>
                   </div>
                   <div className={styles.tab}>
                       <Scroll height={Height} fetch={()=>{this.props.gitGatherListThree({type:3})}}
                               isLoading={pendingThree}  distance={20} endType={endThree}
                       >
                           {dataThree&&dataThree.map((item,i)=>{
                               return(
                                   <div key={i} className={styles.box} onClick={()=>{push('/user/gatherMyDetail?type=退出中&data='+JSON.stringify(item))}}>
                                       <div  className={styles.data_list_item}>
                                           <div className={styles.item_header}>
                                               <div className={classNames(styles.name,styles.sub_item)} ><img src={icon} alt=""/> {item.name}</div>
                                               <div className={classNames(styles.sub_item,styles.conpon)}>
                                                   {(()=>{
                                                       switch (item.coupon_type){
                                                           case 0: break;
                                                           case 1: return <span className={styles.pink}>{item.coupon_info}</span>;
                                                               break;
                                                           case 2:  return <span className={styles.cyan}>{item.coupon_info}</span>;
                                                               break;
                                                           default:break;
                                                       }
                                                   })()}


                                               </div>
                                               <div className={classNames(styles.sub_item,styles.days)}></div>
                                           </div>
                                           <div className={styles.item_body}>
                                               <div className={classNames(styles.one,styles.item)}>
                                                   <p className={styles.rate}>{item.plan_income}</p>
                                                   <p className={styles.title}>预期收益(元)</p>
                                               </div>
                                               <div className={classNames(styles.two,styles.item)}>
                                                   <p className={styles.rate}>{item.rate}%</p>
                                                   <p className={styles.title}>预期年化利率</p>
                                               </div>
                                               <div className={classNames(styles.three,styles.item)}>
                                                   <p className={styles.rate}>{item.invest_money}</p>
                                                   <p className={styles.title}>加入金额(元)</p>
                                               </div>

                                           </div>
                                       </div>
                                   </div>)
                           })}

                       </Scroll>
                   </div>
                   <div className={styles.tab}>
                       <Scroll height={Height} fetch={()=>{this.props.gitGatherListTwo({type:2})}}
                               isLoading={pendingTwo}  distance={20} endType={endTwo}
                       >
                           {dataTwo&&dataTwo.map((item,i)=>{
                               return(
                                   <div key={i} className={styles.box} onClick={()=>{push('/user/gatherMyDetail?type=已退出&data='+JSON.stringify(item))}}>
                                       <div  className={styles.data_list_item}>
                                           <div className={styles.item_header}>
                                               <div className={classNames(styles.name,styles.sub_item)} ><img src={icon} alt=""/> {item.name}</div>
                                               <div className={classNames(styles.sub_item,styles.conpon)}>
                                                   {(()=>{
                                                       switch (item.coupon_type){
                                                           case 0: break;
                                                           case 1: return <span className={styles.pink}>{item.coupon_info}</span>;
                                                               break;
                                                           case 2:  return <span className={styles.cyan}>{item.coupon_info}</span>;
                                                               break;
                                                           default:break;
                                                       }
                                                   })()}


                                               </div>
                                               <div className={classNames(styles.sub_item,styles.days)}></div>
                                           </div>
                                           <div className={styles.item_body}>
                                               <div className={classNames(styles.one,styles.item)}>
                                                   <p className={styles.rate}>{item.plan_income}</p>
                                                   <p className={styles.title}>预期收益(元)</p>
                                               </div>
                                               <div className={classNames(styles.two,styles.item)}>
                                                   <p className={styles.rate}>{item.rate}%</p>
                                                   <p className={styles.title}>预期年化利率</p>
                                               </div>
                                               <div className={classNames(styles.three,styles.item)}>
                                                   <p className={styles.rate}>{item.invest_money}</p>
                                                   <p className={styles.title}>加入金额(元)</p>
                                               </div>

                                           </div>
                                       </div>
                                   </div>)
                           })}

                       </Scroll>

                   </div>
               </div>
                   </div>
               <div className={styles.button} onClick={()=>{this.change(0,0);this.props.push('/home/productIndex')}}>立即购买</div>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    pendingOne:state.listdata.getIn(['GATHER_MY_LIST_ONE','pending']),
    dataOne:state.listdata.getIn(['GATHER_MY_LIST_ONE','data']),
    endOne:state.listdata.getIn(['GATHER_MY_LIST_ONE','pageEnd']),
    pendingTwo:state.listdata.getIn(['GATHER_MY_LIST_TWO','pending']),
    dataTwo:state.listdata.getIn(['GATHER_MY_LIST_TWO','data']),
    endTwo:state.listdata.getIn(['GATHER_MY_LIST_TWO','pageEnd']),
    pendingThree:state.listdata.getIn(['GATHER_MY_LIST_THREE','pending']),
    dataThree:state.listdata.getIn(['GATHER_MY_LIST_THREE','data']),
    endThree:state.listdata.getIn(['GATHER_MY_LIST_THREE','pageEnd']),
    headerData:state.infodata.getIn(['GATHER_MY_HEADER','data']),
    Height:document.body.clientHeight-279
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    gitGatherListOne(type){
        dispatch({
            type:'GATHER_MY_LIST_ONE',
            params:[type]
        })
    },
    gitGatherListTwo(type){
        dispatch({
            type:'GATHER_MY_LIST_TWO',
            params:[type]
        })
    },
    gitGatherListThree(type){
        dispatch({
            type:'GATHER_MY_LIST_THREE',
            params:[type]
        })
    },
    gitHeaderData(){
        dispatch({
            type:'GATHER_MY_HEADER'
        })
    },
    change(num){
        dispatch({
            type:'PRODUCT_INDEX',
            index:num
        })
    },
    changeDc(num){
        dispatch({
            type:'PRODUCT_INDEX_PAGE',
            index:num
        })
    },
    clean(){
        dispatch({
            type:'CLEAR_DATA',
            key:'GATHER_MY_LIST_ONE'
        });
        dispatch({
            type:'CLEAR_DATA',
            key:'GATHER_MY_LIST_TWO'
        });
        dispatch({
            type:'CLEAR_DATA',
            key:'GATHER_MY_LIST_THREE'
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)