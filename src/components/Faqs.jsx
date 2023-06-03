import React, { useContext } from "react";
import Faq from "./Faq";
import LinkIcon from "./LinkIcon";
import { CoffeProvider } from "../context/CoffesProvider";

const Faqs = () => {

  return (
    <div className="bg-btnCoffe flex flex-col items-center py-[48px] px-[386px] gap-6 w-[1280px] h-auto min-h-[621px]">
      <h2 className="w-[250px] h-[28px] font-semibold text-[24px] leading-[28px] text-white">
        Preguntas frecuentes
      </h2>
      <div className="flex flex-col items-start gap-4 w-[668px] h-auto">
        <Faq
          title={"¿Cómo hago el pedido?"}
          text={
            "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café."
          }
        />
        <Faq
          title={"¿Por qué los precios son tan bajos?"}
          text={
            "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible. "
          }
        />
        <Faq
          title={"¿Es posible enviar café a mi oficina?"}
          text={
            "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          }
        />
      </div>
      <LinkIcon
        className={"w-[192px] h-[24px] gap-4 flex items-center"}
        styleLink={"underline font-bold text-[14px] leading-[16px] text-white"}
        text={"Resolvemos tus dudas"}
        styleIcon={"fa-solid fa-arrow-right text-white"}
      />
    </div>
  );
};

export default Faqs;
