import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';

export const Counters = (props) => {
   const [likeCounter, setLikeCounter] = useState(false);
   const [viewCounter, setViewCounter] = useState(0);
   const heart = useRef(null);

   return (
      <div className={styles.counters}>
         <div ref={heart} className={likeCounter ? `${styles.likeButtonIcon} ${styles.active}` : styles.likeButtonIcon} onClick={() => setLikeCounter(!likeCounter)}></div>
         <p className={styles.likeCounter}>{Number(likeCounter)}</p>
      </div>
   )
}

