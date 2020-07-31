import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
    background-color: ${theme.colors.white};
    box-shadow: 0 3px 4px 2px #e4e4e4;
    height: fit-content;
    margin: 0 auto;
    max-width: 500px;
    padding: 20px;
    width: -webkit-fill-available;

    @media screen and (max-width: ${theme.breakpoints.large}) {
        margin-bottom: 20px;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    background-color: #e8e8e8;
    box-shadow: 0 3px 4px 2px #e4e4e4;
    color: #a2a2a2;
    margin:0 10px 10px;
    padding: 11px 15px;
    width: fit-content;
`;