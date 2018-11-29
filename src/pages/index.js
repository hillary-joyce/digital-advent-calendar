import React, {Component} from 'react'
import { Link } from 'gatsby'

import CalendarContainer from '../components/calendar-container'

class IndexPage extends Component {
  state = {currentDay: 12}
  render() {
    return (
      <div>
        <h1>Dog Advent {this.state.currentDay}</h1>
        <CalendarContainer />
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}

export default IndexPage
