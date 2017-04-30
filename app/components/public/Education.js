import React from 'react'
import '../public/Global.css'
import GeneralAssembly from '../educations/GeneralAssembly'
import MonashCollege from '../educations/MonashCollege'
import MonashUniversity from '../educations/MonashUniversity'
import PetraChristianUniversity from '../educations/PetraChristianUniversity'

export default class Experience extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      period: ''
    }
  }

  handleChange(event){
    this.setState({ page: event.target.value })
  }

  render(){
    return <div>
      <h1>Education</h1>
      <GeneralAssembly />
      <MonashCollege />
      <MonashUniversity />
      <PetraChristianUniversity />
    </div>
  }
}
