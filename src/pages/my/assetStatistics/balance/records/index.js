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
            flag:0,
            init:false
        }
    }
    componentWillUnmount(){
        this.props.clearData();
    }
    componentDidMount=()=>{
        this.props.getList(this.state.flag);
        this.setState({
            init:true
        })
    }
    filters=()=>{
        this.setState({
            filterShow:!this.state.filterShow
        })
    };
    choose=(flag)=>{
        this.refs.scroll.setState({
            init:true
        })
        this.setState({
            flag:flag,
            filterShow:false
        });
        this.props.clearData();
        this.props.getList(flag);
    };
    ScrollDom=()=>{
        const Height=document.body.clientHeight-44;
        const {
            listData,
            pending,
            end,
        }=this.props;
        return(<div className={styles.contentList} style={{height:Height}}>
            <Scroll ref="scroll" height={Height} fetch={()=>{this.props.getList(this.state.flag)}}
                    isLoading={pending} distance={5} endType={end}  nullDom={<img className={styles.errorImg} src={errorImg} />}>
                {
                    listData&&listData.map((item,i)=>{
                        const {type_name,date,amount,status,way,desc,due_amount}=item;
                        return(
                            <div className={styles.item} key={i}>
                                <p><span>{type_name}</span><span className={cs(way=='入账'?styles.in:"")}>¥{amount}</span></p>
                                <p><span>{date}</span><span>待收金额{due_amount}</span></p>
                                <p>备注:{desc}</p>
                            </div>
                        )
                    })
                }
            </Scroll>
        </div>)
    }
    render() {
        const {
            pop
        }=this.props;
        const {
            init
        }=this.state;
        let Dom;
        if (init){
            Dom=this.ScrollDom();
        }
        return (
            <div className={styles.bg}>
                <NavBar onRight={this.filters} rightNode={<span>筛选</span>} onLeft={()=>{pop()}}>资产记录</NavBar>
                {Dom}
                <div className={cs(styles.filter,this.state.filterShow?styles.active:"hide")}>
                    <ul>
                        <li onClick={()=>{this.choose(1)}} className={cs(this.state.flag==1?styles.current:"")}>出借</li>
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
const mapStateToProps = (state) => {
    return {
        listData:state.listdata.getIn(['FETCH_MONEY_LOG','data']),
        pending:state.listdata.getIn(['FETCH_MONEY_LOG','pending']),
        end:state.listdata.getIn(['FETCH_MONEY_LOG','pageEnd'])
    }
};

const mapDispatchToProps = (dispatch) => ({
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