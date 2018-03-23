/**
 * Created by xiangguo .
 * time:2017/10/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/'
import styles from './index.css'
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {push,goBack} from 'react-router-redux'
import ReddemDialog from '../../../../../components/Dialog/reddemOld'
import Tipbar from '../../../../../components/Tipbar/index'
import Alert from '../../../../../components/Dialog/alert'
import utils from '../../../../../utils/utils'
import wrap from '../../../../../utils/pageWrapper'
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            val:'',
            disabled:true,
            money:'',
            bank:'',
            number:"",
            minimum:50,
            maximum:50000
        }
    }
    componentWillMount(){
        this.props.getDefault()
    }
    componentDidMount(){
        const user=JSON.parse(sessionStorage.getItem('bao-user'))&&JSON.parse(sessionStorage.getItem('bao-user'))||this.props.userinfo;
        const bank=JSON.parse(sessionStorage.getItem('bao-bank'));
        this.setState({
            money:user.balance_platform,
            bank:bank.name,
            number:bank.number
        })
    }
    onValid=()=>{
        const {
            val
        }=this.state;
        this.props.goBankPage({
            way:1,
            type:421,
            returnUrl:"",
            data:{
                device:"WAP",
                amount:val,
                password:"",
                isNew:true,
                access_sys:"platform"
            }
        })
        // this.refs.reddem.show({
        //     title: '提现',
        //     money:val,
        //     okCallback:()=>{this.send()} ,
        //     cancelCallback: () => {
        //     }
        // })
    };
    componentWillUnmount(){
        this.props.clean()
    }
    componentWillReceiveProps(next){
        const {cashData,push,cashSetting,goBankData}=next;
        //生成订单后跳转
        if(goBankData&&goBankData.code==100){
            this.props.go('/user/setting/bankPage?url='+goBankData.data.url)
            this.props.clearData("GO_BANK_PAGE")
        }else if(goBankData&&goBankData.code!=100){
            this.props.clearData("GO_BANK_PAGE")
            this.alert('订单生成失败!');
        }
        if(cashSetting){
            if(cashSetting.code==100){
                this.setState({
                    minimum:parseInt(cashSetting.data.withdrawSingleMinMoney),
                    maximum:parseInt(cashSetting.data.withdrawSingleTimeMoney)
                })
            }
        }
        if (cashData){
            const {code}=cashData;
            if (code==300){
                this.alert('提交失败！')
            }else if (code==301){
                this.alert('有未处理的提现!')
            }else if (code==302){
                this.alert('提现金额大于帐户可提余额!')
            }else if (code==303){
                this.alert('提现密码错误 !')
            }else if (code==304){
                this.alert('未绑卡提现!')
            }else if (code==305){
                this.alert('没安全卡提现!')
            }else if (code==310){
                this.alert('超出每日提现次数!')
            }else if (code==311){
                this.alert('超出每日提现总额!')
            }else if (code==312){
                this.alert('超出单笔最大提现金额!')
            }else if (code==313){
                this.alert('不能低于单笔最小提现金额!')
            }else if (code==100){
                const time=Date.parse(new Date()),
                    cash_amount=this.state.val;
                push(time,cash_amount)
            }
        }
    }
    alert=(message)=>{
        this.refs.alert.show({
            content: message,
            okText: '确定',
        })
    }
    send=()=>{
        const {
                val
            }=this.state,
            pwd=this.refs.reddem.password;
        this.props.send(val,utils.md5(pwd),true);
        this.refs.reddem.hide();
    }

    change=(e)=>{
        const val=e.target.value,
            reg=/^\d+(\.\d{1,2})?$/,
            tipbar=this.refs.tipbar;
        this.setState({
            val
        });
        if (!reg.test(val)){
            this.setState({
                disabled:true
            })
        }else if(val>this.state.maximum){
            this.setState({
                disabled:true
            })
        }else if (val<this.state.minimum){
            this.setState({
                disabled:true
            })
        }else if (val>parseFloat(this.state.money)){
            this.setState({
                disabled:true
            })
        }
        else {
            this.setState({
                disabled:false
            })
        }
    }
    blur=(e)=>{
        const val=e.target.value,
            reg=/^\d+(\.\d{1,2})?$/,
            tipbar=this.refs.tipbar;
        this.setState({
            val
        });
        if (!reg.test(val)){
            tipbar.open('请输入正确的格式!');
            this.setState({
                disabled:true
            })
        }else if(val>this.state.maximum){
            tipbar.open('单笔金额不能大于'+this.state.maximum)
        }else if (val<this.state.minimum){
            this.setState({
                disabled:true
            })
            tipbar.open('金额必须大于'+this.state.minimum)
        }else if (val>parseFloat(this.state.money)){
            this.setState({
                disabled:true
            })
            tipbar.open('超出余额！')
        }
        else {
            this.setState({
                disabled:false
            })
        }
    }
    render() {
        const {
            pop,
        }=this.props;
        const {
            val,
            disabled,
            money,
            bank,
            number,
            minimum
        }=this.state;
        return (
            <div className={styles.bg}>
                <NavBar onLeft={pop}>余额提现</NavBar>
                <div className={styles.body}>
                    <div className={styles.contentBox}>
                        <div className={styles.title}>
                            <span className={styles.cardLx}>储蓄卡</span>
                            <span className={styles.card}>{bank}({number})</span>
                        </div>
                        <div className={styles.withdrawalsInfo}>
                            <span>提现金额（元）</span>
                            <span className={styles.withdrawalsText}>提现金额不得低于{minimum}元</span>
                        </div>
                        <div className={styles.withdrawalsInput}>
                            <span>￥</span>
                            <input placeholder="请输入提现金额!" type="text" value={val} onChange={this.change} onBlur={this.blur} />
                        </div>
                        <div className={styles.withdrawalsJe}>
                            当前金额￥{money}
                        </div>
                        <div className={styles.withdrawalsJe}>
                            额外扣除0.00元手续费
                        </div>
                    </div>
                    <div className={styles.time}>
                        预计1~2个工作日到账
                    </div>
                    <button className={styles.button} onClick={this.onValid} disabled={disabled}>
                        下一步
                    </button>
                    <div className={styles.remarks}>
                        注：提现金额中若包含未投资金额,提现申请将延后24小时处理
                    </div>
                    <ReddemDialog ref='reddem'/>
                </div>
                <Tipbar ref='tipbar' />
                <Alert ref="alert"/>
            </div>
        )
    }
}
const Rechargeinit=(state)=>({
    cashData:state.infodata.getIn(['CASH','data']),
    withdraw:state.infodata.getIn(['WITHDRAW','data']),
    userinfo:state.infodata.getIn(['USER_INFO','data']),
    cashSetting:state.infodata.getIn(['GET_DEFAULT_TAB','data']),
    goBankData:state.infodata.getIn(['GO_BANK_PAGE','data'])
});
const Rechargeinitfn=(dispath)=>({
    pop(){
        dispath(goBack());
    },
    send(amount,password,isNew){
        dispath({
            type:'CASH',
            params:[{amount,password,isNew}]
        })
    },
    goBankPage(data){
        dispath({
            type:'GO_BANK_PAGE',
            params:[data]
        })
    },
    get(){
        dispath({
            type:'WITHDRAW'
        })
    },
    clean(){
        dispath({
            type:'CLEAR_INFO_DATA',
            key:"CASH",
        })
    },
    clearData(key){
        dispath({
            type:'CLEAR_INFO_DATA',
            key:key
        })
    },
    getDefault(){
        dispath({
            type:'GET_DEFAULT_TAB',
        })
    },
    push(time,cash_amount){
        dispath(push(`/user/cashsuccess?time=${time}&cash_amount=${cash_amount}`))
    },
    go(url){
        dispath(push(url))
    }
});
export default connect(Rechargeinit,Rechargeinitfn)(wrap(Index))