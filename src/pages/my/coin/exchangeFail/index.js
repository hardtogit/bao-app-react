/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react' //兑换失败
import NavBar from '../../../../components/NavBar/'
import { connect } from 'react-redux'
import { push, goBack } from 'react-router-redux'
import BaseButton from '../../../../components/BaseButton/index'
import wrap from '../../../../utils/pageWrapper'
import styles from './index.css'
import failure from '../../../../assets/images/shopp-center/failure.png'
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        return(
            <div className={styles.leftArrow}>
                <NavBar>兑换失败</NavBar>
                <div className={styles.bg}>
                    <div className={styles.content}>
                        <div className={styles.imgWrapper}><img src={failure}/></div>
                        <p>兑换失败</p>
                        <p className={styles.textGrey}>您的点币不足</p>
                        <BaseButton text={'兑换失败'} disable={false} onClick={()=>{this.props.push()}} className={styles.button}/>
                    </div>
                </div>
            </div>
        )
    }
}
const datas=(state)=>({

});
const dispatchFn=(dispatch)=>({
    push(){
        dispatch(push('/user/coinShop'))
    }
});
export default connect(datas,dispatchFn)(wrap(Index));