/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import Loading from '../../../../components/pageLoading'
import Button from '../../../../components/BaseButton'
import LoadingButton from '../../../../components/LoadingButton/index'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
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
       console.log(this.props.data)
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }
    goDetail=()=>{
        this
    }
    render(){
        let Dom;
        const{
            pop,
            data
            }=this.props;
        let num=data.bankCard.substr(data.bankCard.length-4,4)
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop} backgroundColor="#33454c">
                  管理
              </NavBar>
               <div className={styles.header}>
                   <div className={styles.item_content}>
                       <div className={styles.item}>
                           <div className={styles.title}><div className={styles.left}><img className={styles.img} src={data.bankIcon} alt=""/></div><div className={styles.right}>{data.bankName}</div></div>
                           <div className={styles.num}>****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;{num}</div>
                           <img className={styles.bg} src={data.bankImg} alt=""/>
                       </div>
                   </div>
               </div>
               <div className={styles.detail}>
                       <div className={styles.item}>
                           <div className={styles.left}>
                               姓名
                           </div>
                           <div className={styles.right}>
                               {data.realName}
                           </div>
                       </div>
                   <div className={styles.item}>
                       <div className={styles.left}>
                           身份证号
                       </div>
                       <div className={styles.right}>

                       </div>
                   </div>
                   <div className={styles.item}>
                       <div className={styles.left}>
                           预留手机
                       </div>
                       <div className={styles.right}>
                           {data.telNo}
                       </div>
                   </div>

               </div>
               <div className={styles.submit}>
               <Button ref="bottom" onClick={this.submit}
                       className={styles.bottom}
                       text={this.state.submitting ? <LoadingButton text='解绑中...' /> : '同意解绑'}
               />
               </div>
           </div>

        )
    }
}
const mapStateToProps=(state)=>({
    data:state.regStore.getIn(['STORE_CARD_INFO','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)