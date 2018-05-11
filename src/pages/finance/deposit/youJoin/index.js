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
import utils from '../../../../utils/utils'
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
        this.props.clearData();
    }
    render(){
        const Height=document.body.clientHeight-44;
        const{
            listData,
            pending,
            end,
            pop
            }=this.props;
        return(
           <div className={styles.body}>
              <NavBar onLeft={pop}>
                  加入记录
              </NavBar>
               {this.state.init&&
               <Scroll height={Height} fetch={()=>{this.props.gitData(this.props.params.id)}}
                       isLoading={pending}  distance={20} endType={end}
               >
                   {listData&&listData.map((item,i)=>{
                       return( 	<div key={i} className={styles.data_list_item}>
                           <div className={styles.item}>
                               <div className={styles.left}><p className={styles.name}>{item.username}</p><p className={styles.time}>{utils.formatDate("yyyy-MM-dd hh:mm:ss",new Date(item.add_time*1000))}</p></div>
                               <div className={styles.right}>{item.invest_money}元</div>
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
    return{
        listData:state.listdata.getIn(['YOU_JOIN','data']),
        pending:state.listdata.getIn(['YOU_JOIN','pending']),
        end:state.listdata.getIn(['YOU_JOIN','pageEnd'])
    }
}
const mapDispatchToProps=(dispatch)=>({
    pop(){
         dispatch(goBack())
    },
    gitData(id){
        dispatch({
           type:'YOU_JOIN',
           params:[{id:id}]
        })
    },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'YOU_JOIN'
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)