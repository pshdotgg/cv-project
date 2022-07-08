import React, { useState } from 'react'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import Footer from './components/Footer'
import CvContainer from './components/CvContainer'

import './styles/App.css'

const App = () => {
  const [personalData, setPersonalData] = useState({
    fName: '',
    lName: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    bio: '',
  })

  const addPersonalHandler = (personal) => {
    setPersonalData((prevPersonal) => {
      return { ...prevPersonal, ...personal }
    })
    console.log('from App', personal)
  }

  const addExperienceHandler = (experience) => {
    console.log(experience)
  }

  const addEducationHandler = (education) => {
    console.log(education)
  }

  return (
    <div>
      <Header />
      <FormContainer
        onAddPersonal={addPersonalHandler}
        onAddExperience={addExperienceHandler}
        onAddEducation={addEducationHandler}
      />
      <CvContainer personalData={personalData} />
      <Footer />
    </div>
  )
}

export default App
