import React from 'react'
import NavBar from '../../../../components/NavBar/'
import styles from './index.css'
import Record from '../../../../components/record/index'
import {Link} from 'react-router';
import { connect } from 'react-redux'
import classNames from "classnames/index"
import { push, goBack } from 'react-router-redux'
import Scroll from '../../../../components/scroll/index'
import noneRecord from '../../../../assets/images/my-index/nojilu_03.png' // 没有记录
import utils from '../../../../utils/utils'
import wrap from '../../../../utils/pageWrapper'
class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentDidMount() {
        this.props.info();
    }
    componentWillUnmount(){
        this.props.clearData()
    }
	render() {
        const Height=document.body.clientHeight-135;
        const {
            listData,
            pending,
            end,
            bonusInfo,
            goBack
        }=this.props;
		return (
			<div>
				<NavBar backgroundColor={"#F76360"}
						rightNode={<Link className={styles.rightNode} to="/user/redPacketRule">红包规则</Link>}
				        onLeft={goBack}>
					我的红包 </NavBar>
				<div className={styles.bg}>
				<div className={styles.main}>
					<div className={styles.moneyBg}>
						<div className={styles.redLeft}>
							<p>已获得的红包</p>
							<h2>{utils.padMoney(bonusInfo.bonuse)}</h2>
						</div>
						<div className={styles.redRight}>
							<p>已到账的红包</p>
							<h2>{utils.padMoney(bonusInfo.bonuse_arrival)}</h2>
						</div>
						<div className={styles.division}></div>
					</div>
                    <div className={styles.items}>
                        <Scroll height={Height} fetch={this.props.getList}
                                isLoading={pending} distance={5} endType={end} >
                            {
                                listData&&listData.map((item,i)=>{
                                    return(
                                        <div className={styles.item} key={i}>
                                            <p className={styles.name}>{item.name}</p>
                                            <p className={styles.time}>{item.date}</p>
                                            <span className={styles.money}>¥{item.amount}</span>
                                            <span className={classNames(styles.status,'未激活'==item.status?styles.no_use:"")}>{item.status}</span>
                                        </div>
                                    )
                                })
                            }
                        </Scroll>
                    </div>
				</div>
				</div>
			</div>
		)
	}
}
const infoModel = (data)=>{
    if(data&& 100==data.code){
        return {
            bonuse:data.data.bonuse,
            bonuse_arrival:data.data.bonuse_arrival
        }
    }
    else{
        return {
            bonuse:0,
            bonuse_arrival:0
        }
    }
}
const mapStateToProps = (state, ownProps) => {
	return {
		listData:state.listdata.getIn(['BONUS_LOG','data']),
		pending:state.listdata.getIn(['BONUS_LOG','pending']),
		end:state.listdata.getIn(['BONUS_LOG','pageEnd']),
        bonusInfo:infoModel(state.infodata.getIn(['BONUS_INFO','data']))
	}
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	goBack() {
		dispatch(goBack())
	},
	getList(){
		dispatch({
			type:'BONUS_LOG'
		})
	},
    info(){
        dispatch({
            type:'BONUS_INFO'
        })
    },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'BONUS_LOG'
        })
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(wrap(Index))