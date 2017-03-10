/**
 * Created by wangdongfang on 17/2/8.
 */
import React,{Component} from 'react'
import styles from './index.styl'
import juan from '../../../../assets/images/juan.png'
import {Link} from 'react-router'
import Alert from '../../../../components/Dialog/alert'
import {connect} from 'react-redux'
import {goBack,push} from 'react-router-redux'

class Index extends Component{
    componentDidMount(){
        const {
            mobile,
            code,
            data
        }=this.props;
         console.log(mobile,code,data)
        if (!mobile){
         this.alert('/register')
        }else if (!code){
           this.alert('/registerVerifyMobile')
        }else if (!data){
           this.alert('/registerSetPassword')
        }
    }
    alert=(path)=>{
        this.refs.alert.show({
            content: '请先进行手机号验证',
            okText: '确定',
            okCallback: () => {this.props.go(path)},
        })
    }
    dom=()=>{
        const {
            set,
            go
        }=this.props;
        return(<div>
            <div className={styles.suTitle}>恭喜你注册成功</div>
            <div className={styles.suText}>抵用券已放入账户</div>
            <div className={styles.suImg}>
                <img src={juan}/>
            </div>
            <div className={styles.suMs}>
                实名投资可再得<span>700</span>元抵用券
            </div>
            <div className={styles.buttonBox}>
                <span className={styles.button} onClick={()=>{set();go('/user/setting/identityAuth')}}>
                    立即投资
                </span>
            </div>
        </div>)
    }
    render(){
        const {
            mobile,
            code,
            data
        }=this.props;
        let Dom;
        if (mobile&&code&&data){
            Dom=this.dom()
        }
        return(<div className={styles.suBody}>
            {
                Dom
            }
            <Alert ref="alert"/>
        </div>)
    }
}
const datas=(state)=>(
    {
        mobile:state.infodata.getIn(['REGISTER_NUM','mobile']),
        code:state.infodata.getIn(['REGISTER_NUM','code']),
        data:state.infodata.getIn(['REGISTER','data'])
    }
)
const dispatch=(dispatch,own)=>(
    {
       go(path){
             dispatch(push(path))
       },
       set(){
         dispatch({
             type:'REGISTER_NUM',
             key:'regSuccess',
             data:{
                 reg:true
             }
         })
       }
    }
)
export default connect(datas,dispatch)(Index)