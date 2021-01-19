import firebase from "firebase/app";

export const init = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDcymeDWgOcaAsXDfY9SBZhmOn7744xERM",
        authDomain: "album-c5591.firebaseapp.com",
        databaseURL: "https://album-c5591-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "album-c5591",
        storageBucket: "album-c5591.appspot.com",
        messagingSenderId: "48004309131",
        appId: "1:48004309131:web:36c50ce064fce365dff48e",
        measurementId: "G-SF3RGPJQPJ"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};