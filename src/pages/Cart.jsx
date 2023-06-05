import React, { useContext, useEffect } from "react";
import ProductsCart from "../components/ProductsCart";
import ShippingCart from "../components/ShippingCart";
import TotalCart from "../components/TotalCart";
import { CoffeProvider } from "../context/CoffesProvider";
import ModalEmptyCart from "../components/ModalEmptyCart";

const Cart = () => {
  const { cart, shipping } = useContext(CoffeProvider);

  return (
    <div className="w-[1280px]">
      <div className="flex items-center p-[40px] gap-6 w-[1280px] min-h-[876px] h-auto bg-white">
        <div className="flex flex-col items-center gap-6 min-h-[876px] h-auto">
        <h2 className="font-semibold text-[24px] leading-[28px] text-heroTitle">
          Cesta
        </h2>
        <div className="flex flex-col items-center gap-6">
          {
            cart.length > 0 ? <ProductsCart /> : <ModalEmptyCart />
          }
          <ShippingCart />
        </div>
        </div>
        <TotalCart />
      </div>
      <div
        id="copyright"
        className="flex justify-center items-center w-[1280px] h-[40px] bg-primary"
      >
        <p className="font-bold text-[14px] leading-[16px] text-white">
          Todos los derechos reservados - Café de Altura SL - 2022
        </p>
      </div>
    </div>
  );
};

export default Cart;
