import React, { Component } from 'react'
import Header from './components/Header'
import FormContainer from './components/FormContainer'

import './styles/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormContainer />
      </div>
    )
  }
}
