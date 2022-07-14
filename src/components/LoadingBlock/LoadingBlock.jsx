import React from 'react';
import loading from '../../img/loading/4d760df972f6fcbe080c3cc9a3095ed8_w200.gif';

function LoadingBlock() {
  return (    
    <div className='loading'>
      <p>Идет загрузка
      </p>
      <img src={loading} alt='Камера'/> 
    </div>
  )
};

export default LoadingBlock;