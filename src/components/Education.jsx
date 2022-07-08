import React, { useState, useEffect } from 'react'
import Button from './Button'
import uniqid from 'uniqid'

const Education = (props) => {
  const [education, setEducation] = useState({
    uni: '',
    city: '',
    degree: '',
    sub: '',
    from: '',
    to: '',
  })

  // function handleChange(e, obj) {
  //   // // setEducation(() => [{ ...education, [e.target.name]: e.target.value }])
  //   // // console.log([{ ...education[0], [e.target.name]: e.target.value }])

  //   // const inputElements = e.target.parentElement.children

  //   // Array.from(inputElements).map((input) => {
  //   //   if (input.name === e.target.name) {
  //   //     // setEducation(() => [{ ...education, [e.target.name]: e.target.value }])
  //   //     // console.log([{ ...education, ...{...education[0], [e.target.name]: e.target.value }}])
  //   //   }
  //   // })

  //   e.preventDefault()
  //   const { name, value } = e.target

  //   obj = { ...obj, [name]: value }
  //   console.log(e.target.parentElement)

  //   // setEducation([
  //   //   ...education,
  //   //   { ...education[Number.parseInt(e.target.parentElement.id)], obj },
  //   // ])
  //   // console.log(e.target.parentElement.id)

  //   // console.log(typeof e.target.parentElement.id)
  // }

  // const addComponent = () => {
  //   const indexId = education[education.length - 1].id
  //   setEducation([
  //     ...education,
  //     {
  //       ...education[indexId],
  //       id: education.length > 0 ? indexId + 1 : 0,
  //     },
  //   ])
  // }

  // const removeComponent = (id) => {
  //   setEducation(education.filter((ed) => ed.id !== id))
  // }

  useEffect(() => {
    props.onSaveEducationData(education)
  }, [education])

  const changeHandler = (e) => {
    setEducation((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='University'
          name='uni'
          value={education.uni}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='City'
          name='city'
          value={education.city}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='Degree'
          name='degree'
          value={education.degree}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='Subject'
          name='sub'
          value={education.sub}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='From'
          name='from'
          value={education.from}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='To'
          name='to'
          value={education.to}
          onChange={changeHandler}
        />
      </form>
      <Button name='Delete' addClass='default-btn' />
    </div>
  )
}
export default Education
