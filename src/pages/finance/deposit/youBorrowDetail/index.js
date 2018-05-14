/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import {Link} from 'react-router'
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
       this.props.getEmptyContractsList()
    }
    render(){
        const{
            pop,
            data,
            params,
            push,
            pending,
            contractData
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
                   点击查看 {contractData&&contractData.data&&contractData.data.map((item,i)=>{
                   return <Link key={i} to={`/emptyTemplate/${item.hetong_type?item.hetong_type:0}?name=${encodeURIComponent(item.hetong_name)}`} >《{item.hetong_name}》</Link>
               })}
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
    contractData:  state.infodata.getIn(['GET_EMPTY_CONTRACTS_LIST',"data"]),
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getEmptyContractsList(){
        dispatch({
            type:'GET_EMPTY_CONTRACTS_LIST',
            params:[{product_type:'J'}]
        })
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