import React from "react";
import heroImg from "../img/Hero image.png";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="w-[1280px] h-[486px] bg-hero flex flex-col items-start py-[48px] px-[40px] shadow-heroShadow font-outfit">
      <div className="flex flex-row justify-center items-center gap-6 h-[390px] w-[1200px]">
        <div className="flex flex-col items-start gap-4 w-[588px] h-[232px]">
          <h3 className="text-heroTitle font-semibold text-lg">De la planta a tu taza</h3>
          <h1 className="font-semibold text-h1 leading-h1 font-outfit w-[588px]">El mejor café del mundo, ahora en tu casa</h1>
          <p className="font-normal text-sm text-p">
            Trabajamos con agricultores de todo el mundo para seleccionar los
            mejores granos de café y que puedas viajar desde la comodidad de tu
            hogar.
          </p>
          <div className="flex items-start gap-4">
            <Button text={'Descubrir orígenes'} className={'py-[12px] px-[20px] w-[168px] h-[40px] rounded bg-buttonOrigin text-white text-sm font-bold leading-[16px] cursor-pointer'}/>
            <Button text={'Comprar café'} className={'py-[12px] px-[22px] w-[137px] h-[40px] rounded bg-btnCoffe text-white text-sm font-bold leading-[16px] cursor-pointer'}/>
          </div>
        </div>
        <img src={heroImg}></img>
      </div>
    </div>
  );
};

export default Banner;
