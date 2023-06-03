import React from "react";
import CheckInput from "../components/CheckInput";
import FormCreditTarget from "../components/FormCreditTarget";
import bizumLogo from "../img/bizumlogo.svg";
import FormShipping from "../components/FormShipping";
import TotalCheckout from "../components/TotalCheckout";

const Checkout = () => {
  return (
    <div className="bg-white flex flex-col items-center p-[40px] gap-6 w-[1280px]">
      <h2 className="text-[24px] leading-[28px] font-semibold text-heroTitle">
        Checkout
      </h2>
      <div className="flex items-start justify-center gap-6 w-[1200px]">
        <div className="flex flex-col p-[8px] gap-6 w-[792px]">
          <p className="font-bold text-[18px] leading-[24px]">
            Selección método de pago
          </p>
          <CheckInput
            text={"Tarjeta de débito"}
            pseudoText={"Opción estándar sin seguimiento"}
            className={
              "flex items-center gap-[16px] w-[776px] h-[36px] "
            }
          />
          <FormCreditTarget />
          <div className="w-[776px] border border-solid border-borderColor"></div>
          <CheckInput
            text={"Transferencia bancaria a la cuenta ES12 1234 1234 123457890"}
            pseudoText={
              "Será necesario recibir el comprobante de la transferencia para preparar tu pedido"
            }
            className={
              "flex items-center gap-[16px] w-[776px] h-[36px]"
            }
          />
          <div className="w-[776px] border border-solid border-borderColor"></div>
          <div className="flex items-center gap-[16px] w-[776px] h-[36px]">
            <div className="w-[22px] h-[22px] border-[2px] border-solid border-borderRadio rounded-full relative">
              <input
                className={`appearance-none border border-solid border-borderInputRadio rounded-full w-[18px] h-[18px] checked:bg-btnCoffe checked:border-white`}
                type="radio"
                name="radio"
                id="radio"
                value="urgent"
              />
            </div>
            <label className="ml-[5px] w-[657px]">
              <p className="font-bold text-[14px] leading-[16px] flex items-center gap-4">
                Bizum <img src={bizumLogo}></img>
              </p>
            </label>
          </div>
          <h3 className="font-bold text-[18px] leading-[24px]">
            Dirección de envío
          </h3>
          <FormShipping />
        </div>
        <TotalCheckout />
      </div>
      <div className="flex justify-center items-center w-[1280px] h-[40px] bg-footerBg relative top-[80px]">
        <p className="text-white">Todos los derechos reservados - Café de Altura SL - 2022</p>
      </div>
    </div>
  );
};

export default Checkout;
