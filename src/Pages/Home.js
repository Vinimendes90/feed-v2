import React, {Component} from 'react';


import Post from '../components/Post/index';

export default class Home extends Component{
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: 'Julio Alcantara',
              avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
            },
            date: '04 Jun 2019',
            content: 'Pessoal, alguém sabe se a Rocktseat está contratando',
            comments: [
              {
                id: 1,
                author: {
                  name: 'Vinicius Mendes',
                  avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
                },
                content: 'Conteúdo do comentário'
              }
            ],
          },
        ]
      }

    render(){
        return(
            <>
            {this.state.posts.map(post => (<Post key={post.id} name={post.author.name} data ={post} />))}
            </>
        );
    }
}