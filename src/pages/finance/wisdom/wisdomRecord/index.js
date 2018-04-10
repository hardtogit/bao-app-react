/**
 * Created by xiangguo .
 * time:2018/4/10 0010.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react' //我的定存宝
import NavBar from '../../../../components/NavBar'
import styles from './index.less'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import Record from '../../../user/common/record/index'
import Scroll from '../../../../components/scroll/index'
import explan from '../../../../assets/images/my-index/nojilu_03.png' //没有记录
import utils from '../../../../utils/utils'
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
        });
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
                    const {borrow_name,end_time,invest_money,id}=item;
                    return(
                        <Record
                            key = {i}
                            title={borrow_name}
                            data={utils.formatDate("yyyy-MM-dd hh:mm:ss",new Date(end_time*1000)) }
                            price={invest_money}
                            state="待回款"
                            moneyColor={"#aaa"}
                            statusColor={"#f70"}
                            click={()=>{push(`/user/zqPropertyDetail/${id}`)}}
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
                    const {borrow_name,end_time,invest_money}=item;
                    return(
                        <Record
                            key = {i}
                            title={borrow_name}
                            data={utils.formatDate("yyyy-MM-dd hh:mm:ss",new Date(end_time*1000)) }
                            price={invest_money}
                            state="已回款"
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
                <NavBar onLeft={this.props.pop}>智享计划记录</NavBar>
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
const mapStateToProps=(state,own)=>({
    listData:state.listdata.getIn(['MY_WISDOM_LIST','data']),
    pending:state.listdata.getIn(['MY_WISDOM_LIST','pending']),
    end:state.listdata.getIn(['MY_WISDOM_LIST','pageEnd']),
    listDataB:state.listdata.getIn(['MY_WISDOM_LIST_HISTORY','data']),
    pendingB:state.listdata.getIn(['MY_WISDOM_LIST_HISTORY','pending']),
    endB:state.listdata.getIn(['MY_WISDOM_LIST_HISTORY','pageEnd'])
});
const mapDispatchToProps=(dispatch,own)=>({
    getList(){
        dispatch({
            type:'MY_WISDOM_LIST',
            params:[1]
        })
    },
    getListB(){
        dispatch({
            type:'MY_WISDOM_LIST_HISTORY',
            params:[3]
        })
    },
    pop(){
        dispatch(goBack())
    },
    clearData(key){
        dispatch({
            type:'CLEAR_DATA',
            key:key
        })
    },
    push(url){
        dispatch(push(url))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)