import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

const Education = (props) => {
  const { id, uni, eduCity, degree, sub, eduFrom, eduTo } = props

  const [education, setEducation] = useState({
    id: id,
    uni: uni,
    eduCity: eduCity,
    degree: degree,
    sub: sub,
    eduFrom: eduFrom,
    eduTo: eduTo,
  })

  useEffect(() => {
    props.onSaveEducationData(education)
  }, [education])

  const changeHandler = (e, id) => {
    // setEducation((prevState) => {
    //   return { ...prevState, [e.target.name]: e.target.value }
    // })
    console.log('id', id)
    props.onSaveEducationData(e, id)
  }

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='University'
          name='uni'
          value={education.uni}
          onChange={(e) => changeHandler(e, education.id)}
        />

        <input
          type='text'
          placeholder='City'
          name='eduCity'
          value={education.eduCity}
          onChange={(e) => changeHandler(e, education.id)}
        />

        <input
          type='text'
          placeholder='Degree'
          name='degree'
          value={education.degree}
          onChange={(e) => changeHandler(e, education.id)}
        />

        <input
          type='text'
          placeholder='Subject'
          name='sub'
          value={education.sub}
          onChange={(e) => changeHandler(e, education.id)}
        />

        <input
          type='text'
          placeholder='From'
          name='eduFrom'
          value={education.eduFrom}
          onChange={(e) => changeHandler(e, education.id)}
        />

        <input
          type='text'
          placeholder='To'
          name='eduTo'
          value={education.eduTo}
          onChange={(e) => changeHandler(e, education.id)}
        />
      </form>
    </div>
  )
}
export default Education
