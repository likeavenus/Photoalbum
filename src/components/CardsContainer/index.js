import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import catsImg from '../../assets/cats.jpg';
import { Card } from '../Card';
import { Popup } from '../Popup';

export const CardsContainer = () => {
   const [photos, setPhotos] = useState([]);
   const [popupSettings, setPopupSettings] = useState({
      isActive: false,
      id: null
   });

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
         .then(response => response.json())
         .then(data => {
            setPhotos(data);
         })
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
   const photoArr = photos.map(({ id, title, url }) => {
      return <Card key={id} imgUrl={url} description={title} openCard={() => showImg(id)} />
   });
   return (
      <section className={styles.container}>
         {popupSettings.isActive && <Popup imgUrl={photos.find(({ id }) => id === popupSettings.id).url} closeCard={() => closeImg()} />}
         {photoArr}
      </section>
   )
}