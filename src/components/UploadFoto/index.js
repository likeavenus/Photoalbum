import React, { useState, useRef } from 'react';
import firebase from "firebase/app";
import "firebase/storage";
import styles from './styles.module.scss';



export const Upload = () => {
   const [file, setFile] = useState(null);
   const [uploadError, setUploadError] = useState(false);
   const [uploadingState, setUploadingState] = useState(false);
   const fileInput = useRef(null);
   const storageRef = firebase.storage().ref();
   const metadata = {
      contentType: 'image/jpeg'
   };

   const onInputChange = (e) => {
      setFile(null);
      setFile(e.target.files[0]);
   }

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
   const handleOnSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <form onSubmit={handleOnSubmit}>
         <h3>Загрузите фотографию</h3>
         <input type="file" onChange={onInputChange} ref={fileInput} />
         <button onClick={onButtonClick}>Отправить</button>
         {uploadingState && <p>Загрузка</p>}
      </form>
   )
}