// import firebase from "firebase";
import * as firebase from "firebase";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAKQBpFhM-gDwH1AHLclwDeZioHGrWp3zE",
    authDomain: "disneyplus-clone-f8d5c.firebaseapp.com",
    projectId: "disneyplus-clone-f8d5c",
    storageBucket: "disneyplus-clone-f8d5c.appspot.com",
    messagingSenderId: "972990256615",
    appId: "1:972990256615:web:6059202bbb1f02f4625942",
    measurementId: "G-JPCP6B1ZK0"
  };
  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;