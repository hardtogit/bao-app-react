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

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
              bankName:'',
              Top:{top:'100%'},
              TopInput:{top:'100%'},
              code:0,
              icon:'',
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
        let name,number,iconN;
        if (data.code==101||data.code==301){
           name=bankName;
           number=Val;
           iconN=<img src={icon}/>
        }else {
            name='请选择银行';
            iconN=<span className={styles.inputTitleC}>卡类型</span>;
        }
        if (bankName!=''){
            name=bankName;
            iconN=<img src={icon}/>
        }else {
            name='请选择银行';
            iconN=<span className={styles.inputTitleC}>卡类型</span>;
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
                        <input className={styles.inputSr} placeholder='请输入银行卡号' value={number} onChange={(e)=>{this.inputS(e,code)}} />
                    </div>
                    <div className={styles.inputCh} onClick={this.showBank}>
                        {
                            iconN
                        }
                        <span className={styles.inputContent}>{name}</span>
                        <span className={styles.inputJt}></span>
                    </div>
                </div>
                <div className={styles.btBox}>
                    <button className={styles.bt}  disabled={!reg} ref="send" onClick={()=>{this.props.send(this.state)}}>
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

    }
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
    setS=(data)=>{
        if (data.code==101||data.code==301){
            this.setState({
                code:data.data.code,
                bankName:data.data.name,
                icon:data.data.icon,
                Val:data.data.number
            })
        }
    }
    showBank=()=>{
      this.setState({
          Top:{top:'0px'}
      })
    }
    hiddenBank=()=>{
        this.setState({
            Top:{top:'100%'}
        })
    }
    chooseBank=(code,url,name)=>{
        const Val=this.state.Val;
        this.setState({
            code,
            Top:{top:'100%'},
            icon:url,
            bankName:name
        });
        this.reg(Val,code);
    }
    inputS=(e,code)=>{
        const  Val=e.target.value;
        const reg=/^\d/;
        this.setState({
            Val
        });
        if (reg.test(Val)&&Val.length>=6){
            const nVal=Val.substring(0,6);
          this.verification(nVal)
        }else if (!reg.test(Val)||Val.length<6){
          this.setState({
              bankName:''
          })
        }
        this.reg(Val,code)
    }
    verification=(val)=>{
        const {bankList:{data}}=this.props;
        for (let i=0;i<data.length;i++){
            if (data[i].bin.indexOf(val)!=-1){
               this.setState({
                   bankName:data[i].name,
                   icon:data[i].icon,
                   code:data[i].code
               });
                break
            }
        }
    }
    reg=(val,code)=>{
        const  reg=/^(\d{16}|\d{19})$/;
        if (reg.test(val)&&code!=0){
            if (this.props.data.code==101){
                if (val!=this.props.data.data.number){
                    this.setState({
                        reg:true
                    })
                }
            }else {
                this.setState({
                    reg:true
                })
            }
        }else {
            this.setState({
                reg:false
            })
        }
    }
    componentDidMount(){
      const{
         user,
         load,
         loadCard,
         bankList
      }=this.props;
      if(!user){
          load('USER_INFO_WITH_LOGIN');
      }else {
          if (user.data.isAuth!=2){
              this.Alert();
          }
      }
        loadCard();
      if (!bankList){
          load('GET_BANK_LIST')
      }
    }
    componentWillReceiveProps(nextProps){
        const {
            user,
            data,
            senddata,
            sendpending
        }=nextProps;
        const alert=this.refs.alert;
       if (user){
           if (user.data.isAuth!=2){
               this.Alert();
           }
       }
       if (data&&this.state.init){
           this.setS(data);
           this.setState({
               init:false
           })
       }
      if (senddata){
          if (senddata.code==101&&this.state.sendInit&&!sendpending){
              this.props.sendBank(this.state);
              alert.show({
                  content: '申请安全卡成功',
                  okText: '确定',
                  okCallback: () => {this.props.push('/user/setting')},
              })
              this.setState({
                  sendInit:false
              })
          }
          if (senddata.code==102&&!sendpending){
              alert.show({
                  content: '更改安全卡申请成功',
                  okText: '确定',
                  okCallback: () => {this.props.push('/user/setting')},
              })
          }
          if (senddata.code==302&&!sendpending){
              alert.show({
                  content: '此卡已经为安全卡',
                  okText: '确定',
              })
          }
          if (senddata.code==303&&!sendpending){
              alert.show({
                  content: '申请安全卡失败',
                  okText: '确定',
              })
          }
          if (senddata.code==305&&!sendpending){
              alert.show({
                  content: '更改安全卡申请失败',
                  okText: '确定',
              })
          }
          if (senddata.code==304&&!sendpending){
              alert.show({
                  content: '该卡正在申请中 ',
                  okText: '确定',
              })
          }
          if (senddata.code==301&&!sendpending){
              alert.show({
                  content: '考拉第三方认证失败',
                  okText: '确定',
              })
          }
      }
    }
    render(){
       const{
         user,
         data,
         bankList
       }=this.props;
       const {
           Top
       }=this.state;
       const BanckStyle={
           position:'absolute',
           top:'0px',
           left:'0px'
       };
       const Bankload={
           position:'absolute',
           left: '50%',
           top: '50%',
       };
       let Dom,bankDom;
       if(user&&data){
           Dom=this.loadEndDom(user,data);
       }else{
           Dom=this.loadDom() 
       }
       if (bankList){
           bankDom=this.bankListDom(bankList)
       }else {
           bankDom=this.loadDom(Bankload)
       }
       return(
       <div>
           {
               Dom
           }
        <div className={styles.bankBox} style={Top}>
            <NavBar leftNode={<span className={styles.leftCav} onClick={this.hiddenBank}>取消</span>} style={BanckStyle}>
                选择银行卡
            </NavBar>
            {
                bankDom
            }
        </div>
        <Alert ref="alert"></Alert>
       </div>
       )
    }
}
const  bankcardAddInit=(state,own)=>({
       user:state.infodata.getIn(['USER_INFO_WITH_LOGIN','data']),
       data:state.infodata.getIn(['SECURITY_CARD','data']),
       bankList:state.infodata.getIn(['GET_BANK_LIST','data']),
       senddata:state.infodata.getIn(['SEND_SEC_CARD','data']),
       sendpending:state.infodata.getIn(['SEND_SEC_CARD','pending'])
})
const bankcardAddInitfn=(dispath,own)=>({
      loadCard(){
          dispath({
              type:'SECURITY_CARD',
              params:[{
                  type:2
              }]
          })
      },
      load(type){
             dispath({
               type:type,
           })
      },
    send(data){
         dispath({
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
       dispath({
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
    push(path){
        dispath(push(path))
    },
    pop(){
        dispath(goBack())
    }
})
export default connect(bankcardAddInit,bankcardAddInitfn)(Index)