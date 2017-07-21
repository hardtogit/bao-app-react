/**
 * Created by wangdongfang on 17/2/7.
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import Scroll from '../../../../components/scroll'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    componentDidMount(){
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
                  标的详情
              </NavBar>
               <div className={styles.header}>
                   为保护借款人信息，仅展示部分商品匹配标的。投资聚点+后可在个人中心中查看已购买项目的匹配记录。
               </div>
               <Scroll height={Height} fetch={()=>{this.props.gitData(this.props.params.id)}}
                       isLoading={pending}  distance={20} endType={end}
               >
                   {listData&&listData.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item}>
                           <div className={styles.list_left}>
                               <ul>
                                   <li className={styles.from}>{item.type==3?'每日佣金':item.userphone}</li>
                                   <li className={styles.date}>{  new Date(item.created*1000).format("yyyy-MM-dd hh:mm:ss")  }</li>
                                   <li className={styles.mark}>备注：{item.remarks}</li>
                               </ul>
                           </div>
                           <div className={styles.list_right}>
                               +{item.money}
                           </div>
                       </div>)
                   })}

               </Scroll>
           </div>
        )
    }
}
const Datas=(state)=>({
    listData:state.listdata.getIn(['GATHER_BID_LIST','data']),
    pending:state.listdata.getIn(['GATHER_BID_LIST','pending']),
    end:state.listdata.getIn(['GATHER_BID_LIST','pageEnd'])

})
const DispatchFn=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    gitData(id){
        dispatch({
           type:'GATHER_BID_LIST',
           id:id
        })
    }
})
export default connect(Datas,DispatchFn)(Index)