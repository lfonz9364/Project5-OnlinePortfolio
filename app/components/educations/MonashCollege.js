import React from 'react'
import '../public/Global.css'

export default class MonashCollege extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="components">
        <h1>Monash College</h1>
        <h1>January 2015 - December 2015</h1>
        <h2>Australian Computer Society Information and Communication Technology Professional Year</h2>
        <p>
          A program designed to develop participant soft skills to adapt with
          Australian workplace culture.
        </p>
      </div>
  }
}
