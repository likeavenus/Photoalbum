import React, { useState } from 'react';
import styles from './styles.module.scss';


export const Card = ({ imgUrl, description }) => {
    return (
        <div className={styles.card}>
            <img src={imgUrl} />
            <p>{description}</p>
        </div>
    )
}