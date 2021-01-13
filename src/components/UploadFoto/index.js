import React, { useState } from 'react';
import styles from './styles.module.scss';

export const Upload = () => {
   const [file, setFile] = useState(null);

   const onInputChange = (e) => {
      setFile(null);
      setFile(e.target.files[0]);

   }

   const onButtonClick = () => {

   }
   // console.log(file);

   return (
      <div>
         <h3>Загрузите фотографию</h3>
         <input type="file" onChange={onInputChange} />
         <button onClick={onButtonClick}>Отправить</button>
      </div>
   )
}