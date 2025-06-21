import React from 'react'

const Paragraph = ({pText, className}) => {
  return (
    <>
      <p className={`${className}`}>{pText}</p>
    </>
  )
}

export default Paragraph