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
import * as actionTypes from "../../../../actions/actionTypes";
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false,
            submitting:false,
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
        //console.log(this.props)
     //组件将要渲染时调用
    }
    componentDidMount(){
      if(this.props.data){}else{
          this.alert('/user/setting/myBankCard')
      }
      //  console.log(this);
      //console.log(this.props.params.color);
    }
    componentWillReceiveProps(nextProps){
        const{goBankData}=nextProps;
        //订单生成成功后跳转
        if(goBankData&&goBankData.code==100){
            this.setState({
                submitting:false
            });
            this.props.cleans("GO_BANK_PAGE")
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
        }else if(goBankData&&goBankData.code!=100){
            this.setState({
                submitting:false
            });
            this.refs.tip.open('订单生成失败!');
            this.props.cleans("GO_BANK_PAGE")
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
        $this.setState({
            submitting:true,
            time:0
        });
        this.props.goBankPage({
            type:471,
            way:1,
            data:{
                bankCard:$this.props.data.bankCard,
                device:'WAP',
            },
            returnUrl:''
        })
    }
    submit=()=>{
        if(!this.state.submitting){
            this.checkAccredit()
        }
    }
    render(){
        let Dom;
        const{
            pop,
            data,
            }=this.props;
        let backgroundStyle = this.props.params.color;
        if(data){
            let num=data.bankCard.substr(data.bankCard.length-4,4)
            Dom= <div>
                <div className={styles.header}>
                    <div className={styles.item_content}>
                        <div className={styles.item} style={{backgroundColor:backgroundStyle}}>
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
    goBankData: state.infodata.getIn(['GO_BANK_PAGE',"data"])
});
const mapDispatchToProps=(dispatch,own)=>({
    goBankPage(data){
        dispatch({
            type:actionTypes.GO_BANK_PAGE,
            params:[data]
        })
    },
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
    cleans(key){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:key
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