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
import ok from '../../../../assets/images/ok.png'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
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
            params,
            push,
            pending
            }=this.props
        let Dom=<Loading></Loading>
        if(!pending&&data){
           Dom= <div><div className={styles.container}>
                <Panel ownStyle={{marginBottom:'10px'}} title="借款人信息">
                    <div className={styles.item} style={{fontSize:'14px'}}>
                        <div className={styles.left}>姓名：</div>
                        <div className={styles.right}>{data.data.real_name}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>身份证：</div>
                        <div className={styles.right}>{data.data.identity}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>性别：</div>
                        <div className={styles.right}>{data.data.sex}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>年龄：</div>
                        <div className={styles.right}>{data.data.age}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>婚姻状况：</div>
                        <div className={styles.right}>{data.data.mimarry}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>教育程度：</div>
                        <div className={styles.right}>{data.data.mieducation}</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>户籍地址：</div>
                        <div className={styles.right}>{data.data.address}</div>
                    </div>
                </Panel>
               </div>
               <div className={styles.container}>
               <Panel ownStyle={{marginBottom:'10px'}} title="还款来源">
                   {data.data.repaymentSource}
               </Panel>
                    </div>
                <div className={styles.container}>
               <Panel ownStyle={{marginBottom:'10px'}} title="风控认证">
                   <div className={styles.danger}>{(()=> {
                       let arr=[];
                       data.data.certification.map((value,i)=>{
                          arr.push(<div key={i} className={styles.item}>{value} <img src={ok} alt=""/></div>)
                       })
                       return arr
                   })()}
                   </div>
               </Panel>
                </div>
                <div className={styles.container}>
               <Panel ownStyle={{marginBottom:'10px'}} title="协议范本">
                   点击查看 <span onClick={()=>{push('/borrowContract/'+params.id+'/0')}} className={styles.book}>《借款合同》</span>和 <span onClick={()=>{push('/dangerContract')}} className={styles.book}>《风险提示》</span>
               </Panel>
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
const mapStateToProps=(state)=>({
    data:state.infodata.getIn(['YOU_BID_DETAIL','data']),
    pending:state.infodata.getIn(['YOU_BID_DETAIL','pending']),
})
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getBorrowData(id){
        dispatch({
            type:'YOU_BID_DETAIL',
            params:[id]
        })
    },
    push(url){
        dispatch(push(url))
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(Index)