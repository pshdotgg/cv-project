import React, { Component } from 'react'
import Personal from "./Personal";
import Experience from './Experience';
import Education from './Education';

import '../styles/FormContainer.css';


export default class FormContainer extends Component {
  render() {
    return (
      <div className='form-container'>
        <Personal />
        <Experience />
        <Education />
      </div>
    )
  }
}
