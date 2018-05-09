/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../components/NavBar'
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
              <NavBar onLeft={pop}>
                  身份验证说明
              </NavBar>
               <h3 className={styles.title}>关于用户资金存管账户需认证身份证照片说明</h3>
               <p className={styles.p}>根据中国人民银行文件（银发[2016]302号）要求，所有在银行开具的个人Ⅱ类银行账户必须进行身份证照片认证。宝点网平台用户的银行资金存管账户为Ⅱ类银行账户，需在提现时完成身份证照片认证操作，否则无法进行提现操作。</p>
               <p className={styles.p}>附：中国人民银行文件（银发[2016]302号）强调银行落实个人账户分类管理的相关要求。根据央行要求，个人银行账户实行分类管理，分为Ⅰ类、Ⅱ类、Ⅲ类账户，不同类别的账户有不同的功能和权限。账户级别的不同，意味着功能和额度的差异。</p>
               <p className={styles.p}>I类账户——总管家：主要的家底在里面，具备最高的安全性，不用日常拿出来用；</p>
               <p className={styles.p}>Ⅱ类账户——小钱柜：主要负责日常较大开支，或者买买理财、周转出借金等；</p>
               <p className={styles.p}>Ⅲ类账户——零钱包：各类金融小、频率高的支付，比如移动支付、二维码支付。</p>



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