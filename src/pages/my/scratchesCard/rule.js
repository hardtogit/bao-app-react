/**
 * Created by Administrator on 2017/2/8.
 */
import React from 'react';
import NavBar from '../../../components/NavBar/';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux'
import Box from '../../../components/ContentBox/index';
import style from './index.css'
class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style.bg}>
                <NavBar backgroundColor={"#00b0e6"} onLeft={this.props.pop}>刮刮卡规则</NavBar>
                <Box>
               <iframe style={{"width":"100%","height":"100%","border":"none",}}
                       src={`${window.location.origin}/mobile_api/static-page/scratcheCard-rule`}></iframe>
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
