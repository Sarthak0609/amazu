// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDJRIhMbt9ieYXsbKC0e2yIDhtP50RvguM",
    authDomain: "amazo-ae586.firebaseapp.com",
    projectId: "amazo-ae586",
    storageBucket: "amazo-ae586.appspot.com",
    messagingSenderId: "172573962959",
    appId: "1:172573962959:web:cd5091f80dfe44d6563dba",
    measurementId: "G-4N3B9X70KY"
  };

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export {app,auth}
