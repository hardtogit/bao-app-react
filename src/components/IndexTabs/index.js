import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './index.styl'
import {connect} from 'react-redux'
import {Link,IndexLink} from 'react-router'


class IndexTabs extends React.Component {
    constructor(props) {
        super(props)
        Tabs.setUseDefaultStyles(false);
        this.state = {
            index: 0,
            pageId:0,
            flage:false,
            pending:false,
            codePending:false
        }
    }
    componentWillMount(){
        const {
            index,
        }=this.props;
        if (index){
            this.setState({
                index
            })
        }
    }
    componentDidMount(){
        this.isLogin();
    }
    isLogin=()=>{
        const {
            userInfo,
            location:{
                query
            }
        }=this.props;
        const user=sessionStorage.getItem("bao-user");
        if (userInfo){
            const user=sessionStorage.getItem("bao-user");
            if (userInfo.code==100){
                this.setState({
                    flage:true
                })
            }
        }
        if (user!=null){
            this.setState({
                flage:true
            })
        }
        if (!query.hasOwnProperty('code')){
            this.setState({
                flage:true
            })
        }
    }
    componentWillReceiveProps(next){
        const {
            flage,
            pending,
            codePending
        }=this.state;
        const {
            userInfo,
            codeState,
            userInfodispatch,
        }=next;
        const user=sessionStorage.getItem("bao-user");
        if (!flage&&!pending){
            if (userInfo){
                const user=sessionStorage.getItem("bao-user");
                if (userInfo.code!=100){
                    this.fetchCode();
                }
            }
            else  if (user==null){
                this.fetchCode();
            }
        }
        if (codeState&&!codePending){
            if (codeState.code==100){
                this.setState({
                    codePending:true
                })
                userInfodispatch()
            }
        }
    }
    fetchCode=()=>{
        const {
            wechatAccountSync,
            location:{
                query:{
                    code
                }
            }
        }=this.props;
        this.setState({
            pending:true
        })
        wechatAccountSync(code);
    }
    setpageId=(num)=>{
        this.setState({
            pageId:num
        })
    }
    onSelect = (index, lastIndex) => {
        this.setState({
            index
        })
    }
    onChange=()=>{
        this.setState({
            index:1,
        })
    }
    render() {
        return (
            <div className={styles.bg}>
                <div>
                    {
                        this.props.children
                    }
                </div>
                <div className={styles.tabPanel}>
                  <div>
                     <IndexLink to="/home" activeClassName={styles.activeIcon}>
                     <span className={styles.tabIcon}></span>
                     <p>理财</p>
                     </IndexLink>
                  </div>
                    <div>
                        <Link to='/home/productIndex' activeClassName={styles.activeIcon}>
                            <span className={styles.tabIcon3}></span>
                        <p>产品</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/home/findIndex' activeClassName={styles.activeIcon}>
                            <span className={styles.tabIcon1}></span>
                        <p>发现</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/home/myIndex' activeClassName={styles.activeIcon}>
                            <span className={styles.tabIcon2}></span>
                        <p>我的</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
const datas=(state)=>({
    userInfo:state.infodata.getIn(['USER_INFO','data']),
    codeState:state.infodata.getIn(['WECHAT_ACCOUNT_SYNC','data'])
})

const dispatch=(dispatch)=>({
    wechatAccountSync(code){
        dispatch({
            type:'WECHAT_ACCOUNT_SYNC',
            params:[code]
        })
    },
    userInfodispatch(){
        dispatch({
            type:'USER_INFO'
        })
    }
})
export default connect(datas,dispatch)(IndexTabs)
