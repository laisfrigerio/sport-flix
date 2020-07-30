import React from 'react';
import Container from '../../componets/Container';
import { Flex, Title, Subtitle } from './styles';

const NotFoundScreen = () => {
    return (
        <Container>
            <Flex>
                <Title>404</Title>
                <Subtitle>:( página não encotrada</Subtitle>
            </Flex>
        </Container>
    );
}

export default NotFoundScreen;