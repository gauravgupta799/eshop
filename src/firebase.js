import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzkmuuFFZcSX2IrNdBzQZPzdtq9z5_N8M",
  authDomain: "eshop-60cb3.firebaseapp.com",
  projectId: "eshop-60cb3",
  storageBucket: "eshop-60cb3.appspot.com",
  messagingSenderId: "998169305860",
  appId: "1:998169305860:web:bd668fad7ceeb6cbe4e651",
  measurementId: "G-1PTPVPSZKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getStorage(app);

export {db};