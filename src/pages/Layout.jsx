import React from "react";
import { Outlet, Link } from "react-router-dom";
import logoCafe from "../img/cafedealtura.com.svg";
import coffe from "../img/coffe.svg";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-between items-center w-[1280px] h-[64px] bg-primary text-white py-3 px-[41px] text-[14px]">
          <li>
            <Link to="/" className="flex gap-2 justify-center items-center">
              <img src={logoCafe}></img>
              <img src={coffe}></img>
            </Link>
          </li>
          <li className="hover:bg-hover p-2 rounded-[10px]">
            <Link to="/shop">Tienda</Link>
          </li>
          <li className="hover:bg-hover p-2 rounded-[10px]">
            <Link to="/suscription">Suscripción</Link>
          </li>
          <li className="hover:bg-hover p-2 rounded-[10px]">
            <Link to="/tobusiness">Para empresas</Link>
          </li>
          <li className="hover:bg-hover p-2 rounded-[10px]">
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li className="hover:bg-hover p-2 rounded-[10px]">
            <Link to="/contact">Contacto</Link>
          </li>
          <li className="hover:bg-hover p-2 rounded-[10px]">
            <Link>
              <i className="fa-solid fa-phone"></i> + 34 919 49 05 18
            </Link>
          </li>
          <li className="bg-hover py-[12px] px-[24px] rounded-[4px]">
            <Link>Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-bag-shopping text-[17.99px]"></i>
              <div></div>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
