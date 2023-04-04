import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBjUcH61TkKkMCi2yhLSyuP2aVrCMg1ywQ",
  authDomain: "project-tiktok-fabricio.firebaseapp.com",
  projectId: "project-tiktok-fabricio",
  storageBucket: "project-tiktok-fabricio.appspot.com",
  messagingSenderId: "845211021276",
  appId: "1:845211021276:web:5cca3abe008831297e6919"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;