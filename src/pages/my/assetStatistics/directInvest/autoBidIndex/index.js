/**
 * Created by xiangguo .
 * time:2017/7/23 0023.
 * email:413401168@qq.com.
 * use:auto...
 */
/**
 * 首页 记得删除
 */

import React,{Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import {connect} from 'react-redux'
import {push, goBack} from 'react-router-redux'
import {Link} from 'react-router'
import NavBar from '../../../../../components/NavBar'
import styles from './index.less'
import classNames from 'classnames'
//定存宝
import AutoBid from '../autoBid'
import AutoBidOld from '../autoBidOld'
//直投项目
class Index extends Component{
    constructor(props){
        super(props);
        Tabs.setUseDefaultStyles(false);
        this.state={
            titleCav:[
                {
                    title:'存管自动投标',
                },
                {
                    title:'托管自动投标'
                },
               ],
            Index:0,
            tabs:[AutoBid,AutoBidOld]
        }
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    handleSelect(index,last){
        this.setState({
            Index:index
        });
    }
    render(){
        const{
            titleCav,
            Index,
            tabs
        }=this.state;
        const{
            pop
        }=this.props
        return(
            <div className={styles.container}>
                <NavBar onLeft={pop} rightNode={<Link style={{"color":"#fff"}} to="/user/autoBuyRule">规则</Link>}>自动投标</NavBar>
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
                                    <Component />
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
const financeIndexInitfn=(dispatch,owb)=>({
    pop(){
        dispatch(goBack())
    }
})
export default connect(financeIndexInit,financeIndexInitfn)(Index)