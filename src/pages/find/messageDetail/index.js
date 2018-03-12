import React,{Component} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar'
import styles from './index.css'
import {goBack} from 'react-router-redux'
class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            date:'',
            description:'',
        }
    }
    componentDidMount(){
        const {
            title,
            date,
            description,
            type,
            id
        }=JSON.parse(sessionStorage.getItem("bao-noticeData"))
             this.setState({
                  title,
                  date,
                 description 
             })
             this.props.reader(id,type)
    }
    render(){
        const{
          title,
          date,
          description 
        }=this.state;
        return(
            <div className={styles.finderDetail}>
            <div className={styles.finderDetailHeader}>
            <NavBar title="消息详情" onLeft={this.props.pop}/>
            </div>
              <div className={styles.detailsBody}>
              <h3 className={styles.detailsTitle}>
               {
                   title
               }
              </h3>
              <p className={styles.detailsTime}>
              {
                  date
              }
              </p>
              <hr className={styles.detailsHr}/>
              <div className={styles.detailsMassege} dangerouslySetInnerHTML={{__html:description}}>
              
              </div>
              </div>
            </div>
        )
    }
}
const mapStateToProps=(state,own)=>({

})
const mapDispatchToProps=(dispath,own)=>({
      reader(Id,type){
          dispath({
              type:"SET_READ",
              params:[{
                  type:type,
                  msgId:Id
              }]
          })
      },
    pop(){
          dispath(goBack())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)