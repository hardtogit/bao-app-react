import React from 'react';
import styles from './index.styl';
import RadialBarChart from '../../../../components/RadialBarChart/';
import IsAuth from '../../../../components/isAuth'
import {connect} from 'react-redux'
import {push, goBack} from 'react-router-redux'
import {Motion, spring, presets} from 'react-motion'
import Cross from '../../../../components/Cross'
import classnames from 'classnames'
import moment from 'moment'
import {RATE, USER_INFO} from '../../../../actions/actionTypes'
import bx from '../../../../assets/images/safe-icon.png'
class DepositIndex extends React.Component {
  state = {
      // 默认选中第二个定存期限
      chosen: 1,

      showRedFriday: true,

      // rate.id
      id: -1,
  }
    componentWillMount(){
     const {
         pageIndex,
         pageIndexs
     }=this.props;
         this.setState({
             chosen:pageIndex
         })
        pageIndexs();
  }
  isFriday = (x) => {
      if (!x) return false
      return moment(x, 'X').day() === 5
  }

  buyHandle = () => {
         this.refs.isAuth.Verification('/deposit-buy/' + this.props.rate[this.state.chosen].id,this.props.push);
  }

  render() {
    const {
      rate,
      serverTime,
      push,
      userInfoCode,
    } = this.props;
    const curRate = rate.length ? +rate[this.state.chosen].rate : 0
    const id = rate.length ? +rate[this.state.chosen].id : -1
    return (
      <div className={styles.Content}>
        <div className={styles.header}>
          <p onClick={() => push('/safeplan')} className={styles.safeplan}>已加入安全保障计划</p>
          <div className={styles.rate}>
            <p>约定年化收益</p>
            <Motion defaultStyle={{x: 0}} style={{x: spring(curRate, presets.stiff)}}>
              {value => <p>{value.x.toFixed(2)}<span>%</span></p>}
            </Motion>
            <RadialBarChart rate={Math.pow(curRate, 2) - 50} max={150} />
          </div>
          <p onClick={() => push(`/deposit-product/${id}`)} className={styles.detail}>产品详情</p>
        </div>
        <div className={styles.content}>
          {userInfoCode != 100 && (<div onClick={() => push('/register')} className={styles.newUser}>
            <p>新用户注册送<span>800元</span>抵用券</p>
            <p>去注册</p>
          </div>)}
          <div className={styles.limit}>
            {rate.map(({month}, i) => (
              <div key={i} onClick={() => this.setState({chosen: i})}>
                <span className={this.state.chosen === i && styles.chosen}>{month}个月</span>
              </div>
            ))}
          </div>
          <div className={styles.buy}>
            <button onClick={this.buyHandle}>马上买入</button>
          </div>
           <div className={styles.bxBox}>
               <span>
                   <img src={bx}/>
               </span>
               <span className={styles.bxText}>
                   账户安全由阳光保险全额承保
               </span>
           </div>
        </div>
          <IsAuth ref="isAuth"/>
        {this.isFriday(serverTime) && this.state.showRedFriday && <RedFriday onClose={() => this.setState({showRedFriday: false})} href="https://www.bao.cn/zt/activity/scratch" />}
      </div>
    )
  }
}

class RedFriday extends React.PureComponent {

    state = {
        down: false
    }

    componentDidMount() {
        this.timer = setTimeout(this.toggle)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    toggle = () => this.setState({down: !this.state.down})

    render() {
        return (
            <div className={styles.redFriday}>
                <Cross onClick={this.props.onClose} className={styles.cross} lineClass={styles.crossLine}/>
                <a href={this.props.href}><div onTransitionEnd={this.toggle} className={classnames(styles.gif, this.state.down && styles.down)}></div></a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rate: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data.deposit || [],
        serverTime: state.infodata.getIn([RATE, 'data']) && state.infodata.getIn([RATE, 'data']).data['server_time'] || 0,
        userInfoCode: state.infodata.getIn([USER_INFO, 'data']) && state.infodata.getIn([USER_INFO, 'data']).code || 0,
        pageIndex:state.global.getIn(['PRODUCT_INDEX_PAGE'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    push(path) {
        dispatch(push(path))
    },

    pop() {
        dispatch(goBack())
    },
    pageIndexs(){
        dispatch({
            type:'PRODUCT_INDEX_PAGE',
            index:1
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DepositIndex)
