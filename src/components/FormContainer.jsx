import React, { useState, useEffect } from 'react'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'
import Button from './Button'

import '../styles/FormContainer.css'

const FormContainer = (props) => {
  // const [educationData, setEducationData] = useState([{}, {}])

  const savePersonalDataHandler = (enteredPersonalData) => {
    props.onAddPersonal(enteredPersonalData)
  }

  const saveExperienceData = (enteredExperienceData) => {
    const experienceData = {
      ...enteredExperienceData,
    }
    props.onAddExperience(experienceData)
  }

  const saveEducationDataHandler = (enteredEducationData) => {
    // setEducationData((prevEducationData) => {
    //   return [...prevEducationData, { ...enteredEducationData }]
    // })
    // console.log(educationData)
    props.onAddEducation(enteredEducationData)
  }

  const addClickHandler = () => {}

  return (
    <div className='form-container'>
      <Personal onSavePersonalData={savePersonalDataHandler} />

      <h3>Experience</h3>
      <Experience onSaveExperienceData={saveExperienceData} />
      <Button name='Delete' addClass='default-btn' />
      <Button name='Add' addClass='default-btn' handleClick={addClickHandler} />

      <h3>Education</h3>
      {/* {educationData.map((item) => (
        <>
          <Education onSaveEducationData={saveEducationDataHandler} />
          <Button name='Delete' addClass='default-btn' />
        </>
      ))} */}
      <Education onSaveEducationData={saveEducationDataHandler} />
      <Button name='Delete' addClass='default-btn' />
      <Button name='Add' addClass='default-btn' handleClick={addClickHandler} />

      <Button name='Generate PDF' addClass='pdf-btn' />
      <Button name='Load Example' addClass='example-btn' />
      <Button name='Reset' addClass='reset-btn' />
    </div>
  )
}

export default FormContainer
