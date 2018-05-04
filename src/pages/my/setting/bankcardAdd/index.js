import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar/index'
import {push,goBack} from 'react-router-redux'
import styles from './index.less'
import cn from 'classnames'
import {connect} from 'react-redux'
import Loading from '../../../../components/pageLoading'
import Alert from '../../../../components/Dialog/alert'
import  IdCardBg from '../../../../assets/images/changeCard1.png'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import * as actionTypes from "../../../../actions/actionTypes";

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
              bankName:'请输入卡号识别',
              Top:{top:'100%'},
              TopInput:{top:'100%'},
              code:0,
              icon:'',
              bankCode:'',
              Val:'',
              reg:false,
              init:true,
              sendInit:true,
        }
    }
    loadDom(style){
        if (style){
            return(<Loading style={style}/>)
        }else {
            return(<Loading />)
        }
    }
    nullCard=(username,data,Top)=>{
        const {
            reg,
            code,
            bankName,
            Val,
            icon
        }=this.state;
        let imgDom;
        if(icon){
            imgDom= <img src={icon} alt=""/>
        }else{
            imgDom=<span>开户行</span>
        }
        let style,bankfn;
        if (Top){
            style={
                position: 'absolute',
                top: '0px',
                left:'0px'
            }
            bankfn=()=>{
                this.setState({
                    TopInput:{top:'100%'}
                })
            }
        }else {
            bankfn=this.props.pop
        }
        return(
            <div>
                <NavBar leftNode={<span className={styles.leftCav} onClick={bankfn}>取消</span>} style={style}>
                    银行卡
                </NavBar>
            <div className={styles.bankcardAddContent}>
            <div className={styles.inputBox}>
                <p className={styles.text}>请绑定持卡人本人银行卡</p>
                <div className={cn(styles.inputOne,styles.mg)}>
              <span className={styles.inputTitle}>
                持卡人
              </span>
                    <span className={styles.inputContent}>{username}</span>
                    <span className={styles.inputIcon}></span>
                </div>
                <div className={cn(styles.inputOne,styles.mg)}>
                    <div className={styles.inputCh}>
                        <span className={styles.inputTitleC}>卡号</span>
                        <input ref="bankCard" className={styles.inputSr} placeholder='请输入银行卡号'  onChange={(e)=>{this.inputS(e,code)}} />
                    </div>
                    <div className={styles.inputCh} onClick={this.showBank}>
                        {imgDom}
                        <span className={styles.inputContent}>{bankName}</span>
                    </div>
                </div>
                <div className={styles.btBox}>
                    <button className={styles.bt}  disabled={!this.state.bankCode} ref="send" onClick={this.bindCard}>
                        {this.props.sendpending&&<InlineLoading color="rgba(255,255,255,.8)"/>}下一步</button>
                </div>
            </div>
        </div>
       </div>)
    }
    isCard=()=>{
       return(
           <div className={styles.sqBox}>
               <NavBar  onLeft={this.props.pop}>
                   提交申请
               </NavBar>
               <div className={styles.bankcardAddContent}>
                 <div className={styles.sqText}>
                   <p>联系客服提供以下资料</p>
                   <p className={styles.sqTel}>
                       <a href="tel:028-966180">028-966180</a>
                   </p>
                 </div>
                 <div className={styles.tsBox}>
                   <ul>
                      <li>
                          <img src={IdCardBg}/>
                          <p className={styles.mg}>手持身份证</p>
                          <p>正面照</p>
                      </li>
                       <li>
                           <img src={IdCardBg}/>
                           <p className={styles.mg}>手持新银行卡</p>
                           <p>正面照</p>
                       </li>
                       <li>
                           <img src={IdCardBg}/>
                           <p className={styles.mg}>手持原卡注销</p>
                           <p>证明正面照</p>
                       </li>
                   </ul>
                 </div>
                   <div className={styles.btBox}>
                       <button className={styles.bt} onClick={this.props.pop}>确认</button>
                       <button className={styles.bt1} onClick={()=>{this.setState({TopInput:{top:'0px'}})}}>重新更换安全卡</button>
                   </div>
               </div>
           </div>
       )
    }
    loadEndDom=(user,data)=>{
        const{
            name,
            isAuth,
            isbindSecurityCard
        }=user.data;
        const {
            TopInput
        }=this.state;
        let  Dom;
        if (isAuth==2&&!isbindSecurityCard){
           Dom=this.nullCard(name,data)
        }else if (isAuth==2&&isbindSecurityCard){
           Dom=
            <div>
             <div className={styles.bankInput} style={TopInput}>
             {
             this.nullCard(name,data,TopInput)
             }
             </div>
             {
            this.isCard()
            }
           </div>
        }else {
            Dom=''
        }
        return Dom

    };
    bindCard=()=>{
        if(!this.state.bankCode){
            this.refs.alert.show({
                content: '请先填写你的卡号',
                okText: '确定',
            });
            return
        }
        this.props.goBankPage({
            type:431,
            way:1,
            data:{
                bankCard:this.refs.bankCard.value,
                bankCode:this.state.bankCode,
                bankName:this.state.bankName,
                device:'WAP'
            },
            returnUrl:''
        })
    };
    bankListDom(data){
      return(
        <div className={styles.bankContent}>
            <ul className={styles.bankList}>
                {
                    data.data.map(({icon,name,code},i)=>(
                        <li className={styles.bank} key={i} onClick={()=>{this.chooseBank(code,icon,name)}}>
                            <span className={styles.bankImg}><img  src={icon}/></span>
                            <span className={styles.bankText}>{name}</span>
                            {
                                code==this.state.code&&<span className={styles.choosed}></span>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
      )
    }
    Alert(){
        this.refs.alert.show({
            content: '您还未绑定身份信息，去绑定？',
            okText: '确定',
            okCallback: () => {this.props.push('/user/setting/identityAuth')},
        })
    }
    inputS=(e,code)=>{
        // const  Val=e.target.value;
        // const reg=/^\d/;
        // this.setState({
        //     Val
        // });
        // if (reg.test(Val)&&Val.length>=6){
        //     const nVal=Val.substring(0,6);
        //   this.verification(nVal)
        // }else if (!reg.test(Val)||Val.length<6){
        //   this.setState({
        //       bankName:''
        //   })
        // }
        // if (!this.props.user.data.isbindSecurityCard){
        //     this.regNull(Val)
        // }else {
        //     this.reg(Val,code)
        // }
        let carNo=e.target.value;
        if(carNo.length>=3){
            let flag=true;
            if(this.props.bankList){
                this.props.bankList.data.map((value,i)=>{
                    if(carNo.indexOf(value.cardBin)==0){
                        flag=false;
                        this.setState({
                            bankName:value.bankName,
                            bankCode:value.bankCode,
                            icon:value.bankIcon
                        });
                        // this.props.bankToState(value)
                    }
                });
                if(flag&&carNo.length>7){
                    this.setState({
                        bankName:"存管暂不支持该银行的储蓄卡",
                        bankCode:"",
                        icon:""
                    })
                    // this.props.bankToState({bankName:"存管暂不支持该银行的储蓄卡",bankCode:""})
                }
            }
        }else{
            this.setState({
                bankName:"请输入卡号识别",
                bankCode:"",
                icon:""
            })

        }
    }
    componentDidMount(){
      const{
         user,
         load,
         loadCard,
      }=this.props;
      if(!user){
          load('USER_INFO_WITH_LOGIN');
      }else {
          if (user.data.isAuth!=2){
              this.Alert();
          }
      }
        loadCard();
    }
    componentWillReceiveProps(nextProps){
        const {
            user,
            goBankData
        }=nextProps;
       if (user){
           if (user.data.isAuth!=2){
               this.Alert();
           }
       }
        //订单生成成功后跳转
        if(goBankData&&goBankData.code==100){
            this.props.clean("GO_BANK_PAGE")
            this.props.push('/user/setting/bankPage?url='+goBankData.data.url)
        }else if(goBankData&&goBankData.code!=100){
            this.refs.alert.show({
                content: '订单生成失败！',
                okText: '确定',
            });
            this.props.clean("GO_BANK_PAGE")
        }

    }
    componentWillUnmount(){
        this.props.clearData();
    }
    render(){
       const{
         user,
         data,
       }=this.props;
       let Dom;
       if(user){
           Dom=this.loadEndDom(user,data);
       }else{
           Dom=this.loadDom() 
       }
       return(
       <div>
           {
               Dom
           }
        <Alert ref="alert"></Alert>
       </div>
       )
    }
}
const  bankcardAddInit=(state,own)=>{
    return{
        user:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
        bankList:state.infodata.getIn(['GET_BANK_BIND_LIST','data']),
        senddata:state.infodata.getIn(['SEND_SEC_CARD','data']),
        sendpending:state.infodata.getIn(['SEND_SEC_CARD','pending']),
        goBankData: state.infodata.getIn(['GO_BANK_PAGE',"data"])
    }

}
const bankcardAddInitfn=(dispatch,own)=>({
      loadCard(){
          dispatch({
              type:'GET_BANK_BIND_LIST',
          })
      },
      load(type){
          dispatch({
               type:type,
           })
      },
    goBankPage(data){
        dispatch({
            type:actionTypes.GO_BANK_PAGE,
            params:[data]
        })
    },
    send(data){
        dispatch({
             type:'SEND_SEC_CARD',
             params:[{
                 bankCard:data.Val,
                 bankCode:data.code,
                 bankName:data.bankName
             }]
         })
    },
    sendBank(data){
       let {
           Val,
           code,
           bankName,
           icon
       }=data;
        dispatch({
            type:'IDENTITY_AUTH_SUCCESS',
            key:'SECURITY_CARD',
            data:{
                    code:101,
                data:{
                    number: Val,
                    code: code,
                    name: bankName,
                    icon
                }
            }
       })
    },
    clean(key){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:key
        })
    },
    push(path){
        dispatch(push(path))
    },
    pop(){
        dispatch(goBack())
    },
    clearData(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'SEND_SEC_CARD'
        })
    }
})
export default connect(bankcardAddInit,bankcardAddInitfn)(Index)