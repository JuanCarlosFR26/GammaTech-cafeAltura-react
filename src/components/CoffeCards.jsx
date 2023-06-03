import React, { useContext, useEffect } from 'react'
import CoffeCard from './CoffeCard'
import Shop from '../pages/Shop'
import { getData } from '../function'
import { CoffeProvider } from '../context/CoffesProvider'
import LinkIcon from './LinkIcon'

const CoffeCards = () => {

    const { coffes, setCoffes} = useContext(CoffeProvider);

    // const GET_API = process.env.REACT_APP_API_GET_COFFES;

    useEffect(() => {
        getData('https://cafe-de-altura.vercel.app/api/products').then((res) => setCoffes(res.products))
    }, [])

    console.log(coffes);
  return (
    <div className='flex flex-col items-center p-10 gap-10 w-[1280px] h-[603.39px] bg-white'>
        <h2 className='text-heroTitle font-medium text-2xl leading-6'>Novedades</h2>
        <div className='flex justify-center items-center gap-6'>
            <CoffeCard available={coffes && coffes[0].available} img={coffes && coffes[0].img_url} title={coffes && coffes[0].brand} price={coffes && coffes[0].price}/>
            <CoffeCard available={coffes && coffes[1].available} img={coffes && coffes[1].img_url} title={coffes && coffes[1].brand} price={coffes && coffes[1].price}/>
            <CoffeCard available={coffes && coffes[2].available} img={coffes && coffes[2].img_url} title={coffes && coffes[2].brand} price={coffes && coffes[2].price}/>
            <CoffeCard available={coffes && coffes[3].available} img={coffes && coffes[3].img_url} title={coffes && coffes[3].brand} price={coffes && coffes[3].price}/>
        </div>
        <LinkIcon className={'w-[104px] h-[24px] flex items-center gap-4'} styleLink={'underline font-bold text-[14px] leading-[16px]'} styleIcon={"fa-solid fa-arrow-right"} text={"Ver Todos"} to={'/shop'} element={<Shop />}/>
    </div>
  )
}

export default CoffeCards