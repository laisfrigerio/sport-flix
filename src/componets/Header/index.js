import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import logo from '../../assets/images/sport-flix-logo.png';

const Header = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/">
                        <img src={logo} alt="Sport Flix Logo" />
                    </Link>
                </li>
                <li>
                    <Link className="btn-top" to="/categories">
                        Categorias
                    </Link>
                </li>
            </ul>
        </Wrapper>
    );
}

export default Header;