import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA8HafkOBOU3f79RHPwlkEBSds1irM_3xE",
    authDomain: "firegram-aman.firebaseapp.com",
    databaseURL: "https://firegram-aman.firebaseio.com",
    projectId: "firegram-aman",
    storageBucket: "firegram-aman.appspot.com",
    messagingSenderId: "410520166192",
    appId: "1:410520166192:web:0e5703cf2bb4ea21c472f5"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectFirestore, projectStorage, timestamp
}