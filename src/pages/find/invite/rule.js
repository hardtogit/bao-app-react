import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../components/NavBar/';
import {connect} from 'react-redux';
import {push, goBack} from 'react-router-redux'
import Box from '../../../components/ContentBox/index';
import API from "../../../../config/index";
class Index extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
            <div>
                <NavBar  onLeft={this.props.pop} backgroundColor={"#F76260"}>活动说明</NavBar>
                <Box>
                    <iframe style={{"width":"100%","height":"100%","marginTop":"44px","border":"none"}} src={API.requestUrl+"/mobile_api/static-page/invite-rule"}></iframe>
                </Box>
            </div>
		)
	}
}
const datas=(state)=>({

})
const dispatchFn=(dispatch)=>({
	pop(){
		dispatch(goBack())
	}
})
export default connect(datas,dispatchFn)(Index)
