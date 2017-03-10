import React from 'react' //点币记录
import NavBar from '../../../../components/NavBar/'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import Scroll from '../../../../components/scroll/index'
import classs from '../coinShop/index.less'
import wrap from '../../../../utils/pageWrapper'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentDidMount() {}
	componentWillUnmount() {}
	render() {
        const Height=document.body.clientHeight-44;
        const {
            listData,
            pending,
            end,
            goBack
        }=this.props;
		return (
			<div className={classs.bg}>
				<NavBar onLeft={goBack}>我的点币记录</NavBar>
				<div className={classs.coinMain} style={{"padding":"0 0 0 15px"}}>
                    <Scroll height={Height} fetch={this.props.getList}
                            isLoading={pending} distance={5} endType={end} >
                        {
                            listData&&listData.map((item,i)=>{
                                return(
                                    <div key={i} className={classs.coinlist}>
                                        <div className={classs.listleft}>
                                            <h1>{item.name}</h1>
                                            <p className={classs.potop}>{item.desc}</p>
                                            <p>{item.date}</p>
                                        </div>
                                        <div className={classs.listright}>
                                            <p>{'增加'==item.type&&"+"||"-"}{item.amount}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Scroll>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state, ownProps) => {
    return {
        listData:state.listdata.getIn(['VOUCHER_LIST','data']),
        pending:state.listdata.getIn(['VOUCHER_LIST','pending']),
        end:state.listdata.getIn(['VOUCHER_LIST','pageEnd'])
    }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	goBack() {
		dispatch(goBack())
	},
    getList(){
        dispatch({
            type:'VOUCHER_LIST'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(Index))