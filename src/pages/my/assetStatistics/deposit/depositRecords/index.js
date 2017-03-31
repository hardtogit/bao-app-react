import React from 'react' //我的定存宝
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import Record from '../../../../user/common/record/index'
import Scroll from '../../../../../components/scroll/index'
import explan from '../../../../../assets/images/my-index/nojilu_03.png' //没有记录
class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			flag: true,
			componentDid:false
		}
	}
    componentDidMount=()=>{
		this.setState({
            componentDid:true
		})
        this.props.getList(this.state.flag?"1":"2");
    };
    componentWillUnmount=()=>{
    	this.props.clearData('DEPOSIT_RECORD_RS');
        this.props.clearData('DEPOSIT_RECORD_HISTORY');
	}
	toggle = (index) => {
		if ((2 == index && this.state.flag) || (1 == index && !this.state.flag)) {
			this.setState({
				flag: !this.state.flag
			})
		}
        if(!this.state.flag){
            this.props.getList();
        }else
            this.props.getListB();
    };
	listA=()=>{
        const BodyHeight=document.body.clientHeight,
              ScrollHeight=BodyHeight-95;
        const {
            getList,
            pending,
            end,
            listData,
        }=this.props;
        return(<Scroll height={ScrollHeight} fetch={getList}
					   isLoading={pending} distance={5} endType={end}
					   nullDom={<div className={styles.nullBox}><img src={explan} /></div>} endload={<div></div>}>
            {
                listData&&listData.map((item,i)=>{
                    const {name,created,amount,status}=item;
                    return(
						<Record
							key = {i}
							title={name}
							data={created}
							price={amount}
							state={status}
							moneyColor={"#aaa"}
							statusColor={"#f70"}
						/>
                    )
                })
            }
		</Scroll>)
	}
    listB=()=>{
        const BodyHeight=document.body.clientHeight,
            ScrollHeight=BodyHeight-95;
        const {
            getListB,
            pendingB,
            endB,
            listDataB,
        }=this.props;
        return(<Scroll height={ScrollHeight} fetch={getListB}
					   isLoading={pendingB} distance={5} endType={endB}
					   nullDom={<div className={styles.nullBox}><img src={explan} /></div>} endload={<div></div>}>
            {
                listDataB&&listDataB.map((item,i)=>{
                    const {name,created,amount,status}=item;
                    return(
						<Record
							key = {i}
							title={name}
							data={created}
							price={amount}
							state={status}
							moneyColor={"#aaa"}
							statusColor={"#f70"}
						/>
                    )
                })
            }
		</Scroll>)
	}
	render() {
		const {
			flag,
            componentDid
		}=this.state;
		let ListDomA,
            ListDomB
		if (componentDid){
            ListDomA=this.listA();
			ListDomB=this.listB();
		}
		return (
			<div className={styles.bg}>
				<NavBar onLeft={this.props.pop}>定存宝记录</NavBar>
				<div>
				<ul className={styles.tabmenu}>
					<li><a className={this.state.flag?styles.borderBlue:styles.borderWhite} onClick={()=>{this.toggle(1)}}> 待回款项目</a></li>
					<li><a className={!this.state.flag?styles.borderBlue:styles.borderWhite} onClick={()=>{this.toggle(2)}}> 历史资产</a></li>
				</ul>
				<div className={styles.recordsMain}>
					<div className={styles.tablist}>
						<div className={flag&&styles.show||styles.hide}>
							{
                                ListDomA
							}
						</div>
						<div className={!flag&&styles.show||styles.hide}>
							{
                                ListDomB
							}
						</div>
					</div>
				</div>
				</div>
			</div>
		)
	}
}
const myDepositSummaryInit=(state)=>({
	listData:state.listdata.getIn(['DEPOSIT_RECORD_RS','data']),
	pending:state.listdata.getIn(['DEPOSIT_RECORD_RS','pending']),
	end:state.listdata.getIn(['DEPOSIT_RECORD_RS','pageEnd']),
    listDataB:state.listdata.getIn(['DEPOSIT_RECORD_HISTORY','data']),
    pendingB:state.listdata.getIn(['DEPOSIT_RECORD_HISTORY','pending']),
    endB:state.listdata.getIn(['DEPOSIT_RECORD_HISTORY','pageEnd'])
});
const myDepositSummaryInitfn=(dispath)=>({
	getList(){
        dispath({
            type:'DEPOSIT_RECORD_RS',
            params:[1]
        })
    },
    getListB(){
        dispath({
            type:'DEPOSIT_RECORD_HISTORY',
            params:[2]
        })
    },
	pop(){
		dispath(goBack())
	},
    clearData(key){
        dispath({
            type:'CLEAR_DATA',
            key:key
        })
    },
})
export default connect(myDepositSummaryInit,myDepositSummaryInitfn)(Index)
