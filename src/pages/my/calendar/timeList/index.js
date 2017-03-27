import React from 'react'
import NavBar from '../../../../components/NavBar/index'
import Box from '../../../../components/ContentBox/index'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import styles from './index.css'
import {Link} from 'react-router';
import currentImg from '../../../../assets/images/good.png'
class Index extends React.Component {
    render() {
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth()+1;
        let list = [];
        for(var x=0;x<18;x++){
            let data = {
                year:currentYear,
                month:currentMonth+x
            };
            if(x+currentMonth>12){
                data.month = x+currentMonth-12;
                data.year = currentYear+1;
            }
            if(x+currentMonth>24){
                data.month = x+currentMonth-24;
                data.year = currentYear+2;
            }
            if(data.month<10)
                data.month = "0"+data.month;
            list.push(data);
        }
        const {year,month} = (this.props).params;
        return (
            <div className={styles.bg}>
                <NavBar  onLeft={this.props.pop}>选择月份</NavBar>
                <Box>
                    <div className={styles.item_bg}>
                        {
                            list.map((item,key)=>(
                                <Link to={`/user/calendar/${item.year}/${item.month}`} key={key}>
                                    {`${item.year}年${item.month}月`}
                                    {
                                        (year==item.year) && (month==item.month)
                                        && (<img src={currentImg} alt=""/>)
                                    }
                                </Link>
                            ))
                        }
                    </div>
                </Box>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    pop(){
        dispatch(goBack())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
