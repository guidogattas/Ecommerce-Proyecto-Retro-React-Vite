import products from "../../data/Data.jsx";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABGyiP5M4sylTT_jAYTbK6trEGrEWGJYo",
    authDomain: "react-coder-2ce5d.firebaseapp.com",
    projectId: "react-coder-2ce5d",
    storageBucket: "react-coder-2ce5d.appspot.com",
    messagingSenderId: "344782737638",
    appId: "1:344782737638:web:0fb1476977a5f5c1702b27",
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export async function exportData() {
  const productsCollectionRef = collection(db, "products");

  for (let item of products) {
    const res = await addDoc(productsCollectionRef, item);
  }
}