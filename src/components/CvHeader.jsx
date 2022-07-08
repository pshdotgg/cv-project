import React, { useEffect } from 'react'

function CvHeader(props) {
  const { fName, lName, title } = props

  return (
    <div
      className='cv-header'
      style={{
        backgroundColor: 'blue',
        height: '120px',
      }}
    >
      <h1>{fName + ' ' + lName}</h1>
      <p>{title}</p>
    </div>
  )
}

export default CvHeader
