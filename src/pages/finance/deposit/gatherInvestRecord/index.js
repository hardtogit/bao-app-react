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
                  出借记录
              </NavBar>
               {this.state.init&&<Scroll height={Height} fetch={()=>{this.props.gitData(this.props.params.id)}}
                       isLoading={pending}  distance={20} endType={end}
               >
                   {listData&&listData.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item}>
                           <div className={styles.item}>
                               <div className={styles.left}><p className={styles.name}>{item.userphone}</p><p className={styles.time}>{ new Date(item.add_time*1000).format("yyyy-MM-dd hh:mm:ss")}</p></div>
                               <div className={styles.right}>￥{item.money}</div>
                           </div>

                       </div>)
                   })}

               </Scroll>}
           </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        listData:state.listdata.getIn(['GATHER_INVEST_RECORD','data']),
        pending:state.listdata.getIn(['GATHER_INVEST_RECORD','pending']),
        end:state.listdata.getIn(['GATHER_INVEST_RECORD','pageEnd'])
    }
}
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    gitData(id){
        dispatch({
           type:'GATHER_INVEST_RECORD',
           params:[{id:id}]
        })
    },
    clean(){
        dispatch({
            type:'CLEAR_DATA',
            key:'GATHER_INVEST_RECORD'

        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)