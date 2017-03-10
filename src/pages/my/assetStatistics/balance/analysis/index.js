import React from 'react'
import NavBar from '../../../../../components/NavBar/index'
import styles from './index.css';
import ReactEcharts from 'echarts-for-react';
import {goBack} from 'react-router-redux'
import Util from "../../../../../utils/utils";
import Loading from '../../../../../components/pageLoading/index'
import {connect} from 'react-redux'
import * as actionTypes from '../../../../../actions/actionTypes'
import Box from "../../../../../components/ContentBox/index"
class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount=()=>{
        this.props.info();
    };
    loadingEndDom=(data)=>{
        return (
            <div>
                <div className={styles.money +" "+styles.clearfix}>
                    <div className={styles.left}>
                        <p>历史累计收益</p>
                        <p>{data.profit_total}</p>
                    </div>
                    <div className={styles.right}>
                        <p>资产总值</p>
                        <p>{data.total_money}</p>
                    </div>
                    <span></span>
                </div>
                <div className={styles.analysis}>
                    <ReactEcharts option={data.getOtion()} style={{height:200}}/>
                    <p className={styles.name}>资产分析</p>
                    <p className={styles.total}>资产总值</p>
                    <p className={styles.total_num}>{data.total_money}</p>
                    <ul className={styles.money_detail}>
                        <li><span className={styles.zh}></span><span className={styles.m_m}>账户余额</span><span className={styles.m_i}>{data.balance_total}</span></li>
                        <li><span className={styles.lq}></span><span className={styles.m_m}>零钱宝</span><span className={styles.m_i}>{data.info[1].value}</span></li>
                        <li><span className={styles.dc}></span><span className={styles.m_m}>定存宝待收本息</span><span className={styles.m_i}>{data.info[2].value}</span></li>
                        <li><span className={styles.zt}></span><span className={styles.m_m}>直投项目待收本息</span><span className={styles.m_i}>{data.info[3].value}</span></li>
                        <li><span className={styles.zq}></span><span className={styles.m_m}>债权转让待收本息</span><span className={styles.m_i}>{data.info[4].value}</span></li>
                    </ul>
                    <p className={styles.lcj}>理财金</p>
                    <p className={styles.lcj_m}>{data.privilege_total}</p>
                </div>
            </div>
        )
    };
    render() {
        const{
            moneyInfo,
            pop
        } = this.props;
        let Dom;
        if(moneyInfo){
            Dom=this.loadingEndDom(moneyInfo)
        }else{
            Dom= <Loading/>;
        }
        return (
            <div className={styles.bg}>
                <NavBar onLeft={pop}>资产分析</NavBar>
                <Box>
                {
                    Dom
                }
                </Box>
            </div>
        )
    }
}
const moneyModel =(data,ownProps)=>{
    let money = {
        info:[
            {
                name: "账户余额",
                value: 0
            }, {
                name: "零钱宝",
                value: 0
            }, {
                name: "定存宝待收本息",
                value: 0
            }, {
                name: "直投项目待收本息",
                value: 0
            }, {
                name: "债权转让待收本息",
                value: 0
            }
        ],
        total_money:0
    }
    if(data && 100===data.code){
        money.info[0].value = data.data.balance_total;
        money.info[1].value = data.data.demand_total;
        money.info[2].value = data.data.deposit_total;
        money.info[3].value = data.data.directInvest_total;
        money.info[4].value = data.data.creditors_total;
        money.total_money = Util.padMoney(data.data.asset_total);
        money.balance_total =  Util.padMoney(data.data.balance_total);
        money.profit_total = Util.padMoney(data.data.profit_total);
        money.privilege_total = Util.padMoney(data.data.privilege_total);
        money.getOtion = ()=> {
            return {
                tooltip: {
                    show: true
                },
                color: [
                    "#4cafff",
                    "#763cff",
                    "#fa394c",
                    "#ffaf32",
                    "#2ce4a6"
                ],
                series: [{
                    name: '资产分析',
                    type: 'pie',
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    radius: ["55%", "100%"],
                    hoverAnimation: false,
                    data: money.info
                }]
            };
        };
        return money;
    }else
        return false;
};
const mapStateToProps = (state, ownProps) => {
    return {
        moneyInfo:moneyModel(state.infodata.getIn([actionTypes.MONEY_INFO, 'data']))
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    info(){
        dispatch({
            type: actionTypes.MONEY_INFO
        })
    },
    pop(){
        dispatch(goBack())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)