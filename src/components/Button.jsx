import React from 'react'

const Button = ({style, text}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient rounded-lg font-poppins font-medium text-[18px] text-primary outline-none ${style}`}>
      {text}</button>
  )
}

export default Button