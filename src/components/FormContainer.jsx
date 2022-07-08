import React, { useState } from 'react'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'
import Button from './Button'

import '../styles/FormContainer.css'

const FormContainer = (props) => {
  const [educationData, setEducationData] = useState()

  const savePersonalDataHandler = (enteredPersonalData) => {
    props.onAddPersonal(enteredPersonalData)
  }

  const saveEducationDataHandler = (enteredEducationData) => {
    setEducationData((prevEducationData) => {
      return [
        {
          ...prevEducationData,
          ...enteredEducationData,
        },
      ]
    })
    props.onAddEducation(educationData)
  }

  const saveExperienceData = (enteredExperienceData) => {
    const experienceData = {
      ...enteredExperienceData,
    }
    props.onAddExperience(experienceData)
  }

  return (
    <div className='form-container'>
      <Personal onSavePersonalData={savePersonalDataHandler} />
      <h3>Experience</h3>
      <Experience onSaveExperienceData={saveExperienceData} />
      <h3>Education</h3>
      <Education onSaveEducationData={saveEducationDataHandler} />
      <Button name='Add' addClass='default-btn' />
      <Button name='Generate PDF' addClass='pdf-btn' />
      <Button name='Load Example' addClass='example-btn' />
      <Button name='Reset' addClass='reset-btn' />
    </div>
  )
}

export default FormContainer
