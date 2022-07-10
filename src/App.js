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
  ])

  const changePersonalHandler = (e) => {
    const { name, value } = e.target
    setPersonalData((prevPersonal) => {
      return { ...prevPersonal, [name]: value }
    })
  }

  const addExperienceHandler = () => {
    setExperienceData((prevExperience) => {
      return [
        ...prevExperience,
        {
          id: uuid(),
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

  const changeExperienceHandler = (e, id) => {
    const { name, value } = e.target
    setExperienceData((prevExperience) => {
      const newExperience = prevExperience.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value }
        }
        return item
      })

      return newExperience
    })
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

  const changeEducationHandler = (e, id) => {
    const { name, value } = e.target

    setEducationData((prevEducation) => {
      const newEducation = prevEducation.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value }
        }
        return item
      })

      return newEducation
    })
  }
  console.log(experienceData)
  return (
    <div>
      <Header />
      <FormContainer
        onChangePersonal={changePersonalHandler}
        onChangeExperience={changeExperienceHandler}
        onChangeEducation={(e, id) => changeEducationHandler(e, id)}
        onAddExperience={addExperienceHandler}
        onRemoveExperience={removeExperienceHandler}
        onAddEducation={addEducationHandler}
        onRemoveEducation={removeEducationHandler}
        personalData={personalData}
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
