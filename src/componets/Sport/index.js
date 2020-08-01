import { Link } from 'react-router-dom';
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
    margin: 30px auto 30px auto;
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
    position: relative;

    p {
        color: #888888;
        padding: 20px 0;
    }

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

/**
 * League/Team components
 */

export const Banner = styled.header`
    background: #d4d4d4;
    min-height: 150px;    
    position: relative;
    img {
        height: auto;
        width: 100%;
    }

    @media screen and (max-width: ${theme.breakpoints.medium}) {
        min-height: initial;   
    }
`;

export const LeagueName = styled.p`
    color: #808080;
    margin-left: 185px;
    margin-top: 5px;

    a {
        color: ${theme.colors.secondary};
        text-decoration: none;

        &:hover { text-decoration: underline; }
    }

    @media screen and (max-width: ${theme.breakpoints.small}) {
        margin-left: 0;
    }
`;

export const Picture = styled.picture`
    align-items: center;
    bottom: -45px;
    display: flex;
    height: 150px;
    left: 30px;
    overflow: hidden;
    position: absolute;
    width: 150px;

    @media screen and (max-width: ${theme.breakpoints.small}) {
        display: none;
    }
`;

export const Hero = styled.section`
    margin-bottom: 60px;

    @media screen and (max-width: ${theme.breakpoints.small}) {
        margin-bottom: 30px;
    }
`;

export const BackButton = styled(Link)`
    background-color: #e8e8e8;
    border: 1px solid ${theme.colors.secondary};
    border-radius: 4px;
    color: ${theme.colors.secondary};
    display: flex;
    margin-bottom: 15px;
    padding: 5px;
    text-decoration: none;
    width: fit-content;

    &:hover {
        background-color: ${theme.colors.secondary};
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        color: #e8e8e8;
    }
`;

export const Uniform = styled.div`
    position: absolute;
    right: 0;
    top: -70px;
    z-index: 10;

    img {
        height: 130px;
    }

    @media screen and (max-width: ${theme.breakpoints.small}) {
        top: -50px;
        img {
            height: 100px;
        }
    }
`;
