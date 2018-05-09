import React from 'react' //过期加息券
import NavBar from '../../../components/NavBar'
import styles from './index.css'
import Quan from '../common/jiaxi/index'

import nonePast from '../../../assets/images/my-index/nojiaxi.png' // 没有加息券



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
				<NavBar>过期加息券</NavBar>
				<div className={styles.content}>
					<Quan
						title="0.03%加息券"
						desc1="出借即可使用"
						desc2="适用于定存宝/直投项目"
						from="2016-09-14"
						to="2016-12-14"
						/>
					<div className={styles.nonePast}><img src={nonePast} width={169} height={152}/></div>
				</div>
			</div>
		)
	}
}