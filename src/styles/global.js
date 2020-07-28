import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
    * {
        border: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        outline: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 { font-weight: normal; }

    body {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: 0;
        margin: 0;
        padding: 0;

        ul { list-style: none; }

        a,
        button { cursor: pointer; }
    }
`;

export default GlobalStyle;