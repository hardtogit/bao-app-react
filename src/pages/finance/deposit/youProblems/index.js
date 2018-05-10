/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import SwitchPanel from '../../../../components/switchPanel'
import Loading from '../../../../components/pageLoading'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    componentDidMount(){
       this.props.gitProblems()
    }
    render(){
        const{
            pop,
            data,
            pending
            }=this.props
        let Dom=<Loading></Loading>
        if(!pending){
           Dom=<div className={styles.container}>
               {data && data.data.map((value,i)=>{
                   return <div key={i}><SwitchPanel padding={{paddingLeft:'0px'}} title={value.title} > <p style={{lineHeight:'1.6'}}>{value.content}</p></SwitchPanel></div>
               })
               }
           </div>
        }
        return(
           <div className={styles.root}>
              <NavBar onLeft={pop}>
                  常见问题
              </NavBar>
               {
                   Dom
               }
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    data:state.infodata.getIn(['YOU_PROBLEMS','data']),
    pending:state.infodata.getIn(['YOU_PROBLEMS','pending']),
})
const mapDispatchToProps=(dispatch)=>({
    pop(){
         dispatch(goBack())
    },
    gitProblems(){
        dispatch({
            type:'YOU_PROBLEMS'
        })
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(Index)