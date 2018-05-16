/**
 * Created by Administrator on 2016/10/17.
 */
import React from 'react';
import styles from './index.css';
import PropTypes from 'prop-types'
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }
    static propTypes = {
        question: PropTypes.string,
        answer1: PropTypes.string,
        answer2: PropTypes.string,
        answer3: PropTypes.string,
        answer4: PropTypes.string,
        num: PropTypes.number,
    };
    choose=(index)=>{
        const {
            num
        } = this.props;
        this.setState({index});
        let answer;
        if(index ==1){
            answer="A"
        }else if(index ==2){
            answer="B"
        }else if(index ==3){
            answer="C"
        }else if(index ==4){
            answer="D"
        }
        sessionStorage.setItem("q"+num,answer);
    };
    render() {
        const {
            question,
            answer1,
            answer2,
            answer3,
            answer4,
            num
        } = this.props;
        const {
            index
        } = this.state;
        return (
            <div className={styles.questionItem} onChange={()=>{this.change()}}>
                <p>{num}.{question}</p>
                <p onClick={()=>{this.choose(1)}}><span  className={styles.chooseBox}><span className={index== 1&&styles.chooseBoxInner||styles.none}></span></span><span className={index==1&&styles.answerTxt||styles.floatSty}>{answer1}</span> </p>
                <p onClick={()=>{this.choose(2)}}><span  className={styles.chooseBox}><span className={index== 2&&styles.chooseBoxInner||styles.none}></span></span><span className={index==2&&styles.answerTxt||styles.floatSty}>{answer2}</span> </p>
                <p onClick={()=>{this.choose(3)}}><span  className={styles.chooseBox}><span className={index== 3&&styles.chooseBoxInner||styles.none}></span></span><span className={index==3&&styles.answerTxt||styles.floatSty}>{answer3}</span> </p>
                <p onClick={()=>{this.choose(4)}}><span  className={answer4&&styles.chooseBox||styles.none}><span className={(index==4)&&styles.chooseBoxInner||styles.none}></span></span><span className={index==4&&styles.answerTxt||styles.floatSty}>{answer4}</span> </p>
            </div>
        )
    }
}