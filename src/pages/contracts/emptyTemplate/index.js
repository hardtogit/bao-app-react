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
        const{
           getContractData,
            index
        }=this.props
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
            pop
            }=this.props
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  标题
              </NavBar>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getContractData(type){
        dispatch({
            type:'GET_CONTRACT_DETAIL',
            hetong_type:type
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)