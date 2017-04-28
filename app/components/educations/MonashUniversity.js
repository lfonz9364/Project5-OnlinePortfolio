import React from 'react'
import '../public/Global.css'

export default class MonashUniversity extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <h1>Monash University</h1>
        <h1>July 2012 - Oct 2014</h1>
        <h2>Master of Business Information Systems Professional</h2>
        <h3>Business Systems and Business Intelligence</h3>
        <p>Achievements:</p>
        <ul>
          <li>IT Merit Scholarship</li>
          <li>Distinction Average</li>
        </ul>
      </div>
  }
}
