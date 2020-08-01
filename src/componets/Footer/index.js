import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';
import logo from '../../assets/images/sport-flix-logo-white.png';

const Wrapper = styled.footer`
    svg {
        margin-bottom: -15px;
        margin-top: -150px;
    }
    .content {
        align-items: center;
        background-color: ${theme.colors.secondary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 20px;

        p {
            text-align: center;
        }

        a {
            color: #0a5a4f;
            text-decoration: none;
        }

        @media screen and (max-width: ${theme.breakpoints.small}) {
            img { height: 50px; }
        }
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0A8573" d="M0,192L1440,256L1440,320L0,320Z"></path>
            </svg>
            <div  className="content">
                <Link to="/">
                    <img src={logo} alt="Sport Flix Logo" />
                </Link>
            </div>
        </Wrapper>
    );
};

export default Footer;