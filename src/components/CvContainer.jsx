import React from 'react'
import CvMain from './CvMain'
import CvSidebar from './CvSidebar'

import '../styles/CvContainer.css'

const CvContainer = () => {
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

export default CvContainer
