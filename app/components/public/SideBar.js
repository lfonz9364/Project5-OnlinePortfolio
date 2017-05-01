import React from 'react'

export default class SideBar extends React.Component {

  constructor(props) {
    super(props)
    this.handleClickMenu = this.handleClickMenu.bind(this)
  }

  handleClickMenu(event) {
    this.props.getSelection(event.target.textContent);
  }

  render(){
      return <div className="menu">
        <h1>MENU</h1>
        <ul>
          <li className="selection" onClick={this.handleClickMenu}>Profile</li>
          <li className="selection" onClick={this.handleClickMenu}>Skills</li>
          <li className="selection" onClick={this.handleClickMenu}>Timeline</li>
          <li className="selection" onClick={this.handleClickMenu}>Contact Me</li>
        </ul>
      </div>
  }
}
