import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAKQBpFhM-gDwH1AHLclwDeZioHGrWp3zE",
  authDomain: "disneyplus-clone-f8d5c.firebaseapp.com",
  projectId: "disneyplus-clone-f8d5c",
  storageBucket: "disneyplus-clone-f8d5c.appspot.com",
  messagingSenderId: "972990256615",
  appId: "1:972990256615:web:6059202bbb1f02f4625942",
  measurementId: "G-JPCP6B1ZK0",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);

// const googleProvider = new firebase.auth.GoogleAuthProvider();
export { auth, firebaseApp, storage, provider };
export default db;
