import React from 'react' //充值验证身份信息
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import Record from '../../../../user/common/record/index'

import jilu from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录
import explan from '../../../../../assets/images/my-index/explan.png' //感叹号

export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return (
			<div className={styles.bg}>
				<NavBar>验证身份信息</NavBar>
				<div className={styles.errorHint}><img src={explan}/>请输入正确的身份证号</div>
				<ul className={styles.verifyInput}>
					<li><span>真实姓名</span><input type='text' placeholder='请输入身份证姓名'/></li>
					<li><span>身份证号</span><input type='text' placeholder='请输入18位身份证号'/></li>
				</ul>
		    <div className={styles.verifyBtn}><button>实名认证</button></div>
			</div>
		)
	}
}