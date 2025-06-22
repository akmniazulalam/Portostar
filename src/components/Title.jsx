import React from 'react'

const Title = ({titleText, className}) => {
  return (
    <h3 className={`font-poppins font-medium text-[16px] text-primary uppercase ${className}`}>{titleText}</h3>
  )
}

export default Title