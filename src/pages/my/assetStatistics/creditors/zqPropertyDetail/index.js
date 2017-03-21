/**
 * Created by wangdongfang on 17/3/20.
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
        return(<div><Details id={id} type={4}/></div>)
    }
}
export default wrap(Index)