import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './index.styl'
import classNames from 'classnames'
// 引用主页模块
//产品
import Product from '../../pages/finance/home/'
//发现
import Find from '../../pages/find/home/'
//理财主页
import FinancialIndex from '../../pages/home/'
//我的主页
import UserIndex from '../../pages/my/home/index'
 class TabExample extends Component {
  constructor(props) {
    super(props)
    Tabs.setUseDefaultStyles(false);
    this.state={
      Index:0,
      titleCav:[
        {
          Img:styles.tabIcon1,
          Text:'理财'
        },
         {
          Img:styles.tabIcon4,
          Text:'项目'
        },
         {
          Img:styles.tabIcon2,
          Text:'发现'
        },
         {
          Img:styles.tabIcon3,
          Text:'我的'
        },
      ],
      tabs: [<FinancialIndex />,<Product/>,<Find/>,<UserIndex/>],
    }
  }

  componentDidMount() {
    // this.props.fetching()
  }

  handleSelect=(index, last)=>{
    this.setState({
      Index:index
    })
  }

  render() {
    const {
      goBack,
      hasBack,
      push,
      text,
    } = this.props.history
    const {
      Index
    }=this.props
    return (
      <Tabs
        className={styles['tabs-root']}
        onSelect={(index,last)=>{this.handleSelect(index,last)}}
        selectedIndex={this.state.Index}
      >
        <TabList className={styles.tablist}>
          {
           this.state.titleCav.map((item,i)=>{
             const Index=this.state.Index;
             return <Tab className={styles.tab} key={i}>
                    <div className={classNames(styles.tabOne,Index==i&&styles.action||'')}>
                     <span className={classNames(styles.tabIcon,item.Img)}></span>
                     <p className={styles.tabCav}>{item.Text}</p>
                    </div>
                    </Tab>
           })
          }
        </TabList>
        {
          this.state.tabs.map((Item,i)=>(
            <TabPanel className={styles.tabpanel} key={i}>
             {
               Item
             }
           </TabPanel>
          ))
        }
      </Tabs>
    );
  }
}
export default TabExample
