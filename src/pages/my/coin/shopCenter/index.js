import React from 'react' //点币首页
import NavBar from '../../../../components/NavBar/index';
import Box from '../../../../components/ContentBox/index'
import {Link} from "react-router";
import Item from "../../../../components/List/index";
import classs from './index.less'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import rightPoint from  '../../../../assets/images/arrow2.png';
let item = [
    {
        name:"兑换记录",
        info:"",
        arrow:true,
        href:"/user/exchangeList"
    },
    {
        name:"点币记录",
        info:"",
        arrow:true,
        href:"/user/coinsRecord"
    },
    {
        name:"我的地址",
        info:"",
        arrow:true,
        href:"/user/setting/siteList"
    }
];
class Index extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {}
	componentWillUnmount() {}
	render() {
		return (
			<div className={classs.bg} >
				<NavBar onLeft={this.props.pop}>商城中心</NavBar>
                <Box>
                    <div className={classs.box}>
                        <Item item={item}/>
                    </div>
                    <div className={classs.rule}>
                        <Link to="/user/shopCenterRule">
                     <span>查看点币使用规则</span>
                        <img src={rightPoint}/>
                        </Link>
                    </div>
                </Box>
			</div>
		)
	}
}
const datas=(state)=>({

});
const dispatchFn=(dispatch)=>({
	  pop(){
	  	dispatch(goBack())
	  }
});
export default connect(datas,dispatchFn)(Index)