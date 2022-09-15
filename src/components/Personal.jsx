/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

const Personal = (props) => {
  const { personalData, onChangePersonalData } = props

  return (
    <div>
      <h3>Personal Information</h3>
      <form>
        <input
          type='text'
          placeholder='First Name'
          name='fName'
          value={personalData.fName}
          onChange={onChangePersonalData}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lName'
          value={personalData.lName}
          onChange={onChangePersonalData}
        />
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={personalData.title}
          onChange={onChangePersonalData}
        />
        <input
          type='text'
          placeholder='Address'
          name='address'
          value={personalData.address}
          onChange={onChangePersonalData}
        />
        <input
          type='text'
          placeholder='Phone'
          name='phone'
          value={personalData.phone}
          onChange={onChangePersonalData}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={personalData.email}
          onChange={onChangePersonalData}
        />
        <textarea
          name='bio'
          id='bio'
          placeholder='Bio'
          value={personalData.bio}
          onChange={onChangePersonalData}
        ></textarea>
      </form>
    </div>
  )
}

export default Personal
