import styled from 'styled-components';
import theme from '../../styles/theme';

export const Background = styled.img`
    width: 420px;
    margin-top: 30px;

    @media screen and (max-width: ${theme.breakpoints.medium}) {
        width: 320px;
    }

    @media screen and (max-width: ${theme.breakpoints.small}) {
        height: auto;
        margin-bottom: 30px;
        order: 1;
        width: 380px;
    }

    @media screen and (max-width: ${theme.breakpoints.xSmall}) {
        width: 320px;
    }
`;

export const Flex = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 50px;
    margin-top: 50px;
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: ${theme.breakpoints.small}) {
        flex-direction: column;
        margin-top: 0;
    }
`;

export const TitleContent = styled.div`
    max-width: 550px;

    @media screen and (max-width: ${theme.breakpoints.medium}) {
        padding-right: 30px;
    }

    @media screen and (max-width: ${theme.breakpoints.small}) {
        order: 2;
    }
`;

export const Title = styled.h1`
    color: ${theme.colors.secondary};
    font-size: 53px;
    letter-spacing: 2px;

    @media screen and (max-width: ${theme.breakpoints.large}) {
        font-size: 42px;
    }

    @media screen and (max-width: ${theme.breakpoints.medium}) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: #949494;
    line-height: 150%;
    margin: 15px 0 30px 0;

    @media screen and (max-width: ${theme.breakpoints.large}) {
        font-size: 18px;
        text-align: left;
    }
`;

export const Button = styled.a`
    background: ${theme.colors.secondary};
    border-radius: 7px;
    color: ${theme.colors.white};
    padding: 10px 20px;
    text-decoration: none;
    width: 300px;
`;