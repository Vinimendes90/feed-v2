import React from 'react';
import PostHeader from '../PostHeader';


const Post = ( { data }) => (
    <>
     <h1>{data.author.name}</h1>
    <p>{data.date}</p>
    <h3>{data.content}</h3>
    
     {data.comments.map(comment => <PostHeader key={comment.id} data={comment}/>)}
    </>
);


export default Post;
