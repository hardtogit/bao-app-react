import React from 'react'
import NavBar from '../../../components/NavBar/index'
import styles from './index.css';
import ReactEcharts from 'echarts-for-react';
import Util from "../../../utils/utils";
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info:[
                {
                    name:"账户余额",
                    value:20.00
                },
                {
                    name:"零钱宝",
                    value:20.00
                },
                {
                    name:"定存宝待收本息",
                    value:20.00
                },
                {
                    name:"直投项目待收本息",
                    value:20.00
                },
                {
                    name:"债权转让待收本息",
                    value:20.00
                }
            ]
        }
    }
    getOtion=()=>{
        /*let data = [];*/
  /*      for(let item in this.state.info){
            if("lcj"===item)
                continue
            else
                data.push(this.state.info[item]);
        }*/
        return  {
            tooltip:{
                show:true
            },
            color:[
                "#4cafff",
                "#763cff",
                "#fa394c",
                "#ffaf32",
                "#2ce4a6"
            ],
            series: [{
                name: '资产分析',
                type: 'pie',
                label:{
                    normal:{
                        show:false
                    }
                },
                radius:["55%","100%"],
                hoverAnimation:false,
                data:this.state.info
            }]
        };
    }
    render() {
        return (
            <div className={styles.bg}>
                <NavBar>资产分析</NavBar>
                <div className={styles.money +" "+styles.clearfix}>
                    <div className={styles.left}>
                        <p>历史累计收益</p>
                        <p>7.24</p>
                    </div>
                    <div className={styles.right}>
                        <p>资产总值</p>
                        <p>52,335.62</p>
                    </div>
                    <span></span>
                </div>
                <div className={styles.analysis}>
                    <ReactEcharts
                        option={this.getOtion()}
                        style={{height:200}}
                    />
                    <p className={styles.name}>资产分析</p>
                    <p className={styles.total}>资产总值</p>
                    <p className={styles.total_num}>{Util.padMoney(this.state.info[0].value+this.state.info[1].value+this.state.info[2].value+this.state.info[3].value+this.state.info[4].value+this.state.info[0].value)}</p>
                    <ul className={styles.money_detail}>
                        <li><span className={styles.zh}></span><span className={styles.m_m}>账户余额</span><span className={styles.m_i}>57.57</span></li>
                        <li><span className={styles.lq}></span><span className={styles.m_m}>零钱宝</span><span className={styles.m_i}>57.57</span></li>
                        <li><span className={styles.dc}></span><span className={styles.m_m}>定存宝待收本息</span><span className={styles.m_i}>57.57</span></li>
                        <li><span className={styles.zt}></span><span className={styles.m_m}>直投项目待收本息</span><span className={styles.m_i}>5333337.57</span></li>
                        <li><span className={styles.zq}></span><span className={styles.m_m}>债权转让待收本息</span><span className={styles.m_i}>57.57</span></li>
                    </ul>
                    <p className={styles.lcj}>理财金</p>
                    <p className={styles.lcj_m}>12000.00</p>
                </div>
            </div>
        )
    }
}
