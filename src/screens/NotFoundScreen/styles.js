import styled from 'styled-components';
import theme from '../../styles/theme';

export const Flex = styled.section`
    align-items: center;;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: ${theme.colors.secondary};
    font-size: 300px;

    @media screen and (max-width: ${theme.breakpoints.small}) {
        font-size: 220px;
    }

    @media screen and (max-width: ${theme.breakpoints.xSmall}) {
        font-size: 100px;
    }
`;

export const Subtitle = styled.h2`
    color: ${theme.colors.secondary};
    font-size: 30px;

    @media screen and (max-width: ${theme.breakpoints.xSmall}) {
        font-size: 18px;
    }
`;
