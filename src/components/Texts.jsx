import React from 'react'

const Texts = ({pText, className}) => {
  return (
    <p className={`font-poppins text-[16px] leading-8 text-[#121212] opacity-70 ${className}`}>{pText}</p>
  )
}

export default Texts