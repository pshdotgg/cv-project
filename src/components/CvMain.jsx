import React, { Component } from 'react'
import '../styles/CvMain.css'

export default class CvMain extends Component {
  render() {
    return (
      <div className='cv-main'>
        <h3 className='cv-title'>About Me</h3>
        <h3 className='cv-title'>Experience</h3>
        <h3 className='cv-title'>Education</h3>
      </div>
    )
  }
}
