import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLB3WZVkqQ1NB-HMZPT7CIBASb78h0XOg",
    authDomain: "fb-messenger-clone-f6b8a.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-f6b8a.firebaseio.com",
    projectId: "fb-messenger-clone-f6b8a",
    storageBucket: "fb-messenger-clone-f6b8a.appspot.com",
    messagingSenderId: "271877964607",
    appId: "1:271877964607:web:39994bdf3dd2bade03498a",
    measurementId: "G-4ML2W2B6P7"
});

const db = firebaseApp.firestore();

export default db;