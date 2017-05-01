import React from 'react'
import '../public/Global.css'

export default class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="contact" >
        <h1>Phone</h1>
        <p>+61 421 766 515</p>
        <h1>Email</h1>
        <p>alfons.caroles@gmail.com</p>
        <h1>LinkedIn</h1>
        <a href="www.linkedin.com/in/alfonscaroles">Alfons Caroles</a>
      </div>
  }
}
