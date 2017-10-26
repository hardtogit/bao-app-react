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
          return(<div>
              <Details {...this.props}  id={id} type={1}/>
          </div>)
      }
}
export default wrap(Index)