import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore ,collection, addDoc, getDocs , doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCi7G_JgVj_WpS4jmq4fJAkErqofnAtROo",
    authDomain: "fir-hackthon-aad23.firebaseapp.com",
    projectId: "fir-hackthon-aad23",
    storageBucket: "fir-hackthon-aad23.firebasestorage.app",
    messagingSenderId: "483741533231",
    appId: "1:483741533231:web:14b678921a2eda8fcc72da",
    measurementId: "G-2D3N8NKBYK"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, getFirestore , signOut , collection, addDoc , db, getDocs , doc} 