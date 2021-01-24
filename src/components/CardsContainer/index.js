import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Card } from '../Card';
import { Popup } from '../Popup';
import "firebase/storage";

export const CardsContainer = (props) => {
   const [popupSettings, setPopupSettings] = useState({
      isActive: false,
      item: {
         id: '',
         url: '',
         description: '',
      }
   });

   const showImg = (item) => {
      setPopupSettings({
         isActive: true,
         item
      });
   }
   const closeImg = () => {
      setPopupSettings({
         isActive: false,
         item: {
            id: '',
            url: '',
            description: '',
         }
      });
   }

   return (
      <section className={styles.container}>
         {popupSettings.isActive && <Popup imgUrl={props.photos.find(photo => photo.id === popupSettings.item.id).url} closeCard={() => closeImg()} />}
         {props.photos.map(({ id, url, description }) => {
            return <Card key={url} imgUrl={url} openCard={() => showImg({ id, url, description })} />
         })}
      </section>
   )
}