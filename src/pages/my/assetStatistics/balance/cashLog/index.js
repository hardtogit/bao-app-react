/**
 * Created by xiangguo .
 * time:2018/1/10 0010.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
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
                <NavBar onLeft={pop} rightNode={<div>筛选</div>}>
                    提现明细
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
    push(url){
        dispatch(push(url))
    },
    dispatch(){
        type:''
        param:[]
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)