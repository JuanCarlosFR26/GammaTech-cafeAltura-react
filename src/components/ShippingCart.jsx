import React, { useContext } from "react";
import CheckInput from "./CheckInput";
import { CoffeProvider } from "../context/CoffesProvider";

const ShippingCart = () => {

  const { shipping } = useContext(CoffeProvider);

  return (
    <div>
      <h3 className="font-bold">Seleccionar envío</h3>
      <div id="frame" className="w-full h-[1px] bg-bgForm block"></div>
      <CheckInput
        text={"Envío 5-7 días"}
        pseudoText={"Opción estándar sin seguimiento"}
        price={"GRATIS"}
        className={
          "flex items-center gap-[16px] w-[776px] h-[36px] mt-[20px] mb-[20px]"
        }
        value={'free'}
        isChecked={shipping === 'free' ? true : false}
      />
      <CheckInput
        text={"Envío urgente 24h"}
        pseudoText={"Opción estándar sin seguimiento"}
        className={
          "flex items-center gap-[16px] w-[776px] h-[36px] mt-[20px] mb-[20px]"
        }
        price={"9,00€"}
        value={'urgent'}
        isChecked={shipping === 'urgent' ? true : false}
      />
    </div>
  );
};

export default ShippingCart;
