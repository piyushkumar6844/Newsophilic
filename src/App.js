import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Appnews from './components/Appnews'

export default class App extends Component {
 

  render() {
    return (
      <div>
        <Navbar/>
        <Appnews/>
        
      </div>
    )
  }
}
