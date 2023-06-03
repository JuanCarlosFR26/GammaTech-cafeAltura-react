import React from "react";

const CoffeCard = ({ img, title, price, onClick, available }) => {
  return (
    <div
      className={
        available
          ? "flex flex-col justify-end items-center p-6 gap-6 w-[282px] h-[391.39px] border border-solid border-borderColor rounded-lg cursor-pointer group hover:bg-hoverCoffeCard"
          : "flex flex-col justify-end items-center p-6 gap-6 w-[282px] h-[391.39px] border border-solid border-borderColor rounded-lg cursor-pointer group opacity-[0.7]"
      }
    >
      <img className="w-[219.39px] h-[219.39px]" src={img}></img>
      <div className="flex flex-col gap-1 w-[160px] h-[44px] items-center">
        <h3 className="text-[14px] font-bold leading-[16px]">{title}</h3>
        <p className="text-[14px] leading-[16px]">{price},00€</p>
      </div>
      <button
        className={
          available
            ? `flex justify-center items-center p-2 gap-2 w-[60px] h-8 text-white rounded bg-btnCoffeCard font-semibold leading-4 text-[14px] group-hover:bg-btnCoffe`
            : `flex justify-center items-center p-2 gap-2 w-[60px] h-8 text-white rounded font-semibold leading-4 text-[14px] bg-bgForm cursor-not-allowed`
        }
        onClick={onClick}
      >
        {available ? "Añadir" : "Agotado"}
      </button>
    </div>
  );
};

export default CoffeCard;
