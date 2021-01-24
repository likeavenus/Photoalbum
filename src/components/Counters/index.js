import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as HeartImg } from '../../assets/img/heart.svg';

export const Counters = (props) => {

   let heartClass = props.isLikedByMe ? `${styles.heart} ${styles.active}` : styles.heart;

   return (
      <div className={styles.counters}>
         <button onClick={() => {props.onLikeButtonClick(props.id)}} className={styles.likeButton}>
            <HeartImg className={heartClass}/>  
         </button>
         {/* <p className={styles.likeCounter}>{Number(props.isLikedByMe)}</p> */}
      </div>
   )
}

