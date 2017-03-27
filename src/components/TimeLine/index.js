import React, {
  PropTypes,
} from 'react'
import styles from './index.styl'
import cn from 'classnames'

export default class TimeLine extends React.Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      curStep: PropTypes.bool,
    }))
  }

  render() {
    return (
      <div>
        {
          this.props.data.map((event, i) => {
            if (event.curStep) {
              return (
                <div key={i} className={cn(styles.event, styles.eventDisable)}>
                  <i></i>
                  <span className={styles.line}></span>
                  <p>{event.title}</p>
                  <p>{event.date}</p>
                </div>
              )
            } else {
              return (
                <div key={i} className={styles.event}>
                  <i></i>
                  <span className={styles.line}></span>
                  <p>{event.title}</p>
                  <p>{event.date}</p>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}
