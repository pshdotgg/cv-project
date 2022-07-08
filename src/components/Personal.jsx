/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

const Personal = (props) => {
  const [personal, setPersonal] = useState({
    fName: '',
    lName: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    bio: '',
  })

  useEffect(() => {
    props.onSavePersonalData(personal)
  }, [personal])

  const changeHandler = (e) => {
    setPersonal((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  return (
    <div>
      <h3>Personal Information</h3>
      <form>
        <input
          type='text'
          placeholder='First Name'
          name='fName'
          value={personal.fName}
          onChange={changeHandler}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lName'
          value={personal.lName}
          onChange={changeHandler}
        />
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={personal.title}
          onChange={changeHandler}
        />
        <input
          type='text'
          placeholder='Address'
          name='address'
          value={personal.address}
          onChange={changeHandler}
        />
        <input
          type='text'
          placeholder='Phone'
          name='phone'
          value={personal.phone}
          onChange={changeHandler}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={personal.email}
          onChange={changeHandler}
        />
        <textarea
          name='bio'
          id='bio'
          placeholder='Bio'
          value={personal.bio}
          onChange={changeHandler}
        ></textarea>
      </form>
    </div>
  )
}

export default Personal
