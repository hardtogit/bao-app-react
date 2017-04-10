import React,{Component,PropTypes} from 'react' 
import Loaders from '../../customized_node_modules/halogen'
import styles from './index.less'
class PageLoading extends Component{
    static PropTypes={
           Text:PropTypes.string,
        textColor:PropTypes.string
    }
    static defaultProps={
        Text:'加载中...',
        textColor:'#666'
    }
    render(){
        const{
          Text,
          style,
          textColor
        }=this.props;
        const Loading=Loaders['BeatLoader']
        return(<div className={styles.loading} style={style}>
        <Loading color="#00a6e2" size='20px' />
        <p className={styles.loadingText} style={{color:textColor}}>{Text}</p>
        </div>) 
    }
}
export default PageLoading