import React from 'react'
import '../public/Global.css'

export default class PetraChristianUniversity extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="components">
        <h1>Petra Christian University</h1>
        <h1>July 2005 - Oct 2009</h1>
        <h2>Bachelor of Economy</h2>
        <h3>International Business Management</h3>
        <p>Achievements:</p>
        <ul>
          <li>Active Student Award</li>
          <li>GPA 3.43</li>
        </ul>
      </div>
  }
}
