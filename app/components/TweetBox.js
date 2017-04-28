import React from 'react'

export default class TweetBox extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state={
      content: ''

    }
  }

  handleChange(event) {
    this.setState({ content: event.target.value })
  }


  render(){
    //destructuring / pattern matching
    var { content } = this.state
    var maxLength = this.props.maxLength
    var isDisabled = content.length === 0 || content.length >= maxLength


    //ternary
    var spanStyle = isDisabled ? { color: 'red' } : { color: 'black' }

    // var hotdog = {
    //     ingredients: 'sauce'
    // }
    //
    // var ingredients = hotdog.ingredients
    //
    // var { ingredients } = hotdog // a = 'sauce' --> es6 features

    return <div>
      <textarea onChange={this.handleChange} maxLength={maxLength}></textarea>
      <button disabled={ isDisabled }>post</button>
      <span style={ spanStyle }>{maxLength - content.length}</span>
      <div>{content}</div>
    </div>
  }
}
