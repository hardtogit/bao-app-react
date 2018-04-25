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
import LoadingPage from '../../../components/pageLoading'
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
        const{
           getContractData,
           params:{
               type
           },
            location:{
               query:{
                   name
               }
            }
        }=this.props;
        getContractData(type)
    }
    componentDidMount(){
     //组件渲染完成时调用
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
            context,
            location:{
              query:{
                  name
              }
            },
            }=this.props;
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  {name?decodeURIComponent(name):"熊猫管家计划"}
              </NavBar>
               {context&&<div className={styles.myStyle} dangerouslySetInnerHTML={{
                   __html: context.data.htmls
               }}/> || <LoadingPage></LoadingPage>}
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    context:state.infodata.getIn(['GET_CONTRACT_DETAIL','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getContractData(type){
        dispatch({
            type:'GET_CONTRACT_DETAIL',
            params:[{hetong_type:type}]
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)