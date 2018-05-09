import React from 'react' //过期抵用券
import NavBar from '../../../../components/NavBar'
import styles from '../myVouchers/index.css'
import Quan from '../../../../components/ticket/index'
import nonePast from '../../../../assets/images/record.png' // 没有抵用券
import {connect} from 'react-redux'
import Scroll from '../../../../components/scroll/index'
import {goBack} from 'react-router-redux';

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentDidMount() {}
	componentWillUnmount() {
		this.props.clearData()
	}
	render() {
		const {
            listData,
            getList,
            pending,
			end,
            pop
		}=this.props;
        const bodyHeight=document.body.clientHeight,
              Height=bodyHeight-44;
		return (
			<div className={styles.bg}>
				<NavBar onLeft={pop}>过期抵用券</NavBar>
				<div className={styles.content}>
					<Scroll height={Height} fetch={getList} isLoading={pending} distance={5} endType={end}
							nullDom={<div className={styles.nullBox}><img src={nonePast} width={169} height={152}/></div>}
							endload={<div></div>}
					>

                        {
                            listData&&listData.map((item,i)=>{
                                const {apply,end_date,start_date,amount,invest_money,type,status}=item;
                                let sys;
                                if (status=='已使用'){
                                    sys={color:'#7FCDA4'}
                                }else {
                                    sys={color:'#888'}
                                };
                                const String='出借'+invest_money+'即可使用'
                                return(<div key={i}>
									<Quan
										title={amount+'元'+type}
										desc1={String}
										desc2={apply}
										status={<span style={sys}>{status}</span>}
										from={start_date}
										to={end_date}
										endStyle={{backgroundColor :'#d2d2d2'}}
									/>
								</div>)
                            })
                        }

					</Scroll>
				</div>

			</div>
		)
	}
}
const datas=(state)=>({
	listData:state.listdata.getIn(['OVERDUE_VOUCHERS','data']),
    pending:state.listdata.getIn(['OVERDUE_VOUCHERS','pending']),
	end:state.listdata.getIn(['OVERDUE_VOUCHERS','pageEnd'])
})
const dispatchFn=(dispatch)=>({
      getList(){
          dispatch({
          	type:'OVERDUE_VOUCHERS'
		  })
	  },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'OVERDUE_VOUCHERS'
        })
    },
	pop(){
    	dispatch(goBack())
	}
})
export default connect(datas,dispatchFn)(Index)