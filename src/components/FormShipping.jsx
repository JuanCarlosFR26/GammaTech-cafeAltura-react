import React from "react";

const FormShipping = () => {
  return (
    <div id="addres" className="flex flex-col gap-2 w-[521px] h-[433px]">
      <div className="flex flex-col gap-[3px] w-[521px] h-[55px]">
        <label className="text-[12px] leading-[16px] text-label" htmlFor="name">
          Nombre
        </label>
        <input
          className="focus:border-focusInput py-[10px] px-[8px] w-[521px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
          name="name"
          type="text"
          id="name"
        />
      </div>
      <div className="flex flex-col gap-[3px] w-[521px] h-[55px]">
        <label
          className="text-[12px] leading-[16px] text-label"
          htmlFor="surname"
        >
          Apellidos
        </label>
        <input
          className="focus:border-focusInput py-[10px] px-[8px] w-[521px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
          name="surname"
          type="text"
          id="surname"
        />
      </div>
      <div className="flex flex-col gap-[3px] w-[521px] h-[55px]">
        <label
          className="text-[12px] leading-[16px] text-label"
          htmlFor="phone"
        >
          Teléfono
        </label>
        <input
          className="focus:border-focusInput py-[10px] px-[8px] w-[521px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
          name="phone"
          type="phone"
          id="phone"
          placeholder="+34 600 6000 600"
        />
      </div>
      <div className="flex flex-col gap-[3px] w-[521px] h-[55px]">
        <label
          className="text-[12px] leading-[16px] text-label"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="focus:border-focusInput py-[10px] px-[8px] w-[521px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
          name="email"
          type="email"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-[3px] w-[521px] h-[55px]">
        <label
          className="text-[12px] leading-[16px] text-label"
          htmlFor="couontry"
        >
          País
        </label>
        <select
          className="focus:border-focusInput py-[10px] px-[8px] w-[521px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none text-[12px]"
          name="couontry"
          id="couontry"
        >
          <option value={""}></option>
          <option value={"España"}>España</option>
          <option value={"Francia"}>Francia</option>
          <option value={"Italia"}>Italia</option>
          <option value={"Alemania"}>Alemania</option>
          <option value={"Inglaterra"}>Inglaterra</option>
        </select>
      </div>
      <div className="flex gap-6 w-[521px] h-[55px]">
        <div className="flex flex-col gap-[3px] w-[249px] h-[55px]">
          <label
            className="text-[12px] leading-[16px] text-label"
            htmlFor="poblation"
          >
            Población
          </label>
          <input
            className="focus:border-focusInput py-[10px] px-[8px] w-[248.5px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="poblation"
            type="text"
            id="poblation"
            placeholder={"MM / YY"}
          />
        </div>
        <div className="flex flex-col gap-[3px] w-[249px] h-[55px]">
          <label className="text-[12px] leading-[16px] text-label" htmlFor="cp">
            CP
          </label>
          <input
            className="focus:border-focusInput py-[10px] px-[8px] w-[248.5px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="cp"
            type="number"
            id="cp"
            placeholder={"123"}
          />
        </div>
      </div>
      <div className="flex gap-6 w-[521px] h-[55px]">
        <div className="flex flex-col gap-[3px] w-[112.25px] h-[55px]">
          <label
            className="text-[12px] leading-[16px] text-label"
            htmlFor="road"
          >
            Calle
          </label>
          <input
            className="focus:border-focusInput py-[10px] px-[8px] w-[112.25px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="road"
            type="text"
            id="road"
          />
        </div>
        <div className="flex flex-col gap-[3px] w-[112.25px] h-[55px]">
          <label className="text-[12px] leading-[16px] text-label" htmlFor="num">
            Nº
          </label>
          <input
            className="focus:border-focusInput py-[10px] px-[8px] w-[112.25px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="num"
            type="number"
            id="num"
          />
        </div>
        <div className="flex flex-col gap-[3px] w-[112.25px] h-[55px]">
          <label className="text-[12px] leading-[16px] text-label" htmlFor="floor">
            Piso
          </label>
          <input
            className="focus:border-focusInput py-[10px] px-[8px] w-[112.25px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="floor"
            type="number"
            id="floor"
          />
        </div>
        <div className="flex flex-col gap-[3px] w-[112.25px] h-[55px]">
          <label className="text-[12px] leading-[16px] text-label" htmlFor="door">
            Puerta
          </label>
          <input
            className="focus:border-focusInput py-[10px] px-[8px] w-[112.25px] h-[36px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="door"
            type="number"
            id="door"
          />
        </div>
      </div>
    </div>
  );
};

export default FormShipping;
