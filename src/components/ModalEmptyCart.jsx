import React from "react";
import { Link } from "react-router-dom";

const ModalEmptyCart = () => {
  return (
    <div className="w-[750px] h-[80px] bg-slate-300 self-start flex items-center justify-center font-bold">
      <h1>
        Tu carrito está vacío. Añade productos en <Link className="underline text-lime-700" to={"/shop"}>Tienda</Link>
      </h1>
    </div>
  );
};

export default ModalEmptyCart;
