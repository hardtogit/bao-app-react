/**
 * Created by wangdongfang on 17/3/15.
 */
/**
 * Created by wangdongfang on 17/3/15.
 */
import React,{Component} from 'react';
import NavBar from '../../../components/NavBar'
import styles from './index.less'
import PropTypes from 'prop-types'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={time:1,flag:0}
    }
    componentWillReceiveProps(nextProps){
        console.log('s')
        const{url,closeFn}=nextProps;
        if(url){
            this.refs.iframe.contentWindow.location.replace(url)
        }
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
            <iframe ref='iframe'  className={styles.ifr} onLoad={this.loadTime}></iframe>
        </div>)
    }
}
export default Index