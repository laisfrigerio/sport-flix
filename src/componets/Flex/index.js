import styled from 'styled-components';
import theme from '../../styles/theme';

export const Flex = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: ${theme.breakpoints.large}) {
        flex-direction: column;
    }
`;