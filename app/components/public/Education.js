import React from 'react'
import '../public/Global.css'
import GeneralAssembly from '../educations/GeneralAssembly'
import MonashCollege from '../educations/MonashCollege'
import MonashUniversity from '../educations/MonashUniversity'
import PetraChristianUniversity from '../educations/PetraChristianUniversity'
import filterYear from '../../lib/filterYear'

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
    const components =[
                  <GeneralAssembly key="0" year={[2017]} />,
                  <MonashCollege key="1" year={[2015]} />,
                  <MonashUniversity key="2" year={[2012,2013,2014]} />,
                  <PetraChristianUniversity key="3" year={[2009]} />
                ]
    var period = this.props.period
    var renderComponents = filterYear(period,components)

    return <div className="box-style">
      <h1>EDUCATIONS</h1>
      {renderComponents}
    </div>
  }
}
