import React, {Component} from 'react';
import {GlobalStyle} from '../styles/global';


import Header from '../components/Header';

import Post from '../components/Post/index';

export default class PostList extends Component{
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: 'Fernando Lima',
              avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
            },
            date: '04 Jun 2019',
            content: 'Pessoal, alguém sabe se a Rocktseat está contratando?',
            comments: [
              {
                id: 1,
                author: {
                  name: 'Ana Silva',
                  avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
                },
                content: 'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here", making it look like readable English.'
              },

              {
                id: 1,
                author: {
                  name: 'Orlando Braga',
                  avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
                },
                content: 'Is a long established fact that a reader will be distracted by the readable'
              }
            ],
          },       
          {
            id: 2,
            author: {
              name: 'Carlos Drummond',
              avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
            },
            date: '04 Jun 2019',
            content: 'Pessoal, alguém sabe se a Rocktseat está contratando?',
            comments: [
              {
                id: 2,
                author: {
                  name: 'Bruna Alves',
                  avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
                },
                content: 'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
              },

              {
                id: 2,
                author: {
                  name: 'Rodrigo Borges',
                  avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
                },
                content: 'Is a long established fact that a reader will.'
              },

              {
                id: 2,
                author: {
                  name: 'Bruna Alves',
                  avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
                },
                content: 'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
              },
            ],
          },
          
        ]
      }

    render(){
        return(
            <>
            <GlobalStyle />
            <Header />
            {this.state.posts.map(post => (<Post key={post.id} name={post.author.name} data ={post} />))}
            </>
        );
    }
}