import React,{Component} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar'
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
import xiong from '../../../assets/images/find/xiong.png'
import QuestionsAndAnswers from '../../../components/QuestionsAndAnswers'
import Loading from '../../../components/pageLoading'
class shoppingMall extends Component{
    componentDidMount(){
        this.props.getHelpList()
    }
    loadingDom=()=>{
        return <Loading/>
    }
    loadEndDom=()=>{
        const{
            ListData
        }=this.props;
        return(
            <div className={styles.findContent} >
                <img src={xiong} className={styles.xiong}/>
                <div className={styles.queWraper}>
                    {ListData&&ListData.data.map((item,i)=>{
                        return(
                            <QuestionsAndAnswers key={i} question={item.title} answer={item.answer}></QuestionsAndAnswers>
                            )
                    })}
                </div>
            </div>
            )
    }
    render(){
        const{
            pop,
            ListData
        }=this.props;
        let Dom;
        if(ListData&&ListData.code == 100){
            Dom=this.loadEndDom();
        }else{
            Dom=this.loadingDom();
        }
        return(
            <div className={styles.finderHome}>
                <div className={styles.finderHomeHeader}>
                    <NavBar title="常见问题" onLeft={pop} backgroundColor="#fff"
                            color="#41403e"
                    />
                </div>
                {
                    Dom
                }

            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    ListData: state.infodata.getIn(['GET_HELP_LIST', 'data']),
});
const mapDispatchToProps=(dispatch,own)=>({
    getHelpList(){
        dispatch({
            type:'GET_HELP_LIST'
        })
    },
    pop(){
        dispatch(goBack())
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(shoppingMall)