import React from 'react'
import '../styles/CvMain.css'

const CvMain = (props) => {
  const { bio } = props
  const { position, company, expCity, expFrom, expTo } = props
  const { uni, eduCity, degree, sub, eduFrom, eduTo } = props
  return (
    <div className='cv-main'>
      <h3 className='cv-title'>About Me</h3>
      <p className='description'>{bio}</p>

      <h3 className='cv-title'>Experience</h3>
      <div className='experience-section'>
        <div>{expFrom + ' - ' + expTo}</div>
        <div>
          <h4>{position}</h4>
          <div>{company + ', ' + expCity}</div>
        </div>
      </div>

      <h3 className='cv-title'>Education</h3>
      <div className='education-section'>
        <div>{eduFrom + ' - ' + eduTo}</div>
        <div>
          <h4>{uni + ', ' + eduCity}</h4>
          <div>{'Degree: ' + degree}</div>
          <div>{'Subject: ' + sub}</div>
        </div>
      </div>
    </div>
  )
}

export default CvMain
