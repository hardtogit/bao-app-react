import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../../components/NavBar/';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux'
import Box from '../../../../components/ContentBox/index';
class Index extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
            <div>
                <NavBar  onLeft={this.props.pop} backgroundColor={"#F76360"}>红包规则</NavBar>
                <Box>
                    <iframe style={{"width":"100%","height":"100%","marginTop":"44px","border":"none"}}
							src={`http://${location.hostname}/mobile_api/static-page/bonus-rule`}></iframe>
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
