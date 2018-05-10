import React from 'react' //充值
import classNames from 'classnames'
import styles from './index.less'
import {connect} from 'react-redux'
import Scroll from '../../../../../components/scroll/index';
import {goBack} from 'react-router-redux'
import errorImg from "../../../../../assets/images/record.png";
import wrap from '../../../../../utils/pageWrapper'
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
    };
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
        const Height=document.body.clientHeight-98;
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
                                <p><span>{type_name}</span><span className={classNames(way=='入账'?styles.in:"")}>¥{amount}</span></p>
                                <p><span>{date}</span><span>待收金额{due_amount}</span></p>
                                <p>备注:{desc}</p>
                            </div>
                        )
                    })
                }
            </Scroll>
        </div>)
    };
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
                <div className={styles.tabs}>
                    {this.state.filterShow&&<ul className={styles.tabUl}><li className={styles.tabLi}>请选择查看类型</li></ul>

                    }
                    <ul className={styles.tabUl}>
                        <li onClick={()=>{this.choose(0)}}  className={classNames([styles.tabLi,this.state.flag==0?styles.active:""])}>全部</li>
                        <li onClick={()=>{this.choose(1)}}  className={classNames([styles.tabLi,this.state.flag==1?styles.active:""])}>出借</li>
                        <li onClick={()=>{this.choose(2)}}  className={classNames([styles.tabLi,this.state.flag==2?styles.active:""])}>回款</li>
                        <li onClick={()=>{this.choose(3)}}  className={classNames([styles.tabLi,this.state.flag==3?styles.active:""])}>红包</li>
                        <li onClick={()=>{this.choose(4)}}  className={classNames([styles.tabLi,this.state.flag==4?styles.active:""])}>理财金收益</li>
                        <li onClick={()=>{this.choose(5)}}  className={classNames([styles.tabLi,this.state.flag==5?styles.active:""])}>充值</li>
                        <li onClick={()=>{this.choose(6)}}  className={classNames([styles.tabLi,this.state.flag==6?styles.active:""])}>提现</li>
                    </ul>


                    <div className={classNames([styles.btn, this.state.filterShow?styles.default:"" ])} onClick={this.filters}>
                        <span className={classNames([this.state.filterShow?styles.arrowUp:styles.arrowDown ]) }></span>
                    </div>
                </div>
                {Dom}
                <div className={classNames(styles.filter,this.state.filterShow?styles.active:"hide")}>
                    <ul>
                        <li onClick={()=>{this.choose(0)}} className={classNames(this.state.flag==0?styles.current:"")}>全部</li>
                        <li onClick={()=>{this.choose(1)}} className={classNames(this.state.flag==1?styles.current:"")}>出借</li>
                        <li onClick={()=>{this.choose(2)}} className={classNames(this.state.flag==2?styles.current:"")}>回款</li>
                        <li onClick={()=>{this.choose(3)}} className={classNames(this.state.flag==3?styles.current:"")}>红包</li>
                        <li onClick={()=>{this.choose(4)}} className={classNames(this.state.flag==4?styles.current:"")}>理财金收益</li>
                        <li onClick={()=>{this.choose(5)}} className={classNames(this.state.flag==5?styles.current:"")}>充值</li>
                        <li onClick={()=>{this.choose(6)}} className={classNames(this.state.flag==6?styles.current:"")}>提现</li>
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
            params:[type,'platform']
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