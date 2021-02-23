import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBjO0TP0ypyyySNwtNNnASdyxWFAvLZaMA",
    authDomain: "facebook-messenger-8b111.firebaseapp.com",
    projectId: "facebook-messenger-8b111",
    storageBucket: "facebook-messenger-8b111.appspot.com",
    messagingSenderId: "876410151029",
    appId: "1:876410151029:web:2a41388aaaa9a78f7b983c",
    measurementId: "G-BRC31M77D9"

});

const db = firebaseApp.firestore();

export default db;