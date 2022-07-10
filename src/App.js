import React, { useState } from 'react'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import Footer from './components/Footer'
import CvContainer from './components/CvContainer'
import { v4 as uuid } from 'uuid'

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

  const [experienceData, setExperienceData] = useState([
    {
      id: uuid(),
      position: '',
      company: '',
      expCity: '',
      expFrom: '',
      expTo: '',
    },
  ])

  const [educationData, setEducationData] = useState([
    {
      id: uuid(),
      uni: '',
      eduCity: '',
      degree: '',
      sub: '',
      eduFrom: '',
      eduTo: '',
    },

    {
      id: uuid(),
      uni: '',
      eduCity: '',
      degree: '',
      sub: '',
      eduFrom: '',
      eduTo: '',
    },
  ])

  const addPersonalHandler = (personal) => {
    setPersonalData((prevPersonal) => {
      return { ...prevPersonal, ...personal }
    })
  }

  const addExperienceHandler = () => {
    setExperienceData((prevExperience) => {
      return [
        ...prevExperience,
        {
          position: '',
          company: '',
          expCity: '',
          expFrom: '',
          expTo: '',
        },
      ]
    })
  }

  const removeExperienceHandler = (id) => {
    setExperienceData((prevEducation) =>
      prevEducation.filter((item) => item.id !== id)
    )
  }

  const addEducationHandler = () => {
    setEducationData((prevEducation) => {
      return [
        ...prevEducation,
        {
          id: uuid(),
          uni: '',
          eduCity: '',
          degree: '',
          sub: '',
          eduFrom: '',
          eduTo: '',
        },
      ]
    })
  }

  const removeEducationHandler = (id) => {
    setEducationData((prevEducation) =>
      prevEducation.filter((item) => item.id !== id)
    )
  }

  console.log('cdcd', educationData)

  return (
    <div>
      <Header />
      <FormContainer
        onAddPersonal={addPersonalHandler}
        onAddExperience={addExperienceHandler}
        onRemoveExperience={removeExperienceHandler}
        onAddEducation={addEducationHandler}
        onRemoveEducation={removeEducationHandler}
        educationData={educationData}
        experienceData={experienceData}
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
