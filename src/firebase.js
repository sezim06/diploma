// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNIwnKsJg7Zxi9icQub9IANKBGROoR-E",
  authDomain: "diplom-20d20.firebaseapp.com",
  projectId: "diplom-20d20",
  storageBucket: "diplom-20d20.appspot.com",
  messagingSenderId: "1036837876073",
  appId: "1:1036837876073:web:7060bead9d05f2aae4cdf8"
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, 'categories');