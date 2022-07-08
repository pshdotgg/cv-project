import React from 'react'
import CvMain from './CvMain'
import CvSidebar from './CvSidebar'

import '../styles/CvContainer.css'
import CvHeader from './CvHeader'

const CvContainer = (props) => {
  const { fName, lName, title, address, phone, email, bio } = props.personalData
  const { position, company, expCity, expFrom, expTo } = props.experienceData
  const { uni, eduCity, degree, sub, eduFrom, eduTo } = props.educationData

  console.log(props.experienceData.expFrom)
  return (
    <div>
      <div className='cv-container'>
        <CvHeader fName={fName} lName={lName} title={title} />
        <div className='cv-main-container'>
          <CvMain
            bio={bio}
            position={position}
            company={company}
            expCity={expCity}
            expFrom={expFrom}
            expTo={expTo}
            uni={uni}
            eduCity={eduCity}
            degree={degree}
            sub={sub}
            eduFrom={eduFrom}
            eduTo={eduTo}
          />
          <CvSidebar address={address} phone={phone} email={email} />
        </div>
      </div>
    </div>
  )
}

export default CvContainer
