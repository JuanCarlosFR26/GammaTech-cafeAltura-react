import React, { useState } from 'react'

const Faq = ({ title, text }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className='w-[668px] h-auto p-6 gap-4 rounded-[10px] flex flex-col bg-white'>
        <div className='flex justify-between items-center w-[620px] h-[24px]  cursor-pointer' onClick={() => toggleFaq()}>
            <h3 className='font-bold text-[18px] leading-[24px] text-titleCard w-full'>{title}</h3>
            {
              isOpen ? <i className='fa-solid fa-chevron-up'></i> : <i className='fa-solid fa-chevron-down'></i>
            }
        </div>
        <div className='w-[620px] border border-borderColor' id='divider'></div>
        {
          isOpen && <p className='text-[12px] leading-[16px] text-titleCard'>{text}</p>
        }
    </div>
  )
}

export default Faq