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
                    定存宝是宝点网为您提供的本金自动循环出借及到期自动转让的理财工具。
                    定存宝所对应的借款均100%适用于宝点网本息保障机制，安全性高。同时为您实现分散投资，流动性的多样化需求。
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