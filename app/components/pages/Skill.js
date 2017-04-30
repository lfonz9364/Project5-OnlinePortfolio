import React from 'react'
import '../public/Global.css'
import ProgrammingSkill from '../skills/ProgrammingSkill'
import Software from '../skills/Software'
import Tool from '../skills/Tool'

export default class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <ProgrammingSkill />
        <Software />
        <Tool />
      </div>
  }
}
