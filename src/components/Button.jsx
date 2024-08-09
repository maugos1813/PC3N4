import React from 'react'

export const Button = ({title, val}) => {
  return (
    <button className='flex gap-4 h-[80px] focus:border-b-[2px] border-white items-center font-bold'><strong>{val}</strong>{title}</button>
  )
}
