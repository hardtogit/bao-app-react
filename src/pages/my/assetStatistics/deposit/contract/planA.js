/**
 * Created by Administrator on 2017/5/5.
 */
import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import wrap from '../../../../../utils/pageWrapper'
import NewContract from '../../directInvest/securityPlan/newContract'
class index extends Component{
    render(){
        return(<div>
            <NavBar>
                定存宝A计划合同
            </NavBar>
            <NewContract/>
        </div>)
    }
}
export default wrap(index)
