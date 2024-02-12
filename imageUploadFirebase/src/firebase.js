// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCeVuJWppv_V6syRyv0m-2jjxUvINMmpYc",
  authDomain: "imageupload-d9136.firebaseapp.com",
  projectId: "imageupload-d9136",
  storageBucket: "imageupload-d9136.appspot.com",
  messagingSenderId: "673321458109",
  appId: "1:673321458109:web:b693d69d8d9f1f6dae5ad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app);