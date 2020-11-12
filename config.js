import * as firebase from 'firebase' 
require('@firebase/firestore') 
var firebaseConfig = {
    apiKey: "AIzaSyDwpLz-QHlPuBsEzdHK6EVnLU9knWQk5GU",
    authDomain: "wily-app-e47a0.firebaseapp.com",
    databaseURL: "https://wily-app-e47a0.firebaseio.com",
    projectId: "wily-app-e47a0",
    storageBucket: "wily-app-e47a0.appspot.com",
    messagingSenderId: "1031344758025",
    appId: "1:1031344758025:web:099fb7dff4b2c7e0a347d8"
}; 
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
