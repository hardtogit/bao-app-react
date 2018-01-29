import React,{Component} from 'react'
import NavBar from '../../../components/NavBar'
import {connect} from 'react-redux'
import {Link} from "react-router";
import classNames from 'classnames'
import Scroll from '../../../components/scroll'
import ticket from '../../../assets/images/find/ticket.png'
import styles from './index.css'
import {goBack,push} from 'react-router-redux'
class ticketRule extends Component{
    componentDidMount(){
        this.props.getHotActivityList();
    }
    constructor(props){
        super(props)
    }
    render(){
        const {
            pop,
            activityData
        }=this.props;

        return(
             <div className={styles.findMessage} >
             <div className={styles.findMessageHeader}><NavBar title="热门活动" backgroundColor="#fff" color="#666" onLeft={pop}/>
             </div>
              <div className={styles.messageContent}>
                  <ul  className={styles.hotActive}>
                      {
                          activityData&&activityData.data.map((item,i)=>(
                              <Link to={item.url_wap}  key={i}>
                                  <li>
                                      <div className={styles.acWraper}>
                                          <div className={item.status != 1 && styles.shadow}>
                                              {item.status == '0' && "活动未开始" || (item.status == '2' && "活动已结束")}
                                          </div>
                                          <img src={item.image_wap}/>
                                      </div>
                                      <p className={styles.activityTitle}>{item.title}</p>
                                      <p className={styles.activityTime}>{item.time_str}</p>
                                  </li>
                              </Link>

                          ))
                      }
                  </ul>
            </div>
            </div>
        )
    }
}
const initMymassege=(state,own)=>{
    return{
        activityData:state.infodata.getIn(['GET_HOT_ACTIVITY','data'])
    }
}
const initMymassegefn=(dispatch,own)=>({
    pop(){
        dispatch(goBack())
    },
    getHotActivityList(){
        dispatch({
            type:'GET_HOT_ACTIVITY'
        })
    },
})
export default connect(initMymassege,initMymassegefn)(ticketRule)