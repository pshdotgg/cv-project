import React from 'react'

const Education = (props) => {
  const { onChangeEducationData, eduItem } = props

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='University'
          name='uni'
          value={eduItem.uni}
          onChange={(e) => onChangeEducationData(e, eduItem.id)}
        />

        <input
          type='text'
          placeholder='City'
          name='eduCity'
          value={eduItem.eduCity}
          onChange={(e) => onChangeEducationData(e, eduItem.id)}
        />

        <input
          type='text'
          placeholder='Degree'
          name='degree'
          value={eduItem.degree}
          onChange={(e) => onChangeEducationData(e, eduItem.id)}
        />

        <input
          type='text'
          placeholder='Subject'
          name='sub'
          value={eduItem.sub}
          onChange={(e) => onChangeEducationData(e, eduItem.id)}
        />

        <input
          type='text'
          placeholder='From'
          name='eduFrom'
          value={eduItem.eduFrom}
          onChange={(e) => onChangeEducationData(e, eduItem.id)}
        />

        <input
          type='text'
          placeholder='To'
          name='eduTo'
          value={eduItem.eduTo}
          onChange={(e) => onChangeEducationData(e, eduItem.id)}
        />
      </form>
    </div>
  )
}
export default Education
