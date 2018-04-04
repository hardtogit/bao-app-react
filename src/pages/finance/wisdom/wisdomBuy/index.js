/**
 * Created by xiangguo .
 * time:2018/4/3 0003.
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
    };
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
        }=this.props;
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop}>
                    购买支付
                </NavBar>
                <div className={styles.title}>
                    购买产品：智享计划365天 年化利率（13.2%）
                </div>
                <div className={styles.block}>
                    <div className={styles.line}><div className={styles.label}>预期收益（元）</div><div className={styles.value}>29.00</div></div>
                    <div className={styles.line}><div className={styles.label}>转让价格（元）</div><div className={styles.value}>29.00</div></div>
                    <div className={styles.line}><div className={styles.label}>预付利息（元）</div><div className={styles.value}>29.00</div></div>
                    <div className={styles.line}><div className={styles.label}>手续费（元）</div><div className={styles.value}>29.00</div></div>
                </div>
                <div className={styles.bar}>
                    <div className={styles.left}>实际支付（元）</div>
                    <div className={styles.right}>9900.00</div>
                </div>
                <div>

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