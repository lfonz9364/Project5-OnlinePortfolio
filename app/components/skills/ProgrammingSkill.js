import React from 'react'
import '../public/Global.css'

export default class ProgrammingSkill extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <h1>Programming Language</h1>
        <ul>
          <li><img src="/app/images/html-css-js-logos.png" /></li>
          <li><img src="/app/images/sqlQueries.jpeg" /></li>
          <li><img src="/app/images/jquery-icon.png" /></li>
          <li><img src="/app/images/underscore.png" /></li>
          <li><img src="/app/images/handlebars.png" /></li>
          <li><img src="/app/images/backbone.png" /></li>
          <li><img src="/app/images/ruby.jpeg" /></li>
          <li><img src="/app/images/nodejs.png" /></li>
        </ul>
      </div>
  }
}
