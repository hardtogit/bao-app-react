/**
 * Created by wangdongfang on 17/2/27.
 */
import React,{Component} from 'react'
import Details from '../../../../../components/ztDetails/index'
import wrap from '../../../../../utils/pageWrapper'
class Index extends Component{
    render(){
        const {
            params:{
                id
            }
        }=this.props;
        return(<div><Details id={id} type={3}/></div>)
    }
}
export default wrap(Index)