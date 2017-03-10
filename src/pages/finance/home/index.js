/**
 * 首页 记得删除
 */

import React,{Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import {connect} from 'react-redux'
import styles from './index.css'
import classNames from 'classnames'
//定存宝
import DepositIndex from '../deposit/index'
// 零钱宝
import DemandIndex from '../demand/index'
//直投项目
import DirectInvestIndex from '../directInvest/index'
//债权转让
import CreditorsIndex from '../creditors/index' 
class financeIndex extends Component{
     constructor(props){
		 super(props);
		 this.state={
			 titleCav:[
			 {
				 title:'定存宝',
			 },{
				 title:'直投项目'
			 },{
				 title:'债权转让'
			 }],
			 Index:0,
             tabs:[DepositIndex,DirectInvestIndex,CreditorsIndex]
		 }
	 }
	 componentWillMount(){
     	const {proIndex,proIndexs}=this.props;
         this.setState({
             Index:proIndex
         });
         proIndexs();

	 }
	 componentDidMount(){

	 }
	 handleSelect(index,last){
		 this.setState({
			Index:index 
		 })
	 }
	 render(){
		 const{
			titleCav,
			Index,
			tabs 
		 }=this.state;
		 return(
		<div>
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
				 </div>
				</Tab>
				
			))   
		   }
		</TabList>
		{
           tabs.map((Component,i)=>(
			   <TabPanel key={i}>
			   {
                  <Component pageIndex={this.props.pageIndex} productId={this.props.productId}/>
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
    proIndexs(){
        dispath({
            type:'PRODUCT_INDEX',
            index:0
        })
	}
})
export default connect(financeIndexInit,financeIndexInitfn)(financeIndex)