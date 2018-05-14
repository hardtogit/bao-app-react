/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import arrowRight from '../../../../assets/images/arrow2.png' //图标
import PageLoading from '../../../../components/pageLoading'
import BaseText from '../../../../components/BaseText'
import utils from '../../../../utils/utils'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
      const {
         params:{
             id
         },
         getDetail,
         getFillContractsList
      }=this.props;
        getDetail(id);
        getFillContractsList(this.props.location.query.id,'H')
    }
    goProductDetail(id,money){
        const {push}=this.props;
        push(`/user/wisdomMyMain/${id}?money=${money}`)
    }
    loadEnd=()=>{
        const{
            fee,
            returnInterest,
            borrow_id,
            money,
            record
        }=this.props.data.data;
        let{
            name,
            rate,
            month
        }=this.props.location.query;
        let{contractsFillList}=this.props;
        return(
        <div>
            <div className={styles.listBoxOne} onClick={()=>{this.goProductDetail(borrow_id,money)}}>
                <h2>{name}</h2>
                <p><span>{month}个月</span><span>参考年回报率{rate}</span></p>
                <img src={arrowRight}/>
            </div>
            <div className={styles.box}>
                <div className={styles.item}>
                    <div className={styles.left}>转让金额</div>
                    <div className={styles.right}>{money}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.left}>预付利息</div>
                    <div className={styles.right}>{returnInterest}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.left}>手续费</div>
                    <div className={styles.right}>{fee}</div>
                </div>
                {contractsFillList&&contractsFillList.data.length!=0&&<BaseText containerStyle={{paddingLeft:0}} label='服务协议' borderType="four" onClick={()=>{this.props.push(`/fillList/${this.props.location.query.id}/H`)}}></BaseText>}
            </div>
            <div className={styles.title}>
                回款记录
            </div>
            <div>
                <div className={styles.boxTwo}>
                    {record.map((item,i)=>(
                        <div className={styles.backBox} key={i}>
                        <div className={styles.backTitle}>期数：{item.nper}</div>
                        <div className={styles.left}>
                        <div className={styles.circle}></div>
                        <p className={styles.label}>{item.status==1?"已回款":"待回款"}</p>
                        <p>{utils.formatDate('yyyy-MM-dd',new Date(item.time*1000))}</p>
                        </div>
                        <div className={styles.right}>
                        <div className={styles.circle}></div>
                        <p className={styles.label}>回款本金：{item.principal}</p>
                        <p>回款利息：{item.profit}</p>
                        </div>
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
        )
    }

    render(){
        const{
            pop,
            data
            }=this.props;
        let Dom;
        if(data){
            Dom=this.loadEnd()
        }else{
            Dom=<PageLoading></PageLoading>
        }
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  资产详情
              </NavBar>
               {Dom}
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
    data:state.infodata.getIn(['MY_WISDOM_DETAIL','data']),
    contractsFillList:state.infodata.getIn(['GET_FILL_CONTRACTS_LIST','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    getDetail(id){
        dispatch({
            type:'MY_WISDOM_DETAIL',
            params:[id]
        })
    },
    push(url){
        dispatch(push(url))
    },
    getFillContractsList(id,type){
        dispatch({
            type:'GET_FILL_CONTRACTS_LIST',
            params:[{product_id:id,product_type:type}]
        })
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)