import React from 'react';
import NavBar from '../../../../../components/NavBar/';
import {connect} from 'react-redux';
import {push, goBack} from 'react-router-redux'
import Box from '../../../../../components/ContentBox/index';
import API from "../../../../../../config/index";
class Index extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
			const {pop} = this.props;
			return(
            <div>
                <NavBar  onLeft={pop} backgroundColor={"#00a6e2"}>自动投标规则</NavBar>
                <Box>
                    <iframe style={{"width":"100%","height":"100%","marginTop":"44px","border":"none"}}
							src={`${window.location.origin}/mobile_api/static-page/auto-bid`}></iframe>
                </Box>
            </div>
		)
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	pop() {
		dispatch(goBack())
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
