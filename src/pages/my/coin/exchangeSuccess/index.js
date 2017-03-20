/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react' //兑换成功
import NavBar from '../../../../components/NavBar/'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import styles from './index.css'
import wrap from '../../../../utils/pageWrapper'
import BaseButton from '../../../../components/BaseButton/index'
import success from '../../../../assets/images/shopp-center/success.png'
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            coin:0
        }
    }
   componentDidMount(){
       const coin=sessionStorage.getItem("bao-coin");
       let userInfo=JSON.parse(sessionStorage.getItem("bao-user"));
        userInfo.coins=coin;
       sessionStorage.setItem("bao-user",JSON.stringify(userInfo));
       this.setState({
           coin
       })
   }
    render(){
        const {
            push
        }=this.props;
        return(
            <div className={styles.leftArrow}>
                <NavBar>兑换成功</NavBar>
                <div className={styles.bg}>
                    <div className={styles.content}>
                        <div className={styles.imgWrapper}><img src={success}/></div>
                        <p>兑换成功</p>
                        <p className={styles.textGrey}>您成功兑换<span>{}</span></p>
                        <p className={styles.textGrey}>剩余点币<span className={styles.coinCount}>{this.state.coin}</span></p>
                        <BaseButton text={'兑换成功'} disable={false} onClick={()=>push('/user/coinShop')} className={styles.button}/>
                    </div>
                </div>
            </div>
        )
    }
}
const datas=(state)=>({

});
const dispatchFn=(dispatch)=>({
      push(url){
          dispatch(push(url))
      }
});
export default connect(datas,dispatchFn)(Index)