import React from 'react'
import '../public/Global.css'

export default class Timeline extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      years: []
    }
  }

  handleChange(event){
    if(event.target.checked === false){
      this.state.years = this.state.years.filter(function(val){ return val !== Number(event.target.value)})
      this.props.getYear(this.state.years)
    } else {
      this.state.years.push(Number(event.target.value))
      this.props.getYear(this.state.years.sort())
    }
  }

  render(){
      return <div className="timeperiod">
        <input type="checkbox" value="2017" onChange={this.handleChange} />
        <label>2017</label>

        <input type="checkbox" value="2016" onChange={this.handleChange} />
        <label>2016</label>

        <input type="checkbox" value="2015" onChange={this.handleChange} />
        <label>2015</label>

        <input type="checkbox" value="2014" onChange={this.handleChange} />
        <label>2014</label>

        <input type="checkbox" value="2013" onChange={this.handleChange} />
        <label>2013</label>

        <input type="checkbox" value="2012" onChange={this.handleChange} />
        <label>2012</label>

        <input type="checkbox" value="2011" onChange={this.handleChange} />
        <label>2011</label>

        <input type="checkbox" value="2010" onChange={this.handleChange} />
        <label>2010</label>

        <input type="checkbox" value="2009" onChange={this.handleChange} />
        <label>2009</label>
      </div>
  }
}
