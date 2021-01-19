import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Card } from '../Card';
import { Popup } from '../Popup';
import firebase from "firebase/app";
import "firebase/storage";

export const CardsContainer = (props) => {
   const [popupSettings, setPopupSettings] = useState({
      isActive: false,
      item: null
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
         item: null
      });
   }

   return (
      <section className={styles.container}>
         {popupSettings.isActive && <Popup imgUrl={props.photos.find((item) => item === popupSettings.item)} closeCard={() => closeImg()} />}
         {props.photos.map((item, index) => {
            return <Card key={index} imgUrl={item} openCard={() => showImg(item)} />
         })}
      </section>
   )
}