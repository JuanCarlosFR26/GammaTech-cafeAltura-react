import React from 'react'
import LinkIcon from './LinkIcon'
import sectionImg from '../img/sectionImg.svg';

const SectionCoffe = () => {
  return (
    <div className='h-[480px] bg-hoverCoffeCard w-[1280px] flex justify-center items-center'>
        <div className='flex justify-between items-center w-[1200px] h-[390px]'>
            <div className='flex flex-col items-start w-[457px] h-[116px] gap-4'>
                <h2 className='text-heroTitle text-[24px] leading-[28px] font-semibold'>Pruébalo en nuestro coffee shop</h2>
                <p className='text-[14px] leading-[16px] text-p'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
                <LinkIcon text={'Cómo llegar'} className={'w-[118px] h-[24px] flex items-center gap-4'} styleIcon={"fa-solid fa-arrow-right"} styleLink={'underline text-[14px] leading-[16px] font-bold'}/>
            </div>
            <img src={sectionImg}></img>
        </div>
    </div>
  )
}

export default SectionCoffe