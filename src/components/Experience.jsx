import React from 'react'

const Experience = (props) => {
  const { expItem, onChangeExperienceData } = props

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Position'
          name='position'
          value={expItem.position}
          onChange={(e) => onChangeExperienceData(e, expItem.id)}
        />

        <input
          type='text'
          placeholder='Company'
          name='company'
          value={expItem.company}
          onChange={(e) => onChangeExperienceData(e, expItem.id)}
        />

        <input
          type='text'
          placeholder='City'
          name='expCity'
          value={expItem.expCity}
          onChange={(e) => onChangeExperienceData(e, expItem.id)}
        />

        <input
          type='text'
          placeholder='From'
          name='expFrom'
          value={expItem.expFrom}
          onChange={(e) => onChangeExperienceData(e, expItem.id)}
        />

        <input
          type='text'
          placeholder='To'
          name='expTo'
          value={expItem.expTo}
          onChange={(e) => onChangeExperienceData(e, expItem.id)}
        />
      </form>
    </div>
  )
}

export default Experience
