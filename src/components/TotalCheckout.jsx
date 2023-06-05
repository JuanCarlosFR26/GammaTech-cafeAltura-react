import React, { useContext, useEffect } from "react";
import Button from "./Button";
import { CoffeProvider } from "../context/CoffesProvider";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const TotalCheckout = () => {
  const { shipping, setTotalPrice, totalPrice } = useContext(CoffeProvider);

  const getTotal = async () => {
    const priceRef = doc(db, "price", "total");
    const priceSnap = await getDoc(priceRef);

    if (priceSnap.exists()) {
      setTotalPrice(priceSnap.data().totalPrice);
    }
  };

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <div>
      <div
        id="total"
        className="flex flex-col items-start p-6 gap-4 w-[384px] h-[320px] bg-hoverCoffeCard"
      >
        <div
          id="details"
          className="flex flex-col items-start gap-4 w-[336px] h-[176px]"
        >
          <h3 className="font-bold text-[18px] leading-[24px]">
            Total del carrito
          </h3>
          <div className="block w-full border border-solid border-borderColor"></div>
          <div className="flex justify-between items-start gap-4 w-[336px] h-[16px]">
            <p>SUBTOTAL</p>
            <p className="font-bold">{totalPrice},00€</p>
          </div>
          <div className="flex justify-between items-start gap-4 w-[336px] h-[16px]">
            <p>ENVÍO</p>
            <p className="font-bold">
              {shipping === "free" ? "GRATIS" : 9 + ",00€"}
            </p>
          </div>
          <div className="block w-full border border-solid border-borderColor"></div>
          <div className="flex justify-between items-start gap-4 w-[336px] h-[40px] font-bold">
            <p>TOTAL</p>
            <div>
              <p>{shipping !== "free" ? 9 + totalPrice : totalPrice},00€</p>
            </div>
          </div>
          <p className="text-[12px] leading-[16px] text-span text-end w-full mt-[-10px]">
            Incluye 3,78€ de IVA
          </p>
        </div>
        <div
          id="button-wrapper"
          className="flex gap-4 w-[320px] h-[40px] mt-[35px]"
        >
          <Button
            text={"Pagar y realizar pedido"}
            className={
              "flex items-start py-[12px] px-[24px] w-[196px] h-[40px] bg-heroTitle rounded text-white text-[14px] leading-[16px]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TotalCheckout;
