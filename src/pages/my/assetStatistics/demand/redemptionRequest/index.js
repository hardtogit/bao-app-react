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
            amount:'',
            handling:'',
            time:''
        }
    }
    componentDidMount(){
        const reddem=sessionStorage.getItem('bao-reddem');
        if (reddem){
            const reddemJson=JSON.parse(reddem);
            this.setState(reddemJson)
        }
    }
    render(){
        const {
            pop,
            push
        }=this.props;
        const {
            amount,
            handling,
            time
        }=this.state;
        return(<div className={styles.bg}>
            <NavBar onLeft={pop}>赎回申请</NavBar>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>赎回金额</span>
                    <span className={styles.titleRight}>￥{amount}</span>
                </div>
                <div className={styles.process}>
                 <ul className={styles.processUl}>
                     <li>
                         <span className={styles.processRoll}></span>
                         <span className={styles.verticalLine}></span>
                         <p className={styles.processTitle}>赎回申请成功<span>（手续费{handling}元）</span></p>
                         <p className={styles.processTime}>{time}</p>
                     </li>
                     <li>
                         <span className={styles.processRoll}></span>
                         <span className={styles.verticalLine}></span>
                         <p className={styles.processTitle}>赎回中...</p>
                         <p className={styles.processTime}>{time}</p>
                     </li>
                     <li>
                         <span className={styles.processRoll}></span>
                         <span className={styles.verticalLine}></span>
                         <p className={styles.processTitle}>赎回成功！</p>
                         <p className={styles.processTime}>{time}</p>
                     </li>
                     <li>
                         <span className={styles.processRoll}></span>
                         <p className={styles.processTitle}>赎回到余额</p>
                         <p className={styles.processTime}>预计 {time}前到账</p>
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