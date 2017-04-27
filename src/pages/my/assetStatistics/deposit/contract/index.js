/**
 * Created by Administrator on 2017/4/26.
 */
import React,{Component} from 'react'
import NavBar from '../../../../../components/NavBar'
import wrap from '../../../../../utils/pageWrapper'
import style from './index.less'
class index extends Component{
    render(){
        return(<div>
            <NavBar>
                定存宝B计划合同
            </NavBar>
            <iframe className={style.ifr}>

            </iframe>
        </div>)
    }
}
export default wrap(index)
