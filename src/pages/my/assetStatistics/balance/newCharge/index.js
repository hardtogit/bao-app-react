/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../../components/NavBar'
import BaseText from '../../../../../components/BaseText'
import BaseButton from '../../../../../components/BaseButton'
import Reddem from '../../../../../components/Dialog/reddem'
import TipBar from '../../../../../components/Tipbar'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            disabled:true,
            recMoney:''
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
     //组件将要渲染时调用
    }
    componentDidMount(){
     //组件渲染完成时调用
       // this.refs.password.show({})
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }
    handleChange=(e)=>{
        const recMoney=e.target.value,
            reg=/^-?\d*\.?\d*$/;
        this.setState({
            recMoney
        });
        if (!reg.test(recMoney)||recMoney==''){
            this.refs.tip.open('请输入正确的充值金额！');
            this.setState({
                disabled:true
            });
        }else{
            this.setState({
                disabled:false
            });
        }

    }
    handleClick=()=>{
        this.refs.password.show({
            money:this.state.recMoney,
            okCallback:function(a,b){
                this.state

            }
        })
    }
    render(){
        const{
            pop
            }=this.props;

        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  充值
              </NavBar>
               <div className={styles.inputGroup}>
                   <span className={styles.title}>充值金额</span><input onChange={this.handleChange} placeholder="请输入充值金额" className={styles.input} type="text"/><span className={styles.unit}>元</span>
               </div>
               <div style={{marginTop:'15px'}}>
               <BaseText label="交通银行(0648)"> </BaseText>
               </div>
               <div style={{marginTop:'40px',padding:'0 15px'}}>
               <BaseButton onClick={this.handleClick} text="下一步" disable={this.state.disabled}></BaseButton>
               </div>
               <Reddem  ref="password"></Reddem>
               <TipBar ref="tip"></TipBar>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getMyBankCards(){
        dispatch({

        })
    },
    recharge(){
        dispatch({

        })
    }

});
export default connect(mapStateToProps,mapDispatchToProps)(Index)