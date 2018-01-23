import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import v3 from '../../../assets/images/find/3j.png'
import v4 from '../../../assets/images/find/4j.png'
import v5 from '../../../assets/images/find/5j.png'
import v6 from '../../../assets/images/find/6j.png'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class rateTicketRule extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getPrivilegeProfit();
    }
    loadEndDom=(data)=>{
        const {
            pop
        }=this.props;
        const{
            title,
            info,
            rule_list
        }=data;
        return(
            <div className={styles.findMessage} >
                <div className={styles.findMessageHeader}><NavBar title={title} backgroundColor="#d0a15e" onLeft={pop}/>
                </div>
                <div className={styles.messageContent}>
                    <div className={styles.tacket}>
                        <ul className={styles.ruleTable}>
                            <li className={styles.ruleTh}>
                                <span>期限(月)</span>
                                <span><img src={v3}/></span>
                                <span><img src={v4}/></span>
                                <span><img src={v5}/></span>
                                <span><img src={v6}/></span>
                            </li>
                            {
                                rule_list&&rule_list.map((item,i)=>(
                                    <li key={i}>
                                        <span>{item.lable_name}</span>
                                        <span>{item.v3}</span>
                                        <span>{item.v4}</span>
                                        <span>{item.v5}</span>
                                        <span>{item.v6}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            info&&info.map((item,i)=>(
                                <p key={i}>{item}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            )
    }


    render(){
        const {
            pop,
            vipAnnualData
        }=this.props;
        if(vipAnnualData){
            console.log(vipAnnualData.data.coupon.rule_list)
        }
        const{
            id
        }= this.props.params;
        console.log(id)
        let Dom;
        if(vipAnnualData){
            if(id == 1){
                Dom = this.loadEndDom(vipAnnualData.data.coupon)
            }
            if(id ==2 ){
                Dom = this.loadEndDom(vipAnnualData.data.voucher)
            }
        }

        return(
            <div>
                {
                    Dom
                }
            </div>

        )
    }
}
const initMymassege=(state,own)=>{
    return{
        vipAnnualData: state.infodata.getIn(['GET_PRIV_PROFIT', 'data']),
    }
}
const initMymassegefn=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    getPrivilegeProfit(){
        dispatch({
            type:'GET_PRIV_PROFIT'
        })
    },
})
export default connect(initMymassege,initMymassegefn)(rateTicketRule)