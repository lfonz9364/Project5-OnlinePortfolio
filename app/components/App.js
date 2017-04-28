import React from 'react'
import PasswordInput from './PasswordInput'
import SideBar from './public/SideBar'
import Profile from './pages/Profile'
import Experience from './pages/Experience'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <SideBar />
        <Profile />
        <Experience />
      </div>
  }
}
