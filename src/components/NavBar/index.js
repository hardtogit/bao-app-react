import React from 'react'
import cs from 'classnames'
import styles from './index.styl'
import backIcon from '../../assets/images/arrowtab.png'
export default class NavBar extends React.PureComponent {
    static propTypes = {
        onLeft: React.PropTypes.func,// 左区域点击回调
        onTitle: React.PropTypes.func,//点击标题回调
        onRight: React.PropTypes.func,//右侧区域点击回调
        title: React.PropTypes.string,//回调
        backgroundColor: React.PropTypes.string,//背景颜色
        leftNode: React.PropTypes.element,  // 左区域自定义UI
        rightNode: React.PropTypes.element// 右区域自定义UI
    };
    render() {
        const {
            onLeft,
            onTitle,
            onRight,
            title,
            backgroundColor,
            leftNode,
            rightNode,
            children,
            style
        } = this.props;
        let sty=style,bgs=backgroundColor;
        if (!sty){
            sty={}
        }
        if (!bgs){
            bgs={}
        }else {
            bgs={backgroundColor:bgs}
        }
        Object.assign(sty,bgs);
        return (
            <div className={styles.root} style={sty}>
                <div className={styles.left} onClick={onLeft}>
                    {(leftNode || leftNode === null) ? leftNode : <img src={backIcon} height={20} width={10}/>}
                </div>
                <div className={styles.middle} onClick={onTitle}>
                    {children || title || ''}
                </div>
                <div className={styles.right} onClick={onRight} >
                    {rightNode}
                </div>
            </div>
        )
    }
}
