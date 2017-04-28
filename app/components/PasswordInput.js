import React from 'react'
import './public/Global.css'
import passwordMeter from '../lib/passwordMeter'

export default class PasswordInput extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      password: ''
    }
  }


  handleChange(event){
    this.setState({ password: event.target.value })

    // console.log('target value', event.target.value)
    // console.log('password', this.state.password);
  }

  render(){
    const strength = passwordMeter(this.state.password);
      return <div>
        <input type="password"
          onChange={ this.handleChange } />
        <span className={strength}>strength: {strength}</span>
      </div>
  }
}
