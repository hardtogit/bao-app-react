/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import classNames from 'classnames'
import NavBar from '../../../../../components/NavBar'
import Scroll from '../../../../../components/scroll'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    componentDidMount(){
    }
    componentWillUnmount(){
        this.props.clean()
        console.log('ds')
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
            push,
            pop
            }=this.props
        return(
           <div className={styles.body}>
              <NavBar onLeft={pop}>
                  投资项目
              </NavBar>
               <Scroll height={Height} fetch={()=>{this.props.gitData(this.props.params.id,this.props.params.type)}}
                       isLoading={pending}  distance={20} endType={end}
               >
                   {listData&&listData.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item}>
                           <div className={styles.item}>
                               <div className={styles.left}>{item.borrow_name}</div>
                               <div className={styles.right} onClick={()=>{push(`/borrowContract/${item.borrow_id}/1`)}}>查看协议</div>
                           </div>
                           <div className={styles.item}>
                               <div className={styles.left}>投资金额(元)</div>
                               <div className={classNames(styles.right,styles.money)}>{item.money}</div>
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
        listData:state.listdata.getIn(['GATHER_PROJECTS','data']),
        pending:state.listdata.getIn(['GATHER_PROJECTS','pending']),
        end:state.listdata.getIn(['GATHER_PROJECTS','pageEnd'])
    }
}
const DispatchFn=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    gitData(id,type){
        dispatch({
           type:'GATHER_PROJECTS',
           params:[{id:id,type:type}]
        })
    },
    clean(){
        dispatch({
            type:'CLEAR_DATA',
            key:'GATHER_PROJECTS'
        })
    }
})
export default connect(Datas,DispatchFn)(Index)