import React from 'react'
import cs from 'classnames'
import styles from './index.styl'
import PropTypes from 'prop-types'
export default class NavBar extends React.PureComponent {
    static propTypes = {
        onLeft: PropTypes.func,// 左区域点击回调
        onTitle: PropTypes.func,//点击标题回调
        onRight: PropTypes.func,//右侧区域点击回调
        title: PropTypes.string,//回调
        backgroundColor: PropTypes.string,//背景颜色
        leftNode: PropTypes.element,  // 左区域自定义UI
        rightNode: PropTypes.element// 右区域自定义UI
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
                    {(leftNode || leftNode === null) ? leftNode : <span className={styles.arrows}></span>}
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
