import React from 'react'
import '../public/Global.css'
import TimePeriod from '../public/TimePeriod'
import Education from '../public/Education'
import Experience from '../public/Experience'

export default class Timeline extends React.Component {

  constructor(props) {
    super(props)
    this.getYear = this.getYear.bind(this)
    this.state = {
      period: []
    }
  }

  getYear(selectedYears){
    this.setState({ period: selectedYears })
  }

  render(){
      return <div className="timeline">
        <TimePeriod getYear={this.getYear} />
        <Education period={this.state.period} />
        <Experience period={this.state.period} />
      </div>
  }
}
