// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbLoC-m80scdeWIVYeVPdBGujfacTp4uw",
  authDomain: "online-job-portal-86d29.firebaseapp.com",
  projectId: "online-job-portal-86d29",
  storageBucket: "online-job-portal-86d29.appspot.com",
  messagingSenderId: "971589496439",
  appId: "1:971589496439:web:0ad3cc7aedcad93660e072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export {db};