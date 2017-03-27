import React from 'react' //加息券首页
import NavBar from '../../../../components/NavBar'
import styles from './index.css'
import Quan from '../../../../components/ticket/index'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Scroll from '../../../../components/scroll/index'
import nojiaxi from '../../../../assets/images/nojiaxi1.png'
import {goBack} from 'react-router-redux'
import wrap from '../../../../utils/pageWrapper'
 class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentDidMount() {

	}
     componentWillUnmount(){
         this.props.clearData()
     }
	render() {
		const {
            listData,
            pending,
			end,
            getList,
            pop
		}=this.props;
		const Height=document.body.clientHeight,
              ScrollHeight=Height-44-50;
		return (
			<div>
				<NavBar onLeft={pop}
						rightNode={<Link to="/user/ruleRate" className={styles.rightBox}>加息劵规则</Link>}>
					我的加息券
				</NavBar>
				<div className={styles.bg}>
				<div className={styles.content}>
					<Scroll height={ScrollHeight} fetch={getList} isLoading={pending} distance={5} endType={end}
							nullDom={<div className={styles.nullBox}><img src={nojiaxi}/></div>}
							endload={<div></div>}
					>

                        {
                            listData&&listData.map((item,i)=>{
                            	const {apply,end_date,start_date,rate}=item;
                               return(<div key={i}>
								   <Quan
									   title={rate+'%加息劵'}
									   desc1="投资即可使用"
									   desc2={apply}
									   from={start_date}
									   to={end_date}
								   />
							   </div>)
                            })
                        }

					</Scroll>
				</div>
				<Link to="/user/addRateUsed"><div className={styles.pastDue}><span>过期加息券></span></div></Link>
				</div>
			</div>
		)
	}
}
const datas=(state)=>({
      listData:state.listdata.getIn(['MY_INTEREST_RATES','data']),
	  pending:state.listdata.getIn(['MY_INTEREST_RATES','pending']),
	  end:state.listdata.getIn(['MY_INTEREST_RATES','pageEnd'])
})
const dispatch=(dispatch)=>({
       getList(){
       	dispatch({
       		type:'MY_INTEREST_RATES'
		})
	   },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'MY_INTEREST_RATES'
        })
    },
	pop(){
    	dispatch(goBack())
	}
})
export default connect(datas,dispatch)(wrap(Index))