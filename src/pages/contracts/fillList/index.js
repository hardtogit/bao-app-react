/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
     //组件将要渲染时调用
    }
    componentDidMount(){
        const{
            getFillContractsList,
            params:{
                type,
                id
            }
        }=this.props;
        getFillContractsList(id,type)
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }

    render(){
        const{
            pop,
            contractsList
            }=this.props;
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  协议列表
              </NavBar>
               {contractsList&&contractsList.data.map((item,i)=>{
                   return(
                       <div >


                       </div>
                   )

               })

               }


           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    contractsList:state.infodata.getIn('GET_FILL_CONTRACTS_LIST','data')
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getFillContractsList(id,type){
        dispatch({
            type:'GET_FILL_CONTRACTS_LIST',
            params:[{product_id:id,product_type:type}]
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)