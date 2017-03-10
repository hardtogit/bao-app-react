import React from 'react'//券列表
import styles from './index.css'
export default class Quan extends React.Component {
	render() {
		const {
			title,
			desc1,
			desc2,
			from,
			to,
            status,
			endStyle
		} = this.props
		return (
			<div className={styles.accMain}>
				<div className={styles.addList}>
					<div className={styles.listCenter}>
						<h1>{title}<span className={styles.status}>{status}</span></h1>
						<p>{desc1}</p>
						<p>{desc2}</p>
					</div>
					<h2 style={endStyle}>有效期{from}到{to}</h2>
				</div>

			</div>
		)
	}
}