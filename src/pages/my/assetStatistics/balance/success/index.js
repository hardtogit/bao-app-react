import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../../components/NavBar/'
import {goBack} from 'react-router-redux'
import {connect} from 'react-redux'
class Index extends Component{
    zhTime=(time)=>{
        const DataN=new Date(parseInt(time)),
              year=DataN.getFullYear(),
              month=DataN.getMonth()+1,
              day=DataN.getDay(),
              min=DataN.getMinutes(),
              hours=DataN.getHours(),
              seconds=DataN.getSeconds();
        console.log(DataN)
        return year+'年'+month+'月'+day+'日'+hours+'时'+min+'分'+seconds+'秒'
    }
    render(){
        const {
            location:{
                query:{
                    time,
                    cash_amount
                }
            },
                pop
        }=this.props,
            timer=this.zhTime(time);
        return(<div className={styles.bg}>
              <NavBar onLeft={pop}>余额提现</NavBar>
            <div className={styles.body}>
              <div className={styles.content}>
                  <div className={styles.title}>提现金额<span>￥{cash_amount}</span></div>
                  <ul className={styles.lcUl}>
                      <li>
                          <p className={styles.lcTitle}>提现申请成功!</p>
                          <p>{timer}</p>
                          <span className={styles.tb}></span>
                          <span className={styles.line}></span>
                      </li>
                      <li>
                          <p className={styles.lcTitleOh}>提现金额到账</p>
                          <p>预计1~2个工作日到账</p>
                          <span className={styles.tb1}></span>
                      </li>
                  </ul>
              </div>
            </div>
        </div>)
    }
}
const data=(state)=>({

})
const dispatchFn=(dispatch)=>({
      pop(){
          dispatch(goBack())
      }
})
export default connect(data,dispatchFn)(Index)