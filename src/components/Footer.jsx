import React from "react";
import logo from "../img/cafedealtura.com.svg";
import coffe from "../img/coffe.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[310px] bg-footerBg flex flex-col items-start justify-between">
      <div id="footer-wrapper" className="flex flex-col items-start w-[1200px] h-[204px] gap-4 pt-[28.61px] pr-[40px] pb-[77.39px] pl-[40px]">
        <div id="logo" className="flex items-center gap-[7.33px] w-[288px] h-[36px] text-white text-[23.4628px] leading-[35px]">
          <img src={logo}></img>
          <img src={coffe}></img>
        </div>
        <div id="links-contact" className="w-[1132px] h-[152px] gap-[183px] flex justify-between">
          <div id="contact-wrapper" className="flex flex-col items-start gap-4">
            <h3 className="font-bold text-[18px] leading-[24px] text-white">Te ayudamos en</h3>
            <button className="flex items-start py-[12px] px-[24px] gap-[8px] bg-btnFotter rounded-[4px] w-[182px] h-[48px]">
              <div id="link-button" className="flex items-center gap-[8px] w-[134px] h-[24px]">
                <i className="text-white fa-solid fa-phone"></i>
                <p className="font-bold text-[14px] leading-[16px] text-white">+34 919 49 05 18</p>
              </div>
            </button>
            <button id="mail-button" className="flex items-start py-[12px] px-[24px] gap-[8px] w-[232px] h-[48px] rounded-[4px] bg-btnFotter">
              <div id="link-button" className="flex items-center gap-[8px] w-[184px] h-[24px]">
                <i className="text-white fa-solid fa-envelope"></i>
                <p className="font-bold text-[14px] leading-[16px] text-white">hola@cafedealtura.com</p>
              </div>
            </button>
          </div>
          <div id="menu-wrapper" className="flex flex-col items-start gap-4 w-[108px] h-[144px] ml-[180px] text-white font-bold text-[14px] leading-[16px]">
            <Link>Tienda</Link>
            <Link>Suscripción</Link>
            <Link>Para empresas</Link>
            <Link>Sobre nosotros</Link>
            <Link>Contacto</Link>
          </div>
          <div id="menu-politics" className="w-[255.33px] h-[80px] flex flex-col items-start gap-4 text-white font-bold text-[14px] leading-[16px]">
            <Link>Política de Privacidad</Link>
            <Link>Política de cookies</Link>
            <Link>Términos y condiciones</Link>
          </div>
        </div>
      </div>
      <div id="copyright" className="flex justify-center items-center w-[1280px] h-[40px] bg-primary">
        <p className="font-bold text-[14px] leading-[16px] text-white">Todos los derechos reservados - Café de Altura SL - 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
