import React, { useState, useEffect } from 'react'
import Button from './Button'
import uniqid from 'uniqid'

const Experience = (props) => {
  const [experience, setExperience] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  })

  // const addComponent = () => {
  //   setExperience([
  //     ...experience,
  //     {
  //       id:
  //         experience.length > 0 ? experience[experience.length - 1].id + 1 : 0,
  //       item: experienceForm,
  //     },
  //   ])
  // }

  // const removeComponent = (id) => {
  //   setExperience(experience.filter((exp) => exp.id !== id))
  // }

  useEffect(() => {
    props.onSaveExperienceData(experience)
  }, [experience])

  const changeHandler = (e) => {
    setExperience((prevExperience) => {
      return { ...prevExperience, [e.target.name]: e.target.value }
    })
  }

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Position'
          name='position'
          value={experience.position}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='Company'
          name='company'
          value={experience.company}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='City'
          name='city'
          value={experience.city}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='From'
          name='from'
          value={experience.from}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='To'
          name='to'
          value={experience.to}
          onChange={changeHandler}
        />
      </form>
      <Button name='Delete' addClass='default-btn' />
    </div>
  )
}

export default Experience
