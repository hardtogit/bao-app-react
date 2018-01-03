import React from 'react';
import {  Tabs } from 'react-tabs';
import styles from './index.styl'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import znq from '../../assets/images/znq.png'
import setAuthUrl from '../../components/setAuthUrl/index'
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
    clientWidth=document.body.clientWidth;
    clientHeight=document.body.clientHeight;
    startX=0;
    startY=0;
    right=0;
    bottom=0;

    touchStart=(e)=> {
        this.startX=e.touches[0].pageX
        this.startY=e.touches[0].pageY;
        this.bottom=parseInt(this.refs.picture.style.bottom.replace('px','')) ;
        this.right=parseInt(this.refs.picture.style.right.replace('px',''))
        e.preventDefault()
    };
    touchMove=(e)=>{
        if(this.right+this.startX-e.touches[0].pageX>0&&this.right+this.startX-e.touches[0].pageX<this.clientWidth-44){
            this.refs.picture.style.right= this.right+this.startX-e.touches[0].pageX+'px'

        }else{
            if(this.right+this.startX-e.touches[0].pageX<=0){
                this.refs.picture.style.right='0px'
            }else if(this.right+this.startX-e.touches[0].pageX>this.clientWidth-44){
                this.refs.picture.style.right=this.clientWidth-44+'px'
            }
        }
        if(this.bottom+this.startY-e.touches[0].pageY>0&&this.bottom+this.startY-e.touches[0].pageY<this.clientHeight-80){
            this.refs.picture.style.bottom= this.bottom+this.startY-e.touches[0].pageY+'px'

        }else{
            if(this.bottom+this.startY-e.touches[0].pageY<=0){
                this.refs.picture.style.bottom='0px'
            }else if(this.bottom+this.startY-e.touches[0].pageY>this.clientHeight-80){
                this.refs.picture.style.bottom=this.clientHeight-80+'px'
            }
        }
    };
    touchEnd=(e)=>{
        let distance=Math.sqrt(Math.pow((this.startX-e.changedTouches[0].pageX),2)+Math.pow((this.startY-e.changedTouches[0].pageY),2));
        if(distance<16){
            this.refs.picture.style.right=this.right+'px';
            this.refs.picture.style.bottom=this.bottom+'px';
            var host = window.location.hostname;
            var selfHost='';
            if ('demo-react.devbao.cn' == host) {
                selfHost=window.location.protocol+'//demo-pc.devbao.cn'
            } else if ("mobile.bao.cn" == host) {
                selfHost=window.location.protocol+'//www.bao.cn'
            } else {// 本地测试地址test
                //selfHost='http://localhost:3000'
                //self.host='https://react.10.devbao.cn'
                selfHost=window.location.protocol+'//demo-pc.devbao.cn'
            }
             setAuthUrl(selfHost+'/special/fiveYears/home/wap/index.html?time='+new Date().getTime())
        }else{
            this.refs.picture.style.right='10px'
        }
    };
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
                     <p>首页</p>
                     </IndexLink>
                  </div>
                    <div>
                        <Link to='/home/productIndex' activeClassName={styles.activeIcon}>
                            <span className={styles.tabIcon1}></span>
                        <p>投资</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/home/findIndex' activeClassName={styles.activeIcon}>
                            <span className={styles.tabIcon2}></span>
                        <p>发现</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/home/myIndex' activeClassName={styles.activeIcon}>
                            <span className={styles.tabIcon3}></span>
                        <p>我的</p>
                        </Link>
                    </div>
                </div>
                <div ref="picture" style={{ zIndex:'100',position:'fixed', right:'10px', bottom:'60px',width :'60px'}} onClick={this.handClick} onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd} className={styles.picture}><img src={znq} alt=""/></div>
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
    },
    push(url){
        dispatch(push(url))
    }
})
export default connect(datas,dispatch)(IndexTabs)
