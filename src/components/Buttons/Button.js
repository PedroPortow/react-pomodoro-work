import React from 'react'
import './Button.css'

function Button({text, handler}) {
  return (
    <button
      onClick={handler}
      className='button-59'
    >
      {text}   
    </button>
  )
}

export default Button