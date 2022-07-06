import React, { useState } from 'react'
import Button from './Button'
import uniqid from 'uniqid'

const Experience = () => {
  const experienceForm = (
    <>
      <form action='#'>
        <input type='text' placeholder='Position' />
        <label htmlFor=''></label>

        <input type='text' placeholder='Company' />
        <label htmlFor=''></label>

        <input type='text' placeholder='City' />
        <label htmlFor=''></label>

        <input type='text' placeholder='From' />
        <label htmlFor=''></label>

        <input type='text' placeholder='To' />
        <label htmlFor=''></label>
      </form>
    </>
  )

  const [experience, setExperience] = useState([
    { id: 0, item: experienceForm },
  ])

  const addComponent = () => {
    setExperience([
      ...experience,
      {
        id:
          experience.length > 0 ? experience[experience.length - 1].id + 1 : 0,
        item: experienceForm,
      },
    ])
  }

  const removeComponent = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id))
  }

  return (
    <div>
      <h3>Experience</h3>
      {experience.map((obj) => (
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
    </div>
  )
}

export default Experience
