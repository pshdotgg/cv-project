import React from 'react'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'
import Button from './Button'

import '../styles/FormContainer.css'

const FormContainer = (props) => {
  const {
    onChangePersonal,
    onChangeExperience,
    onChangeEducation,
    onAddEducation,
    onAddExperience,
    onRemoveEducation,
    onRemoveExperience,
    onReset,
    onLoadExample,
    personalData,
    educationData,
    experienceData,
    printHandler,
  } = props

  return (
    <div className='form-container'>
      <Personal
        personalData={personalData}
        onChangePersonalData={onChangePersonal}
      />
      <h3>Experience</h3>
      {experienceData.map((item) => {
        return (
          <div key={item.id}>
            <Experience
              expItem={item}
              onChangeExperienceData={(e, id) => onChangeExperience(e, id)}
            />
            <Button
              name='Delete'
              addClass='default-btn'
              handleClick={() => onRemoveExperience(item.id)}
            />
          </div>
        )
      })}
      <Button name='Add' addClass='default-btn' handleClick={onAddExperience} />

      <h3>Education</h3>
      {educationData.map((item) => {
        return (
          <div key={item.id}>
            <Education
              eduItem={item}
              onChangeEducationData={(e, id) => onChangeEducation(e, id)}
            />
            <Button
              name='Delete'
              addClass='default-btn'
              handleClick={() => onRemoveEducation(item.id)}
            />
          </div>
        )
      })}
      <Button name='Add' addClass='default-btn' handleClick={onAddEducation} />

      <Button
        name='Generate Pdf'
        addClass='generate-btn'
        handleClick={printHandler}
      />

      <Button
        name='Load Example'
        addClass='example-btn'
        handleClick={onLoadExample}
      />
      <Button name='Reset' addClass='reset-btn' handleClick={onReset} />
    </div>
  )
}

export default FormContainer
