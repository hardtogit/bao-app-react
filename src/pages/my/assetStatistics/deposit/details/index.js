/**
 * Created by Administrator on 2017/4/25.
 */
import React,{Component} from 'react'
import Details from '../../../../../components/ztDetails/index'
import wrap from '../../../../../utils/pageWrapper'
class Index extends Component{
    render(){
        const {
            params:{
                id,
                type
            }
        }=this.props;
        return(<div>
            <Details id={id} type={5} index={type}/>
        </div>)
    }
}
export default wrap(Index)