import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
body {
    max-height: 100%;

    background: #EAEDED;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    
    @font-face {
        font-family: helveticaneue;
        src: url('HelveticaNeueLTStd-UltLt.otf');
   }
}
`;