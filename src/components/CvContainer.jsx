import React, { Component } from 'react'
import CvMain from './CvMain'
import CvSidebar from './CvSidebar'

import '../styles/CvContainer.css'

export default class CvContainer extends Component {
  render() {
    return (
      <div>
        <div className='cv-container'>
          <div
            className='cv-header'
            style={{
              backgroundColor: 'blue',
              height: '120px',
            }}
          ></div>
          <div className='cv-main-container'>
            <CvMain />
            <CvSidebar />
          </div>
        </div>
      </div>
    )
  }
}
