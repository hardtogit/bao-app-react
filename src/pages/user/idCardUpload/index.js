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
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props) {//构造器
        super(props)
        this.state = {
            isOpen: false
        }
    }
    static defaultProps = {//设置初始props
    }
    componentWillMount(){
     //组件将要渲染时调用
    }
    componentDidMount(){
     //组件渲染完成时调用
    }
    componentWillReceiveProps(nextProps){
     //组件接收到新的props调用
    }
    componentWillUnmount(){
     //组件将要被移除时调用
    }
    submit=()=>{
        var formData = new FormData();
        let file1=this.refs.file1.files[0];
        console.log(file1)
        formData.append('files',file1);
        this.props.upload(formData)
    }
    render(){
        const{
            pop
            }=this.props
        return(
           <div className={styles.container}>
              <NavBar onLeft={pop}>
                  身份证上传
              </NavBar>
               <input ref="file1" type="file"/>
               <input ref="file2" type="file"/>
               <Button className={styles.submit} onClick={this.submit} text="确认上传"></Button>
           </div>
        )
    }
}
const mapStateToProps=(state)=>({
});
const mapDispatchToProps=(dispatch,own)=>({
    pop(){
         dispatch(goBack())
    },
    upload(data){
         dispatch({
          type:'IDCARD_UPLOAD',
          params:[data]
         })
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)