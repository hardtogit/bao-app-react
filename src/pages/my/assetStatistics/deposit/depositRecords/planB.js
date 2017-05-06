/**
 * Created by Administrator on 2017/4/25.
 */
import React from 'react' //我的定存宝
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import RecordDcb from '../../../../../components/recordDcb'
class Index extends React.Component {
    componentWillUnmount=()=>{
        this.props.clearData('DEPOSITBS_ACCOUNTCAPITALLIST_NOW');
        this.props.clearData('DEPOSITBS_ACCOUNTCAPITALLIST_HISTORY');
    }
    click=(id)=>{
     this.props.push(`/user/detailsDcb/${id}`)
    }
    render() {
        const {getList,getListB,listData,listDataB,pending,pendingB,end,endB}=this.props;
        return (
            <div className={styles.bg}>
                <NavBar onLeft={this.props.pop}>定存宝B计划记录</NavBar>
                <RecordDcb fetch={[getList,getListB]} data={[listData,listDataB]} pending={[pending,pendingB]} end={[end,endB]} click={this.click} type='B'/>
            </div>
        )
    }
}
const myDepositSummaryInit=(state)=>({
    listData:state.listdata.getIn(['DEPOSITBS_ACCOUNTCAPITALLIST_NOW','data']),
    pending:state.listdata.getIn(['DEPOSITBS_ACCOUNTCAPITALLIST_NOW','pending']),
    end:state.listdata.getIn(['DEPOSITBS_ACCOUNTCAPITALLIST_NOW','pageEnd']),
    listDataB:state.listdata.getIn(['DEPOSITBS_ACCOUNTCAPITALLIST_HISTORY','data']),
    pendingB:state.listdata.getIn(['DEPOSITBS_ACCOUNTCAPITALLIST_HISTORY','pending']),
    endB:state.listdata.getIn(['DEPOSITBS_ACCOUNTCAPITALLIST_HISTORY','pageEnd'])
});
const myDepositSummaryInitfn=(dispath)=>({
    getList(){
        dispath({
            type:'DEPOSITBS_ACCOUNTCAPITALLIST_NOW',
            params:[0]
        })
    },
    getListB(){
        dispath({
            type:'DEPOSITBS_ACCOUNTCAPITALLIST_HISTORY',
            params:[1]
        })
    },
    push(url){
      dispath(push(url))
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
