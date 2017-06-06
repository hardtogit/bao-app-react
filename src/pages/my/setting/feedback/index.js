import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar/index'
import cn from 'classnames'
import styles from './index.less'
import Alert from '../../../../components/Dialog/alert'
import {connect} from 'react-redux'
import {replace} from 'react-router-redux'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Success from '../../../../components/Dialog/success'

class feedbackIndex extends Component{
    constructor(props){
       super(props)  
        this.state={
            img:[],
            file:[],
            content:'',
            numReady:false,
            disable:true,
            number:''
        }    
    }
    keyUp=(e)=>{
     const Text=e.target.value;
        this.setState({
            content:Text
        })
        if(Text!=''&&this.refs.contactNum.value.length>4){
            this.setState({
                disable:false,
                number:this.refs.contactNum.value
            })
        }else{
            this.setState({
                disable:true
            })
        }
    };
    numChange=(e)=>{
        let num='';
        num=this.refs.contactNum.value.replace(/\D/g,'')
        this.refs.contactNum.value=num
            if(num.length>4&&this.refs.text.value!=''){
                this.setState({
                    disable:false,
                    number:num
                })
            }else{
                this.setState({
                    disable:true
                })
            }
    }

    change=(e,num)=>{
      const filen=e.target.files[0],
          {
              img,
              file
          }=this.state,
       reader = new FileReader(),
       name=filen.name,
       reg=/[^\s]+\.(jpg|gif|png|bmp)/i;
      if(reg.test(name)){
           reader.readAsDataURL(filen);
        reader.onload = (ev)=>{
            const Img=<span><img src={ev.target.result} /></span>
            img[num]=Img;
            file[num]=filen;
            this.setState({
              img  
            })
        }
      }else{
         this.refs.alert.show({
				title: '',
		 		content: '上传文件格式错误，只能为图片。',
		 		okText: '确定',
		 		okCallback: () => {},
		 })
      }
     }
    send=()=>{

        const files = new FormData();
        files.append('imgs',this.state.file);
        files.append('content',this.state.content);
        files.append('contact',this.state.number);
        const data={
            file:'file',
            data:files
        }
        this.props.send(data);
    }
    componentWillReceiveProps({code,pending}){
        if (code==100&&!pending){
            this.refs.success.show({
                text: '提交意见成功!',
                callback: () => {this.props.pop('/login')},
            })
        }
        if (code==300&&!pending){
            this.refs.alert.show({
                title: '对不起提交意见出错！重新提交？',
                okText: '确定',
            })
        }
    }
    render(){
       const {
           pending
       }=this.props;
        return(
            <div>
             <NavBar onLeft={this.props.pop}>意见反馈</NavBar>
             <div className={styles.content}>
              <div className={styles.textBox}>
               <textarea ref="text" placeholder='请详细描述您的问题或建议，我们将及时跟进解决。(建议添加相关问题的截图)' value={this.state.content} onChange={this.keyUp}>
               </textarea>
               <div className={styles.choose}>
               <span className={styles.OneInput}>
                <input type='file' name="photo" onChange={(e)=>{this.change(e,0)}}/>
               {
                   this.state.img[0]
               }
               </span>
                <span className={cn(styles.OneInput,styles.maginL)}>
                <input type='file' name="photo"  onChange={(e)=>{this.change(e,1)}}/>
                {
                    this.state.img[1]
                }
               </span>
               </div>
              </div>
                 <div className={styles.contact}>
                     <label className={styles.num} htmlFor="">联系方式 <span>*</span></label>
                     <input type="text" ref="contactNum"  onChange={this.numChange} placeholder="手机号码/QQ" />
                 </div>
              <div className={styles.sendBox}>
              <button className={styles.sendBt} ref='btn' disabled={this.state.disable==true} onClick={this.send}>
                  {pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'提交中'} className={styles.loading}/>||'提交意见反馈'}
              </button>
              </div>
             </div>
             <Alert ref="alert"/>
            <Success ref="success" />
            </div>
            ) 
    }
}
const feedbackIndexInit=(state)=>({
    pending:state.infodata.getIn(['FEED_BACK','pending']),
    code:state.infodata.getIn(['FEED_BACK','data'])&&state.infodata.getIn(['FEED_BACK','data']).code||false
})
const  feedbackIndexInitfn=(dispatch)=>({
    send(data){
         dispatch({
             type:'FEED_BACK',
             params:[data]
         })
    },
    pop(){
      dispatch(replace('/user/setting'))
    }
})

export default connect(feedbackIndexInit,feedbackIndexInitfn)(feedbackIndex)