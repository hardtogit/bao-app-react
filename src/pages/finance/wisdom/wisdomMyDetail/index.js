/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
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
      const {
         params:{
             id
         },
         getDetail
      }=this.props;
        getDetail(id);
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
                  资产详情
              </NavBar>



           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    data:state.infodata.getIn(['MY_WISDOM_DETAIL','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getDetail(id){
        dispatch({
            type:'MY_WISDOM_DETAIL',
            params:[id]
        })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)