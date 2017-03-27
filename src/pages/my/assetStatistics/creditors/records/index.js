import React from 'react' //我的定存宝
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import Record from '../../../../user/common/record/index'

import explan from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录



export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			flag: false
		}
	}
	toggle = (index) => {
		if ((2 == index && this.state.flag) || (1 == index && !this.state.flag)) {
			this.setState({
				flag: !this.state.flag
			})
		}
	}
	render() {
		return (
			<div className={styles.bg}>
				<NavBar>债权记录</NavBar>
				<ul className={styles.tabmenu}>
					<li><a href="#tab1" className={this.state.flag?styles.borderBlue:styles.borderWhite} onClick={()=>{this.toggle(1)}}> 待回款项目</a></li>
					<li><a href="#tab2" className={!this.state.flag?styles.borderBlue:styles.borderWhite} onClick={()=>{this.toggle(2)}}> 历史资产</a></li>
				</ul>
				<div className={styles.recordsMain}>
					<div className={styles.tablist}>
						<div className={this.state.flag? styles.show :styles.hide}>
							<Record 
								title={`定存宝记录`}
								data={`2015-12-19 10:00:06`}
								price={`100.00`}
								state={`待回款`}
							/>
						</div>
						<div className={!this.state.flag? styles.show :styles.hide}>
							<Record 
								title={`定存宝-12个月（6%）`}
								data={`2015-12-19 10:00:06`}
								price={`100.00`}
								state={`已回款`}
							/>
						</div>
					</div>
				</div>
				<div className={styles.errorImg}><img src={explan} /></div>
			</div>
		)
	}
}