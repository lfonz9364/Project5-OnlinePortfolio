import React from 'react'
import '../public/Global.css'

export default class GeneralAssembly extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <h1>General Assembly</h1>
        <h1>February 2017 - May 2017</h1>
        <h2>Web Development Immersive</h2>
        <p>Projects:</p>
        <ul>
          <li><a href="#">Project 1</a></li>
          <li><a href="#">Project 2</a></li>
          <li><a href="#">Project 3</a></li>
          <li><a href="#">Project 4</a></li>
          <li><a href="#">Project 5</a></li>
        </ul>
      </div>
  }
}
