import React from 'react'
import NavBar from '../../../../components/NavBar'
import styles from './index.styl'
import * as actionTypes from '../../../../actions/actionTypes'
import {connect} from 'react-redux'
import wrap from '../../../../utils/pageWrapper'
import {goBack} from 'react-router-redux'
import Scroll from '../../../../components/scroll/index'

class RelatedProjects extends React.Component {
  constructor(props){
    super(props)
      this.state={init:false}
  }
  componentDidMount(){
     this.setState({
         init:true
     })
  }
    componentWillUnmount(){
        this.props.clearData()
    }
  ScrollDom=(Sheight)=>{
      const {
          pending,
          pageEnd,
          data,
          nextPage,
          params:{
              id
          }
      } = this.props;
    return(
      <Scroll height={Sheight} fetch={()=>{nextPage(id)}}
                   isLoading={pending} distance={20} endType={pageEnd} endload={<div></div>}>
        {
            data&&data.map((item,i)=>{
              const {id,name,money,cycle}=item;
              return(<div className={styles.listOne} key={i}>
                <div className={styles.titleBox}>
                 <span className={styles.titleText}>
                     标号:
                 </span>
                  <span className={styles.proBj}>
                      {id}
                 </span>
                  <span className={styles.proRight}>
                      {name}
                 </span>
                </div>
                <div className={styles.proBody}>
                    <span>
                        <span>
                            借款金额:
                        </span>
                        <span className={styles.proTotal}>
                            {money}
                        </span>
                        元
                    </span>
                    <span className={styles.proRight}>
                        {cycle}个月
                    </span>
                </div>
              </div>)
            })

        }
    </Scroll>)
  }
  render() {
    const allHeight=document.body.clientHeight,
          Sheight=allHeight-(90+44+15-5);
     let Dom;
      if (this.state.init){
          Dom=this.ScrollDom(Sheight);
      }
    return (
      <div className={styles.bg}>
        <NavBar onLeft={this.props.goBack}>
          涉及项目
        </NavBar>
        <div className={styles.body}>
          <div className={styles.title} ref="ps">
              甄选合作金融机构担保标，结合互联网技术支撑，将个体流动性需求通过系统自动投标和债权转让妥善解决，赎回时通过转让债权变现。
          </div>
          <div className={styles.content} style={{height:Sheight}}>
              {Dom}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const listKey = actionTypes.INVOLVE_PROJECT_LIST
  return {
    pending: state.listdata.getIn([listKey, 'pending']),
    data: state.listdata.getIn([listKey, 'data']),
    curPage: state.listdata.getIn([listKey, 'curPage']),
    pageEnd: state.listdata.getIn([listKey, 'pageEnd'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  nextPage(id) {
    dispatch({
      type: actionTypes.INVOLVE_PROJECT_LIST,
       params:[id]
    })
  },
   push(fn){
     return fn
   },
  goBack() {
    dispatch(goBack())
  },
  clearData(){
      dispatch({
            type:'CLEAR_DATA',
            key:'INVOLVE_PROJECT_LIST'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(RelatedProjects))
