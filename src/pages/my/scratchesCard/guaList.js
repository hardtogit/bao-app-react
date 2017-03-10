/**
 * Created by wangdongfang on 17/2/13.
 */
import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import styles from './guaList.less'
import Scroll from '../../../components/scroll/index'
import {connect} from 'react-redux'
import nonePast from '../../../assets/images/record.png'
import {goBack} from 'react-router-redux'
class Index extends Component{
    componentDidMount(){
        this.props.getList();
    }
    render(){
        const {
            listData,
            pending,
            end,
            getList,
            pop
        }=this.props;
        const bodyHeight=document.body.clientHeight,
              Height=bodyHeight-44;
        return(<div>
            <NavBar onLeft={pop}>获得奖励</NavBar>
            <div className={styles.body}>
                <Scroll height={Height} 
                        fetch={getList} 
                        isLoading={pending} 
                        distance={5} 
                        endType={end}
                        nullDom={<div className={styles.nullBox}>
                                    <img src={nonePast} width={169} height={152}/>
                                </div>}
                        endload={<div></div>}
                >

                    {
                        listData&&listData.map((item,i)=>{
                            const {type,amount,date}=item;
                            return(<div className={styles.listBoxOne} key={i}>
                                <h2>{type}</h2>
                                <p>
                                    <span>{date}</span>
                                    <span className={styles.listBoxText}>{amount}</span>
                                </p>
                            </div>)
                        })
                    }

                </Scroll>
            </div>
        </div>)
    }
}
const datas=(state)=>({
      listData:state.listdata.getIn(['SCRATCH_REWARDS','data']),
      pending:state.listdata.getIn(['SCRATCH_REWARDS','pending']),
      end:state.listdata.getIn(['SCRATCH_REWARDS','pageEnd'])
})
const dispatchFn=(dispatch)=>({
       getList(){
           dispatch({
               type:'SCRATCH_REWARDS'
           })
       },
    pop(){
           dispatch(goBack())
    }
})
export default connect(datas,dispatchFn)(Index)