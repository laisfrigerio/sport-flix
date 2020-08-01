import React from 'react';
import Container from '../../componets/Container';
import Footer from '../../componets/Footer';
import { Flex, Title, Subtitle } from './styles';

const NotFoundScreen = () => {
    return (
        <>
            <Container>
                <Flex>
                    <Title>404</Title>
                    <Subtitle>:( página não encotrada</Subtitle>
                    <small>mas não fique <u>nervosour</u>. Aproveite para jogar <strong>@tetris</strong></small>
                </Flex>
                <iframe width="100%" height="600" src="https://laisfrigerio.github.io/js-tetris-game/" title="Jogue tetris game!!"></iframe>
            </Container>
            <Footer />
        </>
    );
}

export default NotFoundScreen;