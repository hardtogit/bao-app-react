import React from 'react'
import styles from './page.styl'
import Links from './index'
import Page from '../Page'
import {Link} from 'react-router'

export default class DemoIndex extends React.Component {

  state = {
    links: Object.keys(Links),
    filter: '',
  }

  componentDidMount() {
    this.focus()
  }

  // lastFilterMs = 0

  focus = () => this.refs.filter.focus()

  onChangeFilter = ({target: {value: filter}}) => {
    this.setState({filter})
    // const now = Date.now()
    // if (now - this.lastFilterMs < 200) return
    // this.lastFilterMs = now
    this.filter(this.state.links, filter)
  }

  filter = (arr, keyWord) => {
    const filteredLinks = arr.filter(s => {
      if (keyWord) {
        const regExp = new RegExp(keyWord, 'i')
        return regExp.test(s)
      } else {
        return true
      }
    })
    this.setState({filteredLinks})
  }

  render() {
    return (
      <Page style={{
        backgroundColor: '#fff'
      }}>
        <div className={styles.filter} onClick={this.focus}>
          <input
            ref="filter"
            type="text"
            placeholder="按组件名搜索"
            value={this.state.filter}
            onChange={this.onChangeFilter}
          />
        </div>
        <div className={styles.container}>
          {(this.state.filteredLinks || this.state.links).map((key, i) => (
            <Link key={i} to={key} className={styles.cell}>{key}</Link>
          ))}
        </div>
      </Page>
    )
  }
}
