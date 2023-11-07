import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrz1KWORnmHbWxuFD93pgfArjBuzU705U",
  authDomain: "portfolio-f9dc8.firebaseapp.com",
  projectId: "portfolio-f9dc8",
  storageBucket: "portfolio-f9dc8.appspot.com",
  messagingSenderId: "148647899859",
  appId: "1:148647899859:web:43ed6db351d71ee8b69a26"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
