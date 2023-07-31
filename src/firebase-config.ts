// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig: any = {
  apiKey: "AIzaSyBSHoH2QSWpMj__hkdVa4wqjCN32EoM1eQ",
  authDomain: "fir-fullstack-typescript.firebaseapp.com",
  projectId: "fir-fullstack-typescript",
  storageBucket: "fir-fullstack-typescript.appspot.com",
  messagingSenderId: "474180975523",
  appId: "1:474180975523:web:f46a8d0de35cb7095cb816"
};

// Initialize Firebase
const app:FirebaseApp = initializeApp(firebaseConfig);

 const db:Firestore = getFirestore(app);
 console.log(db)

export { db };
