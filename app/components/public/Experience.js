import React from 'react'
import '../public/Global.css'
import AquaStar from '../experiences/AquaStar'
import Aswata from '../experiences/Aswata'
import Bantex from '../experiences/Bantex'
import Ciuc from '../experiences/Ciuc'
import GabeeProduct from '../experiences/GabeeProduct'
import JunctionNewsagency from '../experiences/JunctionNewsagency'
import SomethingAussie from '../experiences/SomethingAussie'



export default class Experience extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      period: ''
    }
  }

  handleChange(event){
    this.setState({ page: event.target.value })
  }

  render(){
    return <div>
      <h1>Experiences</h1>
      <Ciuc />
      <AquaStar />
      <GabeeProduct />
      <JunctionNewsagency />
      <SomethingAussie />
      <Aswata />
      <Bantex />
    </div>
  }
}
