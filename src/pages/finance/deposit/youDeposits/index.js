/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import Scroll from '../../../../components/scroll'
import {connect} from 'react-redux'
import {goBack, push} from 'react-router-redux'
class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            init:false
        }
    }
    componentDidMount(){
        this.setState({
            init:true
        })
    }
    componentWillUnmount(){
        this.props.clearData();
    }
    render(){
        const Height=document.body.clientHeight-108;
        const{
            data,
            pending,
            end,
            push,
            pop
            }=this.props;
        return(
           <div className={styles.body}>
              <NavBar onLeft={pop}>
                  标的详情
              </NavBar>
               <div className={styles.header}>
                   为保护发行人信息，仅展示部分产品匹配标的。具体匹配以实际匹配为准。出借优享+后可在个人中心中查看已购买项目的全部匹配记录。
               </div>
               {this.state.init&&
               <Scroll  height={Height} fetch={()=>{this.props.gitData(this.props.params.id)}}
                        isLoading={pending}  distance={20} endType={end}
               >
                   {data&&data.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item} onClick={()=>{push('/youBidDetail/'+item.edid)}}>
                           <div className={styles.item} style={{paddingTop:'12px'}}>
                               <div className={styles.left}>{item.borrow_name}</div>
                               <div className={styles.right}>{item.borrow_duration}个月</div>
                           </div>
                           <div className={styles.item} style={{paddingTop:'6px'}}>
                               <div className={styles.left}>{item.borrow_use}</div>
                               <div className={styles.right}>借款金额: <span className={styles.money}>{item.borrow_money}</span>元</div>
                           </div>
                       </div>)
                   })}

               </Scroll>
               }
           </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return({
        data:state.listdata.getIn(['YOU_BID_LIST','data']),
        pending:state.listdata.getIn(['YOU_BID_LIST','pending']),
        end:state.listdata.getIn(['YOU_BID_LIST','pageEnd'])
    })
}
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    gitData(id){
        dispatch({
           type:'YOU_BID_LIST',
           params:[{id:id}]
        })
    },
    push(url){
        dispatch(push(url))
    },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'YOU_BID_LIST'
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)