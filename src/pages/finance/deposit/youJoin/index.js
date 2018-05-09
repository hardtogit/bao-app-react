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
    componentDidMount(){
    }
    componentWillUnmount(){
        this.props.clearData();
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
                  加入记录
              </NavBar>
               <Scroll height={Height} fetch={()=>{this.props.gitData(this.props.params.id)}}
                       isLoading={pending}  distance={20} endType={end}
               >
                   {listData&&listData.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item}>
                           <div className={styles.item}>
                               <div className={styles.left}><p className={styles.name}>{item.username}</p><p className={styles.time}>{ new Date(item.add_time*1000).format("yyyy-MM-dd hh:mm:ss")}</p></div>
                               <div className={styles.right}>{item.invest_money}元</div>
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
        listData:state.listdata.getIn(['GATHER_JOIN','data']),
        pending:state.listdata.getIn(['GATHER_JOIN','pending']),
        end:state.listdata.getIn(['GATHER_JOIN','pageEnd'])
    }
}
const DispatchFn=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    gitData(id){
        dispatch({
           type:'GATHER_JOIN',
           params:[{id:id}]
        })
    },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'GATHER_JOIN'
        })
    }
})
export default connect(Datas,DispatchFn)(Index)