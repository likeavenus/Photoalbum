import React, { useState } from 'react';
import { Counters } from '../Counters';
import styles from './styles.module.scss';


export const Card = ({ imgUrl, description, openCard, isLikedByMe, onLikeButtonClick }) => {
    return (
        <div className={styles.card}>
            <div onClick={openCard}>
                <img src={imgUrl} />
                <p>{description}</p>
            </div>
            <Counters onLikeButtonClick={onLikeButtonClick} isLikedByMe={isLikedByMe} />
        </div>
    )
}