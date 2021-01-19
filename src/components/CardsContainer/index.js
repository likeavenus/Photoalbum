import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import catsImg from '../../assets/cats.jpg';
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
   const imgArray = [];


   useEffect(() => {

      const listRef = storageRef.child('images/');

      listRef.listAll().then(function (res) {
         res.items.forEach(function (itemRef) {
            itemRef.getDownloadURL().then((data) => {
               imgArray.push(data);
            })
            // All the items under listRef.
         });
      }).catch(function (error) {
         // Uh-oh, an error occurred!
      });
      setPhotos(imgArray);
      //console.log(photos);
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
   console.log(photos);
   // let photosArr = [];
   // if (photosArr.length) {
   // photosArr = photos.map((item, index) => {
   //    return <Card key={index} imgUrl={item} openCard={() => showImg(index)} />
   // });
   // }
   // console.log(photosArr);

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