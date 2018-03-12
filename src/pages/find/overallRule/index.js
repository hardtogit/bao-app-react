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
        this.props.getVipStr();
    }
    loadEndDom=(data,note)=>{
        const {
            pop
        }=this.props;
        console.log(data);
        return(

                <div className={styles.messageContent}>
                    <div className={styles.tacket}>
                        <ul className={styles.ruleTable}>
                            <li className={styles.ruleTh}>
                                <span>年化待收金额(万)</span>
                                <span>级别</span>
                            </li>
                            {
                                data&&data.map((item,i)=>(
                                    <li key={i}>
                                        <span>{item.annual}</span>
                                        <span>{item.level}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            note&&note.map((item,i)=>(
                                <p key={i}>{item}</p>
                            ))
                        }
                    </div>
                </div>

            )
    }


    render(){
        const {
            pop,
            vipStrData
        }=this.props;

        let Dom;
        if(vipStrData&&vipStrData.code==100){
            Dom = this.loadEndDom(vipStrData.data.relation,vipStrData.data.note)
        }

        return(
            <div className={styles.findMessage} >
                <div className={styles.findMessageHeader}><NavBar title="整体规则" backgroundColor="#d0a15e" onLeft={pop}/>
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
        vipStrData: state.infodata.getIn(['GET_VIP_STR', 'data']),
    }
}
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    getVipStr(){
        dispatch({
            type:'GET_VIP_STR'
        })
    },
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)