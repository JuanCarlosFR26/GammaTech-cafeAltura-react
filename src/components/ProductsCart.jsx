import React, { useContext } from "react";
import { CoffeProvider } from "../context/CoffesProvider";
import Button from "../components/Button";

const ProductsCart = () => {
  const { cart } = useContext(CoffeProvider);

  console.log(cart);

  return (
    <div className="mt-[30px]">
      <div id="frame" className="flex justify-center items-start gap-6 h-auto">
        <div
          id="product-table"
          className="flex flex-col items-start p-[8px] gap-6 w-[792px] h-auto"
        >
          <h3 className="font-bold text-[18px] leading-[24px] text-black">
            Productos
          </h3>
          <div className="mt-[20px]">
            {cart &&
              cart.map((coffe, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 border-b border-solid border-borderColor h-[80px] mb-[20px] last:border-b-0"
                >
                  <div className="flex justify-center items-center gap-3 w-[100px] h-[56px]">
                    <Button
                      className={"w-[24px] h-[24px] border-none bg-none"}
                      text={"-"}
                    />
                    <div className="w-6 h-6 flex justify-center bg-gray-300 rounded-full">
                      {coffe.count}
                    </div>
                    <Button
                      className={"w-[24px] h-[24px] border-none bg-none"}
                      text={"+"}
                    />
                  </div>
                  <img
                    className="w-[56px] h-[56px]"
                    src={coffe.img}
                    alt={coffe.name}
                  ></img>
                  <div className="flex flex-col items-start gap w-[486px] h-[36px]">
                    <p className="font-bold text-[14px] leading-[16px]">
                      {coffe.name}
                    </p>
                    <p className="text-[14px] leading-[16px]">
                      Paquete de café, 250 g
                    </p>
                  </div>
                  <p className="font-bold">{`${
                    coffe.price * coffe.count
                  },00€`}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
