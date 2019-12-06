import styled from 'styled-components';

export const PostHeader = styled.div`
display:flex;
flex-direction: column;

margin: 0 auto;
margin-top: 30px;
margin-bottom: 30px;

width: 700px;

max-height: 100%;
background: #FFF;

padding-top: 20px;
padding-left: 30px;

box-shadow: 2px 2px 10px 10px #D5DBDB;
border-radius: 3px 3px;

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

.content{

    margin-top:20px;
    width: 600px;

    padding-bottom:20px;
    border-bottom: 1px solid #D5DBDB;
    

}
`




export const Header = styled.article`


display: flex;
align-items: center;

img{
    border-radius: 50%;
    width:40px;
}

.name-time{
    
    height: 30px;
    margin-left: 15px;

    h1{
        font-size: 15px;
        font-weight: bolder;
    }

    p{
        font-size: 10px;
        color:  #BDC3C7;
        margin-top:3px;
    }
}
`;