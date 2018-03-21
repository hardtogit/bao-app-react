import React from 'react'
import NavBar from '../../../../components/NavBar/index'
import Box from '../../../../components/ContentBox/index'
import Alert from '../../../../components/Dialog/alert';
import Loading from '../../../../components/pageLoading'
import {goBack,push} from 'react-router-redux'
import {connect} from 'react-redux';
import styles from './index.css'
import Item from "../../../../components/List/index";
import rightPoint from  '../../../../assets/images/arrow2.png';

class Index extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getEducationInfo()
        this.props.questionTop()
    }
    handleStart=(countHas)=>{
        if(countHas == 0){
            this.refs.alert.show({
                title: '',
                content: '今年您的测评次数已用完',
                okText: '确定',
                okCallback: () => {
                }
            })
        }else{
            this.props.push("/user/setting/riskEvaluationQuestion")
        }
    };
    loadingDom=()=>{
        return(<Loading/>)
    };
    loadingEndDom=(data)=>{
        return(
            <Box>
                <p>{data.default}</p>
                {
                    data.type&&data.type.map((item,i)=>(
                        <p key={i}>{item.name}适投于：{item.content}</p>
                    ))
                }
                <p className={styles.dangerTxt}>{data.red}</p>
            </Box>
        )
    }
    render() {
        const{
            EducationData,
            topData
        }=this.props;
        let Dom;
        if(topData){
            Dom = this.loadingEndDom(topData.data)
        }else{
            Dom = this.loadingDom()
        }
        let countHas;
        if(EducationData&&EducationData.code == 100){
            countHas =3 - EducationData.data.has_num;
        }
        return (
            <div className={styles.bg}>
                <NavBar  onLeft={this.props.pop}>风险承受能力测评</NavBar>
                {
                    Dom
                }
                <div className={styles.startBtn} onClick={()=>{this.handleStart(countHas)}}>开始测评</div>
                <Alert ref="alert"/>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        EducationData:state.infodata.getIn(['GET_EDUCATION_INFO', 'data']),
        topData:state.infodata.getIn(['QUESTION_TOP', 'data']),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    pop() {
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getEducationInfo(){
        dispatch({
            type:'GET_EDUCATION_INFO'
        })
    },
    questionTop(){
        dispatch({
            type:'QUESTION_TOP'
        })
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
