import React from 'react'

const Card = ({ src, title, text }) => {
  return (
    <div className='flex flex-col justify-center items-center p-6 gap-4 w-[316px] h-[232px] bg-white border border-solid border-lime-50 rounded-lg shadow-shadowCard font-outfit'>
        <img className='w-16 h-16' src={src}></img>
        <h3 className='font-semibold text-lg leading-6 text-titleCard text-center'>{title}</h3>
        <p className='text-sm leading-4 text-center text-p'>{text}</p>
    </div>
  )
}

export default Card