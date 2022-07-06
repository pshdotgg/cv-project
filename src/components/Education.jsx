import React, { useState } from 'react'
import Button from './Button'
import uniqid from 'uniqid'

const Education = () => {
  const educationForm = (
    <>
      <form action='#'>
        <input type='text' placeholder='University' />
        <label htmlFor=''></label>

        <input type='text' placeholder='City' />
        <label htmlFor=''></label>

        <input type='text' placeholder='Degree' />
        <label htmlFor=''></label>

        <input type='text' placeholder='Subject' />
        <label htmlFor=''></label>

        <input type='text' placeholder='From' />
        <label htmlFor=''></label>

        <input type='text' placeholder='To' />
        <label htmlFor=''></label>
      </form>
    </>
  )

  const [education, setEducation] = useState([{ id: 0, item: educationForm }])

  const addComponent = () => {
    setEducation([
      ...education,
      {
        id: education.length > 0 ? education[education.length - 1].id + 1 : 0,
        item: educationForm,
      },
    ])
  }

  const removeComponent = (id) => {
    setEducation(education.filter((ed) => ed.id !== id))
  }

  return (
    <div>
      <h3>Education</h3>

      {education.map((obj) => (
        <div key={uniqid()}>
          {obj.item}
          <Button
            name='Delete'
            addClass='default-btn'
            handleClick={() => removeComponent(obj.id)}
          />
        </div>
      ))}
      <Button name='Add' addClass='default-btn' handleClick={addComponent} />

      <Button name='Generate PDF' addClass='pdf-btn' />
      <Button name='Load Example' addClass='example-btn' />
      <Button name='Reset' addClass='reset-btn' />
    </div>
  )
}

export default Education
