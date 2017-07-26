import React from 'react' //我的理财金之邀请好友
import NavBar from '../../../components/NavBar/index'
import styles from './index.css'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import pic1 from '../../../assets/images/invite/pic1.png'
import pic2 from '../../../assets/images/invite/pic2.png'
import pic3 from '../../../assets/images/invite/pic3.png'
import arrow from '../../../assets/images/invite/arrow.png'
import Box from '../../../components/ContentBox/index'
import Util from '../../../utils/utils'
import API from '../../../../config/index'
import {push, goBack} from 'react-router-redux'
import Loaders from '../../../customized_node_modules/halogen'
import caishen from '../../../assets/images/my-index/yaoqing.jpg' //财神图片
import count from '../../../assets/images/my-index/jisuan_03.png' //计算器
import erwei from '../../../assets/images/my-index/erwei.png' //二维码
import QQ from '../../../assets/images/my-index/QQ.png' //QQ空间
import weibo from '../../../assets/images/my-index/weibo.png' //新浪微博
import investInfo from '../../../assets/images/investFriend.jpg'
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow1: {
                bottom:'-100%'
            },
            modalShow2: {
                bottom:'-100%'
            },
            wx:{
                display:'none'
            },
            value: 1000,
            rental: '',
            data: ['1', '3', '6', '12'],
            url:{
                'qzone':'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc=&summary=&site=',
                'weibo':'http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic=&appkey='
            }
        }
    }
    componentDidMount(){
        this.props.getLoad()
    }
    componentWillReceiveProps(nextProps){
        const [title,url]=['宝点理财，岂止赚点私房钱',nextProps.httpUrl];
        const Url=this.state.url;
        const nUrl=encodeURIComponent(url);
        const nTitle=encodeURIComponent(title);
        let Urls={}
        for(let i in Url){
            Urls[i]=Url[i].replace(/\{\{(\w)(\w*)\}\}/g,(item)=>{
                if(item=='{{URL}}'){
                    return nUrl
                }
                return nTitle
            })
        }
        this.setState({
            url:Urls
        })
    }
    close = () => { //关闭计算器
        this.setState({
            modalShow1: {
                bottom:'-100%'
            }
        })
    }
    openCulator = () => { //打开计算器
        var moneyNum = this.refs.moneyNum.value;
        var dataNum = this.refs.dataNum.value;
        this.setState({
            modalShow1: {
                bottom:'0'
            },
            wx: {
                display:'none'
            },
            rental: moneyNum * dataNum
        })
    };
    openShare = () => { //打开分享
        this.setState({
            modalShow2: {
                bottom:'0'
            },
            wx: {
                display:'none'
            }
        })
    }
    closeShare = () => { //关闭分享
        this.setState({
            modalShow2: {
                bottom:'-100%'
            }
        })
    }

    showWx = () => {
        this.closeShare();
        this.setState({
            wx: {
                display:'block'
            }
        })
    }
    closeWx = () =>{
        this.setState({
            wx: {
                display:'none'
            }
        })
    }
    moneyChange = (event) => { //金额输入
        var dataNum = this.refs.dataNum.value;
        this.setState({
            value: event.target.value,
            rental: dataNum * event.target.value
        });
    }
    dataChange = () => {
        var moneyNum = this.refs.moneyNum.value;
        var dataNum = this.refs.dataNum.value;
        this.setState({
            rental: moneyNum * dataNum
        });
    }
    loadingDom(){
        const Loading=Loaders['BeatLoader']
        return(<div className={styles.loading}>
            <Loading color="#00a6e2" size='20px' />
            <p className={styles.loadingText}>加载中...</p>
        </div>)
    }
    loadingEndDom(datas){
        const data=datas.data;
        return(
            <div>
                <div className={styles.inveHead}>
                    <ul>
                        <li>累计邀请好友</li>
                        <li><span>{data.number}</span>位</li>
                    </ul>
                    <ul>
                        <li>赚取佣金</li>
                        <li><span>{Util.padMoney(data.amount)}</span>￥</li>
                    </ul>
                </div>
                <div className={styles.inviContent}>
                    <p className={styles.inviContent_1}>邀请好友送现金,上不封顶</p>
                    <p className={styles.inviContent_2}>您的专属邀请码: <span>{data.code}</span></p>
                    <img src={investInfo} alt=""/>
                    <p className={styles.inviContent_3}><a target="_blank" href={`${API.activityUrl}inviteFriends/wap/index.html`}>活动详情<span></span></a></p>
                </div>
                <div className={styles.foot}>
                    <p><img onClick={this.openCulator} src={count}/></p>
                    <p onClick={this.openShare}>邀请好友赚佣金</p>
                </div>
                <div className={styles.PopBox} style={this.state.modalShow1}>
                    <div className={styles.calculator}>
                        <div className={styles.calOpacity}></div>
                        <div className={styles.calContent}>
                            <h1><span onClick={this.close}>×</span></h1>
                            <h1><p>佣金计算器</p></h1>
                            <div className={styles.calList}>
                                <div className={styles.listMoney}>投资金额
                                    <span><input type="text" value={this.state.value} onChange={this.moneyChange} ref="moneyNum"/></span><label>元</label>
                                </div>
                                <div className={styles.listData}>投资期限
									<span><select ref="dataNum" onChange={this.dataChange}>
										{this.state.data.map((num, i) => (<option key={i} value={num}>{num}</option>))}
									</select></span>
                                    <label>个月</label>
                                </div>
                            </div>
                            <div className={styles.calResult}>
                                <ul>
                                    <li>你可获得佣金返现</li>
                                    <li>{this.state.rental}元</li>
                                </ul>
                                <ul>
                                    <li>好友可获得佣金返现</li>
                                    <li>{this.state.rental}元</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.PopBox} style={this.state.modalShow2}>
                    <div className={styles.calculator}>
                        <div className={styles.calOpacity}></div>
                        <div className={styles.calshare}>
                            <p>分享到</p>
                            <ul>
                                <li>
                                    <a href={this.state.url.weibo} target='_blank'>
                                        <img src={weibo}/>
                                        <span>新浪微博</span>
                                    </a>
                                </li>
                                <li>
                                    <img src={erwei} onClick={this.showWx}/>
                                    <span>二维码</span>
                                </li>
                                <li>
                                    <a href={this.state.url.qzone} target='_blank'>
                                        <img src={QQ}/>
                                        <span>QQ空间</span>
                                    </a>
                                </li>
                            </ul>
                            <p className={styles.shareLink}>{data.url}</p>
                            <p className={styles.shareText}>长按复制您的专属链接，直接粘贴邀请好友赢更多奖励</p>
                            <h1 onClick={this.closeShare}>取消</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.ewmBox} style={this.state.wx}>
                    <div className={styles.ewmBoxText}>
                        <div className={styles.ewmBoxHeader}>
                            <span>分享到微信朋友圈</span>
                            <span className={styles.ewmClose}><h1 onClick={this.closeWx}>×</h1></span>
                        </div>
                        <img src={data.QrCode}/>
                        <p className={styles.ewmBoxFooter}>
                            打开微信，点击底部的“发现”，<br/>
                            使用“扫一扫”即可将网页分享至朋友圈。
                        </p>
                    </div>
                </div>

            </div>
        )
    }
    loadEndDom1=(datas)=>{
        const data=datas.data;
       const {code}=data
        return(<div>
            <div className={styles.inveHead}>
                <ul>
                    <li>累计邀请好友</li>
                    <li><span>{data.number}</span>位</li>
                </ul>
                <ul>
                    <li>获取收益</li>
                    <li><span>{Util.padMoney(data.amount)}</span>￥</li>
                </ul>
            </div>
            <div className={styles.inviContent}>
                <h2 className={styles.acTitle}>邀请好友送现金，上不封顶</h2>
                <small className={styles.subAcTitle}><span className={styles.text}> 您的专属邀请码</span>：{code} </small>
                <div className={styles.line}>
                      <div className={styles.lineText}>邀请奖励</div>
                </div>
                <table className={styles.table}>
                    <tr>
                        <td className={styles.numTd}><span>1</span></td> <td className={styles.text}>邀友见面礼<br/>享30%收益返现</td> <td><img src={pic1} alt=""/></td>
                    </tr>
                    <tr>
                        <td className={styles.numTd}><span>2</span></td> <td className={styles.text}>奖励加码<br/>50元红包返现</td> <td><img src={pic2} alt=""/></td>
                    </tr>
                    <tr>
                        <td className={styles.numTd}><span>3</span></td> <td className={styles.text}>友“益”延续<br/>坐享每日佣金</td> <td><img src={pic3} alt=""/></td>
                    </tr>
                    <tr>
                        <td colSpan="3" className={styles.goDetail}> <Link to="/find/inviteRule"> <span style={{color:'#f56264'}}>活动详情</span> <img  src={arrow} alt=""/></Link></td>
                    </tr>
                </table>

            </div>
            <div className={styles.foot}>
                <p onClick={this.openShare}>邀请好友赚佣金</p>
            </div>
            <div className={styles.PopBox} style={this.state.modalShow1}>
                <div className={styles.calculator}>
                    <div className={styles.calOpacity}></div>
                    <div className={styles.calContent}>
                        <h1><span onClick={this.close}>×</span></h1>
                        <h1><p>佣金计算器</p></h1>
                        <div className={styles.calList}>
                            <div className={styles.listMoney}>投资金额
                                <span><input type="text" value={this.state.value} onChange={this.moneyChange} ref="moneyNum"/></span><label>元</label>
                            </div>
                            <div className={styles.listData}>投资期限
                                <span><select ref="dataNum" onChange={this.dataChange}>
										{this.state.data.map((num, i) => (<option key={i} value={num}>{num}</option>))}
									</select></span>
                                <label>个月</label>
                            </div>
                        </div>
                        <div className={styles.calResult}>
                            <ul>
                                <li>你可获得佣金返现</li>
                                <li>{this.state.rental}元</li>
                            </ul>
                            <ul>
                                <li>好友可获得佣金返现</li>
                                <li>{this.state.rental}元</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.PopBox} style={this.state.modalShow2}>
                <div className={styles.calculator}>
                    <div className={styles.calOpacity}></div>
                    <div className={styles.calshare}>
                        <p>分享到</p>
                        <ul>
                            <li>
                                <a href={this.state.url.weibo} target='_blank'>
                                    <img src={weibo}/>
                                    <span>新浪微博</span>
                                </a>
                            </li>
                            <li>
                                <img src={erwei} onClick={this.showWx}/>
                                <span>二维码</span>
                            </li>
                            <li>
                                <a href={this.state.url.qzone} target='_blank'>
                                    <img src={QQ}/>
                                    <span>QQ空间</span>
                                </a>
                            </li>
                        </ul>
                        <p className={styles.shareLink}>{data.url}</p>
                        <p className={styles.shareText}>长按复制您的专属链接，直接粘贴邀请好友赢更多奖励</p>
                        <h1 onClick={this.closeShare}>取消</h1>
                    </div>
                </div>
            </div>
            <div className={styles.ewmBox} style={this.state.wx}>
                <div className={styles.ewmBoxText}>
                    <div className={styles.ewmBoxHeader}>
                        <span>分享到微信朋友圈</span>
                        <span className={styles.ewmClose}><h1 onClick={this.closeWx}>×</h1></span>
                    </div>
                    <img src={data.QrCode}/>
                    <p className={styles.ewmBoxFooter}>
                        打开微信，点击底部的“发现”，<br/>
                        使用“扫一扫”即可将网页分享至朋友圈。
                    </p>
                </div>
            </div>

        </div>)
    }
    render() {
        const {
            datas,
            pending,
            pop
        }=this.props
        let contentDom;
        if(pending||pending==undefined){
            contentDom = this.loadingDom()
        }else{
            contentDom= this.loadEndDom1(datas)
        }
        return (
            <div className={styles.bg}>
                <NavBar onLeft={pop} backgroundColor="#F76260" title="邀请好友" rightNode={<Link className={styles.rightNode} to="/find/inviteParticulars">邀请明细</Link>}/>
                <Box>
                    {
                        contentDom
                    }
                </Box>
            </div>
        )
    }

}
const invitefriendsInit= (state,own)=>(
{
    pending:state.infodata.getIn(['INVITE_FRIENDS','pending']),
    datas:state.infodata.getIn(['INVITE_FRIENDS','data'])

}
)
const invitefriendsInitfn = (dispath,own) =>({
    getLoad(){
        dispath({
            type:"INVITE_FRIENDS"
        })
    },
    pop(){
        dispath(goBack())
    }
})
export default connect(invitefriendsInit,invitefriendsInitfn)(Index)