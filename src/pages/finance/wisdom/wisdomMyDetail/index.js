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
import {goBack} from 'react-router-redux'
import arrowRight from '../../../../assets/images/arrow2.png' //图标
import PageLoading from '../../../../components/pageLoading'
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
         getDetail
      }=this.props;
        getDetail(id);
    }
    componentDidMount(){
     //组件渲染完成时调用
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }
    loadEnd=()=>{
        const{
            fee,
            returnInterest,
            interest,
            money,
            record
        }=this.props.data.data;
        let{
            name,
            rate,
            month
        }=this.props.location.query

        return(
        <div>
            <div className={styles.listBoxOne} onClick={()=>{this.goProductDetail(this.props.id)}}>
                <h2>{name}</h2>
                <p><span>{month}个月</span><span>约定年化收益率{rate}</span></p>
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
                        <p className={styles.label}>待回款</p>
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
    data:state.infodata.getIn(['MY_WISDOM_DETAIL','data'])
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
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)