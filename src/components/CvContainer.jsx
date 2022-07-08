import React from 'react'
import CvMain from './CvMain'
import CvSidebar from './CvSidebar'

import '../styles/CvContainer.css'
import CvHeader from './CvHeader'

const CvContainer = (props) => {
  const { fName, lName, title } = props.personalData
  return (
    <div>
      <div className='cv-container'>
        <CvHeader fName={fName} lName={lName} title={title} />
        <div className='cv-main-container'>
          <CvMain />
          <CvSidebar />
        </div>
      </div>
    </div>
  )
}

export default CvContainer
