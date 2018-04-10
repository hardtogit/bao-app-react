/**
 * Created by xiangguo .
 * time:2018/4/9 0009.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react' //我的债权转让
import NavBar from '../../../../components/NavBar'
import styles from './index.less'
import Manage from '../../../user/common/manage/index'
import Loading from '../../../../components/pageLoading'
import Scroll from '../../../../components/scroll/index'
import {goBack,push} from 'react-router-redux'
import {Link} from 'react-router'
import explan from '../../../../assets/images/my-index/nojilu_03.png' //没有记录
import type_zqzr from '../../../../assets/images/my-index/zqzr.png' //管家标志
import Util from '../../../..//utils/utils'
import wrap from '../../../../utils/pageWrapper'
import {connect} from 'react-redux'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height:0
        }
    }

    scrollDom=()=>{
        const {
            listData,
            pending,
            end,
            getList
        }=this.props;
        const {
            height
        }=this.state
        const BodyHeight=document.body.clientHeight,
            ScrollHeight=BodyHeight-height-44-50-100;
        return(<div style={{height:ScrollHeight}} className={styles.listBox}>
            <Scroll height={ScrollHeight} fetch={()=>{getList(1)}} isLoading={pending} distance={5} endType={end}
                    nullDom={<div className={styles.nullBox}><img src={explan} /></div>}
                    endload={<div></div>}
            >

                {
                    listData&&listData.map((item,i)=>{
                        const {borrow_name,invest_money,interest,actual_account,id}=item;

                        return(<ul key={i} className={styles.listBoxOne} onClick={()=>{this.goDetail(id)}}>
                            <li>
                                <img style={{marginTop:'16px'}} src={type_zqzr}/>{borrow_name}{!item.access_sys&&
                            <span className={styles.store}>存</span>
                            }
                            </li>
                            <li>持有金额<p>{Util.padMoney(invest_money)}</p></li>
                            <li>到期收益<p>{Util.padMoney(interest)}</p></li>
                            <li>已到账收益({Util.padMoney(actual_account)})</li>
                        </ul>)
                    })
                }

            </Scroll>
        </div>)
    };
    goDetail=(id)=>{
        const {
            push
        }=this.props;
         push('/user/wisdomMyDetail/'+id);
    };
    go=()=>{
        const {
            goBuy,
            push
        }=this.props;
        goBuy();
        push('/home/productIndex')
    }
    buyDom=()=>{
        return(<div className={styles.gobuy} onClick={this.go}>再次购买</div>)
    }
    loadDom=()=>{
        return(<Loading/>)
    }
    loadEndDom=()=>{
        const{
            accoutInterest,
            accoutMoney,
            accoutOldInterest,
        }=this.props.infoData.data;
        return(
            <div className={styles.header}>
                <div className={styles.left}>
                    <p className={styles.itemTitle}>待收本息（利息{accoutInterest}）</p>
                    <p className={styles.itemContent}>{accoutMoney} <span className={styles.icon}>￥</span></p>
                </div>
                <div className={styles.right}>
                    <p className={styles.itemTitle}>历史累积收益</p>
                    <p className={styles.itemContent}>{accoutOldInterest} <span className={styles.icon}>￥</span></p>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getInfo()
    }
    componentWillUnmount(){
        this.props.clearData()
    }
    render() {
        const {
            infoData,
            pop,
            push
        }=this.props;
        const {
            height
        }=this.state;
        let Dom,
            buyDom,
            listDom;
        if (infoData){
            Dom=this.loadEndDom();
            buyDom=this.buyDom();
        }else {
            Dom=this.loadDom();
        }
        // if (height!=0){
            listDom=this.scrollDom()
        // }
        return (
            <div>
                <NavBar onLeft={pop} rightNode={<span>记录</span>} onRight={()=>{push('/user/wisdomRecord')}}>我的智享</NavBar>
                <div className={styles.bg}>
                    {Dom}{listDom}{buyDom}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    listData:state.listdata.getIn(['MY_WISDOM_LIST','data']),
    pending:state.listdata.getIn(['MY_WISDOM_LIST','pending']),
    end:state.listdata.getIn(['MY_WISDOM_LIST','pageEnd']),
    infoData:state.infodata.getIn(['MY_WISDOM_INFO','data'])

})

const mapDispatchToProps=(dispatch)=>({
    getInfo(){
        dispatch({
            type:'MY_WISDOM_INFO'
        })
    },
    getList(type){
        dispatch({
            type:'MY_WISDOM_LIST',
            params:[type]
        })
    },
    getDetail(){

    },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'MY_CREDITOR_LIST'
        })
    },
    goBuy(){
        dispatch({
            type:'HOME_TAB_CAV',
            index:3
        });
        dispatch({
            type:'PRODUCT_INDEX',
            index:3
        })
    },
    push(url){
        dispatch(push(url))
    },
    pop(){
        dispatch(goBack())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(wrap(Index))