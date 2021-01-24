import React from 'react';
import styles from './styles.module.scss';
import "firebase/storage";

export const Upload = (props) => {
   const handleOnSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <form onSubmit={handleOnSubmit} ref={props.formRef}>
         <h3>Загрузите фотографию</h3>
         <div className={styles.input__wrapper}>
            <input className={styles.input__file} id="input__file" type="file" onChange={props.onInputChange} />
            <label htmlFor="input__file" className={styles.input__file__label}>Выберите файл</label>
            <button className={styles.input__file__button} onClick={props.onButtonClick}>Отправить</button>
         </div>
         {props.uploadingState && <p>Загрузка</p>}
      </form>
   )
}