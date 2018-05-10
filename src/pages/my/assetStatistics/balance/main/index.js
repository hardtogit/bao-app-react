/**
 * Created by xiangguo .
 * time:2018/1/24 0024.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import cs from 'classnames'
import NavBar from '../../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import ReactEcharts from '../../../../../components/reactEcharts';
import PageLoading from '../../../../../components/pageLoading';
class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {
            isOpen: false
        }
    }
    componentDidMount(){
        this.props.load()

    }
    render(){
        const{pop,push,userInfo}=this.props;
        let option={};
        if(userInfo){
            option= {
                tooltip: {
                    show: true
                },
                color: [
                    "#00a6e2",
                    "#03e2ea",
                ],
                series: [{
                    name: '资产分析',
                    type: 'pie',
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    radius: ["68%", "100%"],
                    hoverAnimation: false,
                    data: [{name:'存管账户余额(元)',value:userInfo.data.balance},{name:'托管账户余额(元)',value:userInfo.data.balance_platform}]
                }]
            };
        }
        return(
            <div className={styles.container}>
              <NavBar onLeft={pop} rightNode={<div className={styles.rightText}>交易流水</div>} onRight={()=>{push('/user/moneyLogMain')}}> 账户余额</NavBar>
                {userInfo&&
                <div>
                    <div className={styles.analysis}>
                        <ReactEcharts options={option}  style={{height:200}}/>
                        <p className={styles.name}>资产分析</p>
                        <p className={styles.total}>资产总值</p>
                        <p className={styles.total_num}>{userInfo.total_money}</p>
                        <ul className={styles.money_detail}>
                            <li><span className={styles.zh}></span><span className={styles.m_m}>账户余额</span><span className={styles.m_i}>{userInfo.balance_total}</span></li>
                            <li><span className={styles.jd}></span><span className={styles.m_m}>聚点+计划待收本息</span><span className={styles.m_i}>{userInfo.value}</span></li>
                        </ul>
                    </div>
                <div onClick={()=>{push('/user/reChargeMain')}} className={cs([styles.btn,styles.charge])}>
                    充值
                </div>
                <div onClick={()=>{push('/user/CashMain')}} className={cs([styles.btn,styles.cash])}>
                    提现
                </div>
                </div>||<PageLoading/> }
            </div>

        )
    }
}
const mapStateToProps=(state)=>({
    userInfo:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    load(){
        dispatch({
            type: "USER_INFO_WITH_LOGIN"
        })
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)