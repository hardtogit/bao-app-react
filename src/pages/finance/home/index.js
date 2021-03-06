/**
 * 首页 记得删除
 */

import React,{Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import {connect} from 'react-redux'
import styles from './index.css'
import classNames from 'classnames'
import utils from '../../../utils/utils'
import Guide from '../../../components/Dialog/guide'
//定存宝
//import DepositIndex from '../deposit/index'
import DepositYou from '../deposit/you'
import DepositGather from '../deposit/gather'
//直投项目
import DirectInvestIndex from '../directInvest/index'
//债权转让
import CreditorsIndex from '../creditors/index'
import wrap from '../../../utils/pageWrapper'
class financeIndex extends Component{
     constructor(props){
		 super(props);
		 this.state={
			 titleCav:[
			 {
				 title:'聚点+',
			 },
             {
                 title:'优享+'
             },
			 {
				 title:'直投项目'
			 },{
				 title:'债权转让'
			 }],
			 Index:0,
             tabs:[DepositGather,DepositYou,DirectInvestIndex,CreditorsIndex]
		 }
	 }
	 componentWillReceiveProps(nextProps){
     	if(sessionStorage.getItem('setDefaultIndex')){
     		return false;
		}else{
            if(nextProps.defaultIndex&&nextProps.defaultIndex.data){
                if(nextProps.defaultIndex.data.productIndexTabIndex=='聚点+'){
                    this.setState({
                        Index:0
                    })
                    this.props.proIndexs(0);
                    sessionStorage.setItem('setDefaultIndex',true)
                }else if(nextProps.defaultIndex.data.productIndexTabIndex=='定存宝B'){
                    this.setState({
                        Index:1
                    })
                    this.props.proIndexs(1);
                    sessionStorage.setItem('setDefaultIndex',true)
                }else if(nextProps.defaultIndex.data.productIndexTabIndex=='直投项目'){
                    this.setState({
                        Index:2
                    })
                    this.props.proIndexs(2);
                    sessionStorage.setItem('setDefaultIndex',true)
                }else{
                    this.setState({
                        Index:3
                    })
                    sessionStorage.setItem('setDefaultIndex',true)
                    this.props.proIndexs(3);
                }

            }
		}

	 }
	 componentWillMount(){
     	const {proIndex,proIndexs,statusData}=this.props;
         this.setState({
             Index:proIndex
         });
         proIndexs(proIndex);
         this.props.getStatus()
	 }
	 componentDidMount(){
         this.props.getDefault();
	 }
	 handleSelect(index,last){
		 this.setState({
			Index:index 
		 });
         this.props.proIndexs(index);
	 }
	 render(){
		 const{
			titleCav,
			Index,
			tabs 
		 }=this.state;
		 return(
		<div>
		<Guide ref='guide'></Guide>
		<div className={styles.bg}></div>	 
		<Tabs 
		className={styles.financeIndex}
		onSelect={(index,last)=>{this.handleSelect(index,last)}}
		selectedIndex={Index}
		>
		<TabList className={styles.tabList}>
		   {
			titleCav.map(({title},i)=>(
				<Tab className={classNames(styles.tab,i==Index&&styles.action||'')} key={i}>
				 <div className={styles.cavOne}>
				 {
					 title
				 }
					 {title=='直投项目'&&<span className={styles.planBicon}></span>||''}
				 </div>
				</Tab>
				
			))   
		   }
		</TabList>
		{
           tabs.map((Component,i)=>(
			   <TabPanel key={i}>
			   {
                  <Component pageIndex={this.props.pageIndex} productId={this.props.productId} url={this.props.location.pathname}/>
			   }
			   </TabPanel>
		   ))
		}
		 </Tabs>
		 </div>
		 )
	 }
}
const financeIndexInit=(state,own)=>({
	  proIndex:state.global.getIn(['PRODUCT_INDEX']),
	  defaultIndex:state.infodata.getIn(['GET_DEFAULT_TAB','data']),
	  statusData:state.infodata.getIn(['GET_CHARGE_STATUS','data'])
})
const financeIndexInitfn=(dispath,owb)=>({
    proIndexs(index){
        dispath({
            type:'PRODUCT_INDEX',
            index:index
        })
	},
	getDefault(){
    	dispath({
			type:'GET_DEFAULT_TAB',
		})
	},
	getStatus(){
		dispath({
			type:'GET_CHARGE_STATUS'
		})
	}
})
export default connect(financeIndexInit,financeIndexInitfn)(wrap(financeIndex))