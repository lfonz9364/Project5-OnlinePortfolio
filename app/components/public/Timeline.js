import React from 'react'
import '../public/Global.css'

export default class Timeline extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <input type="checkbox" value="2017" />
        <label>2017</label>

        <input type="checkbox" value="2016" />
        <label>2016</label>

        <input type="checkbox" value="2015" />
        <label>2015</label>

        <input type="checkbox" value="2014" />
        <label>2014</label>

        <input type="checkbox" value="2013" />
        <label>2013</label>

        <input type="checkbox" value="2012" />
        <label>2012</label>

        <input type="checkbox" value="2011" />
        <label>2011</label>

        <input type="checkbox" value="2010" />
        <label>2010</label>

        <input type="checkbox" value="2009" />
        <label>2009</label>
      </div>
  }
}
