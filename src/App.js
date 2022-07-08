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

  const [experienceData, setExperienceData] = useState({
    position: '',
    company: '',
    expCity: '',
    expFrom: '',
    expTo: '',
  })

  const [educationData, setEducationData] = useState({
    uni: '',
    eduCity: '',
    degree: '',
    sub: '',
    eduFrom: '',
    eduTo: '',
  })

  const addPersonalHandler = (personal) => {
    setPersonalData((prevPersonal) => {
      return { ...prevPersonal, ...personal }
    })
  }

  const addExperienceHandler = (experience) => {
    setExperienceData((prevExperience) => {
      return { ...prevExperience, ...experience }
    })
  }

  const addEducationHandler = (education) => {
    setEducationData((prevEducation) => {
      return { ...prevEducation, ...education }
    })
  }

  return (
    <div>
      <Header />
      <FormContainer
        onAddPersonal={addPersonalHandler}
        onAddExperience={addExperienceHandler}
        onAddEducation={addEducationHandler}
      />
      <CvContainer
        personalData={personalData}
        experienceData={experienceData}
        educationData={educationData}
      />
      <Footer />
    </div>
  )
}

export default App
