import React,{Component,PropTypes} from 'react' 
import Loaders from '../../customized_node_modules/halogen'
import styles from './index.less'
class PageLoading extends Component{
    static PropTypes={
           Text:PropTypes.string
    }
    static defaultProps={
        Text:'加载中...'
    }
    render(){
        const{
          Text,
          style
        }=this.props;
        const Loading=Loaders['BeatLoader']
        return(<div className={styles.loading} style={style}>
        <Loading color="#00a6e2" size='20px' />
        <p className={styles.loadingText}>{Text}</p>
        </div>) 
    }
}
export default PageLoading