import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQrOC2prGfc70vrb7Mg0TOZ4LmpkNlc1s",
  authDomain: "pashubazzar-4ba5c.firebaseapp.com",
  projectId: "pashubazzar-4ba5c",
  storageBucket: "pashubazzar-4ba5c.appspot.com",
  messagingSenderId: "940761897201",
  appId: "1:940761897201:web:511559b284f4c3a5caf150",
  measurementId: "G-QJ2GHXBXSC",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
