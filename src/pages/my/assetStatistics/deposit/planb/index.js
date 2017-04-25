/**
 * Created by Administrator on 2017/4/25.
 */
import React from 'react' //我的定存宝
import NavBar from '../../../../../components/NavBar'
import styles from '../home/index.css'
import {connect} from 'react-redux'
import Loading from '../../../../../components/pageLoading'
import {Link} from 'react-router'
import {goBack,push} from 'react-router-redux'
import Mydcb from '../../../../../components/mydcb'
class Index extends React.Component {
    loadDom(){
        return(<Loading/>)
    }
    buyDom=()=>{
        return(<div onClick={()=>{this.goPlanB()}}>
            <div className={styles.gobuy}>再次购买</div>
        </div>)
    }
    goPlanB=()=>{
        const {proIndexs,push}=this.props;
        proIndexs();
        push('/home/productIndex');
    }
    listClick=(id)=>{
        console.log(id)
    }
    loadEndDom=(datas)=>{
        const {
            getList,
            pending,
            end,
            listData
        }=this.props;
        return(<Mydcb banner={datas.data} fetch={getList} pending={pending} end={end} data={listData} click={this.listClick}/>)
    }
    componentDidMount(){
        this.props.load();
    }
    componentWillUnmount(){
        this.props.clearData()
    }
    render() {
        const {
            datas,
            pop
        }=this.props;
        let Dom,
            buyDom;
        if(datas){
            Dom=this.loadEndDom(datas);
            buyDom=this.buyDom()
        }else{
            Dom=this.loadDom()
        }
        return (
            <div className={styles.bg}>
                <NavBar onLeft={pop} rightNode={<Link to="/user/dcbRecordsB" style={{color:'#fff'}}>记录</Link>}>我的定存宝B计划</NavBar>
                {
                    Dom
                }{
                buyDom
            }
            </div>
        )
    }
}
const myDepositSummaryInit=(state,own)=>({
    datas:state.infodata.getIn(['MY_DEPOSIT_SUMMARY','data']),
    listData:state.listdata.getIn(['DEPOSIT_RECORD','data']),
    pending:state.listdata.getIn(['DEPOSIT_RECORD','pending']),
    end:state.listdata.getIn(['DEPOSIT_RECORD','pageEnd'])
});
const myDepositSummaryInitfn=(dispath,own)=>({
    load(){
        dispath({
            type:'MY_DEPOSIT_SUMMARY'
        })
    },
    getList(){
        dispath({
            type:'DEPOSIT_RECORD',
            params:[1]
        })
    },
    clearData(){
        dispath({
            type:'CLEAR_DATA',
            key:'DEPOSIT_RECORD'
        })
    },
    push(url){
        dispath(push(url))
    },
    pop(){
        dispath(goBack())
    },
    proIndexs(){
        dispath({
            type:'PRODUCT_INDEX',
            index:1
        })
    }
})
export default connect(myDepositSummaryInit,myDepositSummaryInitfn)(Index)
