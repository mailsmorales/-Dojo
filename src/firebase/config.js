import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAr1L5KT293enWT7piRuaGZakFxHv8oss",
  authDomain: "dojo-e78b6.firebaseapp.com",
  projectId: "dojo-e78b6",
  storageBucket: "dojo-e78b6.appspot.com",
  messagingSenderId: "161755581053",
  appId: "1:161755581053:web:f2c0c8ce31cc9cdb84bf14",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
