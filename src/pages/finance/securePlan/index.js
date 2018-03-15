import React from 'react'
import { goBack } from 'react-router-redux'
import styles from './index.css'
import NavBar from '../../../components/NavBar'
import wrap from '../../../utils/pageWrapper'
import {connect} from 'react-redux'

import banner from '../../../assets/images/secure_plan_banner.jpg'

class SecurePlan extends React.PureComponent {

  render() {
    const dispatch = this.props.dispatch;
    return (
      <div className={styles.root}>
        <NavBar onLeft={() => dispatch(goBack())}>多重风控保障体系</NavBar>
        <div className={styles.iframe}>
          <iframe src="https://www.bao.cn/special/pandaManage/index.html"   style={{width:'100%',height:'100%',position:'absolute',top:'44px',border:'none',bottom:'44px'}}></iframe>
        </div>
      </div>
    )
  }
}

export default connect()(wrap(SecurePlan))
