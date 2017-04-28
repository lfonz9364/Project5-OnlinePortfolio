import React from 'react'
import '../public/Global.css'

export default class Software extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <h1>Software</h1>
        <ul>
          <li><img src="/app/images/postgresql.png" /></li>
          <li><img src="/app/images/Atom.png" /></li>
          <li><img src="/app/images/sql-server.png" /></li>
          <li><img src="#" /></li>
          <li><img src="/app/images/MSvisio.jpg" /></li>
          <li><img src="/app/images/myob-rm.jpg" /></li>
          <li><img src="/app/images/myob-exo.jpg" /></li>
        </ul>
      </div>
  }
}
