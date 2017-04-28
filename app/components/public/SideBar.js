import React from 'react'

export default class SideBar extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      password: ''
    }
  }


  handleChange(event){
    this.setState({ password: event.target.value })
  }

  render(){
      return <div>
        <h1>MENU</h1>
        <ul>
          <li>Profile</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Contact Me</li>
        </ul>
      </div>
  }
}
