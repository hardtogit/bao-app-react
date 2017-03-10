import React from 'react' //过期抵用券
import NavBar from '../../../components/NavBar'
import styles from '../addaccrual/index.css'
import Quan from '../common/jiaxi/index'
import nonePast from '../../../assets/images/my-index/nojuan.png' // 没有抵用券



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
				<NavBar>过期抵用券</NavBar>
				<div className={styles.content}>
					<Quan
						title="200抵用券"
						desc1="投资即可使用"
						desc2="适用于定存宝/直投所有项目"
						from="2016-09-09"
						to="2016-12-09"
						/>
					<div className={styles.nonePast}><img src={nonePast} width={169} height={152}/></div>
				</div>

			</div>
		)
	}
}