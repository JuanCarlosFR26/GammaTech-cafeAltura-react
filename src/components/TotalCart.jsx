import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { CoffeProvider } from "../context/CoffesProvider";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const TotalCart = () => {
  const { cart, totalPrice, setTotalPrice, shipping } =
    useContext(CoffeProvider);

  let total = 0;
  cart.forEach((element) => {
    let mult = element.count * element.price;
    total += mult;
    setTotalPrice(total);
  });
  const navigate = useNavigate();

  const setTotal = async () => {

    await setDoc(doc(db, 'price','total'), {
      totalPrice
    })

    navigate("/checkout")
  }

  return (
    <div>
      <div className="flex flex-col items-start p-6 gap-4 w-[384px] h-[320px] bg-hoverCoffeCard mb-[500px]">
        <div className="flex flex-col items-start gap-4 w-[336px] h-[176px]">
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
        <div className="flex gap-4 w-[320px] h-[40px] mt-[35px]">
          <Button
            text={"Ir a checkout"}
            className={
              "flex items-start py-[12px] px-[24px] w-[132px] h-[40px] bg-heroTitle rounded text-white text-[14px] leading-[16px]"
            }
            onClick={() => setTotal()}
          />
          <Button
            text={"Seguir comprando"}
            className={
              "flex items-start py-[12px] px-[24px] w-[172px] h-[40px] rounded text-heroTitle text-[14px] leading-[16px] font-bold hover:bg-heroTitle hover:text-white"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
