import styled from 'styled-components';
import theme from '../../styles/theme';

const Wrapper = styled.header`
    background: ${theme.colors.primary};
    height: 60px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;


    ul {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1200px;
        padding: 0 15px;

        li {
            align-items: center;
            display: inline-flex;
            height: 60px;
        }
    }

    img {
        width: 100px;
        height: auto;
    }

    .btn-top {
        background-color: ${theme.colors.primary};
        border: 1px solid gray;
        border-radius: 4px;
        color: gray;
        padding: 10px;
        text-decoration: none;

        &:hover {

        }
    }
`;

export default Wrapper;