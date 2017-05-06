/**
 * Created by Administrator on 2017/4/26.
 */
import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import wrap from '../../../../../utils/pageWrapper'
import NewContract from '../../directInvest/securityPlan/newContract'
import {connect} from 'react-redux'
import Loading from '../../../../../components/pageLoading'
class index extends Component{
    componentDidMount(){
        const {params:{id},load}=this.props;
        load(id)
    }
    loadDom=()=>{
         return <Loading/>
    }
    loadEndDom=(data)=>{
        return <NewContract {...data} lx={0}/>
    }
    render(){
        const {contract}=this.props;
        let Dom=this.loadDom();
        if (contract){
            Dom=this.loadEndDom(contract.data)
        }
        return(<div>
            <NavBar>
                定存宝B计划合同
            </NavBar>
            {Dom}
        </div>)
    }
}
const data=(state)=>(
    {
        contract:state.infodata.getIn(['DEPOSITBS_CONTRACT','data'])
    }
)
const dispatchFn=(dispatch)=>({
     load(id){
         dispatch({
             type:'DEPOSITBS_CONTRACT',
             params:[id]
         })
     }
})
export default connect(data,dispatchFn)(wrap(index))
