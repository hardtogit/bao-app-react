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
import DepositPlanB from '../deposit/planB'
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
                 title:'定存宝B'
             },
			 {
				 title:'直投项目'
			 },{
				 title:'债权转让'
			 }],
			 Index:0,
             tabs:[DepositGather,DepositPlanB,DirectInvestIndex,CreditorsIndex]
		 }
	 }
	 componentWillMount(){
     	const {proIndex,proIndexs}=this.props;
         this.setState({
             Index:proIndex
         });
         proIndexs(proIndex);
	 }
	 componentDidMount(){
	 	if (utils.getCookie('storeGuide')){

		}else{
            this.refs.guide.show()
			utils.setCookie('storeGuide','flag',360*100)
		}

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
	  proIndex:state.global.getIn(['PRODUCT_INDEX'])
})
const financeIndexInitfn=(dispath,owb)=>({
    proIndexs(index){
        dispath({
            type:'PRODUCT_INDEX',
            index:index
        })
	}
})
export default connect(financeIndexInit,financeIndexInitfn)(wrap(financeIndex))