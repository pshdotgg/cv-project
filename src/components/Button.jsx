import React from 'react'
import '../styles/Button.css'

function Button(props) {
  const { name, addClass, handleClick } = props

  return (
    <button type='button' className={addClass} onClick={handleClick}>
      {name}
    </button>
  )
}

export default Button
