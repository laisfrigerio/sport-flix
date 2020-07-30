import styled from 'styled-components';
import theme from '../../styles/theme';

export const Form = styled.form`
    background-color: ${theme.colors.white};
    box-shadow: 0 3px 4px 2px #e4e4e4;
    margin: 0 auto;
    max-width: 500px;
    padding: 20px;
    width: -webkit-fill-available;

    @media screen and (max-width: ${theme.breakpoints.medium}) {
        
    }
`;

export const FormTitle = styled.h1`
    align-items: center;
    color: ${theme.colors.secondary};
    display: flex;
    margin-bottom: 20px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    &.end {
        justify-content: flex-end;
    }
`;

export const Label = styled.label`
    color: ${theme.colors.gray};
    margin-bottom: 5px;
`;

export const Input = styled.input`
    border: 1px solid ${theme.colors.lightGray};
    color: ${theme.colors.gray};
    height: 50px;
    padding: 5px 10px;
    width: 100%;

    &.color {
        width: 100px;
    }

    &.error { border: 1px solid ${theme.alert.danger.text}; }
`;

export const TextArea = styled.textarea`
    border: 1px solid ${theme.colors.lightGray};
    color: ${theme.colors.gray};
    padding: 10px;
    width: 100%;

    &.error { border: 1px solid ${theme.alert.danger.text}; }
`;

export const Button = styled.button`
    background-color: ${theme.colors.secondary};
    border-radius: 5px;
    color: ${theme.colors.white};
    cursor: pointer;
    padding: 14px 25px;
    &.fit {
        width: fit-content;
    }
`;

export const DangerMessage = styled.div`
    background-color:${theme.alert.danger.bg};
    color: ${theme.alert.danger.text};
    border-radius: 4px;
    font-size: 14px;
    margin-top: 5px;
    padding: 5px;
    width: fit-content;
`;