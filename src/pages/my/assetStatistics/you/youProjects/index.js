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
import Fetch from '../../../../../request/fetch'
class Index extends Component{
    componentDidMount(){
    }
    componentWillUnmount(){
        this.props.clean()
    }
    goContract(id){
        Fetch(`api/contract/supervisedetail`,'GET',{borrow_id:id,product_type:'G'}).then((result)=>{
                    if(result.response.data.length!=0||result.response.code==300){
                        this.props.push("/fillDetail/"+id+"?type=G")
                    }else{
                        this.props.push(`/borrowContract/${id}/1`)
                    }
        })
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
                  投资项目
              </NavBar>
               <Scroll height={Height} fetch={()=>{this.props.gitData(this.props.params.id,this.props.params.type)}}
                       isLoading={pending}  distance={20} endType={end}
               >
                   {listData&&listData.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item}>
                           <div className={styles.item}>
                               <div className={styles.left}>{item.borrow_name}</div>
                               <div className={styles.right} onClick={()=>{this.goContract(item.borrow_id)}}>查看协议</div>
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
const mapStateToProps=(state)=>{
    return{
        listData:state.listdata.getIn(['YOU_PROJECTS','data']),
        pending:state.listdata.getIn(['YOU_PROJECTS','pending']),
        end:state.listdata.getIn(['YOU_PROJECTS','pageEnd']),
    }
}
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    gitData(id,type){
        dispatch({
           type:'YOU_PROJECTS',
           params:[{id:id,type:type}]
        })
    },
    clean(){
        dispatch({
            type:'CLEAR_DATA',
            key:'YOU_PROJECTS'
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)