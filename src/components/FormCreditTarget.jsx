import React from "react";

const FormCreditTarget = () => {
  return (
    <div className="flex flex-col gap-2 w-[279px] h-[181px]">
      <div className="flex flex-col gap-[3px] w-[279px] h-[55px]">
        <label className="text-[12px] leading-[16px] text-label" htmlFor="name">
          Titular
        </label>
        <input
          className="focus:border-focusInput py-[10px] px-[8px] w-[279px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
          name="name"
          type="text"
          id="name"
          placeholder={"Nombre del titular"}
        />
      </div>
      <div className="flex flex-col gap-[3px] w-[279px] h-[55px]">
        <label
          className="text-[12px] leading-[16px] text-label"
          htmlFor="number"
        >
          Número de la tarjeta
        </label>
        <input
          className="focus:border-focusInput py-[10px] px-[8px] w-[279px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
          name="number"
          type="number"
          id="number"
          placeholder={"1234 1234 1234 1234"}
        />
      </div>
      <div className="flex gap-6 w-[279px] h-[55px]">
        <div className="flex flex-col gap-[3px] w-[127px] h-[55px]">
          <label
            className="text-[12px] leading-[16px] text-label"
            htmlFor="name"
          >
            Fecha de caducidad
          </label>
          <input
            className="focus:border-focusInput py-[10px] px-[8px] w-[127.5px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="date"
            type="text"
            id="date"
            placeholder={"MM / YY"}
          />
        </div>
        <div className="flex flex-col gap-[3px] w-[127px] h-[55px]">
          <label
            className="text-[12px] leading-[16px] text-label"
            htmlFor="name"
          >
            CVC
          </label>
          <input
            className="focus:border-focusInput py-[10px] px-[8px] w-[127.5px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="cvc"
            type="number"
            id="cvc"
            placeholder={"123"}
          />
        </div>
      </div>
    </div>
  );
};

export default FormCreditTarget;
