import* as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD9MaXqRo3mR2NM0z8JoLfMc3aNPsDGDLw",
  authDomain: "kunjiofsuccess.firebaseapp.com",
  databaseURL: "https://kunjiofsuccess.firebaseio.com",
  projectId: "kunjiofsuccess",
  storageBucket: "kunjiofsuccess.appspot.com",
  messagingSenderId: "1039676706114",
  appId: "1:1039676706114:web:53f2312728cae457254cdb",
  measurementId: "G-YXJZSB1GF8"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()