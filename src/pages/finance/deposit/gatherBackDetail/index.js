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
import {goBack} from 'react-router-redux'
import utils from "../../../../utils/utils";
class Index extends Component{
    constructor(props){
        super(props);
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
        this.props.clean()
    }
    render(){
        const Height=document.body.clientHeight-44;
        const{
            listData,
            pending,
            end,
            pop
            }=this.props
        return(
           <div className={styles.body}>
              <NavBar onLeft={pop}>
                  还款详情
              </NavBar>
               {this.state.init&&<Scroll height={Height} fetch={()=>{this.props.gitData(this.props.params.id)}}
                       isLoading={pending}  distance={20} endType={end}
               >
                   {listData&&listData.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item}>
                           <div className={styles.item}>
                               <div className={styles.left}><p className={styles.time}> {utils.formatDate("yyyy-MM-dd",new Date(item.time*1000))}</p></div>
                               <div className={styles.right}>{item.status==0?"未还款":"正常还款"}</div>
                           </div>

                       </div>)
                   })}

               </Scroll>}
           </div>
        )
    }
}
const Datas=(state)=>{
    return{
        listData:state.listdata.getIn(['GATHER_BID_BACK_DETAIL','data']),
        pending:state.listdata.getIn(['GATHER_BID_BACK_DETAIL','pending']),
        end:state.listdata.getIn(['GATHER_BID_BACK_DETAIL','pageEnd'])
    }
}
const DispatchFn=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    gitData(id){
        dispatch({
           type:'GATHER_BID_BACK_DETAIL',
           params:[{id:id}]
        })
    },
    clean(){
      dispatch({
         type:'CLEAR_DATA',
         key:'GATHER_BID_BACK_DETAIL'

      })
    }
})
export default connect(Datas,DispatchFn)(Index)