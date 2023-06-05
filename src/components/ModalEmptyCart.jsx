import React from "react";
import { Link } from "react-router-dom";

const ModalEmptyCart = () => {
  return (
    <div className="w-[600px] h-[80px] bg-slate-300">
      <h1>
        Tu carrito está vacío. Añade productos en
        <Link to={"/shop"}>Tienda</Link>
      </h1>
    </div>
  );
};

export default ModalEmptyCart;
