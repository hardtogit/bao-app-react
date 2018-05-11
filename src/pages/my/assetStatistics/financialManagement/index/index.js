import React from 'react' //我的理财金
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'

import gantan from '../../../../../assets/images/my-index/gantan_03.png' //感叹号
import ifriendicon from '../../../../../assets/images/my-index/ifriendicon.png' //好友头像
import guacard from '../../../../../assets/images/my-index/guacard.png'
import jilu from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录


export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentDidMount() {}
	componentWillUnmount() {}
	render() {
		return (
			<div className={styles.bg}>
				<NavBar>我的理财金</NavBar>
				<div className={styles.coinMain}>
					<div className={styles.coincontent}>
						<div className={styles.cointop}>
							<p>已获得理财金 <img src={gantan}/></p>
							<h1>12000.00</h1>
						</div>
						<div className={styles.conibotton}>
							<ul>
								<li className={styles.bottitle}>未激活收益</li>
								<li className={styles.bottext}>28.24</li>
							</ul>
							<ul>
								<li className={styles.bottitle}>已激活收益<span>详情</span></li>
								<li className={styles.bottext}>0.52 </li>
							</ul>
						</div>
					</div>

					<div className={styles.conilist}>
						<ul className={styles.listtitle}>
							<li className={styles.listleft} style={{"fontSize":"14px","color":"#000"}}><img src={ifriendicon}/>邀请好友</li>
							<li className={styles.listright} style={{"fontSize":"14px","color":"#898989"}}>还剩七天</li>
						</ul>
						<ul className={styles.listtxt}>
							<li className={styles.listleft} style={{"fontSize":"14px","color":"#898989"}}>获得理财金</li>
							<li className={styles.listright} style={{"fontSize":"18px","color":"#000"}}>1,200.00</li>
						</ul>
						<ul className={styles.listtxt}>
							<li className={styles.listleft} style={{"fontSize":"14px","color":"#898989"}}>参考回报</li>
							<li className={styles.listright} style={{"fontSize":"18px","color":"#000"}}>100.00</li>
						</ul>
					</div>
					
					<div className={styles.conilist}>
						<ul className={styles.listtitle}>
							<li className={styles.listleft} style={{"fontSize":"14px","color":"#000"}}><img src={guacard}/>邀请好友</li>
							<li className={styles.listright} style={{"fontSize":"14px","color":"#898989"}}>还剩七天</li>
						</ul>
						<ul className={styles.listtxt}>
							<li className={styles.listleft} style={{"fontSize":"14px","color":"#898989"}}>获得理财金</li>
							<li className={styles.listright} style={{"fontSize":"18px","color":"#000"}}>1,200.00</li>
						</ul>
						<ul className={styles.listtxt}>
							<li className={styles.listleft} style={{"fontSize":"14px","color":"#898989"}}>参考回报</li>
							<li className={styles.listright} style={{"fontSize":"18px","color":"#000"}}>100.00</li>
						</ul>
					</div>

				</div>
				<div className={styles.errorImg}><img src={jilu} /></div>
				<div className={styles.footer}>
					<p>赚取佣金</p>
				</div>

			</div>
		)
	}
}