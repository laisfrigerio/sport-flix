import styled from 'styled-components';
import theme from '../../styles/theme';

export const List = styled.ul`
    color: #888888;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const Item = styled.li`  
    align-items: center;    
    display: flex;
    margin-bottom: 30px; 
    margin-right: 15px;
    position: relative;
    width: 300px;

    svg {
        width: 20px;
        * { fill: #2f2f2f; }
    }

    a {
        color: #888888;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Search = styled.div`
    margin: 30px auto 70px auto;
    max-width: 500px;
    position: relative;

    > svg {
        left: 0;
        margin: 15px;
        position: absolute;
        vertical-align: middle;
        width: 20px;

        * { fill: ${theme.colors.secondary}; }
    }

    @media screen and (max-width: ${theme.breakpoints.small}) {
        margin-bottom: 40px;
    }
`;

export const SearchInput = styled.input`
    background-color: ${theme.colors.bg};
    border: 1px solid ${theme.colors.lightGray};
    color: ${theme.colors.gray};
    height: 50px;
    padding: 5px 10px 5px 45px;
    width: 100%;
`;


export const Panel = styled.section`
    background: #d4d4d4;
    border-top: 2px solid #888888;
    display: flex;
    flex-direction: column;
    padding: 50px;

    @media screen and (max-width: ${theme.breakpoints.xSmall}) {
        padding: 20px;
    }
`;

export const Title = styled.h1`
    color: ${theme.colors.secondary};
    font-weight: bold;
    
    + ul {
        margin-top: 50px;
    }
`;