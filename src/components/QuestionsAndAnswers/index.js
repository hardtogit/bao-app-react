import React from 'react'
import styles from './index.styl'
import PropTypes from 'prop-types'
import top from '../../assets/images/find/top.png'
import down from '../../assets/images/find/down.png'
export default class QuestionAndAnswer extends React.PureComponent {
    static propTypes = {
        question: PropTypes.string,
        answer: PropTypes.string,
    };
    constructor(props){
        super(props);
        this.state = {
            index:0,
        }
    }

    changeBar=(index)=>{
        this.setState({index});
    };
    render() {
        const {
            question,
            answer
        } = this.props;
        const{
            index
        } = this.state;
        return (
            <div className={styles.root}>
                <p className={styles.question}>
                   <span className={styles.questionLeft}>{question}</span>
                    <span className={index==0&&styles.questionRight}>
                        <img src={top} className={styles.rightImg}  onClick={()=>{this.changeBar(0)}}/>
                    </span>
                    <span className={index==1&&styles.questionRight}>
                        <img src={down} className={styles.rightImg}  onClick={()=>{this.changeBar(1)}}/>
                    </span>
                </p>
                <div className={index==0&&styles.answer}>
                   <p className={styles.answerTxt}> {answer}</p>
                </div>
            </div>
        )
    }
}
