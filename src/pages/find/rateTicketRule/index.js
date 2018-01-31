import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import v3 from '../../../assets/images/find/3j.png'
import v4 from '../../../assets/images/find/4j.png'
import v5 from '../../../assets/images/find/5j.png'
import v6 from '../../../assets/images/find/6j.png'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class Index extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getPrivilegeProfit();
    }
    ruleTableDom=(data)=>{
        return(
            <ul className={styles.ruleTable}>
                <li className={styles.ruleTh}>
                    <span>期限(月)</span>
                    <span><img src={v3}/></span>
                    <span><img src={v4}/></span>
                    <span><img src={v5}/></span>
                    <span><img src={v6}/></span>
                </li>
                {
                    data&&data.map((item,i)=>(
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
        )
    }
    loadEndDom=(data,id)=>{
        const {
            pop
        }=this.props;
        const{
            title,
            info,
            rule_list
        }=data;
        let ruleTable;
        if(id == 1){
            ruleTable =this.ruleTableDom(rule_list)
        }
        return(
            <div className={styles.findMessage} >
                <div className={styles.findMessageHeader}><NavBar title={title} backgroundColor="#d0a15e" onLeft={pop}/>
                </div>
                <div className={styles.messageContent}>
                    <div className={styles.tacket}>
                        {
                            ruleTable
                        }
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
        let Dom;
        if(vipAnnualData){
            if(id == 1){
                Dom = this.loadEndDom(vipAnnualData.data.coupon,id)
            }
            if(id ==2 ){
                Dom = this.loadEndDom(vipAnnualData.data.voucher,id)
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
const mapStateToProps=(state,own)=>{
    return{
        vipAnnualData: state.infodata.getIn(['GET_PRIV_PROFIT', 'data']),
    }
}
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    getPrivilegeProfit(){
        dispatch({
            type:'GET_PRIV_PROFIT'
        })
    },
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)