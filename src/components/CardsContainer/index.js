import React, { useState } from 'react';
import styles from './styles.module.scss';
import catsImg from '../../assets/cats.jpg';
import { Card } from '../Card';

export const CardsContainer = () => {
   return (
      <section className={styles.container}>
         <Card imgUrl={catsImg} description="Cats" />
         <Card imgUrl={catsImg} description="Cats" />
         <Card imgUrl={catsImg} description="Cats" />
         <Card imgUrl={catsImg} description="Cats" />
         <Card imgUrl={catsImg} description="Cats" />
         <Card imgUrl={catsImg} description="Cats" />
         <Card imgUrl={catsImg} description="Cats" />
      </section>
   )
}