import React from 'react' //我的定存宝
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import RecordDcb from '../../../../../components/recordDcb'
class Index extends React.Component {
    componentWillUnmount=()=>{
        this.props.clearData('DEPOSIT_RECORD_RS');
        this.props.clearData('DEPOSIT_RECORD_HISTORY');
    }
	render() {
    	const {getList,getListB,listData,listDataB,pending,pendingB,end,endB}=this.props;
		return (
			<div className={styles.bg}>
				<NavBar onLeft={this.props.pop}>定存宝A计划记录</NavBar>
              <RecordDcb fetch={[getList,getListB]} data={[listData,listDataB]} pending={[pending,pendingB]} end={[end,endB]}/>
			</div>
		)
	}
}
const myDepositSummaryInit=(state)=>({
	listData:state.listdata.getIn(['DEPOSIT_RECORD_RS','data']),
	pending:state.listdata.getIn(['DEPOSIT_RECORD_RS','pending']),
	end:state.listdata.getIn(['DEPOSIT_RECORD_RS','pageEnd']),
    listDataB:state.listdata.getIn(['DEPOSIT_RECORD_HISTORY','data']),
    pendingB:state.listdata.getIn(['DEPOSIT_RECORD_HISTORY','pending']),
    endB:state.listdata.getIn(['DEPOSIT_RECORD_HISTORY','pageEnd'])
});
const myDepositSummaryInitfn=(dispath)=>({
	getList(){
        dispath({
            type:'DEPOSIT_RECORD_RS',
            params:[1]
        })
    },
    getListB(){
        dispath({
            type:'DEPOSIT_RECORD_HISTORY',
            params:[2]
        })
    },
	pop(){
		dispath(goBack())
	},
    clearData(key){
        dispath({
            type:'CLEAR_DATA',
            key:key
        })
    },
})
export default connect(myDepositSummaryInit,myDepositSummaryInitfn)(Index)
