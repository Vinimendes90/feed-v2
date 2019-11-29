import styled from 'styled-components';

export const Posta = styled.div`
display:flex;
flex-direction: column;

margin: 0 auto;
margin-top: 30px;

width: 700px;

max-height: 100%;
background: #FFF;

padding-top: 20px;
padding-left: 30px;

box-shadow: 2px 2px 2px 2px #D5DBDB;
border-radius: 7px 7px;

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
h3{

    align-items: center;
    margin-top:20px;
    border-bottom: 1px solid #D5DBDB;
    width: 600px;

    padding-bottom:20px;
    

    font-size: 13px;
}
`




export const Header = styled.article`


display: flex;
align-items: center;

img{
    border-radius: 50%;
    width:40px;
}

div{
    
    height: 30px;
    margin-left: 15px;

    h1{
        font-size: 15px;
        font-weight: bolder;
    }

    p{
        font-size: 10px;
        color:  #BDC3C7;
    }
}
`;