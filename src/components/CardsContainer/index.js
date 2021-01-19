import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Card } from '../Card';
import { Popup } from '../Popup';
import firebase from "firebase/app";
import "firebase/storage";

export const CardsContainer = () => {
   const [photos, setPhotos] = useState([]);
   const [popupSettings, setPopupSettings] = useState({
      isActive: false,
      id: null
   });
   const storageRef = firebase.storage().ref();
   const listRef = storageRef.child('images/');

   const fetchData = async () => {
      const promise = await listRef.listAll();
      const items = await promise.items;
      return Promise.all(items.map(item => item.getDownloadURL().then((data) => data)));
   }

   useEffect(() => {
      fetchData().then(data => setPhotos(data));
   }, []);

   const showImg = (id) => {
      setPopupSettings({
         isActive: true,
         id
      });
   }
   const closeImg = () => {
      setPopupSettings({
         isActive: false,
         id: null
      });
   }

   return (
      <section className={styles.container}>
         {popupSettings.isActive && <Popup imgUrl={photos.find(({ id }) => id === popupSettings.id).url} closeCard={() => closeImg()} />}
         {photos.map((item, index) => {
            console.log(item);
            return <Card key={index} imgUrl={item} openCard={() => showImg(index)} />
         })}
      </section>
   )
}