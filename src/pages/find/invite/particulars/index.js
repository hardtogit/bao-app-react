import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../../components/NavBar/';
import {connect} from 'react-redux';
import Scroll from '../../../../components/scroll'
import {goBack} from 'react-router-redux'
import styles from '../index.css'
class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        Date.prototype.format = function(fmt) {
            var o = {
                "M+" : this.getMonth()+1,                 //月份
                "d+" : this.getDate(),                    //日
                "h+" : this.getHours(),                   //小时
                "m+" : this.getMinutes(),                 //分
                "s+" : this.getSeconds(),                 //秒
                "q+" : Math.floor((this.getMonth()+3)/3), //季度
                "S"  : this.getMilliseconds()             //毫秒
            };
            if(/(y+)/.test(fmt)) {
                fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
            }
            for(var k in o) {
                if(new RegExp("("+ k +")").test(fmt)){
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                }
            }
            return fmt;
        };
        const{
            listData,
            pending,
            end
        }=this.props
        const Height=document.body.clientHeight-44;
        return(
            <div className={styles.bg}>
                <NavBar  onLeft={this.props.pop} backgroundColor={"#F76260"}>邀请明细</NavBar>
                <div className={styles.list_container} style={{position:'absolute',top:'44px',width:'100%'}}>
                    <Scroll height={Height} fetch={()=>{this.props.getList()}}
                            isLoading={pending}  distance={20} endType={end}
                    >
                        {listData&&listData.map((item,i)=>{
                            return( 	<div key={i} className={styles.data_list_item}>
                                <div className={styles.list_left}>
                                    <ul>
                                        <li className={styles.from}>{item.type==3?'每日佣金':item.userphone}</li>
                                        <li className={styles.date}>{  new Date(item.created*1000).format("yyyy-MM-dd hh:mm:ss")  }</li>
                                        <li className={styles.mark}>备注：{item.remarks}</li>
                                    </ul>
                                </div>
                                <div className={styles.list_right}>
                                    +{item.money}
                                </div>
                            </div>)
                        })}

                    </Scroll>
                </div>
            </div>
        )
    }
}
const datas=(state)=>({
    listData:state.listdata.getIn(['INVITE_PARTICULARS','data']),
    pending:state.listdata.getIn(['INVITE_PARTICULARS','pending']),
    end:state.listdata.getIn(['INVITE_PARTICULARS','pageEnd'])
})
const dispatchFn=(dispath)=>({
    pop(){
        dispath(goBack())
    },
    getList(){
        dispath({
            type:'INVITE_PARTICULARS',
        })
    },
})
export default connect(datas,dispatchFn)(Index)
