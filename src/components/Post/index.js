import React from 'react';
import Comment from '../Comment';
import {Header, PostHeader} from './styles';

const Post = ( { data }) => (
    <>
   
    <PostHeader>
    <Header>    
     <img src= {data.author.avatar} alt= "Foto de Perfil" />

     <div className="name-time">
     <h1>{data.author.name}</h1>
     <p>{data.date}</p>

     </div>
     </Header>

     <p className= "content">{data.content}</p>
     {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}  
     </PostHeader>
    </>
);


export default Post;
