import React from 'react'
import NavBar from '../../../../components/NavBar/index'
import styles from './index.css'
import Box from "../../../../components/ContentBox/index"
import livechat from "../../../../assets/images/livechat.png";
export default class Index extends React.Component {
    render() {
        return (
            <div className={styles.bg}>
                <NavBar>提交申请</NavBar>
                <Box>
                    <img src={livechat} alt=""/>
                </Box>
            </div>
        )
    }
}
