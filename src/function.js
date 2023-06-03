import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getData = async (url) => {
  const res = await fetch(url);
  const data = res.json();
  return data;
};

export const addCount = (array) => {
  return array.map((e) => {
    e.count = 1;
    return e;
  });
};

export const getCollections = async () => {
  const q = query(collection(db, "coffes"));

  const querySnap = await getDocs(q);
  const coffesDB = []
  querySnap.forEach((doc) => {
    coffesDB.push(doc.data());
  });

  return coffesDB;
}