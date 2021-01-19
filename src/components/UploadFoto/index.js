import React from 'react';
import "firebase/storage";
import styles from './styles.module.scss';

export const Upload = (props) => {
   const handleOnSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <form onSubmit={handleOnSubmit}>
         <h3>Загрузите фотографию</h3>
         <input type="file" onChange={props.onInputChange} ref={props.fileInput} />
         <button onClick={props.onButtonClick}>Отправить</button>
         {props.uploadingState && <p>Загрузка</p>}
      </form>
   )
}