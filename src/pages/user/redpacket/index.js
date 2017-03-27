import React from 'react'
import NavBar from '../../../components/NavBar'
import styles from './index.css'
import Record from '../common/record/index'

import noneRecord from '../../../assets/images/my-index/nojilu_03.png' // 没有记录



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
				<NavBar styles={{"backGround":"#F76360"}}>我的红包 </NavBar>
				<div className={styles.main}>
					<div className={styles.moneyBg}>
						<div className={styles.redLeft}>
							<p>已获得的红包</p>
							<h2>15.00</h2>
						</div>
						<div className={styles.redRight}>
							<p>已到账的红包</p>
							<h2>0</h2>
						</div>
						<div className={styles.division}></div>
					</div>

					<Record
						title="注册红包"
						data="2015-12-19"
						price="100"
						state="未激活"
					/>
					<div className={styles.noneRecord}>
						<img src={noneRecord}/>
					</div>
				</div>
			</div>
		)
	}
}