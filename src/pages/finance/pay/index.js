/**
 * Created by wangdongfang on 17/3/15.
 */
/**
 * Created by wangdongfang on 17/3/15.
 */
import React,{Component,PropTypes} from 'react';
import NavBar from '../../../components/NavBar'
import styles from './index.less'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={time:1,flag:0}
    }
    loadTime=()=>{
         const {time,flag}=this.state;
         if (flag==0){
             this.setState({
                 flag:1
             })
         }else {
             this.setState({
                 time:time+1
             })
         }
    }
    getTime=()=>{
        return this.state.time;
    }
    render(){
           const {url,closeFn}=this.props;
        return(<div className={styles.rechargeBox}>
            <NavBar leftNode={<span className={styles.rechargeTitle}>关闭</span>}
                    onLeft={closeFn} style={{position:'absolute',left:'0px',top:'0px'}}>充值</NavBar>
            <iframe src={url} className={styles.ifr} onLoad={this.loadTime}></iframe>
        </div>)
    }
}
export default Index