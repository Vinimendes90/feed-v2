import React from 'react';
import Comment from '../Comment';
import {Header, Posta} from './styles';

const Post = ( { data }) => (
    <>
   
    <Posta>
    <Header>    
     <img src= {data.author.avatar} alt= "Foto de Perfil" />
     <div>
     <h1>{data.author.name}</h1>
     <p>{data.date}</p>
     </div>
     </Header>

     <h3>{data.content}</h3>
     {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}
     </Posta>
    </>
);


export default Post;
