import React from 'react'

const CvSidebar = (props) => {
  const { address, phone, email } = props
  return (
    <div className='cv-sidebar'>
      <h3 className='cv-title'>Personal Details</h3>
      <h4>Address</h4>
      <p>{address}</p>
      <h4>Phone</h4>
      <p>{phone}</p>
      <h4>Email</h4>
      <p>{email}</p>
    </div>
  )
}

export default CvSidebar
