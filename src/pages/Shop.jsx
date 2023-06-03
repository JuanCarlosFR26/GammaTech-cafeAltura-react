import React, { useContext, useEffect } from "react";
import { CoffeProvider } from "../context/CoffesProvider";
import CoffeCard from "../components/CoffeCard";
import CardsContainer from "../components/CardsContainer";
import Footer from "../components/Footer";
import { addCount, getData } from "../function";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Shop = () => {
  const { coffes, setCart, setCoffes, cart } = useContext(CoffeProvider);

  useEffect(() => {
    getData("https://cafe-de-altura.vercel.app/api/products").then((res) =>
      setCoffes(addCount(res.products))
    );
  }, []);

  const addToCart = async (coffe) => {
    const docRef = await getDoc(doc(db, "coffes", coffe._id));
    const objCoffe = {
      name: coffe.brand,
      price: coffe.price,
      img: coffe.img_url,
      count: 1,
      id: coffe._id,
    };

    if (docRef.exists()) {
      let { count } = docRef.data();
      count++;
      updateDoc(doc(db, "coffes", coffe._id), {
        count,
      });
      setCart(prev => {
        const existingCoffe = prev.findIndex(element => coffe._id === element.id)
        const holdPrev = [...prev]
        holdPrev[existingCoffe].count++
        return holdPrev
      })
    } else {
      setDoc(doc(db, "coffes", coffe._id), objCoffe);
      setCart(prev => [...prev, objCoffe])
    }

  };


  return (
    <div>
      <div className="flex flex-col items-center p-[40px] gap-6 w-[1280px] h-[938.79px] bg-white">
        <h2 className="text-heroTitle text-[24px] leading-[28px] font-semibold">
          Últimos orígenes
        </h2>
        <div className="flex flex-wrap gap-[24px]">
          {coffes &&
            coffes.map((coffe, i) => (
              <CoffeCard
                key={i}
                img={coffe.img_url}
                title={coffe.brand}
                price={coffe.price}
                available={coffe.available}
                onClick={() => addToCart(coffe)}
              />
            ))}
        </div>
      </div>
      <CardsContainer />
      <Footer />
    </div>
  );
};

export default Shop;
