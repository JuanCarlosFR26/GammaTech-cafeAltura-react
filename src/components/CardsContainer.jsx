import React from 'react'
import Card from './Card'
import card1 from '../img/card1.svg';
import card2 from '../img/card2.svg';
import card3 from '../img/card3.svg';
import bannerCard from '../img/card1back.png';

const CardsContainer = () => {
  return (
    <div className='bg-cover bg-center w-[1280px] h-[380px] flex flex-col justify-center items-center py-[48px] px-[147px] gap-6 font-outfit' style={{backgroundImage: `url(${bannerCard})`}}>
        <h2 className='font-medium text-[24px] leading-[28px] text-white'>Café con las mejores condiciones</h2>
        <div className='flex items-start gap-6 w-[996px] h-[232px]'>
            <Card title={'Recibe tu pedido sin preocuparte'} text={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'} src={card1}/>
            <Card title={'Envío en 24/48h'} text={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'} src={card2}/>
            <Card title={'Descuentos y beneficios'} text={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'} src={card3}/>
        </div>
    </div>
  )
}

export default CardsContainer