import React from 'react'
import '../public/Global.css'
import AquaStar from '../experiences/AquaStar'
import Aswata from '../experiences/Aswata'
import Bantex from '../experiences/Bantex'
import Ciuc from '../experiences/Ciuc'
import GabeeProduct from '../experiences/GabeeProduct'
import JunctionNewsagency from '../experiences/JunctionNewsagency'
import SomethingAussie from '../experiences/SomethingAussie'
import filterYear from '../../lib/filterYear'

export default class Experience extends React.Component {

  constructor(props) {
    super(props)
  }


  render(){
    const components =[
                  <Ciuc key="0" year={[2016,2017]} />,
                  <AquaStar key="1" year={[2016,2017]}/>,
                  <JunctionNewsagency key="2" year={[2013,2014,2015,2016]}/>,
                  <GabeeProduct key="3" year={[2015]} />,
                  <SomethingAussie key="4" year={[2012,2013]} />,
                  <Aswata key="5" year={[2011]} />,
                  <Bantex key="6" year={[2009]} />
                ]
    var period = this.props.period
    var renderComponents = filterYear(period,components)


    return <div className="box-style">
      <h1>EXPERIENCES</h1>
      {renderComponents}
    </div>
  }
}
