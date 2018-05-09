import React from 'react' //我的定存宝
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import {connect} from 'react-redux'
import Loading from '../../../../../components/pageLoading'
import {Link} from 'react-router'
import {goBack,push} from 'react-router-redux'
import Mydcb from '../../../../../components/mydcb'
 class Index extends React.Component {
	loadDom(){
      return(<Loading/>) 
	}
	buyDom=()=>{
		const {listData}=this.props
		return(<div onClick={()=>{this.props.goBuy();   this.props.push('/home/productIndex')}}>
			<div className={styles.gobuy}>{listData.size==0?'立即出借':'再次出借'}</div>
		</div>)
	}
	loadEndDom=(datas)=>{
		const {
            getList,
            pending,
			end,
            listData
		}=this.props;
        return(<Mydcb banner={datas.data} fetch={getList} pending={pending} end={end} data={listData} click={this.listClick}/>)
	}
	listClick=(id)=>{
		this.props.push(`/user/detailDcb/${id}`)
	}
	componentDidMount(){
		this.props.load();
	}
     componentWillUnmount(){
         this.props.clearData()
     }
	render() {
		const {
			datas,
            pop,
            listData
		}=this.props;
		let Dom,
			buyDom;
		if(datas){
          Dom=this.loadEndDom(datas);
          if (listData){
              buyDom=this.buyDom()
		  }
		}else{
		  Dom=this.loadDom()
		}
		return (
			<div className={styles.bg}>
				<NavBar onLeft={pop} rightNode={<Link to="/user/dcbRecords" style={{color:'#fff'}}>记录</Link>}>我的定存宝A计划</NavBar>
				{
				Dom	
				}{
                buyDom
			    }
			</div>
		)
	}
}
const myDepositSummaryInit=(state,own)=>({
	  datas:state.infodata.getIn(['MY_DEPOSIT_SUMMARY','data']),
	  listData:state.listdata.getIn(['DEPOSIT_RECORD','data']),
      pending:state.listdata.getIn(['DEPOSIT_RECORD','pending']),
      end:state.listdata.getIn(['DEPOSIT_RECORD','pageEnd'])
});
const myDepositSummaryInitfn=(dispath,own)=>({
	load(){
		dispath({
			type:'MY_DEPOSIT_SUMMARY'
		})
	},
	getList(){
	     dispath({
	     	type:'DEPOSIT_RECORD',
             params:[1]
		 })
	},
    clearData(){
        dispath({
            type:'CLEAR_DATA',
            key:'DEPOSIT_RECORD'
        })
    },
    goBuy(){
        dispath({
            type:'HOME_TAB_CAV',
            index:1
        })
        dispath({
            type:'PRODUCT_INDEX',
            index:1
        })
    },
	push(url){
       dispath(push(url))
	},
	pop(){
    	dispath(goBack())
	}
})
export default connect(myDepositSummaryInit,myDepositSummaryInitfn)(Index)
