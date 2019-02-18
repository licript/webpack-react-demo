import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import './index.scss'
import Hello from './hello'

ReactDOM.render(<Hello/>,
  document.getElementById('box'))