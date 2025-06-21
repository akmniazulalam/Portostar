import React from 'react'

const Heading = ({heading, className}) => {
  return (
    <>
      <h3 className={`font-poppins font-semibold text-[44px] text-black mt-5 ${className}`}>{heading}</h3>
    </>
  )
}

export default Heading