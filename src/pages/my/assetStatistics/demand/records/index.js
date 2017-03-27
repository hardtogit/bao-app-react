import React from 'react' //我的零钱宝记录
import NavBar from '../../../../../components/NavBar'
import styles from './index.css'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import Scroll from '../../../../../components/scroll/index'
import errorImg from '../../../../../assets/images/record.png' //没有记录


class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentDidMount(){

	}
    componentWillUnmount(){
		this.props.clearData();
	}
	render() {
		const {
			pop,
            listData,
            pending,
			end,
			getList
		}=this.props;
        const Height=document.body.clientHeight-44;
		return (
			<div className={styles.bg}>
				<NavBar onLeft={pop}>零钱宝记录</NavBar>
				<div className={styles.demandContent}>
					<Scroll height={Height} fetch={getList}
							isLoading={pending} distance={5} endType={end}
					        nullDom={<div className={styles.nullBox}><img src={errorImg} /></div>}>
						{
                            listData&&listData.map((item,i)=>{
                            	const {type_name,type,date,amount}=item;

                            	return(<div className={styles.oneList} key={i}>
									<div className={styles.demandReordsListLeft}>
										<p>{type_name}</p>
										<span>{date}</span>
									</div>
									<div className={styles.demandReordsListRight}>
										<p className={type==2&&styles.fontOrange||styles.fontGreen}>￥{amount}</p>
									</div>
								</div>)
							})
						}

					</Scroll>

				</div>
				<div className={styles.errorImg}><img src={errorImg} /></div>
			</div>
		)
	}
}
const datas=(state)=>({
       listData:state.listdata.getIn(['DEMAND_RECORDS','data']),
       pending:state.listdata.getIn(['DEMAND_RECORDS','pending']),
	   end:state.listdata.getIn(['DEMAND_RECORDS','pageEnd'])
})
const dispatchFn=(dispatch)=>({
       pop(){
       	  dispatch(goBack())
	   },
	   getList(){
       	  dispatch({
       	  	type:'DEMAND_RECORDS'
		  })
	   },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'DEMAND_RECORDS'
        })
    }
})
export default connect(datas,dispatchFn)(Index)