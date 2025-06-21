import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <>
      <button className={`text-white uppercase flex items-center font-poppins bg-primary hover:bg-btnHover cursor-pointer transition-all duration-300 px-6 rounded-full ${className}`}>{btnText}</button>
    </>
  )
}

export default Button