import React, { useEffect } from 'react'

function CvHeader(props) {
  const { fName, lName, title } = props

  return (
    <div className='cv-header'>
      <div>
        <h1>{fName + ' ' + lName}</h1>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default CvHeader
