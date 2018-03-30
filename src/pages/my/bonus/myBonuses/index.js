import React from 'react'
import NavBar from '../../../../components/NavBar/'
import styles from './index.less'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { connect } from 'react-redux'
import classNames from "classnames/index"
import {goBack,push} from 'react-router-redux'
import Active from '../active'
import Cash from '../cash'
class Index extends React.Component {
	constructor(props){
		super(props);
		Tabs.setUseDefaultStyles(false);
		this.state={
			titleCav:[
				{
					title:'激活红包',
				},
				{
					title:'现金红包'
				},
			],
			Index:0,
			tabs:[Active,Cash]
		}
	}
	componentDidMount() {
    }
    handleSelect=(index,last)=>{
		this.setState({
            Index:index
		})

	}
    componentWillUnmount(){

    }
	render() {
        const Height=document.body.clientHeight-135;
        const {
            goBack,
			push
        }=this.props;
        const{
            titleCav,
            Index,
            tabs
        }=this.state;
		return (
			<div className={styles.container}>
				<NavBar backgroundColor={"#F76360"}
						rightNode="红包规则"
						onRight={()=>{push("/user/redPacketRule")}}
				        onLeft={goBack}>
					我的红包 </NavBar>

				<Tabs
					className={styles.financeIndex}
					onSelect={(index,last)=>{this.handleSelect(index,last)}}
					selectedIndex={Index}
				>
					<TabList className={styles.tabList}>
                        {
                            titleCav.map(({title},i)=>(
								<Tab className={classNames(styles.tab,i==Index&&styles.active||'')} key={i}>
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

const mapStateToProps = (state) => {
	return {

	}
};
const mapDispatchToProps = (dispatch) => ({
	goBack() {
		dispatch(goBack())
	},
	push(url){
	    dispatch(push(url))
	},
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'BONUS_LOG'
        })
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)