/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
import React,{Component} from 'react'
import styles from './index.less'
import NavBar from '../../../components/NavBar'
import Button from '../../../components/BaseButton'
import Alert from '../../../components/Dialog/alert'
import circle from '../../../assets/images/account/addicon.png'
import classNames from 'classnames'
import LoadingDialog from '../../../components/Dialog/loading'
import {connect} from 'react-redux'
import {goBack,replace,push} from 'react-router-redux'
class Index extends Component {
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false,
            disable:true,
            sendFlag:true
        }
    }
    static defaultProps = {//设置初始props
    }

    componentWillMount() {
        //组件将要渲染时调用
    }

    componentDidMount() {
        //组件渲染完成时调用
    }
    componentWillReceiveProps(nextProps) {
        const $this=this;
        //组件接收到新的props调用
        if(nextProps.data){
            if(nextProps.data.code==100){
                setTimeout(function () {
                    $this.refs.loading.hide();
                    $this.props.update()
                    $this.props.replace('/successTemplate?title=身份证上传成功&text=上传成功,已提交审核。')
                },5000)

            }else{
                this.refs.loading.hide()
                this.refs.alert.show({
                    content:'上传失败',
                    okText:'确定'
                })
            }
        }
    }

    componentWillUnmount() {
        //组件将要被移除时调用
    }
    submit = ()=> {
        if(this.state.disable){
            return
        }
        if(this.refs.back.src&&this.refs.front.src){
            var formData = new FormData();
            let file1 = this.refs.file1.files[0];
            let file2 = this.refs.file2.files[0];
            formData.append('front', file1);
            formData.append('back', file2);
            formData.append('device','WAP');
            this.refs.loading.show('处理中...')
            this.props.upload(formData)
        }else{
            this.refs.alert.show({
                title: '',
                content: '请先选择您要上传的图片',
                okText: '确定',
                okCallback: () => {},
            })
        }
    };
    changeOne=(e)=>{
        const file=e.target.files[0];
        const reader = new FileReader(),
          name=file.name,
          reg=/[^\s]+\.(jpg)/i;
        if(reg.test(name)){
            reader.readAsDataURL(file);
            reader.onload = (ev)=>{
                this.refs.front.src=ev.target.result
            }
        }else{
            this.refs.front.src=''
            this.refs.alert.show({
                title: '',
                content: '上传文件格式错误，存管只支持jpg格式的图片。',
                okText: '确定',
                okCallback: () => {},
            })
        }
        this.ifPost()
    };
    changeTwo=(e)=>{
        const file=e.target.files[0];
        const reader = new FileReader(),
            name=file.name,
            reg=/[^\s]+\.(jpg)/i;
        if(reg.test(name)){
            reader.readAsDataURL(file);
            reader.onload = (ev)=>{
                this.refs.back.src=ev.target.result
            }
        }else{
            this.refs.back.src=''
            this.refs.alert.show({
                title: '',
                content: '上传文件格式错误，只能为jpg格式的图片。',
                okText: '确定',
                okCallback: () => {},
            })
        }
        this.ifPost()
    }
    ifPost(){
        if(this.refs.file1.files[0]&&this.refs.file2.files[0]){
            this.setState({
                disable:false
            })
        }else{
            this.setState({
                disable:true
            })
        }
    }
    render() {
        const {
            pop,
            push
            }=this.props;
        return (
            <div className={styles.container}>
                <NavBar onLeft={pop} rightNode={<div>说明</div>} onRight={()=>{push('/user/IdCardUploadExplain')}}>
                    身份证上传
                </NavBar>
                <div className={styles.tip}>
                    开通存管后，第一次提现需要验证您的身份证。因涉及重要交易，请务必填写本人真实信息。
                </div>
                <div>
                    <div className={styles.content}>
                        <div className={styles.inputFileOne}>
                            <img className={styles.picture} ref="front" src="" alt=""/>
                            <img className={styles.circle} src={circle} alt=""/>
                            <div className={styles.text}>上传本人身份证(正)</div>
                            <input onChange={this.changeOne} ref="file1" className={styles.input} type="file"/>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.inputFileTwo}>
                            <img className={styles.picture} ref="back" src="" alt=""/>
                            <img className={styles.circle} src={circle} alt=""/>
                            <div className={styles.text}>上传本人身份证(反)</div>
                            <input onChange={this.changeTwo} ref="file2" className={styles.input} type="file"/>
                        </div>
                    </div>
                    <Button className={styles.submit} disable={this.state.disable} onClick={this.submit} text="确认上传"></Button>
                </div>
                <LoadingDialog ref="loading"></LoadingDialog>
                <Alert ref="alert"></Alert>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    data:state.infodata.getIn(['IDCARD_UPLOAD','data']),
    countData:state.infodata.getIn(['STORE_STATUS_INFO','data'])
});
const mapDispatchToProps = (dispatch, own)=>({
    pop(){
        dispatch(goBack())
    },
    upload(data){
        dispatch({
            type: 'IDCARD_UPLOAD',
            params: [data]
        })
    },
    update(){
        dispatch({
            type:'STORE_STATUS_INFO',
        })
    },
    push(url){
        dispatch(push(url))
    },
    replace(url){
        dispatch(replace(url))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)