import React from 'react'
import '../styles/CvMain.css'

const CvMain = (props) => {
  const { bio, experienceData, educationData } = props
  console.log(educationData)
  return (
    <div className='cv-main'>
      <h3 className='cv-title'>About Me</h3>
      <p className='description'>{bio}</p>

      <h3 className='cv-title'>Experience</h3>

      {experienceData.map((item) => {
        return (
          <div className='experience-section'>
            <div className='from-to-date'>
              {item.expFrom + `${!item.expFrom ? '' : ' - '}` + item.expTo}
            </div>
            <div className='experience'>
              <h4>{item.position}</h4>
              <div>
                {item.company + `${!item.company ? '' : ', '}` + item.expCity}
              </div>
            </div>
          </div>
        )
      })}

      <h3 className='cv-title'>Education</h3>

      {educationData.map((item) => {
        return (
          <div className='education-section'>
            <div className='from-to-date'>
              {item.eduFrom + `${!item.eduFrom ? '' : ' - '}` + item.eduTo}
            </div>
            <div className='education'>
              <h4>
                {item.degree + `${!item.degree ? '' : ' in '}` + item.sub}
              </h4>
              <div>{item.uni}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CvMain
