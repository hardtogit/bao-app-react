import React from 'react' //过期加息券
import NavBar from '../../../../components/NavBar'
import styles from '../myInterestRates/index.css'
import Quan from '../../../../components/ticket/index'
import {connect} from 'react-redux'
import Scroll from '../../../../components/scroll/index'
import {goBack} from 'react-router-redux'
import nonePast from '../../../../assets/images/record.png' // 没有加息券


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
		const bodyHeight=document.body.clientHeight,
		      Height=bodyHeight-44;
		return (
			<div className={styles.bg}>
				<NavBar onLeft={pop}>过期加息券</NavBar>
				<div className={styles.content}>
				<div>
					<Scroll height={Height} fetch={getList} isLoading={pending} distance={5} endType={end}
							nullDom={<div className={styles.nullBox}><img src={nonePast} width={169} height={152}/></div>}
							endload={<div></div>}
					>

                        {
                            listData&&listData.map((item,i)=>{
                                const {apply,end_date,start_date,rate,status}=item;
                                 let sys;
                                 if (status=='已使用'){
                                 	sys={color:'#7FCDA4'}
								 }else {
                                 	sys={color:'#888'}
								 }
                                return(<div key={i}>
									<Quan
										title={rate+'%加息券'}
										desc1="投资即可使用"
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
			</div>
		)
	}
}
const datas=(states)=>({
      listData:states.listdata.getIn(['OVERDUE_INTEREST_RATES','data']),
      pending:states.listdata.getIn(['OVERDUE_INTEREST_RATES','pending']),
	  end:states.listdata.getIn(['OVERDUE_INTEREST_RATES','pageEnd'])
})
const dispatchFn=(dispatch)=>({
       getList(){
       	   dispatch({
       	   	type:'OVERDUE_INTEREST_RATES'
		   })
	   },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'OVERDUE_INTEREST_RATES'
        })
    },
	pop(){
    	dispatch(goBack())
	}
})

export default connect(datas,dispatchFn)(Index)