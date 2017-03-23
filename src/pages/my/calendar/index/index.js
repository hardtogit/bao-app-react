import React from 'react'
import NavBar from '../../../../components/NavBar/index'
import { Router, Route, hashHistory,Link} from 'react-router';
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import * as actionTypes from '../../../../actions/actionTypes'
import Days from '../days/index'
import styles from './index.css'
import createFragment from 'react-addons-create-fragment'
import Loading from '../../../../components/pageLoading/index'
import Box from "../../../../components/ContentBox/index"
import Utils from '../../../../utils/utils'
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
               year:undefined === this.props.params.year? new Date().getFullYear():this.props.params.year,
               month:undefined === this.props.params.month? new Date().getMonth()+1:this.props.params.month
        }
    }
    componentDidMount=()=>{
        this.props.detail([this.state.year,this.state.month]);
    };
    addMonth=()=>{
        let year = this.state.year;
        let month = Number(this.state.month);
        if(month+1>12){
            ++year;
            month=1;
        }else{
            ++month;
        }
        month<10?month="0"+month:month;
        this.setState({
            year:year,
            month:month
        });
        this.props.detail([year,month]);
    };
    minusMonth=()=>{
        let year = this.state.year;
        let month = Number(this.state.month);
        if(month-1<1){
            --year;
            month=12;
        }else{
            --month;
        }
        month<10?month="0"+month:month;
        this.setState({
                year:year,
                month:month
        });
        this.props.detail([year,month]);
    };
    getDays=(daysMoney)=>{
        let now = new Date(this.state.year,this.state.month-1,1);
        let year =  now.getFullYear();
        let month = now.getMonth()+1;
        let nowDay = new Date().getDate();
        let nowMonth = new Date().getMonth()+1;
        let nowYear = new Date().getFullYear();
        function DayNumOfMonth(Year,Month)
        {
            Month--;
            let d = new Date(Year,Month,1);
            d.setDate(d.getDate()+32-d.getDate());
            return (32-d.getDate());
        }
        let daysOfMonth = DayNumOfMonth(year,month);/*一月共计多少天*/
        let firstDayInWeek = new Date(year,month-1,1).getDay();/*当月第一天是周几*/
        let num=1;
        /*生成带金额的日历*/
        let days = [];
        for(let x=0;x<=5;x++){/*表示6排显示*/
            days[x] = [];
            for(let z=0;z<=6;z++){
                let current = createFragment({
                    day:"",/*日期*/
                    now:false,/*是否时间今天*/
                    money:""/*回款金额*/
                });
                if((x==0 && z<firstDayInWeek) || num>daysOfMonth){
                    current.day = "";
                }else{
                    (nowDay==num&&nowMonth==month&&year==nowYear)?current.now = true:"";
                    current.day = num;
                    for(let m in daysMoney){
                        if(m==num){
                            current.money = Utils.padMoney(daysMoney[m]);
                        }
                    }
                    ++num;
                }
                days[x].push(current);
            }
        }
        return days;
    };
    loadEndDom=(data)=>{
        return <div>
            <ul onClick={this.getDays} className={styles.times}>
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
            </ul>
            <p className={styles.choose}>
                <i onClick={this.minusMonth} className={styles.arrow_right}></i>
                <Link to={`/user/calendarMonths/${this.state.year}/${+this.state.month}`} >{this.state.year}年{+this.state.month}月<i className={styles.arrow_left}></i></Link>
                <i onClick={this.addMonth} className={styles.arrow_left}></i>
            </p>
            <Days days={this.getDays(data.day)}></Days>
            <div className={styles.money_info}>
                <p className={styles.title}>预计{this.state.month}月待回款（元）</p>
                <p className={styles.title_n}><span>待收本金（元）</span><span>待回收益（元）</span></p>
                <p className={styles.title_n}><span>{Utils.padMoney(data.profit_expire.amount)}</span><span>{Utils.padMoney(data.profit_expire.profit)}</span></p>
            </div>
            <div className={styles.money_info}>
                <p className={styles.title}>{+this.state.month}月已到账（元）</p>
                <p className={styles.title_n}><span>已到账本金（元）</span><span>已到账收益（元）</span></p>
                <p className={styles.title_n}><span>{Utils.padMoney(data.profit_arrival.amount)}</span><span>{Utils.padMoney(data.profit_arrival.profit)}</span></p>
            </div>
        </div>
    };
    render() {
        let Dom;
        if(false===this.props.info){
            Dom = <Loading/>;
        }else{
            Dom = this.loadEndDom(this.props.info)
        }
        return (
            <div className={styles.bg}>
                <NavBar  onLeft={this.props.pop}>回款日历</NavBar>
                <Box>
                    {
                       Dom
                    }
                </Box>
            </div>
        )
    }
}
const detailModel = (data)=>{
    if(data && data.code===100){
        for(let i in data.data){
            return data.data[i];
        }
    }
    return false;
};
const mapStateToProps = (state) => {
    return {
        info:detailModel(state.infodata.getIn([actionTypes.CALENDAR, 'data']),state)
    }
};

const mapDispatchToProps = (dispatch) => ({
    detail(params){
        dispatch({
            type: actionTypes.CALENDAR,
            params:params
        })
    },
    pop(){
        dispatch(goBack())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)