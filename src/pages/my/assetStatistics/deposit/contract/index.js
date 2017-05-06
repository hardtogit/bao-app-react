/**
 * Created by Administrator on 2017/4/26.
 */
import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import wrap from '../../../../../utils/pageWrapper'
import NewContract from '../../directInvest/securityPlan/newContract'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
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
        const {contract,pop}=this.props;
        let Dom=this.loadDom();
        if (contract){
            Dom=this.loadEndDom(contract.data)
        }
        return(<div style={style}>
            <NavBar onLeft={pop} >
                定存宝B计划合同
            </NavBar>
            {Dom}
        </div>)
    }
}
const style={
    position: 'absolute',
    left:'0px',
    top:'0px',
    height:'100%',
    width:'100%',
    overflow: 'auto',
    paddingTop:'44px'
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
     },
    pop(){
         dispatch(goBack())
    }
})
export default connect(data,dispatchFn)(wrap(index))
