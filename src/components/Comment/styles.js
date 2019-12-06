import styled from 'styled-components';

export const Article = styled.div`
display:flex;

margin-top:13px;


height: 100%;

img{
    width: 30px;
    border-radius: 50%;
    position: absolute;
}

.contents{
    background: #EAEDED; ;
    width: 550px;
    


    margin-left: 40px;
    margin-bottom: 20px;


    padding: 10px 10px;
    border-radius: 25px 25px;
    font-family: Arial, Helvetica, sans-serif;


    span:first-child {
        color: black;
        font-weight: bold;
    }
     

}

`;
