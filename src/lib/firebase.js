import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqB4DgMeIVTBTvURUXjehgHItV_bjuPrU",
  authDomain: "pool-cleaning-be3a2.firebaseapp.com",
  projectId: "pool-cleaning-be3a2",
  storageBucket: "pool-cleaning-be3a2.firebasestorage.app",
  messagingSenderId: "955242129333",
  appId: "1:955242129333:web:63cc2408ba540703849bfc",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
