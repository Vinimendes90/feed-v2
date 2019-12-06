import React from 'react';
import {Article} from './styles';
// import { Container } from './styles';

export default function Comment({data}) {
  return (
      <>
      <Article>
        
      <img src={data.author.avatar} alt="Foto de Perfil"  />

      <div className='contents'>

      <span>{data.author.name}</span> <span>{data.content}</span>
      </div>
      </Article>
     </>
  );
}
