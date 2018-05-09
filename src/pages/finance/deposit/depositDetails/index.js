import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import styles from './index.less'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    render(){
        const {
            pop
        }=this.props;
        return(<div>
            <NavBar onLeft={pop}>
                定存宝介绍
            </NavBar>
            <div className={styles.body}>
                <p>
                    定存B是宝点网推出的智能投标服务工具，出借者基于其期望投标的期限和参考年回报率，选择不同期限的定存B服务，以实现快速投标。定存B服务期间，系统在出借者授权下协助出借者投标，资金全额投标成功或锁定期结束即结束定存B服务。参考回报不代表对实际利息回报的承诺。
                </p>
            </div>
        </div>)
    }
}
const data=(state)=>({

})
const dispatchFn=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    }
})
export default connect(data,dispatchFn)(Index)