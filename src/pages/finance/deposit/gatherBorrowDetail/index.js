/**
 * Created by wangdongfang on 17/2/7.
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import SwitchPanel from '../../../../components/switchPanel'
import Loading from '../../../../components/pageLoading'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Panel extends Component{
    render(){
     return <div className={styles.panel} style={this.props.ownStyle}>
         <div className={styles.panelHeader}>{this.props.title}</div>
         <div className={styles.panelBody}>
             {this.props.children}
         </div>
     </div>
    }
}

class Index extends Component{
    componentDidMount(){
       this.props.getBorrowData(this.props.params.id)

    }
    render(){
        const{
            pop,
            data,
            pending
            }=this.props
        let Dom=<Loading></Loading>
        if(!pending){
           Dom= <div><div className={styles.container}>
                <Panel ownStyle={{marginBottom:'10px'}} title="借款人信息">
                </Panel>
               </div>
               <div className={styles.container}>
               <Panel ownStyle={{marginBottom:'10px'}} title="还款来源">deda</Panel>
                    </div>
                <div className={styles.container}>
               <Panel ownStyle={{marginBottom:'10px'}} title="风控认证">deda</Panel>
                </div>
                <div className={styles.container}>
               <Panel ownStyle={{marginBottom:'10px'}} title="协议范本">deda</Panel>
                </div>
           </div>


        }
        return(
           <div className={styles.root}>
              <NavBar onLeft={pop}>
                  借款详情
              </NavBar>
               {
                   Dom
               }
           </div>
        )
    }
}
const Datas=(state)=>({
    data:state.infodata.getIn(['GATHER_BID_DETAIL','data']),
    pending:state.infodata.getIn(['GATHER_BID_DETAIL','pending']),
})
const DispatchFn=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getBorrowData(id){
        dispatch({
            type:'GATHER_BID_DETAIL',
            params:[id]
        })
    }

})
export default connect(Datas,DispatchFn)(Index)