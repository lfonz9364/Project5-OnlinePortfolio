import React from 'react'
import '../public/Global.css'

export default class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <h1>Profile</h1>
        <img src="/app/images/cartoonOne.jpg" />
        <h2>"Web Development is about solving a problem in many different ways"</h2>
        <span>Alfons Caroles</span>
        <p>
          Experienced in managing customers with different socio-cultural, nations
          and religions. I gained valuable skills in leadership, problem solving, time
          management and interpersonal from work experiences. Currently, I am looking for an opportunity to advance
          my career as a Web Developer and to learn more about ICT industry.
        </p>
      </div>
  }
}
