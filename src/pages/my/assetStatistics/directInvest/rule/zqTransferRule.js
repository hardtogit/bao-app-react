/**
 * Created by wangdongfang on 17/3/22.
 */
import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar/index'
import styles from './index.less'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={init:false}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                init:true
            })
        },100)
    }
    render(){
        return(<div className={styles.bg}>
            <NavBar onLeft={this.props.pop}>债权转让规则</NavBar>
            <div className={styles.body}>
                {
                    this.state.init&&<iframe className={styles.ifr} src={`http://${location.hostname}/mobile_api/static-page/creditorTransfer-rule`}></iframe>||''
                }
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