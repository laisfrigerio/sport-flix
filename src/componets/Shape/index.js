import styled from 'styled-components';
import theme from '../../styles/theme';

export const TriangleLeft = styled.div`
    border-top: 30px solid ${theme.colors.secondary};
    border-right: 30px solid transparent;
    height: 0;
    width: 0;
`;

export const Cross = styled.div`
    background: ${theme.colors.secondary};
    height: 100px;
    position: relative;
    width: 20px;

    &:after {
      background: ${theme.colors.secondary};
      content: "";
      height: 20px;
      left: -40px;
      position: absolute;
      top: 40px;
      width: 100px;
    }
`;

export const DiamondSquare = styled.div`
    border: 10px solid transparent;
    border-bottom-color: ${theme.colors.secondary};
    height: 0;
    margin-right: 5px;
    position: relative;
    top: -10px;
    width: 0;

    &:after {
      border: 10px solid transparent;
      border-top-color: ${theme.colors.secondary};
      content: '';
      height: 0;
      left: -10px;
      position: absolute;
      top: 10px;
      width: 0;
    }
`;