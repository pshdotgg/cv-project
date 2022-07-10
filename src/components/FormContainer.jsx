import React, { useState, useEffect } from 'react'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'
import Button from './Button'
import { v4 as uuid } from 'uuid'

import '../styles/FormContainer.css'

const FormContainer = (props) => {
  const savePersonalDataHandler = (enteredPersonalData) => {
    props.onAddPersonal(enteredPersonalData)
  }

  const saveExperienceData = (enteredExperienceData) => {
    props.onAddExperience(enteredExperienceData)
  }

  const saveEducationDataHandler = (enteredEducationData, id) => {
    console.log('eduDataHandler', enteredEducationData)
    console.log('id from form', id)
  }

  return (
    <div className='form-container'>
      <Personal onSavePersonalData={savePersonalDataHandler} id={uuid()} />
      <h3>Experience</h3>
      {props.experienceData.map((item) => {
        return (
          <>
            <Experience
              onSaveExperienceData={saveExperienceData}
              key={uuid()}
              id={item.id}
              position={item.position}
              companny={item.companny}
              expCity={item.expCity}
              expFrom={item.expFrom}
              expTo={item.expTo}
            />
            <Button
              name='Delete'
              addClass='default-btn'
              handleClick={() => props.onRemoveExperience(item.id)}
            />
          </>
        )
      })}
      <Button
        name='Add'
        addClass='default-btn'
        handleClick={props.onAddExperience}
      />

      <h3>Education</h3>
      {props.educationData.map((item) => {
        return (
          <>
            <Education
              onSaveEducationData={saveEducationDataHandler}
              key={uuid()}
              id={item.id}
              uni={item.uni}
              eduCity={item.eduCity}
              degree={item.degree}
              sub={item.sub}
              eduFrom={item.eduFrom}
              eduTo={item.eduTo}
            />
            <Button
              name='Delete'
              addClass='default-btn'
              handleClick={() => props.onRemoveEducation(item.id)}
            />
          </>
        )
      })}
      <Button
        name='Add'
        addClass='default-btn'
        handleClick={props.onAddEducation}
      />
      {/* <Button name='Generate PDF' addClass='pdf-btn' /> */}
      {/* <Button name='Load Example' addClass='example-btn' /> */}
      {/* <Button
        name='Reset'
        addClass='reset-btn'
        // handleClick={resetClickHandler}
      /> */}
    </div>
  )
}

export default FormContainer
