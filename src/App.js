import './App.css';
import { CardsContainer } from './components/CardsContainer';
import { Upload } from './components/UploadFoto';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase)
function App() {
  return (
    <div className="App">
      <Upload />
      <CardsContainer />
    </div>
  );
}

export default App;
