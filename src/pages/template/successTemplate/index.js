/**
 * Created by xiangguo .
 * time:2017/7/25 0025.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react' //绑定成功
import NavBar from '../../../components/NavBar/'
import { connect } from 'react-redux'
import { push,replace,goBack} from 'react-router-redux'
import styles from './index.css'
import BaseButton from '../../../components/BaseButton/index'
import success from '../../../assets/images/shopp-center/success.png'
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'标题',
            text:'成功',
            buttonText:'确定',
            pushUrl:''
        }
    }
    componentDidMount(){
       let result=$.extend({}, this.state, this.props.location.query || {});
        this.setState(result);
    }
    render(){
        const{
            title,
            text,
            buttonText,
            pushUrl,
            }=this.state
        return(
            <div className={styles.leftArrow}>
                <NavBar leftNode={<div></div>}>{title}</NavBar>
                <div className={styles.bg}>
                    <div className={styles.content}>
                        <div className={styles.imgWrapper}><img src={success}/></div>
                        <p>{text}</p>
                        <BaseButton text={buttonText} disable={false} onClick={()=>{if(pushUrl){this.props.push(pushUrl)}else {this.props.pop()}}} className={styles.button}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

});
const mapDispatchToProps=(dispatch)=>({
    push(url){
        dispatch(replace(url))
    },
    pop(){
        dispatch(goBack())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Index)