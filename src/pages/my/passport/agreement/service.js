/**
 * Created by wangdongfang on 17/3/22.
 */
/**
 * Created by wangdongfang on 17/3/22.
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import styles from './index.less'
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
        setTimeout(()=>{
            this.setState({
                init:true
            })
        },100)
    }
    render(){
        return( <div className={styles.bg}>
            <NavBar onLeft={this.props.pop}>
                宝点网服务协议
            </NavBar>
            <div className={styles.content}>
                {this.state.init&& <iframe src={`${window.location.origin}/mobile_api/static-page/service-agreement`} className={styles.ifr}></iframe>||''}
            </div>
        </div>)
    }
}
const dispatchFn=(dispatch)=>({
    pop(){
        dispatch(goBack())
    }
})
export default connect(()=>({}),dispatchFn)(Index)