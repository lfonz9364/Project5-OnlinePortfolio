import React from 'react'
import '../public/Global.css'

export default class Tool extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="skill">
        <h1>Tools</h1>
        <ul>
          <li><img src="/app/images/cli.png" /></li>
          <li><img src="/app/images/github.jpg" /></li>
        </ul>
      </div>
  }
}
