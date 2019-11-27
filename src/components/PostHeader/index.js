import React from 'react';

// import { Container } from './styles';

export default function PostHeader({data}) {
  return (
      <>
      <h1>{data.author.name}</h1>
      <p>{data.content}</p>
     </>
  );
}
