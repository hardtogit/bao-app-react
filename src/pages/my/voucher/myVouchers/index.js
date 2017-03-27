import React from 'react' //抵用券首页
import NavBar from '../../../../components/NavBar'
import styles from './index.css'
import Quan from '../../../../components/ticket/index'
import {Link} from 'react-router'
import nonePast from '../../../../assets/images/nodiyong.png' // 没有抵用券
import {connect} from 'react-redux'
import Scroll from '../../../../components/scroll/index'
import {goBack} from 'react-router-redux'
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
		const {
            listData,
            pending,
			end,
            getList,
            pop
		}=this.props;
        const bodyHeight=document.body.clientHeight,
              Height=bodyHeight-44-50;
		return (
			<div>
				<NavBar onLeft={pop}
						rightNode={<Link className={styles.rightBox} to="/user/ruleVoucher">抵用券规则</Link>}>我的抵用券</NavBar>
				<div className={styles.bg}>
				<div className={styles.content}>
					<Scroll height={Height} fetch={getList} isLoading={pending} distance={5} endType={end}
							nullDom={<div className={styles.nullBox}><img src={nonePast} width={169} height={152}/></div>}
							endload={<div></div>}
					>

                        {
                            listData&&listData.map((item,i)=>{
                                const {apply,end_date,start_date,amount,invest_money,type}=item;
                                const String='投资'+invest_money+'即可使用'
                                return(<div key={i}>
									<Quan
										title={amount+'元'+type}
										desc1={String}
										desc2={apply}
										from={start_date}
										to={end_date}
										endStyle={{backgroundColor:'rgb(125,206,159)'}}
									/>
								</div>)
                            })
                        }

					</Scroll>
					<Link to="/user/vouchersPast"><div className={styles.pastDue}><span>过期抵用券></span></div></Link>
				</div>
				</div>
			</div>
		)
	}
}
const datas=(state)=>({
      listData:state.listdata.getIn(['USER_VOUCHERS','data']),
       pending:state.listdata.getIn(['USER_VOUCHERS','pending']),
	   end:state.listdata.getIn(['USER_VOUCHERS','pageEnd'])
})
const dispatchFn=(dispatch)=>({
        getList(){
        	dispatch({
        		type:'USER_VOUCHERS'
			})
		},
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'USER_VOUCHERS'
        })
    },
	pop(){
    	dispatch(goBack())
	}
})
export default connect(datas,dispatchFn)(wrap(Index))