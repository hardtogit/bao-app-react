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
class Index extends Component{

    componentWillUnmount(){
        this.props.clean()
    }
    render(){
        Date.prototype.format = function(fmt) {
            var o = {
                "M+" : this.getMonth()+1,                 //月份
                "d+" : this.getDate(),                    //日
                "h+" : this.getHours(),                   //小时
                "m+" : this.getMinutes(),                 //分
                "s+" : this.getSeconds(),                 //秒
                "q+" : Math.floor((this.getMonth()+3)/3), //季度
                "S"  : this.getMilliseconds()             //毫秒
            };
            if(/(y+)/.test(fmt)) {
                fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
            }
            for(var k in o) {
                if(new RegExp("("+ k +")").test(fmt)){
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                }
            }
            return fmt;
        };
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
               <Scroll height={Height} fetch={()=>{this.props.gitData(this.props.params.id)}}
                       isLoading={pending}  distance={20} endType={end}
               >
                   {listData&&listData.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item}>
                           <div className={styles.item}>
                               <div className={styles.left}><p className={styles.time}>{ new Date(item.time*1000).format("yyyy-MM-dd")}</p></div>
                               <div className={styles.right}>{item.status==0?"未还款":"正常还款"}</div>
                           </div>

                       </div>)
                   })}

               </Scroll>
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