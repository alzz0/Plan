import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyD7wLVokjGlelnu2IW-Rh8JvGgdxRQND1M",
  authDomain: "planner-d58a1.firebaseapp.com",
  databaseURL: "https://planner-d58a1.firebaseio.com",
  projectId: "planner-d58a1",
  storageBucket: "planner-d58a1.appspot.com",
  messagingSenderId: "664204857971"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
