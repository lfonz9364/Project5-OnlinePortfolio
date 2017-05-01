import React from 'react'
import '../public/Global.css'

export default class SomethingAussie extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="components">
        <h1>Something Aussie</h1>
        <h1>August 2012 - August 2013</h1>
        <h2>Position : Office, Warehouse and Network Admin</h2>
        <p>Key Responsibilities:</p>
        <ul>
          <li>Computer and Network administration include setting NAS</li>
          <li>Inventory and Stock control by comparing MYOB database with actual stock</li>
          <li>Updating website's HTML and JavaScript code</li>
        </ul>
      </div>
  }
}
