/**
 * Created by wangdongfang on 17/3/22.
 */
import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import styles from './index.less'
import Icon from '../../../../../assets/images/zricon.png'
import classnames from 'classnames'
import Load from '../../../../../components/pageLoading'
import {connect} from 'react-redux'
import Tipbar from '../../../../../components/Tipbar/index'
import Alert from '../../../../../components/Dialog/alert'
import Success from '../../../../../components/Dialog/success'
import {push,goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            disabled:true,
            val:'',
            money:0.00
        }
    }
    componentDidMount(){
        const {
            get,
            params:{
                id
            }
        }=this.props;
        get(id);
    }
    alert=()=>{
        this.refs.alert.show({
            content:'投资人在90天以上可以进行债权转让，' +
            '投资人转让直投标的统一收取2%的债权转让管理费，具体金额以债权转让页面显示为准，债权转让管理费在成交后直接从成交金额中扣除，不成交平台不向用户收取转让管理费。',
            okText:'知道了'
        })
    }
    change=(e)=>{
        const val=e.target.value,
              reg=/^\d+(\.\d{1,2})?$/,
            {infoData}=this.props;
        if (!reg.test(val)){
            this.refs.tipbar.open('请输入正确的格式!')
            this.setState({
                disabled:true,
                money:0.00
            })
        }else if (val>parseFloat(infoData.data.amount)){
            this.refs.tipbar.open('转让价格不能高于转让价值！')
            this.setState({
                disabled:true,
                money:0.00
            })
        }else if (val<50*0.85){
            this.refs.tipbar.open('这让率不能低于15%!')
            this.setState({
                disabled:true,
                money:0.00
            })
        }
        else {
            this.setState({
                disabled:false,
                money:val-1+parseFloat(infoData.data.transfer_collection_interest)
            })
        }

        this.setState({
            val
        })
    }
    send=()=>{
        const {
            params:{
                id
            }
        }=this.props,
        {money}=this.state;
       this.props.send(id,money)
    }
    componentWillReceiveProps=(next)=>{
        const {resDate,push}=next;
        if (resDate){
            if (resDate.code==300){
                this.refs.alert.show({
                    title: '转让失败',
                    okText: '返回',
                })
            }else if (resDate.code==100){
                this.refs.success.show({
                    text: '转让成功',
                    callback: () => {push('/user/projectRecorde')},
                })
            }
        }
    }
    componentWillUnmount(){
        this.props.clear();
    }
    loadDom=()=>{
        return(<Load/>)
    }
    loadEndDom=()=>{
        const {
            infoData:{
                data
            }
        }=this.props,
            {amount,months_left,transfer_collection_interest,name,account_overdue}=data,
            {val,disabled,money}=this.state;
        return(<div>
            <div className={styles.content}>
                <div className={styles.information}>
                    <div className={styles.title}>
                        <img src={Icon}/>
                        <span>{name}</span>
                    </div>
                    <div className={styles.detailed}>
                        <div className={styles.detailedBox}>
                            <p className={styles.Text}>
                                持有金额
                            </p>
                            <p className={styles.money}>
                                {amount}元
                            </p>
                        </div>
                        <div className={styles.detailedBox}>
                            <p className={styles.Text}>
                                剩余期限
                            </p>
                            <p className={styles.money}>
                                {months_left}个月
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.InputBox}>
                    <div className={classnames(styles.one,styles.borderBottom)}>
                       <span className={styles.label}>
                        转让价值
                       </span>
                        <span className={styles.controll}>50.00</span>
                        <span className={styles.company}>元/份</span>
                    </div>
                    <div className={styles.one}>
                       <span className={classnames(styles.label,styles.colorB)}>
                        转让价格
                       </span>
                        <span className={styles.controll}>
                           <input className={styles.Input} type="text" placeholder="不得高于转让价值" onChange={this.change} value={val}/>
                       </span>
                        <span className={styles.company}>元/份</span>
                    </div>
                </div>
                <p className={styles.describe}>
                    为促进转让进度,可折价转让,折价率为0%-15%,折价率越高，越容易转让成功。
                </p>
                <div className={styles.describeList}>
                    <div className={styles.describeOne} onClick={this.alert}>
                        <span className={styles.label}>手续费<span>（元）</span></span>
                        <span className={styles.textR}>1.00</span>
                    </div>
                    <div className={styles.describeOne}>
                        <span className={styles.label}>转让待收利息<span>（元）</span></span>
                        <span className={styles.textR}>{transfer_collection_interest}</span>
                    </div>
                    <div className={styles.describeOne}>
                        <span className={styles.label}>扣除抵用券面额<span>（元）</span></span>
                        <span className={styles.textR}>{account_overdue}</span>
                    </div>
                    <div className={styles.describeOne}>
                        <span className={styles.label}>实际到账金额<span>（元）</span></span>
                        <span className={styles.textR}>{money}</span>
                    </div>
                </div>
            </div>
            <button className={styles.buttom} disabled={disabled} onClick={this.send}>
                确认转让
            </button>
        </div>)
    }
    go=()=>{
        this.props.push('/user/zqTransferRule')
    }
    render(){
        const {infoData,pop}=this.props;
         let Dom=this.loadDom(),
             gzDom;
         if (infoData){
             Dom=this.loadEndDom();
             if (infoData.data.isTransfer==1){
                 gzDom=<span>规则</span>
             }
         }
        return(<div className={styles.bg}>
            <NavBar onLeft={pop} rightNode={gzDom} onRight={gzDom&&this.go||null}>债权转让</NavBar>
            {Dom}
            <Tipbar ref="tipbar"/>
            <Alert ref="alert"/>
            <Success ref="success"/>
        </div>)
    }
}
const datas=(state)=>({
     infoData:state.infodata.getIn(['DIRECT_INVEST_PROPERTY_DETAIL','data']),
     resDate:state.infodata.getIn(['DIRECT_INVEST_TRANSFER','data'])
})
const dispatchFn=(dispatch)=>({
      get(id){
          dispatch({
              type:'DIRECT_INVEST_PROPERTY_DETAIL',
              params:[id]
          })
      },
    send(id,amount){
          dispatch({
              type:'DIRECT_INVEST_TRANSFER',
              params:[{
                  id,
                  amount
              }]
          })
    },
    clear(){
        console.log('qingle ')
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'DIRECT_INVEST_TRANSFER'
        })
    },
    push(url){
        dispatch(push(url))
    },
    pop(){
        dispatch(goBack())
    }
})
export default connect(datas,dispatchFn)(Index)