
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsRRcTWW-2pgAXeZPeCgBeKLqNKP7NuEQ",
  authDomain: "dashboard12.firebaseapp.com",
  projectId: "dashboard12",
  storageBucket: "dashboard12.appspot.com",
  messagingSenderId: "686648534495",
  appId: "1:686648534495:web:783699cda20f0de56ad06a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);