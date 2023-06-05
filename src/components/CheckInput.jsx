import React, { useContext, useEffect } from "react";
import { CoffeProvider } from "../context/CoffesProvider";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const CheckInput = ({
  text,
  pseudoText,
  price,
  className,
  isChecked,
  value,
}) => {
  const { setShipping } = useContext(CoffeProvider);


  const handleChange = async (e) => {

    const shipRef = doc(db, 'shipping', 'type');
    const shipSnap = await getDoc(shipRef);

    if(shipSnap.exists()) {
      let { type } = shipSnap.data();
      type = e
      updateDoc(doc(db, "shipping", 'type'), {
        type,
      });
      return setShipping(e);
    } else {
      await setDoc(doc(db, "shipping", "type"), {
        type: e,
      });
      await setShipping(e)
    }

  };

  return (
    <div>
      <div className={className}>
        <div className="w-[22px] h-[22px] border-[2px] border-solid border-borderRadio rounded-full relative">
          <input
            className={`appearance-none border border-solid border-borderInputRadio rounded-full w-[18px] h-[18px] checked:bg-btnCoffe checked:border-white`}
            type="radio"
            name="radio"
            id="radio"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            checked={isChecked}
          />
        </div>
        <label className="ml-[5px] w-[657px]">
          <p className="font-bold text-[14px] leading-[16px]">{text}</p>
          <p className="text-[14px] leading-[16px] mt-[5px]">{pseudoText}</p>
        </label>
        <h3 className="font-bold">{price}</h3>
      </div>
    </div>
  );
};

export default CheckInput;
