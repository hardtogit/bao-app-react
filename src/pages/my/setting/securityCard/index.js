import React from 'react'
import {connect} from 'react-redux'
import {push,goBack} from 'react-router-redux'
import {Link} from "react-router"
import cs from 'classnames/index';
import NavBar from '../../../../components/NavBar/index'
import Box from  "../../../../components/ContentBox/index"
import styles from './index.css'
import Store from '../../../../components/Dialog/store'
import img1 from  "../../../../assets/images/safe1.png";
import img2 from  "../../../../assets/images/safe2.png";
import * as actionTypes from '../../../../actions/actionTypes'
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bindCard: JSON.parse(sessionStorage.getItem("bao-store")).isBindBankcard
        }
    }

    componentDidMount = ()=> {
        if (this.state.bindCard) {
            this.props.bankInfo();
            this.props.myCardInfo();
        }
    };
    changeCard = (code)=> {
        this.props.push("/user/setting/bankcardAdd");
    };

    render() {
        const {
            push,
            CardInfo
            }=this.props;
        const storeData=JSON.parse(sessionStorage.getItem('bao-store'));
        return (
            <div className={styles.bg}>
                {this.state.bindCard && <NavBar onLeft={this.props.pop}>安全卡</NavBar>}
                {!this.state.bindCard && <NavBar onLeft={this.props.pop} rightNode={<span style={{"fontSize":"14px","color":"#fff"}}
                                                                                     onClick={()=>{if(storeData.isRegister&&storeData.isBindBankcard)
				  {push('/user/setting/tradePasswordModify')}else{
				  if(storeData.isRegister){
                     push('/user/setting/cardBind')
				  }else{
				  this.refs.store.show()
				    }
				  }
				  }}>添加</span>}>安全卡</NavBar>}
                <Box>
                    <div className={styles.card_bg}>
                        <div className={cs(styles.card,{'hide':!this.state.bindCard})}>
                            <h2>{CardInfo && CardInfo.bankName}</h2>
                            <p>我的安全卡</p>
                            <h3>
                                ****&emsp;****&emsp;*****&emsp;
                                <span>{CardInfo && CardInfo.bankCard.substring(15)}</span>
                            </h3>
                            {
                                CardInfo &&
                                <img src={this.props.CardInfo.bg} alt=""/>
                            }
                        </div>
                        <img className={styles.safe_img} src={img1} alt=""/>
                        <img className={styles.safe_img} src={img2} alt=""/>
                    </div>
                </Box>
                <Store ref="store"></Store>
            </div>
        )
    }
}
const cardModel = (data)=> {
    if (data && (100 == data.code )) {
        return data.data[0];
    } else {
        return false;
    }
};
const mapStateToProps = (state) => {
    return {
        CardInfo: cardModel(state.infodata.getIn([actionTypes.GET_MY_CARD_LIST, 'data']))
    }
};

const mapDispatchToProps = (dispatch) => ({
    bankInfo(){
        dispatch({
            type: actionTypes.SAFE_CARD_INFO
        })
    },
    myCardInfo(){
        dispatch({
            type: actionTypes.GET_MY_CARD_LIST
        })
    },
    push(path){
        dispatch(push(path))
    },
    pop() {
        dispatch(goBack())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)