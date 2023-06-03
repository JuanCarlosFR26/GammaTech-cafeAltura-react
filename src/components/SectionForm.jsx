import React from 'react'
import phoneIcon from '../img/phoneIcon.svg';
import emailIcon from '../img/emailIcon.svg';
import Form from './Form';
import { Link } from 'react-router-dom';

const SectionForm = () => {
  return (
    <div className='flex justify-center items-center w-[1280px] h-[552px] bg-bgForm'>
        <div className='flex justify-center items-center w-[1200px] h-[552px] bg-bgForm gap-[24px]'>
            <div className='flex flex-col items-start w-[588px] h-[320px] gap-8'>
                <div className='flex flex-col items-start gap-3 w-[580px] h-[68px]'>
                    <h3 className='font-bold text-[18px] leading-[24px] text-p'>Entra en contacto con nosotros</h3>
                    <p className='text-[14px] leading-[16px] text-pLight'>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
                </div>
                <div className='w-[580px] h-[220px] flex flex-col items-start gap-6'>
                    <p className='text-[14px] leading-[16px] text-pLight'>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
                    <div className='flex flex-col items-start w-[344px] leading-[27px]'>
                        <p className='text-[14px] leading-[16px] text-pLight'>742 Evergreen Terrace</p>
                        <p className='text-[14px] leading-[16px] text-pLight'>Springfield, OR 12345</p>
                    </div>
                    <div className='flex flex-col items-start gap-3 w-[588px] h-[60px]'>
                        <div className='flex justify-start items-center gap-3 w-[588px] h-[24px]'>
                            <img src={phoneIcon}></img>
                            <p className='text-[14px] leading-[16px] text-pLight'>+1 (555) 123-4567</p>
                        </div>
                        <div className='flex justify-start items-center gap-3 w-[588px] h-[24px]'>
                            <img src={emailIcon}></img>
                            <p className='text-[14px] leading-[16px] text-pLight'>support@example.com</p>
                        </div>
                    </div>
                    <Link className=' text-pLight text-[14px] leading-[16px]'>¿Buscas un trabajo? <span className='underline text-black font-bold'>Ver nuestras ofertas</span></Link>
                </div>
            </div>
            <Form />
        </div>
    </div>
  )
}

export default SectionForm