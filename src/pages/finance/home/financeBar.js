/**
 *
 */

import React from 'react'
import cn from 'classnames'
import styles from './financeBar.styl'

const icons = {
  'demand': require('../../../assets/images/hqicon.png'),
  'deposit': require('../../../assets/images/sizhounian_logo.png'),
  'directInvest': require('../../../assets/images/sizhounian_logo.png'),
  'creditors': require('../../../assets/images/zqicon.png')
}

const FinanceBar = ({title, subTitle, desc, content, type, onClick, border}) => {
	return (
		<div className={styles.financeBar}>
			<img src={icons[type]} className={styles.icon} />
			<div className={cn(styles.content, border === false && styles.contentEmptyBorder)}>
				<div className={styles.contentLeft}>
					<span className={styles.title}>
						{title}
						<span className={styles.subTitle}>{subTitle}</span>
					</span>
					<span className={styles.desc}>{desc}</span>
				</div>
				<span className={styles.contentCenter}>{content}</span>
				<img className={styles.contentRight} src={require('../../../assets/images/arrow2.png')} />
			</div>
		</div>
	)
}

export default FinanceBar
