import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../components/NavBar/';
import {connect} from 'react-redux';
import Scroll from '../../../components/scroll'
import {goBack} from 'react-router-redux'
import styles from './index.css'
class Index extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const{
				listData,
				pending,
				end
				}=this.props
		const Height=document.body.clientHeight-44;
		return(
            <div className={styles.bg}>
                <NavBar  onLeft={this.props.pop} backgroundColor={"#F76260"}>邀请明细</NavBar>
				<div className={styles.list_container}>
				<Scroll height={Height} fetch={()=>{this.props.getList()}}
						isLoading={pending}  distance={20} endType={end}
				>

					{listData&&listData.map((item,i)=>{
					return( 	<div key={i} className={styles.data_list_item}>
						<div className={styles.list_left}>
							<ul>
								<li className={styles.from}>齐小小</li>
								<li className={styles.date}>2015-12-25 10:10:10</li>
								<li className={styles.mark}>备注：好友邀请到账sdddssssssssdsadddsssssssssssssssss</li>
							</ul>
						</div>
						<div className={styles.list_right}>
							+20.25
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
