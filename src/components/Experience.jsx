import React, { useState, useEffect } from 'react'

const Experience = (props) => {
  const { id, position, company, expCity, expFrom, expTo } = props
  const [experience, setExperience] = useState({
    id: id,
    position: position,
    company: company,
    expCity: expCity,
    expFrom: expFrom,
    expTo: expTo,
  })

  // useEffect(() => {
  //   props.onSaveExperienceData(experience)
  // }, [experience])

  const changeHandler = (e, id) => {
    // setExperience((prevExperience) => {
    //   return { ...prevExperience, [e.target.name]: e.target.value }
    // })
    console.log(id)
  }

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Position'
          name='position'
          value={experience.position}
          onChange={(e) => changeHandler(experience.id)}
        />

        <input
          type='text'
          placeholder='Company'
          name='company'
          value={experience.company}
          onChange={(e) => changeHandler(experience.id)}
        />

        <input
          type='text'
          placeholder='City'
          name='expCity'
          value={experience.expCity}
          onChange={(e) => changeHandler(experience.id)}
        />

        <input
          type='text'
          placeholder='From'
          name='expFrom'
          value={experience.expFrom}
          onChange={(e) => changeHandler(experience.id)}
        />

        <input
          type='text'
          placeholder='To'
          name='expTo'
          value={experience.expTo}
          onChange={(e) => changeHandler(experience.id)}
        />
      </form>
    </div>
  )
}

export default Experience
