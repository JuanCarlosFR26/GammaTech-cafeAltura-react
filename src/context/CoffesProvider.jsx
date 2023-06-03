import React, { createContext, useEffect, useState } from "react";
import { getCollections } from "../function";

export const CoffeProvider = createContext(null);

const CoffesProvider = ({ children }) => {
  const [coffes, setCoffes] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipping, setShipping] = useState('');

  useEffect(() => {
    getCollections().then(res => setCart(res))
  }, []);

  return (
    <CoffeProvider.Provider value={{ coffes, setCoffes, cart, setCart, totalPrice, setTotalPrice, shipping, setShipping }}>
      {children}
    </CoffeProvider.Provider>
  );
};

export default CoffesProvider;
