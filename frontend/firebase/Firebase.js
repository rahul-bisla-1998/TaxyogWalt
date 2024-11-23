// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage,ref } from "firebase/storage";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJh0u6--d9mTNtRtkMLtTbmeTq0o3oB7s",
  authDomain: "taxyog-vault.firebaseapp.com",
  projectId: "taxyog-vault",
  storageBucket: "taxyog-vault.appspot.com",
  messagingSenderId: "66892688036",
  appId: "1:66892688036:web:2f86ab4d8827c09c3e9431",
  measurementId: "G-14ENJDZFZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export{storage,db,auth,app,storageRef,provider}