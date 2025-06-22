import React from 'react'

const ExperienceH = ({experienceHeading, className}) => {
  return (
    <h3 className={`font-poppins font-semibold text-5xl ${className}`}>{experienceHeading}</h3>
  )
}

export default ExperienceH