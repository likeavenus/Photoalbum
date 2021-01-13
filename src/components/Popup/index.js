import React, { useState } from 'react';
import styles from './styles.module.scss';

export const Popup = ({ imgUrl, closeCard }) => {
   return (
      <div className={styles.popup}>
         <img src={imgUrl} />
         <button className={styles.closePopup} onClick={closeCard}>X</button>
      </div>
   )
}