import React, { useState, useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import CvContainer from './components/CvContainer'
import Footer from './components/Footer'
import { empty, fill } from './components/data'
import { v4 as uuid } from 'uuid'

import './styles/App.css'

const getLocalStorage = (listKey) => {
  let list = localStorage.getItem(listKey)
  if (list) {
    return JSON.parse(localStorage.getItem(listKey))
  }
}

const App = () => {
  const cvContainerRef = useRef()
  const [personalData, setPersonalData] = useState(
    getLocalStorage('personal') || {
      fName: '',
      lName: '',
      title: '',
      address: '',
      phone: '',
      email: '',
      bio: '',
    }
  )

  const [experienceData, setExperienceData] = useState(
    getLocalStorage('experience') || [
      {
        id: uuid(),
        position: '',
        company: '',
        expCity: '',
        expFrom: '',
        expTo: '',
      },
    ]
  )

  const [educationData, setEducationData] = useState(
    getLocalStorage('education') || [
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
  )

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

  const reset = () => {
    setPersonalData(empty.personal)
    setExperienceData([empty.experience])
    setEducationData([empty.education])

    localStorage.removeItem('personal')
    localStorage.removeItem('experience')
    localStorage.removeItem('education')
  }

  const loadExample = () => {
    setPersonalData(fill.personal)
    setExperienceData(fill.experience)
    setEducationData(fill.education)
  }

  const printHandler = useReactToPrint({
    content: () => cvContainerRef.current,
  })

  useEffect(() => {
    localStorage.setItem('personal', JSON.stringify(personalData))
  }, [personalData])

  useEffect(() => {
    localStorage.setItem('experience', JSON.stringify(experienceData))
  }, [experienceData])

  useEffect(() => {
    localStorage.setItem('education', JSON.stringify(educationData))
  }, [educationData])

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
        onReset={reset}
        onLoadExample={loadExample}
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
        printHandler={printHandler}
      />
      <CvContainer
        personalData={personalData}
        experienceData={experienceData}
        educationData={educationData}
        ref={cvContainerRef}
      />
      <Footer />
    </div>
  )
}

export default App
