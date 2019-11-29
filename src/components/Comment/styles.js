import styled from 'styled-components';

export const Article = styled.div`
margin-top: 30px;
display: flex;

img{
    width: 30px;
    border-radius: 50%;
    position: absolute;
    
}

.comment{
    background: #E5E8E8 ;
    width: 550px;
    max-height: 100%;
    margin-top:0;
    margin-left: 40px;
    margin-bottom: 20px;

    display:flex;
    padding: 10px 10px;
    border-radius: 10px 10px;

    font-family: 'Times New Roman', Times, serif;

    p{
        font-size: 15px;

        span{
            color: black;
            font-weight: bold;
            
        }
    }
}

`;

export const Post = styled.div`
padding-left: 15px;
    h1{
        font-size: 10px;
    }

    p{
        font-size: 10px;
    }
    background: #E5E8E8 ;
    margin-left: 20px;
    height:100px;


`;