import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAwxQNHEEm5agHCU_nOy1pw0vPtrHPtuyA",
  authDomain: "crwn-db-3b028.firebaseapp.com",
  projectId: "crwn-db-3b028",
  storageBucket: "crwn-db-3b028.appspot.com",
  messagingSenderId: "359700410031",
  appId: "1:359700410031:web:8da066a8bd38422ffdee5a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
