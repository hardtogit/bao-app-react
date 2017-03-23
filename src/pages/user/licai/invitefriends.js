import React from 'react' //我的理财金之邀请好友
import NavBar from '../../../components/NavBar/index'
import styles from './index.css'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Box from '../../../components/ContentBox/index'
import Util from '../../../utils/utils'
import Loaders from '../../../customized_node_modules/halogen'
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
	}
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
                        <p className={styles.inviContent_3}><Link>活动详情<span></span></Link></p>
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
	render() {
		const {
			datas,
			pending,
		}=this.props
		let contentDom;
		if(pending||pending==undefined){
            contentDom = this.loadingDom() 
		}else{
           contentDom= this.loadingEndDom(datas)
		}
		return (
			<div className={styles.bg}>
				<NavBar backgroundColor="#F76260" title="邀请好友" rightNode={<Link className={styles.rightNode} to="">活动说明</Link>}/>
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
	}
})
export default connect(invitefriendsInit,invitefriendsInitfn)(Index)