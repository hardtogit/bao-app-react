import React from 'react'
import NavBar from '../../../../components/NavBar/index'
import Box from '../../../../components/ContentBox/index'
import QuestionBox from '../../../../components/QuestionBox/index'
import close from '../../../../assets/images/my-index/close.png'
import Alert from '../../../../components/Dialog/alert';
import Loading from '../../../../components/pageLoading'
import {goBack,push} from 'react-router-redux'
import {connect} from 'react-redux';
import styles from './index.css'

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            popIndex:0
        }
    }
    componentWillMount(){
        this.props.getQuestionList();
        this.props.getEducationInfo();
        for(let i=0;i<16;i++){
            sessionStorage.removeItem("q"+Number(i+1));
        }
    }
    handleConfirm=(countHas)=>{
        if(countHas ==0){
            this.refs.alert.show({
                title: '',
                content: '今年您的测评机会已用完',
                okText: '确定',
                okCallback: () => {}
            })
        }else{
            let arr=[];
            for(let i=1;i<=16;i++){
                sessionStorage.getItem("q"+i);
                arr.splice(i,0,sessionStorage.getItem("q"+i))
            }
            let answers="";
            let count=0;
            for(let i=0;i<arr.length;i++){
                if(arr[i]==null){
                    count=count+1;
                    this.refs.alert.show({
                        title: '',
                        content: '您尚有'+count+'道题未作答，请作答完毕后再次提交！',
                        okText: '确定',
                        okCallback: () => {}
                    })
                }else{
                    if(i==arr.length-1){
                        answers=answers + Number(i+1)+"-"+arr[i]
                        this.props.subAnswer(answers);
                        this.setState({
                            popIndex: 1
                        })
                    }else{
                        answers=answers + Number(i+1)+"-"+arr[i]+"_"
                    }
                }
            }
        }

    };
    handleClose=()=>{
        this.setState({
            popIndex: 0
        })
        this.props.push("/user/setting/riskEvaluation")
    };
    loadingDom=()=>{
        return(<Loading/>)
    };
    popDom=(data)=>{
        const{
            name,
            max_month,
            content,
            has_num
        }=data;
        const{
            popIndex
        }=this.state;
        return(
            <div className={popIndex==1&&styles.popWraper||styles.none}>
                <div className={styles.shadow}></div>
                <div className={styles.contentWraper}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <p className={styles.titleTxt}>测评结果</p>
                            <p className={styles.typeTxt}>{name}</p>
                        </div>
                        <div className={styles.contentTxt}>
                            <p>根据您的实际情况，宝点网预测您的风险承受能力等级为：{name}</p>
                            <p>适投于：{content}</p>
                        </div>
                        <div className={styles.goInvestBtn} onClick={()=>{this.props.push("/home/productIndex")}}>立即出借</div>
                        <p className={has_num==3&&styles.none||styles.restartTxt}>今年您还可进行{3-has_num}次测评，<span className={styles.restart} onClick={()=>{this.props.push("/user/setting/riskEvaluation")}}>重新评测</span></p>
                    </div>
                    <div className={styles.closeBtn}>
                        <img src={close} className={styles.close} onClick={this.handleClose}/>
                    </div>
                </div>
            </div>
        )
    }
    loadingEndDom=()=>{
        const{
            QuestionData,
        }=this.props;
        return(
            <div className={styles.questionWraper}>
                {
                    QuestionData&&QuestionData.data.map((item,i)=>{
                        return(
                            <QuestionBox key={i} question={item.question} num={i+1} answer1={item.answer.A} answer2={item.answer.B} answer3={item.answer.C} answer4={item.answer.D}></QuestionBox>
                        )
                    })
                }
            </div>
        )
    }
    render() {
        const{
            QuestionData,
            EducationData,
            SubAnwserData
        }=this.props;

        let Dom,popDom;
        let countHas;
        if(QuestionData){
            Dom=this.loadingEndDom();
        }else{
            Dom=this.loadingDom();
        }
        if(SubAnwserData){
            if(SubAnwserData.code==100){
                popDom=this.popDom(SubAnwserData.data);
            }
        }
        if(EducationData&&EducationData.code == 100){
            countHas =3 - EducationData.data.has_num;
        }

        return (
            <div className={styles.bg}>
                <NavBar  onLeft={this.props.pop}>风险承受能力测评</NavBar>
                <Box>
                    <p className={styles.remindTxt}>今年您还可评测{countHas}次</p>
                    {
                        Dom
                    }
                </Box>
                <Alert ref="alert"/>
                {
                    popDom
                }
                <div className={styles.startBtn} onClick={()=>{this.handleConfirm(countHas)}}>确认提交</div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        QuestionData: state.infodata.getIn(['GET_QIESTION_LIST', 'data']),
        EducationData:state.infodata.getIn(['GET_EDUCATION_INFO', 'data']),
        SubAnwserData:state.infodata.getIn(['SUB_ANSWER', 'data']),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    pop() {
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    },
    getQuestionList(){
        dispatch({
            type:'GET_QIESTION_LIST'
        })
    },
    getEducationInfo(){
        dispatch({
            type:'GET_EDUCATION_INFO'
        })
    },
    subAnswer(answer){
        dispatch({
            type:'SUB_ANSWER',
            params:[
                answer
            ]
        })
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Index)
