/**
 * Created by xiangguo .
 * time:2018/4/3 0003.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'
import {Link} from 'react-router'
import Alert from '../../../../components/Dialog/alert'
import LoadingButton from '../../../../components/LoadingButton'
import BaseButton from '../../../../components/BaseButton'
import PageLoading from '../../../../components/pageLoading'
import Education from '../../../../components/Dialog/education'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false,
            disable:true,
            submitting:false,
            checkBox:false,
        }
    }
    static defaultProps = {//设置初始props
    };
    componentWillMount(){
        this.props.get(this.props.params.productId);
    }
    componentDidMount(){
        //组件渲染完成时调用
        this.props.getEmptyContractsList();
        this.props.getEducationInfo()
    }
    //是否阅读合同
    ifScan=(e)=>{
        if(this.state.checkBox){
            this.setState({
                checkBox:false
            })
        }else{
            this.setState({
                checkBox:true
            })
        }
    }
    componentWillReceiveProps(nextProps){
        const{data,userData,goBankData}=nextProps;
        //生成订单后跳转
        if(goBankData&&goBankData.code==100){
            this.props.clearData("GO_BANK_PAGE");
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
        }else if(goBankData&&goBankData.code!=100){
            this.props.clearData("GO_BANK_PAGE");
            this.refs.alert.show({content:'订单生成失败！',okText:'确定'});
            this.setState({
                submitting:false
            })
        }
        if(data&&userData){
            if(parseFloat(userData.data.balance)>=parseFloat(data.data.totalMoney)){
                this.setState({
                    disable:false
                })
            }
        }
    }
    componentWillUnmount(){
        //组件将要被移除时调用
    }
    endDom=()=>{
        const{
            data:{
                data:{
                    title,
                    rate,
                    interest,
                    money,
                    returnInterest,
                    fee,
                    totalMoney,
                }
            },
            userData:{
                data:{
                    balance
                }
            },
            contractData
        }=this.props;
        let flag=true;
        if(this.state.disable){
        }else{
            if(this.state.checkBox){
                flag=false
            }else{
                flag=true
            }
        }


        return <div>
            <div className={styles.title}>
                出借项目：{title} 年化利率（{rate}%）
            </div>
            <div className={styles.block}>
                <div className={styles.line}><div className={styles.label}>参考回报（元）</div><div className={styles.value}>{interest}</div></div>
                <div className={styles.line}><div className={styles.label}>转让价格（元）</div><div className={styles.value}>{money}</div></div>
                <div className={styles.line}><div className={styles.label}>预付利息（元）</div><div className={styles.value}>{returnInterest}</div></div>
                <div className={styles.line}><div className={styles.label}>手续费（元）</div><div className={styles.value}>{fee}</div></div>
            </div>
            <div className={styles.bar}>
                <div className={styles.left}>实际支付（元）</div>
                <div className={styles.right}>{totalMoney}</div>
            </div>
            <div className={styles.warm}>注：智享计划只能全额出借，且不能转让</div>
            <div>
                <div className={styles.item}>
                    <div className={styles.left}>存管账户余额</div>
                    <div className={styles.right}><span className={styles.num}>{balance}元</span><span className={styles.tip}>{this.state.disable&&"(余额不足)"}</span></div>
                </div>
            </div>
            <div className={styles.links}><input onClick={this.ifScan} type="checkbox" checked={this.state.checkBox}/>  我已阅读并同意签署{contractData&&contractData.data.map((item,i)=>{
                return <Link key={i} to={`/emptyTemplate/${item.hetong_type?item.hetong_type:0}?name=${encodeURIComponent(item.hetong_name)}`} className={styles.protocol}>《{item.hetong_name}》</Link>
            })}</div>
            <div className={styles.btn}>
                <BaseButton text={this.state.submitting&&<LoadingButton></LoadingButton>||"确认支付"} disable={flag} onClick={this.handleClick} ></BaseButton>
            </div>
        </div>
    };
    handleClick=()=>{
        if(this.state.disable||!this.state.checkBox){
            return;
        }
        if(this.props.EducationData.data.has_num!=0){
            if(this.props.data.data.totalMoney>this.props.EducationData.data.single_buy_max_limit){
                this.refs.alert.show({
                    title:'风险提示',
                    content:'根据您的风险评测结果为'+this.props.EducationData.data.name+",您已超过单笔出借最大金额限制"+this.props.EducationData.data.single_buy_max_limit+'元',
                    okText:'确定'
                });
                return;
            }
            this.setState({
                submitting:true
            });
            this.props.goBankPage(
                {way:1,type:454,
                    returnUrl:'',
                    data:{
                        productId:this.props.params.productId,
                        couponId:"",
                        quantity:1,
                        type:"ENJOY",
                        device:'WAP',
                        unitPrice:this.props.data.data.totalMoney,
                        prepaid_interest:this.props.data.data.returnInterest
                    }}
            )
        }else{
            this.refs.education.getWrappedInstance().show();
        }
    };
    render(){
        const{
            pop,
            data,
            userData
        }=this.props;
        let Dom;
        if(data&&userData){
            Dom=this.endDom()
        }else{
            Dom=<PageLoading></PageLoading>
        }
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop}>
                    确认支付
                </NavBar>
                {Dom}
                <Alert ref="alert"></Alert>
                <Education ref='education'/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    data:state.infodata.getIn(['WISDOM_DETAIL','data']),
    userData:state.infodata.getIn(['USER_INFO','data']),
    goBankData:state.infodata.getIn(['GO_BANK_PAGE','data']),
    EducationData:state.infodata.getIn(['GET_EDUCATION_INFO', 'data']),
    contractData:  state.infodata.getIn(['GET_EMPTY_CONTRACTS_LIST',"data"]),
});
const mapDispatchToProps=(dispatch,own)=>({
    getEmptyContractsList(){
        dispatch({
            type:'GET_EMPTY_CONTRACTS_LIST',
            params:[{product_type:'H'}]
        })
    },
    pop(){
        dispatch(goBack())
    },
    get(id){
        dispatch({
            type:'WISDOM_DETAIL',
            params:[id]
        })
    },
    push(url){
        dispatch(push(url))
    },
    getUserInfo(){
        dispatch({
            type:'USER_INFO'
        })
    },
    goBankPage(data){
        dispatch({
            type:'GO_BANK_PAGE',
            params:[data]
        })
    },
    clearData(key){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:key
        })
    },
    getEducationInfo(){
        dispatch({
            type:'GET_EDUCATION_INFO'
        })
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)