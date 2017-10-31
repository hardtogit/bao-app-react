import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../components/NavBar/';
import {connect} from 'react-redux';
import Scroll from '../../../components/scroll'
import {goBack} from 'react-router-redux'
import styles from './index.css'
import listPic from './list.png'
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
                <NavBar rightNode={<Link className={styles.rightNode} to="user/fridayActivityRule">活动规则</Link>} onLeft={this.props.pop} backgroundColor={"#00a6e2"}>周五狂享礼</NavBar>
				<div className={styles.list_container} style={{position:'absolute',top:'44px',width:'100%'}}>
				<Scroll height={Height} fetch={()=>{this.props.getList()}}
						isLoading={pending}  distance={20} endType={end}
				>
					{listData&&listData.map((item,i)=>{
					return(
					<div key={i} className={styles.data_list_item}>
						<div className={styles.data_list_top}>
							<div style={{"position":"absolute","left":"0"}}>
								<img src={listPic} className={styles.listPic}/>
								<span style={{"marginLeft":"5px"}}> 周五活动币 </span>
							</div>
							<div  style={{"position":"absolute","right":"10","top":"5px"}}>
								<span className={styles.addTime}>{item.add_time}</span>
							</div>
						</div>
						<div className={styles.data_list_bottom}>
							<ul>
								<li className={styles.invest}>
									<p className={styles.num}>{item.investment_amount}</p>
									<p className={styles.txt}>投资金额(元)</p>
								</li>
								<li className={styles.withdraw}>
									<p className={styles.num}>{item.withdrawal_amount}</p>
									<p className={styles.txt}>提现金额(元)</p>
								</li>
								<li className={styles.coinnum}>
									<p className={styles.num} style={{"color":"#ff7701","textAlign":"right"}}>+{item.coin}</p>
									<p className={styles.txt}  style={{"textAlign":"right"}}>点币数</p>
								</li>
							</ul>
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
		listData:state.listdata.getIn(['FRIDAY_COINLIST','data']),
		pending:state.listdata.getIn(['FRIDAY_COINLIST','pending']),
		end:state.listdata.getIn(['FRIDAY_COINLIST','pageEnd'])
})
const dispatchFn=(dispath)=>({
	pop(){
		dispath(goBack())
	},
	getList(){
		dispath({
			type:'FRIDAY_COINLIST',
		})
	},
});
export default connect(datas,dispatchFn)(Index)
