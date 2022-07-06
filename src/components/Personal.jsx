import React from 'react'

const Personal = () => {
  return (
    <div>
      <h3>Personal Information</h3>
      <form action='#'>
        <input type='text' placeholder='First Name' />
        <label htmlFor=''></label>

        <input type='text' placeholder='Last Name' />
        <label htmlFor=''></label>

        <input type='text' placeholder='Title' />
        <label htmlFor=''></label>

        <input type='text' placeholder='Address' />
        <label htmlFor=''></label>

        <input type='text' placeholder='Phone' />
        <label htmlFor=''></label>

        <input type='text' placeholder='Email' />
        <label htmlFor=''></label>

        <textarea name='bio' id='bio' placeholder='Bio'></textarea>
      </form>
    </div>
  )
}

export default Personal
