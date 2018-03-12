import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import Loading from '../../../components/pageLoading'
import classNames from 'classnames'
import Scroll from '../../../components/scroll'
import ticket from '../../../assets/images/find/ticket.png'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:0,
        }
    }
    componentWillMount(){
        this.props.getPrivilegeBasic();
    }
    changeBar=(index)=>{
        this.setState({index});
    };
    loadingDom(){
        return(<Loading/>)
    }
    loadEndDom(data){
        const{
            birthday,
            holiday,
            mall,
            withdrawal
        }=data;
        const {
            index
        }=this.state;
        return(
            <div className={styles.messageContent}>
                <div className={styles.tacket}>
                    <ul className={styles.titleBar}>
                        <li className={index == 0&&styles.current||""} onClick={()=>{this.changeBar(0)}}>生日献礼</li>
                        <li className={index == 1&&styles.current||""} onClick={()=>{this.changeBar(1)}}>节日礼包</li>
                        <li className={index == 2&&styles.current||""} onClick={()=>{this.changeBar(2)}}>商城折扣</li>
                        <li className={index == 3&&styles.current||""} onClick={()=>{this.changeBar(3)}}>免费提现</li>
                    </ul>
                    <div className={index == 0 &&styles.has||styles.no}>
                        <table className={styles.ruleTable}>
                            <tr><td>等级</td><td>现金红包</td></tr>
                            <tr><td>v1</td><td>{birthday.rule_list.v1}</td></tr>
                            <tr><td>v2</td><td>{birthday.rule_list.v2}</td></tr>
                            <tr><td>v3</td><td>{birthday.rule_list.v3}</td></tr>
                            <tr><td>v4</td><td>{birthday.rule_list.v4}</td></tr>
                            <tr><td>v5</td><td>{birthday.rule_list.v5}</td></tr>
                            <tr><td>v6</td><td>{birthday.rule_list.v6}</td></tr>
                        </table>
                        <p className={styles.infoTxt}>
                            {birthday.info}
                        </p>
                    </div>
                    <div className={index == 1 &&styles.has||styles.no}>
                        <table className={styles.ruleTable}>
                            <tr><td>等级</td><td>端午</td><td>中秋</td><td>春节</td></tr>
                            <tr><td>v1</td><td>{holiday.rule_list.dw.v1}</td><td>{holiday.rule_list.zq.v1}</td><td>{holiday.rule_list.cj.v1}</td></tr>
                            <tr><td>v2</td><td>{holiday.rule_list.dw.v2}</td><td>{holiday.rule_list.zq.v2}</td><td>{holiday.rule_list.cj.v2}</td></tr>
                            <tr><td>v3</td><td>{holiday.rule_list.dw.v3}</td><td>{holiday.rule_list.zq.v3}</td><td>{holiday.rule_list.cj.v3}</td></tr>
                            <tr><td>v4</td><td>{holiday.rule_list.dw.v4}</td><td>{holiday.rule_list.zq.v4}</td><td>{holiday.rule_list.cj.v4}</td></tr>
                            <tr><td>v5</td><td>{holiday.rule_list.dw.v5}</td><td>{holiday.rule_list.zq.v5}</td><td>{holiday.rule_list.cj.v5}</td></tr>
                            <tr><td>v5</td><td>{holiday.rule_list.dw.v6}</td><td>{holiday.rule_list.zq.v6}</td><td>{holiday.rule_list.cj.v6}</td></tr>
                        </table>
                        <p className={styles.infoTxt}>
                            {holiday.info}
                        </p>
                    </div>
                    <div className={index == 2 &&styles.has||styles.no}>
                        <table className={styles.ruleTable}>
                            <tr><td>等级</td><td>商场折扣</td></tr>
                            <tr><td>v1</td><td>{mall.rule_list.v1==1&&"无"||mall.rule_list.v1*10+"折"}</td></tr>
                            <tr><td>v2</td><td>{mall.rule_list.v2==1&&"无"||mall.rule_list.v2*10+"折"}</td></tr>
                            <tr><td>v3</td><td>{mall.rule_list.v3==1&&"无"||mall.rule_list.v3*10+"折"}</td></tr>
                            <tr><td>v4</td><td>{mall.rule_list.v4==1&&"无"||mall.rule_list.v4*10+"折"}</td></tr>
                            <tr><td>v5</td><td>{mall.rule_list.v5==1&&"无"||mall.rule_list.v5*10+"折"}</td></tr>
                            <tr><td>v6</td><td>{mall.rule_list.v6==1&&"无"||mall.rule_list.v6*10+"折"}</td></tr>
                        </table>
                        <p className={styles.infoTxt}>
                            {mall.info}
                        </p>
                    </div>
                    <div className={index == 3 &&styles.has||styles.no}>
                        <table className={styles.ruleTable}>
                            <tr><td>等级</td><td>免费提现</td></tr>
                            <tr><td>普通</td><td>{withdrawal.rule_list.v0}次</td></tr>
                            <tr><td>v1</td><td>{withdrawal.rule_list.v1}次</td></tr>
                            <tr><td>v2</td><td>{withdrawal.rule_list.v2}次</td></tr>
                            <tr><td>v3</td><td>{withdrawal.rule_list.v3}次</td></tr>
                            <tr><td>v4</td><td>{withdrawal.rule_list.v4}次</td></tr>
                            <tr><td>v5</td><td>{withdrawal.rule_list.v5}次</td></tr>
                            <tr><td>v6</td><td>{withdrawal.rule_list.v6}次</td></tr>
                        </table>
                        <p className={styles.infoTxtWithdraw}>
                            {withdrawal.info}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        const {
            pop,
            privilegeBasicData
        }=this.props;

        let Dom;
        if(privilegeBasicData){
            Dom = this.loadEndDom(privilegeBasicData.data)
        }else{
            Dom = this.loadingDom()
        }

        return(
             <div className={styles.findMessage} >
             <div className={styles.findMessageHeader}><NavBar title="领取规则" backgroundColor="#d0a15e" onLeft={pop}/>
             </div>
                 {
                     Dom
                 }

            </div>
        )
    }
}
const mapStateToProps=(state,own)=>{
    return{
        privilegeBasicData: state.infodata.getIn(['GET_PRIV_BASIC', 'data']),
    }
}
const mapDispatchToProps=(dispatch,own)=>({
    getPrivilegeBasic(){
        dispatch({
            type:'GET_PRIV_BASIC'
        })
    },
    pop(){
        dispatch(goBack())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)