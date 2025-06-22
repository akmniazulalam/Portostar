import React from 'react'

const ServicesH = ({serviceHeading, className}) => {
  return (
    <h3 className={`font-poppins font-medium text-[18px] ${className}`}>{serviceHeading}</h3>
  )
}

export default ServicesH