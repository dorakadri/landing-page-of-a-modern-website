import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins outline-none ${styles} font-medium text-[18px] text-primary rounded-[10px]`}>Get Started</button>
  )
}

export default Button