import React from 'react' //我的理财记录之未到期
import NavBar from '../../../components/NavBar'
import styles from './index.css'
import Record from '../common/record/index'
import jilu from '../../../assets/images/my-index/nojilu_03.png' //没有记录

export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			record1: true,
			record2: false,
			record3: false,
		}
	}
	notExpire = () => {
		this.setState({
			record1: true,
			record2: false,
			record3: false
		})
	}
	notActivate = () => {
		this.setState({
			record1: false,
			record2: true,
			record3: false
		})
	}
	yetActivate = () => {
		this.setState({
			record1: false,
			record2: false,
			record3: true
		})
	}

	render() {
		return (
			<div className={styles.manbg} style={{"margin":"0px"}}>
				<NavBar>理财金记录</NavBar>
				<div className={styles.manage}>
					<ul className={styles.manageNav}>
						<li className={this.state.record1? styles.borLi :styles.norLi} onClick={this.notExpire}>未到期</li>
						<li className={this.state.record2? styles.borLi :styles.norLi} onClick={this.notActivate}>未激活</li>
						<li className={this.state.record3? styles.borLi :styles.norLi} onClick={this.yetActivate}>已激活</li>
					</ul>
					<div className={this.state.record1 ? styles.show : styles.hide}>
						<Record
							title="刮刮卡（15%）"
							data="2015-05-02 10:00:06"
							price="1000.00"
							state="未到期"
						/>
					</div>
					<div className={this.state.record2 ? styles.show : styles.hide}>
						<Record
							title="邀请好友（15%）"
							data="2015-05-02 10:00:06"
							price="1000.00"
							state="未激活"
						/>
					</div>
					<div className={this.state.record3 ? styles.show : styles.hide}>
						<Record
							title="刮刮卡"
							data="2015-05-02 10:00:06"
							price="1000.00"
							state="已激活10.00"
						/>
					</div>
				</div> 
				<div className={styles.errorImg}><img src={jilu} /></div>
			</div>
		)
	}
}