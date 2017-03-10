import React from 'react' //定存宝，直投，零钱，债权转让头部
import styles from './index.css'
import managebag from '../../../../assets/images/my-index/managebag.png' //背景图片
export default class Quan extends React.Component {
    componentDidMount(){
    	const Height=this.refs.manage.offsetHeight;
        this.props.didFn&&this.props.didFn(Height)
    }
	render() {
		const {
			titleLeft,
			titleRight,
			priceLeft,
			priceRight,
			titleBottom,
			priceBottom
		} = this.props
		return (
			<div className={styles.manage} ref="manage">
				<div className={styles.manTop}>
					<div className={styles.manListFloat}>
						<p>{titleLeft}</p>
						<h1>{priceLeft}<span>￥</span></h1>
					</div>
					<div className={styles.manListFloat}>
						<p>{titleRight}</p>
						<h1>{priceRight}<span>￥</span></h1>
					</div>
				</div>
				<div className={styles.manBottom}>
					<p>{titleBottom}</p>
					<h1>{priceBottom}<span>￥</span></h1>
				</div>
				<img src={managebag}/>
			</div>
		)
	}
}