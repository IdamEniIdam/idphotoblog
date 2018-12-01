import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyB_00IcU06xJLKlPYGLqCd1GrZrYSqFLrw",
  authDomain: "photowall-4be34.firebaseapp.com",
  databaseURL: "https://photowall-4be34.firebaseio.com",
  projectId: "photowall-4be34",
  storageBucket: "photowall-4be34.appspot.com",
  messagingSenderId: "504557259610"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
