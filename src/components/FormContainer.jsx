import React from 'react'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'

import '../styles/FormContainer.css'

const FormContainer = () => {
  return (
    <div className='form-container'>
      <Personal />
      <Experience />
      <Education />
    </div>
  )
}

export default FormContainer
