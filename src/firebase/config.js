import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIRcCJRA5orddtDgG02eBQgnC79tT9mwQ",
  authDomain: "frilance-tracker.firebaseapp.com",
  projectId: "frilance-tracker",
  storageBucket: "frilance-tracker.appspot.com",
  messagingSenderId: "463625997804",
  appId: "1:463625997804:web:117bcf55d8761e846184c9",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
