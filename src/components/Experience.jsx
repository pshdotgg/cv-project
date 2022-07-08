import React, { useState, useEffect } from 'react'

const Experience = (props) => {
  const [experience, setExperience] = useState({
    position: 'Senior Web Developer',
    company: 'Facebook Inc.',
    expCity: 'Menlo Park',
    expFrom: '2015',
    expTo: '2021',
  })

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
          name='expCity'
          value={experience.expCity}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='From'
          name='expFrom'
          value={experience.expFrom}
          onChange={changeHandler}
        />

        <input
          type='text'
          placeholder='To'
          name='expTo'
          value={experience.expTo}
          onChange={changeHandler}
        />
      </form>
    </div>
  )
}

export default Experience
