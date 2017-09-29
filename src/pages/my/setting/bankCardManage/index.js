/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../../components/NavBar'
import Loading from '../../../../components/pageLoading'
import Tipbar from '../../../../components/Tipbar/index'
import Reddem from '../../../../components/Dialog/reddem';
import Button from '../../../../components/BaseButton'
import Alert from '../../../../components/Dialog/alert'
import LoadingButton from '../../../../components/LoadingButton/index'
import {connect} from 'react-redux'
import {goBack,push,replace} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false,
            submitting:false,
            time:0
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
     //组件将要渲染时调用
    }
    componentDidMount(){
      if(this.props.data){}else{
          this.alert('/user/setting/myBankCard')
      }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.unbindData){
            if (nextProps.unbindData.status==1){
                if(this.state.time<=3){
                    this.setState({
                        time:this.state.time+1
                    });
                    if(nextProps.flagData&&nextProps.flagData.code=="0001"){
                        this.props.replace('/successTemplate?title=解绑成功&text=解绑成功')
                    }else{
                        if(this.state.time>=3){
                            this.setState({
                                submitting:false
                            });
                            if(nextProps.flagData&&nextProps.flagData.code!="0001"){
                                this.refs.tip.open('解绑失败')
                            }else{
                                this.refs.tip.open('解绑失败')
                            }
                        }else{
                            setTimeout(()=>{
                                this.props.verify(nextProps.unbindData.msgId)
                            },3000)
                        }
                    }
                }
            }else if(nextProps.unbindData.code==301){
                this.refs.tip.open('密码错误')
                this.setState({
                    submitting:false
                });
            }
        }



    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }

    alert=(path)=>{
        this.refs.alert.show({
            content: '请先选择银行卡',
            okText: '确定',
            okCallback: () => {this.props.pop()},
        })
    }
    checkAccredit=()=>{
        let $this=this;
        this.refs.red.show({
            title:'请输入交易密码',
            okCallback:function(a,b){
                let data;
                data={
                    bankCard:$this.props.data.bankCard,
                    passwordFactor:sessionStorage.getItem('passwordFactor'),
                    mapKey:sessionStorage.getItem('mapKey'),
                    device:'WAP',
                    password:b
                };
                $this.setState({
                    submitting:true
                });
                $this.props.unBind(data);
                a()
            }
        });
    }
    submit=()=>{
        if(!this.state.submitting){
            this.props.clean();
            this.checkAccredit()
        }

    }
    render(){
        let Dom;
        const{
            pop,
            data
            }=this.props;
        if(data){
            let num=data.bankCard.substr(data.bankCard.length-4,4)
            Dom= <div>
                <div className={styles.header}>
                    <div className={styles.item_content}>
                        <div className={styles.item}>
                            <div className={styles.title}><div className={styles.left}><img className={styles.img} src={data.bankIcon} alt=""/></div><div className={styles.right}>{data.bankName}</div></div>
                            <div className={styles.num}>****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;{num}</div>
                            <img className={styles.bg} src={data.bankImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={styles.detail}>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            姓名
                        </div>
                        <div className={styles.right}>
                            {data.realName}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            身份证号
                        </div>
                        <div className={styles.right}>
                            {data.idCard}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            预留手机
                        </div>
                        <div className={styles.right}>
                            {data.telNo.substr(0,3)+'****'+data.telNo.substr(data.telNo.length-4,4)}
                        </div>
                    </div>

                </div>
                <div className={styles.submit}>
                    <Button ref="bottom" onClick={this.submit}
                            className={styles.bottom}
                            text={this.state.submitting ? <LoadingButton text='解绑中...' /> : '同意解绑'}
                    />
                </div>
            </div>
        }
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop} backgroundColor="#33454c">
                  管理
              </NavBar>
               <Tipbar className={styles.tip} ref="tip"></Tipbar>
               <Alert ref="alert"/>
               <Reddem   hasMoney={false}  ref="red"></Reddem>

               {Dom}
           </div>

        )
    }
}
const mapStateToProps=(state)=>({
    data:state.regStore.getIn(['STORE_CARD_INFO','data']),
    unbindData:state.infodata.getIn(['UNBIND_CARD','data']),
    flagData:state.infodata.getIn(['UNBIND_VERIFY','data'])
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    unBind(data){
        dispatch({
            type:'UNBIND_CARD',
            params:[data]
        })
    },
    replace(url){
      dispatch(replace(url))
    },
    clean(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'UNBIND_CARD'
        }),
            dispatch({
                type:'CLEAR_INFO_DATA',
                key:'UNBIND_VERIFY'
            })
    },
    verify(id){
        dispatch({
            type:'UNBIND_VERIFY',
            params:[{id:id}]
        })
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)