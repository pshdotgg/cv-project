import React, { useState, useEffect } from 'react'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'
import Button from './Button'

import '../styles/FormContainer.css'

const FormContainer = (props) => {
  const [experienceData, setExperienceData] = useState([{}])
  const [educationData, setEducationData] = useState([{}])

  const savePersonalDataHandler = (enteredPersonalData) => {
    props.onAddPersonal(enteredPersonalData)
  }

  const saveExperienceData = (enteredExperienceData) => {
    props.onAddExperience(experienceData)
  }

  const saveEducationDataHandler = (enteredEducationData) => {
    props.onAddEducation(enteredEducationData)
  }

  const addEducationClickHandler = () => {
    setEducationData((prevEducationData) => {
      return [...prevEducationData, {}]
    })
  }

  const addExperienceClickHandler = () => {
    setExperienceData((prevExperienceData) => {
      return [...prevExperienceData, {}]
    })
  }

  return (
    <div className='form-container'>
      <Personal onSavePersonalData={savePersonalDataHandler} />

      <h3>Experience</h3>
      {experienceData.map((item) => {
        return (
          <>
            <Experience onSaveExperienceData={saveExperienceData} />
            <Button name='Delete' addClass='default-btn' />
          </>
        )
      })}

      <Button
        name='Add'
        addClass='default-btn'
        handleClick={addExperienceClickHandler}
      />

      <h3>Education</h3>
      {educationData.map((item) => {
        return (
          <>
            <Education onSaveEducationData={saveEducationDataHandler} />
            <Button name='Delete' addClass='default-btn' />
          </>
        )
      })}

      <Button
        name='Add'
        addClass='default-btn'
        handleClick={addEducationClickHandler}
      />

      {/* <Button name='Generate PDF' addClass='pdf-btn' /> */}
      {/* <Button name='Load Example' addClass='example-btn' /> */}
      {/* <Button name='Reset' addClass='reset-btn' /> */}
    </div>
  )
}

export default FormContainer
