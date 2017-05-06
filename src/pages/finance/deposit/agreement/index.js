/**
 * Created by wangdongfang on 17/3/14.
 */
import React,{Component} from 'react'
import NavBar from '../../../../components/NavBar'
import NewContract from '../../../my/assetStatistics/directInvest/securityPlan/newContract'
import styles from './index.less'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
class Index extends Component{
    idCard=(num)=>{
        const len=num.length;
        let str='';
        for (let i=0;i<len;i++){
            if (i<3){
                str+=num[i]
            }else if (i>len-3){
                str+=num[i]
            }else {
                str+='*'
            }
        }
        return str
    }

    render(){
        const {id,type}=this.props.params;
        const user=JSON.parse(sessionStorage.getItem('bao-user'));
        const baoDepositbs=JSON.parse(sessionStorage.getItem('bao-depositbs'));
        const baoDeposit=JSON.parse(sessionStorage.getItem('bao-deposit'));
        let rate;
        if (id!==5&&type=='A'){
            rate=baoDeposit.deposit[id].rate;
        }else if (type=='B'){
            rate=baoDepositbs.list[id].rate;
        }else if (id==5){
            rate=baoDeposit.new_deposit.rate;
        }
        const data={
            companyInfo:{address:'成都市锦江区新光华街7号航天科技大厦38层1号',companyName:'成都伟品信息技术服务有限公司',phone:'028-966180'},
            list:[],
            productInfo:{endTime:'',money:'',moneyCapital:'',number:'',overdue:2,penalty:30,rate:rate,startTime:'',type:''},
            userInfo:{idCard:this.idCard(user.card),idCardType:0,mobile:user.mobile,realName:user.name,userName:user.username}
        }
        return(<div className={styles.bg}>
            <NavBar onLeft={this.props.pop}>理财</NavBar>
            <NewContract {...data} lx={0}/>
        </div>)
    }
}
const datas=(state)=>({})
const dispatchFn=(dispatch)=>({
     pop(){
         dispatch(goBack())
     }
})
export default connect(datas,dispatchFn)(Index)