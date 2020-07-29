import styled from 'styled-components';
import theme from '../../styles/theme';

export const ExtraLink = styled.a`
    color: gray;
    margin-left: 10px;
    text-decoration: none;

    @media screen and (max-width: ${theme.breakpoints.small}) {
        margin-left: 0;
    }
`;

export const Header = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 15px;

    @media screen and (max-width: ${theme.breakpoints.small}) {
        align-items: baseline;
        flex-direction: column;
    }
`;

export const Title = styled.h3`
    background-color: ${props => props.color ?? 'red'};
    padding: 5px;
    width: fit-content;

    @media screen and (max-width: ${theme.breakpoints.small}) {
        margin-bottom: 5px;
    }
`;

export const Wrapper = styled.section`
    color: ${theme.colors.white};
    margin-bottom: 30px;
    min-height: 197px;
`;