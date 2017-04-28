console.log('react!!!');

import React from 'react'
import ReactDom from 'react-dom'
import Slider from './components/Slider'
import PasswordInput from './components/PasswordInput'
import TweetBox from './components/TweetBox'
import App from './components/App'

ReactDom.render(
  // <Slider startValue="7" min="0" max="20" />,
  // <PasswordInput />,
  <App />,
  document.querySelector('#root')
)
