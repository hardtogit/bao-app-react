import React from 'react' //充值
import NavBar from '../../../../../components/NavBar/index';
import styles from './index.less'
import {connect} from 'react-redux'
import Scroll from '../../../../../components/scroll/index';
import {goBack} from 'react-router-redux'
import errorImg from "../../../../../assets/images/record.png";
import wrap from '../../../../../utils/pageWrapper'
import cs from "classnames";
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterShow:false,
            flag:0
        }
    }
    componentWillUnmount(){
    }
    componentDidMount=()=>{
        this.props.getList(this.state.flag);
    }
    filters=()=>{
        this.setState({
            filterShow:!this.state.filterShow
        })
    };
    choose=(flag)=>{
        this.setState({
            flag:flag,
            filterShow:false
        });
        this.props.clearData();
        this.props.getList(flag);
    };
    render() {
        const Height=document.body.clientHeight-44;
        const {
            listData,
            pending,
            end,
            pop
        }=this.props;
        return (
            <div className={styles.bg}>
                <NavBar onRight={this.filters} rightNode={<span>筛选</span>} onLeft={()=>{pop()}}>资产记录</NavBar>
                <div className={styles.contentList} style={{height:Height}}>
                    <Scroll height={Height} fetch={()=>{this.props.getList(this.state.flag)}}
                            isLoading={pending} distance={5} endType={end}  nullDom={<img className={styles.errorImg} src={errorImg} />}>
                        {
                            listData&&listData.map((item,i)=>{
                                return(
                                    <div className={styles.item} key={i}>
                                        <p><span>项目还款</span><span className={cs(item.way=='入账'?styles.in:"")}>¥150.52</span></p>
                                        <p><span>2017-02-12 10:20:11</span><span>待收金额215621.21</span></p>
                                        <p>备注:7601号标第12期还款 利息+本金</p>
                                    </div>
                                )
                            })
                        }
                    </Scroll>
                </div>
                <div className={cs(styles.filter,this.state.filterShow?styles.active:"hide")}>
                    <ul>
                        <li onClick={()=>{this.choose(1)}} className={cs(this.state.flag==1?styles.current:"")}>投资</li>
                        <li onClick={()=>{this.choose(2)}} className={cs(this.state.flag==2?styles.current:"")}>回款</li>
                        <li onClick={()=>{this.choose(6)}} className={cs(this.state.flag==6?styles.current:"")}>提现</li>
                        <li onClick={()=>{this.choose(3)}} className={cs(this.state.flag==3?styles.current:"")}>红包</li>
                        <li onClick={()=>{this.choose(4)}} className={cs(this.state.flag==4?styles.current:"")}>理财金收益</li>
                        <li onClick={()=>{this.choose(5)}} className={cs(this.state.flag==5?styles.current:"")}>充值</li>
                        <li onClick={()=>{this.choose(0)}} className={cs(this.state.flag==0?styles.current:"")}>全部</li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        listData:state.listdata.getIn(['FETCH_MONEY_LOG','data']),
        pending:state.listdata.getIn(['FETCH_MONEY_LOG','pending']),
        end:state.listdata.getIn(['FETCH_MONEY_LOG','pageEnd'])
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getList(type){
        dispatch({
            type:'FETCH_MONEY_LOG',
            params:[type]
        })
    },
    pop(){
        dispatch(goBack());
    },
    clearData(){
        dispatch({
            type:'CLEAR_DATA',
            key:'FETCH_MONEY_LOG'
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(wrap(Index))