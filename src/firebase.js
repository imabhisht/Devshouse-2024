import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAxPJ8J8louMizjYo9BmTryrXvmdoyLagU",
    authDomain: "buildify-ai.firebaseapp.com",
    projectId: "buildify-ai",
    storageBucket: "buildify-ai.appspot.com",
    messagingSenderId: "51882905310",
    appId: "1:51882905310:web:8ec3fab2874282b2587c4f",
    measurementId: "G-4V34Y3P9LK"
};

// Initialize Firebase
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
const firebase = initializeApp(firebaseConfig);

export const storage = getStorage(firebase);
export default firebase;