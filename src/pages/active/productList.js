/**
 * Created by wangdongfang on 17/4/17.
 */
/**
 * Created by wangdongfang on 17/2/17.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
class Index extends Component{
    componentWillMount(){
        this.props.go()
    }
    render(){
        return(<div>
        </div>)
    }
}
const datas=(state)=>({
})
const dispatchFn=(dispatch)=>({
    go(){
        dispatch({
            type:'HOME_TAB_CAV',
            index:1
        })
        dispatch(push('/home'))
    }
})
export default connect(datas,dispatchFn)(Index)