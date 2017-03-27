import React from 'react' //点币首页
import NavBar from '../../../components/NavBar'
import classs from './index.css'

import nonePast from '../../../assets/images/my-index/dianbi.png' // 点币


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
				<NavBar>我的点币</NavBar>
				<div className={classs.coinMain}>
					<div className={classs.coinText}>
						<span><img src={nonePast} width={85} height={85}/></span>
						<h1>当前点币数量</h1>
						<h2>168</h2>
						<p>商品兑换功能正在开发中</p>
						<p>如需兑换商品，请通过电脑登录</p>
						<p>www.bao.cn</p>
					</div>
					<div className={classs.noneCoin}><span>查看点币使用规则>></span></div>
				</div>


			</div>
		)
	}
}