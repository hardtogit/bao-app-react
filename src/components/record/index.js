import React from 'react'
import styles from './index.css'
export default class Quan extends React.Component {
	render() {
		const {
			title,
			data,
			price,
			state,
            color
		} = this.props
		return (
			<div className={styles.redList}>
				<div className={styles.listTable}>
					<div className={styles.listLeft}>
						<h1>{title}</h1>
						<span>{data}</span>
					</div>
					<div className={styles.listRight}>
						<h1>￥{price}</h1>
						<p className={styles.noActivate+" "+color}>{state}</p>
					</div>
				</div>
			</div>
		)
	}
}