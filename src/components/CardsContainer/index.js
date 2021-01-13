import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import catsImg from '../../assets/cats.jpg';
import { Card } from '../Card';
import { Popup } from '../Popup';

export const CardsContainer = () => {
   const [photos, setPhotos] = useState([]);
   const [isPopupActive, setPopup] = useState(false);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
         .then(response => response.json())
         .then(data => {
            setPhotos(data);
         })
   }, []);
   const showImg = (id) => {
      console.log(id);
   }
   const photoArr = photos.map(({ id, title, url }) => {
      return <Card key={id} imgUrl={url} description={title} onClick={() => console.log(id)} />
   });
   return (
      <section className={styles.container}>
         {isPopupActive && 'popup is active'}
         {photoArr}
      </section>
   )
}