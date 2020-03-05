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
              avatar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14046.jpg',
            },
            date: '08 Jun 2019',
            content: 'What is Lorem Ipsum?',
            comments: [
              {
                id: 1,
                author: {
                  name: 'Ana Silva',
                  avatar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg',
                },
                content: 'Est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l"imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte". Il na pas fait que survivre cinq siècles'
              },

              {
                id: 2,
                author: {
                  name: 'Orlando Braga',
                  avatar: 'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg',
                },
                content: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.'
              }
            ],
          },       
          {
            id: 2,
            author: {
              name: 'Carlos Drummond',
              avatar: 'https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg',
            },
            date: '04 Jun 2019',
            content: 'Where does it come from?',
            comments: [
              {
                id: 1,
                author: {
                  name: 'Bruna Alves',
                  avatar: 'https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249476.jpg',
                },
                content: 'Contrairement à une opinion répandue, le Lorem Ipsum nest pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature '
              },

              {
                id: 2,
                author: {
                  name: 'Rodrigo Borges',
                  avatar: 'https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png',
                },
                content: 'Is a long established fact that a reader will.'
              },

              {
                id: 3,
                author: {
                  name: 'Bruna Alves',
                  avatar: 'https://us.123rf.com/450wm/yupiramos/yupiramos1712/yupiramos171220174/92182137-hombre-avatar-perfil-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg?ver=6',
                },
                content: 'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33'
              },
            ],
          },
          {
            id: 3,
            author: {
              name: 'Carlos Drummond',
              avatar: 'https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg',
            },
            date: '04 Jun 2019',
            content: 'Where can I get some?',
            comments: [
              {
                id: 1,
                author: {
                  name: 'Bruna Alves',
                  avatar: 'https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249476.jpg',
                },
                content: 'Contrairement à une opinion répandue, le Lorem Ipsum nest pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature '
              },

              {
                id: 2,
                author: {
                  name: 'Rodrigo Borges',
                  avatar: 'https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png',
                },
                content: 'Is a long established fact that a reader will.'
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