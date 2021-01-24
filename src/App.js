import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { CardsContainer } from './components/CardsContainer';
import { Upload } from './components/UploadFoto';
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(false);
  const [uploadingState, setUploadingState] = useState(false);
  const fileInput = useRef(null);
  const [photos, setPhotos] = useState([]);
  
  const storageRef = firebase.storage().ref();
  const metadata = {
    contentType: 'image/jpeg'
  };

  const db = firebase.firestore();
  const docRef = db.collection('posts');

  const onInputChange = useCallback((e) => {
    setFile(null);
    setFile(e.target.files[0]);
  }, [setFile]);

  const onButtonClick = () => {
    if (file) {
      const uploadTask = storageRef.child(`images/${file.name}`).put(file, metadata);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
        setUploadingState(true);
      }, (error) => {
        setUploadError(true);
        throw new Error(error);
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
          docRef.add({
            id: uuidv4(),
            url: downloadURL,
            description: '',
          })
          setUploadingState(false);
          setFile(null);
          fileInput.current.parentElement.reset();
        });
      })
    }
  }

  const getPosts = async () => {
    const querySnapshot = await docRef.get();
    const posts = [];
    querySnapshot.forEach(item => {
      posts.push({
        id: item.data().id,
        url: item.data().url,
        description: item.data().description,
      });
    });
    return posts;
  }


  useEffect(() => {
    getPosts().then(data => setPhotos(data));
  }, [uploadingState]);

  return (
    <div className="App">
      <Upload file={file} onInputChange={onInputChange} uploadingState={uploadingState} onButtonClick={onButtonClick} fileInput={fileInput} />
      <CardsContainer photos={photos} />
    </div>
  );
}

export default App;
