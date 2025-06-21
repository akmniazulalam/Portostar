import React from 'react'

const BannerHeading = ({bannerHeading ,className}) => {
  return (
    <h1 className={`font-poppins font-bold text-6xl leading-20 text-[#333333] ${className}`}>{bannerHeading}</h1>
  )
}

export default BannerHeading