import { Counters } from '../Counters';
import React, { useEffect, useCallback } from 'react';
import styles from './styles.module.scss';

export const Popup = ({ imgUrl, closeCard }) => {
   const handleClosePopup = useCallback((e) => {
      if (e.target.tagName === 'DIV') {
         closeCard();
      }
   }, [closeCard])

   const handleKeyDown = useCallback((e) => {
      if (e.key === 'Escape') {
         closeCard();
      }
   }, [closeCard]);

   useEffect(() => {
      document.addEventListener('keydown', handleKeyDown, false);

      return () => document.removeEventListener('keydown', handleKeyDown, false);
   });

   return (
      <div className={styles.popup} onClick={handleClosePopup}>
         <img src={imgUrl} />
         <button className={styles.closePopup} onClick={closeCard}>X</button>
      </div>
   )
}