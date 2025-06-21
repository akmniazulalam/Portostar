import React from 'react'

const Image = ({Src, Alt, className}) => {
  return (
    <img className={`${className}`} src={Src} alt={Alt} />
  )
}

export default Image