import styled from 'styled-components';
import theme from '../../styles/theme';

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