/**
 * Created by wangdongfang on 17/2/13.
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import styles from './index.less'

class Index extends Component{
    render(){
        return(<div>
            <NavBar onLeft={this.props.pop}>
                加息券规则
            </NavBar>
            <div className={styles.body}>
                <iframe style={{"width":"100%","height":"100%","border":"none"}} src={location.hostname+"/mobile_api/static-page/interestRate-rule"}></iframe>
            </div>
        </div>)
    }
}
const datas=(state)=>({

})
const dispatchFn=(dispatch)=>({
     pop(){
          dispatch(goBack())
     }
})
export default connect(datas,dispatchFn)(Index)