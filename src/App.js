import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { CardsContainer } from './components/CardsContainer';
import { Upload } from './components/UploadFoto';
import firebase from "firebase/app";
import "firebase/storage";

function App() {
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(false);
  const [uploadingState, setUploadingState] = useState(false);
  const fileInput = useRef(null);
  const [photos, setPhotos] = useState([]);
  
  const storageRef = firebase.storage().ref();
  const listRef = storageRef.child('images/');
  const metadata = {
    contentType: 'image/jpeg'
  };

  const fetchData = async () => {
    const promise = await listRef.listAll();
    const items = promise.items;
    return Promise.all(items.map(item => item.getDownloadURL().then((data) => data)));
  }

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
          setUploadingState(false);
          setFile(null);
          fileInput.current.parentElement.reset();
        });
      })
    }
  }

  useEffect(() => {
    fetchData().then(data => setPhotos(data));
  }, [uploadingState]);

  console.log('=== RENDER ===')
  return (
    <div className="App">
      <Upload file={file} onInputChange={onInputChange} uploadingState={uploadingState} onButtonClick={onButtonClick} fileInput={fileInput} />
      <CardsContainer photos={photos} />
    </div>
  );
}

export default App;
