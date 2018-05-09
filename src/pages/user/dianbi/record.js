import React from 'react' //点币记录
import NavBar from '../../../components/NavBar'
import classs from './index.css'


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
			<div className={classs.bg}>
				<NavBar>我的点币记录</NavBar>
				<div className={classs.coinMain} style={{"padding":"0 0 0 15px"}}>
					<div className={classs.coinlist}>
						<div className={classs.listleft}>
							<h1>App签到送点币</h1>
							<p className={classs.potop}>APP签到</p>
							<p>2016-08-30 12:25:46</p>
						</div>
						<div className={classs.listright}>
							<p>+10</p>
						</div>
					</div>
					<div className={classs.coinlist}>
						<div className={classs.listleft}>
							<h1>投标送币</h1>
							<p className={classs.potop}>8416号标满标通过复审获得出借点币奖励</p>
							<p>2016-08-30 12:25:46</p>
						</div>
						<div className={classs.listright}>
							<p>+10</p>
						</div>
					</div>
				</div>


			</div>
		)
	}
}