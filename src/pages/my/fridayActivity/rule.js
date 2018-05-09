/**
 * Created by Administrator on 2017/2/8.
 */
import React from 'react';
import NavBar from '../../../components/NavBar/';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux'
import Box from '../../../components/ContentBox/index';
import style from './index.css'
class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style.bg}>
                <NavBar backgroundColor={"#00b0e6"} onLeft={this.props.pop}>活动规则</NavBar>
                <Box className={style.box}>
                    <ul className={style.ruleList}>
                        <li>1、活动时间：2017年10月24日起（截止日期以公告为准）；</li>
                        <li>2、累计新增出借资金计算时间：每周五至下周四；</li>
                        <li>3、累计新增出借资金=（每周出借资金）-（每周退出资金）；</li>
                        <li>4、以最高奖励为准，奖励不叠加享受；</li>
                        <li>5、出借项目复审未通过则不算入“累计新增出借资金”；</li>
                        <li>6、点币发放时间为每周五9点以后；</li>
                        <li>7、新手标，债权转让不参与此次活动。</li>
                    </ul>
                </Box>

            </div>
        )
    }
}
const datas=(state)=>({

})
const dispatchFn=(dispatch)=>({
    pop(){
        dispatch(goBack())
    }
})
export default connect(datas,dispatchFn)(Index)
