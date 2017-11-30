/**
 * Created by xiangguo .
 * time:2017/11/29 0029.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import cn from 'classnames'
import styles from './index.styl'
import PropTypes from 'prop-types'
import one from './images/qietu_03.png'
import btn from './images/qietu_15.png'
import two from './images/dcb_03.png'
import three from './images/qietu_06.png'
import four from './images/qietu_11.png'
export default class Success extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false,
            index:0
        }
    }

    static propTypes = {
        time: PropTypes.number,           // 关闭时间
        text: PropTypes.string,           // 文本
        mode: PropTypes.oneOf(['OutlineModal', 'ScaleModal', 'FadeModal', 'FlyModal', 'DropModal', 'WaveModal']),
        callback: PropTypes.func,
    }

    static defaultProps = {
        mode: 'ScaleModal'
    }


    show = () => {
        this.setState({
            show:true
        })
    }

    hide = () => {
        this.setState({
            show:false
        })
    }

    clearTimer = () => {

    }
    handleClick=()=>{
        if(this.state.index>=3){
            this.hide();
        }else{
            this.setState({
                index:++this.state.index
            })
        }
    }
    componentWillUnmount() {

    }
    render() {
        let display;
        if(this.state.show){
            display={display:'block'}
        }else{
            display={display:'none'}
        }
        const index=this.state.index
        return (
            <div className={styles.myModal} style={display}>
                <div className={cn(styles.guide,index>0&&styles.leave||'')}><img className={cn(styles.guideOne)} src={one} alt=""/></div>
                <div className={cn(styles.guide,index>1&&styles.leave||'',index<1&&styles.enter||'')}><img className={cn(styles.guideTwo)} src={two} alt=""/></div>
                <div className={cn(styles.guide,index>2&&styles.leave||'',index<2&&styles.enter||'')}><img className={cn(styles.guideThree)} src={three} alt=""/></div>
                <div className={cn(styles.guide,index>3&&styles.leave||'',index<3&&styles.enter||'')}><img className={cn(styles.guideFour)} src={four} alt=""/></div>
                <div className={styles.btn}><img onClick={this.handleClick} src={btn} alt=""/> </div>
                <div style={{position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px', zIndex: '1040', backgroundColor: 'rgba(0, 0, 0, 0.498039)'}}></div>
            </div>
        )
    }
}