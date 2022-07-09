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
    props.onAddExperience(enteredExperienceData)
  }

  const saveEducationDataHandler = (enteredEducationData) => {
    // const data = { ...enteredEducationData

    // setEducationData([...educationData, ...enteredEducationData])

    // console.log([...educationData, { ...data }])
    // const tempData = { ...educationData[0], ...enteredEducationData }
    // setEducationData((prevState) => {
    //   return [...prevState, tempData]
    // })

    // const tempData = educationData.filter(
    //   (item) => enteredEducationData.id === item.id
    // )

    // let newEducation

    // educationData.forEach((educationItem) => {
    //   console.log(enteredEducationData.id === educationItem.id)
    //   if (enteredEducationData.id === educationItem.id) {
    //     newEducation = {
    //       ...educationItem,
    //       ...enteredEducationData,
    //     }
    //   } else newEducation = educationItem
    // })
    // setEducationData((prevState) => {
    //   console.log([{ ...prevState, ...newEducation }])
    // })

    // setEducationData([...educationData, ...newEducation])

    // const newData = educationData.filter(
    //   (item) => item.id === enteredEducationData.id
    // )
    // console.log('new', newData)
    // console.log('test', [...newData, ...enteredEducationData])

    // setEducationData((prevState) => {
    //   const newEducation = educationData.map((educationItem) => {
    //     console.log(educationItem.id, '\n', enteredEducationData.id)
    //     console.log(educationData)
    //     if (enteredEducationData.id === educationItem.id) {
    //       return {
    //         ...educationItem,
    //         ...enteredEducationData,
    //       }
    //     }
    //     console.log(educationItem.id, enteredEducationData.id)
    //     return educationItem
    //   })

    // console.log({ ...educationData, ...newEducation })

    // props.onAddEducation(enteredEducationData)

    // console.log([...educationData, { ...tempData, ...enteredEducationData }])

    props.onAddEducation(enteredEducationData)
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
    console.log('add click', educationData)
  }

  const removeEducationClickHandler = (id) => {
    setEducationData(educationData.filter((data) => data.id !== id))
  }

  const addExperienceClickHandler = () => {
    setExperienceData((prevExperienceData) => {
      return [...prevExperienceData, {}]
    })
  }

  // const resetClickHandler = () => {}

  // useEffect(() => console.log(typeof educationData))
  console.log('outside render', educationData)
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
      {console.log('inside render', educationData)}
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
      <Button
        name='Reset'
        addClass='reset-btn'
        // handleClick={resetClickHandler}
      />
    </div>
  )
}

export default FormContainer
