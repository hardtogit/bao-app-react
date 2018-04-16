/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import BaseText from '../../../components/BaseText'
class Index extends Component{
    constructor(props) {//构造器
        super(props);
        this.state = {
            isOpen: false
        }
    }
    componentDidMount(){
        const{
            getFillContractsList,
            params:{
                type,
                id
            }
        }=this.props;
        getFillContractsList(id,type)
    }
    handleClick=(id)=>{
        const {push}=this.props;
        push(`/fillDetail/${id}`);
    };
    render(){
        const{
            pop,
            contractsFillList
            }=this.props;
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  协议列表
              </NavBar>
               {contractsFillList&&contractsFillList.data.map((item,i)=>{
                   return(
                       <BaseText label={item.hetong_name} borderType='four' onClick={()=>{this.handleClick(item.id)}}> </BaseText>
                   )
               })
               }
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    contractsFillList:state.infodata.getIn(['GET_FILL_CONTRACTS_LIST','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getFillContractsList(id,type){
        dispatch({
            type:'GET_FILL_CONTRACTS_LIST',
            params:[{product_id:id,product_type:type}]
        })
    },
    push(url){
        dispatch(push(url))
    }

});
export default connect(mapStateToProps,mapDispatchToProps)(Index)