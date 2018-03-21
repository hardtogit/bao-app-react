/**
 * Created by xiangguo .
 * time:2018/3/20 0020.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import PageLoading from '../../../../components/pageLoading'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false,
        }
    }
    static defaultProps = {

    }
    componentWillMount(){

    }
    componentDidMount(){

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
        }=this.props;
        const{

        } =this.state;
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop}>
                    授权管理
                </NavBar>、
                <div className={styles}>

                </div>

            </div>
        )
    }
}
const mapStateToProps=(state)=>({
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)