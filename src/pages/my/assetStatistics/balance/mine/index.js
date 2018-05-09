import React from 'react' //资产记录
import NavBar from '../../../../../components/NavBar'
import styles from '../charge/index.css'
import Record from '../../../../user/common/record/index'

import jilu from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录

export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			modules: true
		}
	}
	shade = () => {
		this.setState({
			modules: false
		})
	}
	render() {
		return (
			<div className={styles.bg}>
				<NavBar>我的余额</NavBar>
				<div className={styles.detailContent}>
					<Record
						title="充值"
						data="2015-05-02 10:00:06"
						price="1000.00"
						state="退款到余额"
					/>
				</div>
				<p onClick={this.shade}>点击</p>
				<div className={styles.errorRecord}><img src={jilu}/></div>
				<div className={this.state.modules?styles.maskLayer:styles.maskLayerShade}>
					<div className={styles.listNav}>
						<ul>
							<li>出借</li><li>回款</li><li>提现</li><li>红包</li><li>理财金收益</li><li>充值</li><li>全部</li>
						</ul>
					</div>
					<div className={styles.navOpcity}></div>
				</div>
			</div>
		)
	}
}