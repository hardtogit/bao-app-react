import React from 'react' //点币记录
import NavBar from '../../../../components/NavBar/'
import { connect } from 'react-redux'
import {goBack } from 'react-router-redux'
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
				<NavBar onLeft={goBack}>兑换记录</NavBar>
				<div className={classs.coinMain}>
                    <Scroll height={Height} fetch={this.props.getList}
                            isLoading={pending} distance={5} endType={end} >
                        {
                            listData&&listData.map((item,i)=>{
                                const Data=new Date(parseInt(item.exchangeTime)*1000);
                                const Year=Data.getFullYear();
                                const Month=Data.getMonth()+1;
                                const Day=Data.getDate();
                                const Hours=Data.getHours();
                                const Minutes=Data.getMinutes();
                                const Seconds=Data.getSeconds();
                                return(
                                    <div key={i} className={classs.coinBox}>
                                        <div className={classs.coinContent}>
                                          <div className={classs.coinTitle}>
                                              <span>{item.name}</span>
                                              <span className={classs.consume}>-{item.coin}点币</span>
                                          </div>
                                            <div className={classs.coinAddress}>
                                                {item.address}
                                            </div>
                                            <div className={classs.coinTime}>
                                                {Year+'-'+Month+'-'+Day+' '+Hours+':'+Minutes+':'+Seconds}
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
const mapStateToProps = (state) => {
    return {
        listData:state.listdata.getIn(['PRODUCT_EXCHANGE_RECORD','data']),
        pending:state.listdata.getIn(['PRODUCT_EXCHANGE_RECORD','pending']),
        end:state.listdata.getIn(['PRODUCT_EXCHANGE_RECORD','pageEnd'])
    }
};
const mapDispatchToProps = (dispatch) => ({
	goBack() {
		dispatch(goBack())
	},
    getList(){
        dispatch({
            type:'PRODUCT_EXCHANGE_RECORD'
        })
    },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'PRODUCT_EXCHANGE_RECORD'
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(Index))