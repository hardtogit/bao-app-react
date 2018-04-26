import React from 'react' //我的定存宝
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import Record from '../../../../user/common/record/index'
import Scroll from '../../../../../components/scroll/index'
import explan from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true,
            componentDid:false
        }
    }
    componentDidMount=()=>{
        this.setState({
            componentDid:true
        })
        this.props.getList(this.state.flag?"1":"2");
    };
    componentWillUnmount=()=>{
        this.props.clearData('CREDITORS_RECORDS');
        this.props.clearData('CREDITORS_RECORDS_HISTORY');
    }
    toggle = (index) => {
        if ((2 == index && this.state.flag) || (1 == index && !this.state.flag)) {
            this.setState({
                flag: !this.state.flag
            })
        }
        if(!this.state.flag){
            this.props.getList();
        }else
            this.props.getListB();
    };
    listA=()=>{
        const BodyHeight=document.body.clientHeight,
            ScrollHeight=BodyHeight-95;
        const {
            getList,
            pending,
            end,
            listData,
            push
        }=this.props;
        return(<Scroll height={ScrollHeight} fetch={getList}
                       isLoading={pending} distance={5} endType={end}
                       nullDom={<div className={styles.nullBox}><img src={explan} /></div>} endload={<div></div>}>
            {
                listData&&listData.map((item,i)=>{
                    const {name,date,amount,status,id,access_sys,borrow_id}=item;
                    return(
                        <Record
                            key = {i}
                            title={name}
                            data={date}
                            price={amount}
                            state={status}
                            moneyColor={"#aaa"}
                            statusColor={"#f70"}
                            click={()=>{
                                if(access_sys){
                                    push(`/user/zqPropertyDetail/${id}?access_sys=platform&borrow_id=${borrow_id}`)
                                }else{
                                    push(`/user/zqPropertyDetail/${id}?borrow_id=${borrow_id}`)
                                }
                            }}
                        />
                    )
                })
            }
        </Scroll>)
    }
    listB=()=>{
        const BodyHeight=document.body.clientHeight,
            ScrollHeight=BodyHeight-95;
        const {
            getListB,
            pendingB,
            endB,
            listDataB,
            push
        }=this.props;
        return(<Scroll height={ScrollHeight} fetch={getListB}
                       isLoading={pendingB} distance={5} endType={endB}
                       nullDom={<div className={styles.nullBox}><img src={explan} /></div>} endload={<div></div>}>
            {
                listDataB&&listDataB.map((item,i)=>{
                    const {name,amount,status,date}=item;
                    return(
                        <Record
                            key = {i}
                            title={name}
                            data={date}
                            price={amount}
                            state={status}
                            moneyColor={"#aaa"}
                            statusColor={"#f70"}
                        />
                    )
                })
            }
        </Scroll>)
    }
    render() {
        const {
            flag,
            componentDid
        }=this.state;
        let ListDomA,
            ListDomB
        if (componentDid){
            ListDomA=this.listA();
            ListDomB=this.listB();
        }
        return (
            <div>
                <NavBar onLeft={this.props.pop}>债权记录</NavBar>
                <div className={styles.bg}>
                    <ul className={styles.tabmenu}>
                        <li><a className={this.state.flag?styles.borderBlue:styles.borderWhite} onClick={()=>{this.toggle(1)}}> 待回款项目</a></li>
                        <li><a className={!this.state.flag?styles.borderBlue:styles.borderWhite} onClick={()=>{this.toggle(2)}}> 历史资产</a></li>
                    </ul>
                    <div className={styles.recordsMain}>
                        <div className={styles.tablist}>
                            <div className={flag&&styles.show||styles.hide}>
                                {
                                    ListDomA
                                }
                            </div>
                            <div className={!flag&&styles.show||styles.hide}>
                                {
                                    ListDomB
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const myDepositSummaryInit=(state,own)=>({
    listData:state.listdata.getIn(['CREDITORS_RECORDS','data']),
    pending:state.listdata.getIn(['CREDITORS_RECORDS','pending']),
    end:state.listdata.getIn(['CREDITORS_RECORDS','pageEnd']),
    listDataB:state.listdata.getIn(['CREDITORS_RECORDS_HISTORY','data']),
    pendingB:state.listdata.getIn(['CREDITORS_RECORDS_HISTORY','pending']),
    endB:state.listdata.getIn(['CREDITORS_RECORDS_HISTORY','pageEnd'])
});
const myDepositSummaryInitfn=(dispath,own)=>({
    getList(){
        dispath({
            type:'CREDITORS_RECORDS',
            params:[1]
        })
    },
    getListB(){
        dispath({
            type:'CREDITORS_RECORDS_HISTORY',
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
    push(url){
        dispath(push(url))
    }
})
export default connect(myDepositSummaryInit,myDepositSummaryInitfn)(Index)
