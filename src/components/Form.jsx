import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-8 pr-8 pb-8 pl-12 w-[588px] h-[552px] bg-white shadow-heroShadow">
      <form className="flex flex-col items-start gap-6 w-[470px] h-[488px]">
        <div className="flex flex-col items-start gap-[4px] w-[470px] h-[54px]">
          <label
            className="text-[12px] leading-[16px] text-label"
            htmlFor="name"
          >
            Nombre completo
          </label>
          <input
            className="focus:border-focusInput py-[9px] px-[13px] w-[470px] h-[34px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="name"
            type="text"
            id="name"
          />
        </div>
        <div className="flex flex-col items-start gap-[4px] w-[470px] h-[54px]">
          <label
            className="text-[12px] leading-[16px] text-label"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="focus:border-focusInput py-[9px] px-[13px] w-[470px] h-[34px] border border-solid border-borderInput rounded-[6px] shadow-inputShadow outline-none"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col items-start gap-[4px] w-[470px] h-[54px]">
          <label
            className="text-[12px] leading-[16px] text-label"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <div className="flex items-center w-[470px] h-[38px] border border-solid border-borderInput rounded-[6px]">
            <select
              className=" pl-[12px] w-[58px] h-[34px] rounded-[6px] outline-none"
              name="phone"
              id="phone"
            >
              <option value={"us"}>US</option>
              <option value={"sp"}>SP</option>
              <option value={"it"}>IT</option>
              <option value={"fr"}>FR</option>
              <option value={"pr"}>PR</option>
            </select>
            <input
              className="focus:border-focusInput pt-[9px] pr-[13px] pb-[9px] pl-[8px] w-[410px] h-[34px] outline-none rounded-[6px]"
              type="number"
              id="number"
              name="number"
              placeholder="+1 (555) 987-6543"
            ></input>
          </div>
        </div>
        <textarea
          className="pl-[12px] pt-[12px] w-[470px] h-[122px] shadow-inputShadow border border-solid border-borderInput rounded-[6px]"
          placeholder="¿En qué podemos ayudarte"
        ></textarea>
        <div className="flex items-start gap-3 w-[470px] h-[20px]">
          <input
          className="w-[16px] h-[20px]"
            type="checkbox"
            id="check"
            name="check"
            value={"acceptTerms"}
          />
          <label className="text-[14px] leading-[16px]" htmlFor="check">
            Acepto la <Link className="underline font-bold">Política de Privacidad</Link> y{" "}
            <Link >
              los <span className="underline font-bold">Términos y condiciones</span>
            </Link>
          </label>
        </div>
        <input className="w-[90px] h-[40px] py-[12px] px-[24px] bg-heroTitle rounded-[4px] text-white flex items-start gap-[8px] text-[14px] leading-[16px] font-bold cursor-pointer" type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};

export default Form;
