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
             <p>1、加息券仅能在直投项目和定存宝内使用。</p>
              <p>2、债权转让的项目和自动投标不能使用加息券。</p>
                <p>3、每个标加息券仅能使用一次。</p>
                <p>4、加息券有效期3个月。</p>
                <p>5、本规则解释权归宝点网最终所有，如有疑问，请拨打宝点网客服热线028-966180咨询。</p>
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