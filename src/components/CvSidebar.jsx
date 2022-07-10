import React from 'react'

const CvSidebar = (props) => {
  const { address, phone, email } = props.personalData
  return (
    <div className='cv-sidebar'>
      <h3 className='cv-title'>Personal Details</h3>
      <div className='sidebar-details'>
        <h4>Address</h4>
        <p>{address}</p>
      </div>

      <div className='sidebar-details'>
        <h4>Phone</h4>
        <p>{phone}</p>
      </div>

      <div className='sidebar-details'>
        <h4>Email</h4>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default CvSidebar
