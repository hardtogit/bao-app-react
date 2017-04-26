/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react' //兑换成功
import NavBar from '../../../../components/NavBar/'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styles from './index.css'
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
    push=()=>{
        const {
            location:{
                query
            },
            push}=this.props;
        if (query.hasOwnProperty('banck')){
            window.location.href=query.banck
        }else {
            push('/user/coinShop')
        }
    }
    render(){
        const {
            location:{
                query
            }}=this.props;
        let Dom;
        let Text='兑换成功';
        if (query.hasOwnProperty('banck')){
            Dom=null;
            Text='确定'
        }else {
            Dom=<div><p className={styles.textGrey}>您成功兑换<span>{}</span></p>
                <p className={styles.textGrey}>剩余点币<span className={styles.coinCount}>{this.state.coin}</span></p></div>;
        }
        return(
            <div className={styles.leftArrow}>
                <NavBar>兑换成功</NavBar>
                <div className={styles.bg}>
                    <div className={styles.content}>
                        <div className={styles.imgWrapper}><img src={success}/></div>
                        <p>兑换成功</p>
                        {Dom}
                        <BaseButton text={Text} disable={false} onClick={this.push} className={styles.button}/>
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