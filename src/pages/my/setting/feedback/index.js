import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar/index'
import cn from 'classnames'
import styles from './index.less'
import Alert from '../../../../components/Dialog/alert'
import Loading from '../../../../components/pageLoading'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import InlineLoading from '../../../../components/Loading/InlineLoading'
import Success from '../../../../components/Dialog/success'
class feedbackIndex extends Component{
    constructor(props){
       super(props)  
        this.state={
            img:'',
            file:'',
            content:'',
            numReady:false,
            disable:true,
            number:'',
            imgUrl:[]
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
    change=(e)=>{
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
            this.setState({
              img:Img,
              file:filen
            })
            this.uploadImg()
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
    uploadImg=()=>{
        const files = new FormData();
        files.append('photo',this.state.file);
        const data={
            file:'file',
            data:files
        };
        this.props.upload(data)
    };
    loading=()=>{
        return(
            <Loading Text="图片上传中..."></Loading>
        )
    };
    send=()=>{
        const data={
            'imgs':this.state.imgUrl,
            'content':this.state.content,
            'contact':this.state.number
        };
        this.props.send(data);
    };
    componentWillUnmount(){
         this.props.clean()
    }
    componentWillReceiveProps({code,pending,imgData,imgUpload}){
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
        if (imgData&&imgData.code==100){
            this.setState({
                imgUrl:[imgData.data.url]
            })
        }
        if(imgUpload&&imgUpload==true){
            this.setState({
                disable: true,
            })
        }else {
            if(this.state.content!=''&&this.refs.contactNum.value.length>4){
                this.setState({
                    disable: false,
                });
            }else {
                this.setState({
                    disable: true
                });
            }
        }
    }
    render(){
       const {
           pending,
           imgUpload
       }=this.props;
        let upDom=''
        if(imgUpload==true){
            upDom=<div>图片上传中...</div>
        }else{
            upDom=pending&&<InlineLoading color="rgba(255,255,255,.8)" text={'提交中'} className={styles.loading}/>||'提交意见反馈'
        }
        return(
            <div>
             <NavBar onLeft={this.props.pop}>意见反馈</NavBar>
             <div className={styles.content}>
              <div className={styles.textBox}>
               <textarea ref="text" placeholder='请详细描述您的问题或建议，我们将及时跟进解决。(建议添加相关问题的截图)' value={this.state.content} onChange={this.keyUp}>
               </textarea>
               <div className={styles.choose}>
               <span className={styles.OneInput}>
                <input type='file' name="photo" onChange={(e)=>{this.change(e)}}/>
               {
                   this.state.img
               }
               </span>
               </div>
              </div>
                 <div className={styles.contact}>
                     <label className={styles.num}>联系方式(必填)</label>
                     <input type="text" ref="contactNum"  onChange={this.numChange} placeholder="手机号码/QQ" />
                 </div>
              <div className={styles.sendBox}>
              <button className={styles.sendBt} ref='btn' disabled={this.state.disable==true} onClick={this.send}>
                  {upDom}
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
    imgData:state.infodata.getIn(['UPLOAD_FEED_BACK_IMG','data']),
    imgUpload:state.infodata.getIn(['UPLOAD_FEED_BACK_IMG','pending']),
    code:state.infodata.getIn(['FEED_BACK','data'])&&state.infodata.getIn(['FEED_BACK','data']).code||false
})
const  feedbackIndexInitfn=(dispatch)=>({
    send(data){
         dispatch({
             type:'FEED_BACK',
             params:[data]
         })
    },
    upload(formData){
        dispatch({
            type:'UPLOAD_FEED_BACK_IMG',
            params:[formData]
        })
    },
    pop(){
      dispatch(goBack())
    } ,
    clean(){
        dispatch({
            type:'CLEAR_INFO_DATA',
            key:'FEED_BACK'
        })
    }
})

export default connect(feedbackIndexInit,feedbackIndexInitfn)(feedbackIndex)