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
	componentWillUnmount() {
		this.props.clearData();
	}
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
				<div className={classs.coinMain}>
                    <Scroll height={Height} fetch={this.props.getList}
                            isLoading={pending} distance={5} endType={end} endload={<div></div>}>
                        {
                            listData&&listData.map((item,i)=>{
                                return(
								<div key={i} className={classs.coinBox}>
									<div className={classs.coinContent}>
										<div className={classs.coinTitle}>
											<span>{item.name}</span>
											<span className={classs.consume}>{'增加'==item.type&&"+"||"-"}{item.amount}</span>
										</div>
										<div className={classs.coinAddress}>
                                            {item.desc}
										</div>
										<div className={classs.coinTime}>
                                            {item.date}
										</div>
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
        listData:state.listdata.getIn(['COIN_LOG','data']),
        pending:state.listdata.getIn(['COIN_LOG','pending']),
        end:state.listdata.getIn(['COIN_LOG','pageEnd'])
    }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	goBack() {
		dispatch(goBack())
	},
    getList(){
        dispatch({
            type:'COIN_LOG'
        })
    },
	clearData(){
    	dispatch({
    		type:'CLEAR_DATA',
			key:'COIN_LOG'
		})
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(Index))