/**
 * Created by xiangguo .
 * time:2017/7/13 0013.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react';
import {Link} from 'react-router';
import NavBar from '../../../components/NavBar/index';
import {connect} from 'react-redux';
import {goBack,push} from 'react-router-redux'
import styles from './index.css'
class Index extends React.Component{
    componentWillMount(){

    }
    constructor(props){
        super(props);
        this.state = {
            value:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        const{
            pop
        }=this.props;
        return(
            <div>
                <div className={styles.bg}>
                    <NavBar title="确认领取" onLeft={pop} backgroundColor="#fff"/>
                    <div className={styles.container}>
                        <form onSubmit={this.handleSubmit}>
                            <ul>
                                <li>
                                    <label>
                                        <span>收货物品：</span>
                                        <input type="text" className={styles.goodsName} value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <span>收货物品：</span>
                                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                </li>
                                <li>
                                    <input type="submit" value="Submit" />
                                </li>
                            </ul>


                        </form>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

});
const mapFnToProps=(dispatch)=>({

    pop(){
        dispatch(goBack())
    },
    push(url){
        dispatch(push(url))
    }
});
export default connect(mapStateToProps,mapFnToProps)(Index)