import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import styles from './index.less'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import BaseButton from '../../../../../components/BaseButton'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            money:sessionStorage.getItem('bao-reddem')
        }
    }
    render(){
        const {
            pop,
            push
        }=this.props;
        return(<div className={styles.bg}>
            <NavBar onLeft={pop}>赎回申请</NavBar>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>赎回金额</span>
                    <span className={styles.titleRight}>￥{this.state.money}</span>
                </div>
                <div className={styles.process}>
                 <ul className={styles.processUl}>
                     <li>
                         <span className={styles.processRoll}></span>
                         <span className={styles.verticalLine}></span>
                         <p className={styles.processTitle}>赎回申请成功<span>（手续费0元）</span></p>
                         <p className={styles.processTime}>2017-03-07 12:47:03</p>
                     </li>
                     <li>
                         <span className={styles.processRoll}></span>
                         <span className={styles.verticalLine}></span>
                         <p className={styles.processTitle}>债权转让中......</p>
                         <p className={styles.processTime}>2017-03-07 12:47:03</p>
                     </li>
                     <li>
                         <span className={styles.processRoll}></span>
                         <span className={styles.verticalLine}></span>
                         <p className={styles.processTitle}>债权转让成功！</p>
                         <p className={styles.processTime}>2017-03-07 12:47:03</p>
                     </li>
                     <li>
                         <span className={styles.processRoll}></span>
                         <p className={styles.processTitle}>赎回到余额</p>
                         <p className={styles.processTime}>预计 2017-03-07 12:47:03前到账</p>
                     </li>
                 </ul>
                </div>
            </div>
            <div style={{padding:'15px'}}>
                <BaseButton
                    className="111"
                    disable={false}
                    text="完成"
                    onClick={push}
                />
            </div>
        </div>)
    }
}
const datas=(state)=>({

})
const dispatchFn=(dispatch)=>({
      pop(){
          dispatch(goBack())
      },
      push(){
         dispatch(push('/user/MyDemandIndex'))
      }
})
export default connect(datas,dispatchFn)(Index)