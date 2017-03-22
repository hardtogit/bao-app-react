import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../../components/NavBar/';
import {connect} from 'react-redux';
import {push, goBack} from 'react-router-redux'
import Box from '../../../../components/ContentBox/index';
import API from "../../../../../config/index";
class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar backgroundColor={"#00b0e6"}>点币规则</NavBar>
                <Box>
                    <iframe style={{"width":"100%","height":"100%","border":"none"}}
                            src={`http://${location.hostname}/mobile_api/static-page/coin-rule`}></iframe>
                </Box>
            </div>
        )
    }
}
export default Index
