import React from 'react' //我的直投记录
import NavBar from '../../../../../components/NavBar'
import styles from './index.less'
import wrap from '../../../../../utils/pageWrapper'
import classNames from 'classnames'
import Scroll from '../../../../../components/scroll/index'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
 class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
           flage:0
		}
	}
	componentDidMount(){

	}
     componentWillUnmount(){
		const {
			clearData
		}=this.props;
		clearData('DIRECT_INVEST_RECORDS');
        clearData('DIRECT_INVEST_RECORDS_B');
        clearData('DIRECT_INVEST_RECORDS_C');
	}
	changeCav=(num)=>{
		this.setState({
            flage:num
		})
	}
	listDomA=(ScrollHeight)=>{
		const {
            listDataA,
            getListA,
            pendingA,
            endA,
            push
		}=this.props;
		return(<Scroll height={ScrollHeight} fetch={getListA} isLoading={pendingA} distance={5} endType={endA}
					   nullDom={<div></div>}
					   endload={<div></div>}
		>

            {
                listDataA&&listDataA.map((item,i)=>{
                	const {name,id,rate,amount,status,date}=item;
                   return(<div key={i} className={styles.listBoxOne} onClick={
                   	()=>{
                   		if(item.access_sys){
                            push(`/user/propertyDetail/${id}?access_sys=platform`)
						}else{
                            push(`/user/propertyDetail/${id}`)
						}
                   	}
                   }>
                        <div>
							<span className={styles.listTitle}>
								{name.substring(0,6)}<span>({rate}%)</span>
							</span>
							<span className={styles.listAmount}>￥{amount}</span>
						</div>
					   <div>
						   <span className={styles.listDate}>
							   {date}
						   </span>
						   <span className={styles.listStatus}>
							   {status}
						   </span>
					   </div>
				   </div>)
                })
            }

		</Scroll>)
	}
     listDomB=(ScrollHeight)=>{
         const {
             listDataB,
             getListB,
             pendingB,
             endB,
             push
         }=this.props;
         return(<Scroll height={ScrollHeight} fetch={getListB} isLoading={pendingB} distance={5} endType={endB}
						nullDom={<div></div>}
						endload={<div></div>}
		 >

             {
                 listDataB&&listDataB.map((item,i)=>{
                     const {name,id,rate,amount,status,date}=item;
                     return(<div key={i} className={styles.listBoxOne} onClick={()=>{
                         if(item.access_sys){
                             push(`/user/propertyDetail/${id}?access_sys=platform`)
                         }else{
                             push(`/user/propertyDetail/${id}`)
                         }
                     }}>
						 <div>
							<span className={styles.listTitle}>
								{name.substring(0,6)}<span>({rate}%)</span>
							</span>
							 <span className={styles.listAmount}>￥{amount}</span>
						 </div>
						 <div>
						   <span className={styles.listDate}>
							   {date}
						   </span>
							 <span className={styles.listStatus}>
							   {status}
						   </span>
						 </div>
					 </div>)
                 })
             }

		 </Scroll>)
     }
     listDomC=(ScrollHeight)=>{
         const {
             listDataC,
             getListC,
             pendingC,
             endC,
             push
         }=this.props;
         return(<Scroll height={ScrollHeight} fetch={getListC} isLoading={pendingC} distance={5} endType={endC}
						nullDom={<div></div>}
						endload={<div></div>}
		 >

             {
                 listDataC&&listDataC.map((item,i)=>{
                     const {name,id,rate,amount,status,date}=item;
                     return(<div key={i} className={styles.listBoxOne} onClick={()=>{
                         if(item.access_sys){
                             push(`/user/propertyDetail/${id}?access_sys=platform`)
                         }else{
                             push(`/user/propertyDetail/${id}`)
                         }
                     }}>
						 <div>
							<span className={styles.listTitle}>
								{name.substring(0,6)}<span>({rate}%)</span>
							</span>
							 <span className={styles.listAmount}>￥{amount}</span>
						 </div>
						 <div>
						   <span className={styles.listDate}>
							   {date}
						   </span>
							 <span className={styles.listStatus}>
							   {status}
						   </span>
						 </div>
					 </div>)
                 })
             }

		 </Scroll>)
     }
	render() {
		const {
            flage
		}=this.state;
		const {
			pop
		}=this.props;
		const bodyHeight=document.body.clientHeight,
			  contentHeight=bodyHeight-44-44-20,
			  listDomA=this.listDomA(contentHeight),
              listDomB=this.listDomB(contentHeight),
		       listDomC=this.listDomC(contentHeight);
		return (
			<div>
				<NavBar onLeft={pop}>直投记录</NavBar>
				<div className={styles.bg}>
                 <div className={styles.cavHead}>
                  <div className={classNames(styles.cavOne,flage==0&&styles.activeCav||null)} onClick={()=>{this.changeCav(0)}}>
					  待回款项目
				  </div>
				  <div className={classNames(styles.cavOne,flage==1&&styles.activeCav||null)} onClick={()=>{this.changeCav(1)}}>
					  债权转让
				  </div>
				  <div className={classNames(styles.cavOne,flage==2&&styles.activeCav||null)} onClick={()=>{this.changeCav(2)}}>
					  历史资产
				  </div>
				 </div>
			    <div className={styles.content} style={{height:contentHeight}}>
                 <div className={flage==0&&styles.block||styles.hide} >
                     {flage==0&&listDomA||null}
				 </div>
				 <div className={flage==1&&styles.block||styles.hide} >
                     {flage==1&&listDomB||null}
				 </div>
				 <div className={flage==2&&styles.block||styles.hide} >
                     {flage==2&&listDomC||null}
				 </div>
				</div>
				</div>
			</div>
		)
	}
}
const datas=(state)=>({
	  listDataA:state.listdata.getIn(['DIRECT_INVEST_RECORDS','data']),
      pendingA:state.listdata.getIn(['DIRECT_INVEST_RECORDS','pending']),
	  endA:state.listdata.getIn(['DIRECT_INVEST_RECORDS','pageEnd']),
      listDataB:state.listdata.getIn(['DIRECT_INVEST_RECORDS_B','data']),
      pendingB:state.listdata.getIn(['DIRECT_INVEST_RECORDS_B','pending']),
      endB:state.listdata.getIn(['DIRECT_INVEST_RECORDS_B','pageEnd']),
      listDataC:state.listdata.getIn(['DIRECT_INVEST_RECORDS_C','data']),
      pendingC:state.listdata.getIn(['DIRECT_INVEST_RECORDS_C','pending']),
      endC:state.listdata.getIn(['DIRECT_INVEST_RECORDS_C','pageEnd'])
})
const dispatchFn=(dispatch)=>({
	  getListA(){
          dispatch({
	  	  	type:'DIRECT_INVEST_RECORDS',
			params:[1]
		  })
	  },
	getListB(){
        dispatch({
            type:'DIRECT_INVEST_RECORDS_B',
            params:[2]
        })
	},
    getListC(){
        dispatch({
            type:'DIRECT_INVEST_RECORDS_C',
            params:[3]
        })
    },
	 push(url){
        dispatch(push(url))
	 },
	 pop(){
	 	dispatch(goBack())
	 },
	 clearData(key){
	 	dispatch({
	 		type:'CLEAR_DATA',
            key:key
		})
	 }
})
export default connect(datas,dispatchFn)(wrap(Index))