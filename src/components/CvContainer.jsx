import React from 'react'
import CvMain from './CvMain'
import CvSidebar from './CvSidebar'

import '../styles/CvContainer.css'
import CvHeader from './CvHeader'

const CvContainer = (props) => {
  const { personalData, experienceData, educationData } = props

  console.log(personalData)

  return (
    <div>
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
}

export default CvContainer
