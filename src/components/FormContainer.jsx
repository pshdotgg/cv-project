import React, { useState, useEffect } from 'react'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'
import Button from './Button'
import { v4 as uuid } from 'uuid'

import '../styles/FormContainer.css'

const FormContainer = (props) => {
  const [experienceData, setExperienceData] = useState([{}])
  const [educationData, setEducationData] = useState([])

  const savePersonalDataHandler = (enteredPersonalData) => {
    props.onAddPersonal(enteredPersonalData)
  }

  const saveExperienceData = (enteredExperienceData) => {
    props.onAddExperience(experienceData)
  }

  const saveEducationDataHandler = (enteredEducationData) => {
    // const data = { ...enteredEducationData

    // setEducationData([...educationData, ...enteredEducationData])

    // console.log([...educationData, { ...data }])
    // const tempData = { ...educationData[0], ...enteredEducationData }
    // setEducationData((prevState) => {
    //   return [...prevState, tempData]
    // })

    const tempData = educationData.filter(
      (item) => enteredEducationData.id === item.id
    )
    if (enteredEducationData.id === educationData.id) {
      console.log(tempData)
    } else console.log(enteredEducationData.id === educationData[0].id)
    props.onAddEducation(enteredEducationData)

    console.log([...educationData, { ...tempData, ...enteredEducationData }])
  }

  const addEducationClickHandler = () => {
    setEducationData((prevEducationData) => {
      return [
        ...prevEducationData,
        {
          id: uuid(),
          uni: '',
          eduCity: '',
          degree: '',
          sub: '',
          eduFrom: '',
          eduTo: '',
        },
      ]
    })
    console.log(educationData)
  }

  const removeEducationClickHandler = (id) => {
    setEducationData(educationData.filter((data) => data.id !== id))
  }

  const addExperienceClickHandler = () => {
    setExperienceData((prevExperienceData) => {
      return [...prevExperienceData, {}]
    })
  }

  // useEffect(() => console.log(educationData))

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
            <Education
              onSaveEducationData={saveEducationDataHandler}
              key={() => uuid()}
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
              handleClick={() => removeEducationClickHandler(item.id)}
            />
          </>
        )
      })}

      <Button
        name='Add'
        addClass='default-btn'
        handleClick={() => addEducationClickHandler()}
      />

      {/* <Button name='Generate PDF' addClass='pdf-btn' /> */}
      {/* <Button name='Load Example' addClass='example-btn' /> */}
      {/* <Button name='Reset' addClass='reset-btn' /> */}
    </div>
  )
}

export default FormContainer
