import React from 'react';
import styles from './styles.module.scss';


export const Card = ({ imgUrl, description, openCard }) => {
    return (
        <div className={styles.card} onClick={openCard}>
            <img src={imgUrl} />
            <p>{description}</p>
        </div>
    )
}