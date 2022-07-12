import React from 'react'
import CvMain from './CvMain'
import CvSidebar from './CvSidebar'

import '../styles/CvContainer.css'
import CvHeader from './CvHeader'

const CvContainer = React.forwardRef((props, ref) => {
  const { personalData, experienceData, educationData } = props

  return (
    <div ref={ref}>
      <div className='cv-container'>
        <CvHeader personalData={personalData} />
        <div className='cv-main-container'>
          <CvMain
            bio={personalData.bio}
            experienceData={experienceData}
            educationData={educationData}
          />
          <CvSidebar personalData={personalData} />
        </div>
      </div>
    </div>
  )
})

export default CvContainer
