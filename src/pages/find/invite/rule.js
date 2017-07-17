/**
 * Created by xiangguo .
 * time:2017/7/13 0013.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../components/NavBar/';
import {connect} from 'react-redux';
import Scroll from '../../../components/scroll'
import {goBack} from 'react-router-redux'
import styles from './index.css'
class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar backgroundColor="#7f48cb" onLeft={this.props.pop}>活动详情</NavBar>
            <div className={styles.bg}>
                <iframe src="https://www.bao.cn/special/inviteFriends/wap/index.html"   style={{width:'100%',height:'100%',position:'absolute',top:'44px',border:'none'}}></iframe>
                <div style={{position:'absolute',bottom:'0'}}></div>
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

});
const mapFnToProps=(dispath)=>({
    pop(){
        dispath(goBack())
    }
});
export default connect(mapStateToProps,mapFnToProps)(Index)