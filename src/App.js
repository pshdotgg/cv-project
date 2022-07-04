import React, { Component } from 'react'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import Footer from './components/Footer'
import CvContainer from './components/CvContainer'

import './styles/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormContainer />
        <CvContainer />
        <Footer />
      </div>
    )
  }
}
