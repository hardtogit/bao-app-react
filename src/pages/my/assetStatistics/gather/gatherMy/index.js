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
import classNames from 'classnames';
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            index: 0
        }
    }
    clientWidth=document.body.clientWidth;
    clientHeight=document.body.clientHeight;
    componentWillMount(){
     //组件将要渲染时调用

    }
    componentDidMount(){
     //组件渲染完成时调用
        this.refs.tabs.style.width=this.clientWidth*3+'px';
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }

    render(){
        const{
            index
            }=this.state
        let translateStyle;
        switch (index){
            case 0:translateStyle={transform:'translateX(0px)'};
                break;
            case 1:translateStyle={transform:'translateX('+-this.clientWidth+'px)'};
                break;
            case 2:translateStyle={transform:'translateX('+-this.clientWidth*2+'px)'};
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
            pop,
            Height,
            }=this.props
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  我的聚点+
              </NavBar>
               <div className={styles.header}>
                 <div className={styles.left}>
                     <p className={styles.itemTitle}>待收本息（利息500.00）</p>
                     <p className={styles.itemContent}>116541.00 <span className={styles.icon}>￥</span></p>
                 </div>
                 <div className={styles.right}>
                     <p className={styles.itemTitle}>历史累积收益</p>
                     <p className={styles.itemContent}>116541.00 <span className={styles.icon}>￥</span></p>
                 </div>
               </div>
               <div className={styles.toggle}>
                   <div onClick={()=>{this.setState({index:0})}} className={classNames(styles.item,this.state.index==0?styles.active:'')}>持有中</div>
                   <div onClick={()=>{this.setState({index:1})}} className={classNames(styles.item,this.state.index==1?styles.active:'')}>退出中</div>
                   <div onClick={()=>{this.setState({index:2})}} className={classNames(styles.item,this.state.index==2?styles.active:'')}>已退出</div>
               </div>
               <div className={styles.overFlow}>
               <div ref="tabs" className={classNames(styles.tabs,styles.clearFixed)} style={translateStyle}>
                   <div className={styles.tab}>
                           <Scroll height={Height} fetch={()=>{this.props.gitGatherListOne({type:1})}}
                                   isLoading={pendingOne}  distance={20} endType={endOne}
                           >
                               {dataOne&&dataOne.map((item,i)=>{
                                   return( 	<div key={i} className={styles.data_list_item}>
                                       <div className={styles.item_header}>
                                           <div className={classNames(styles.name,styles.sub_item)} >{item.name}</div><div className={classNames(styles.sub_item,styles.conpon)}>{item.coupon_info}</div><div className={classNames(styles.sub_item,styles.days)}>{item.remain_time}天</div>
                                       </div>
                                       <div className={styles.item_body}>

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
                               return( 	<div key={i} className={styles.data_list_item}>
                                   sss

                               </div>)
                           })}

                       </Scroll>
                   </div>
                   <div className={styles.tab}>
                       <Scroll height={Height} fetch={()=>{this.props.gitGatherListThree({type:3})}}
                               isLoading={pendingThree}  distance={20} endType={endThree}
                       >
                           {dataThree&&dataThree.map((item,i)=>{
                               return( 	<div key={i} className={styles.data_list_item}>
                                   sss

                               </div>)
                           })}

                       </Scroll>

                   </div>
               </div>
                   </div>
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
    Height:document.body.clientHeight-235
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
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
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)