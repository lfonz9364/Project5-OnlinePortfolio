import React from 'react'
import '../public/Global.css'
import Timeline from '../public/Timeline'
// import passwordMeter from '../lib/passwordMeter'

export default class Experience extends React.Component {

  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this);
    // // this.state = {
    // //   password: ''
    // // }
  }


  // handleChange(event){
  //   this.setState({ password: event.target.value })
  // }

  render(){
      return <div>
        <Timeline />
      </div>
  }
}
