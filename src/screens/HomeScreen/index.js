import React from 'react';
import { Background, Button, Flex, SubTitle, Title, TitleContent } from './styles';
import Container from '../../componets/Container';
import bg from '../../assets/images/bg.svg';
// <a href='https://www.freepik.com/free-photos-vectors/sport' alt="Sport vector created by stories - www.freepik.com">link</a>

const HomeScreen = () => {
    return (
        <Container>
            <Flex>
                <TitleContent>
                    <Title>Conectando <strong>você</strong> aos <u>melhores</u> vídeos do mundo do <strong>esporte</strong>!</Title>
                    <SubTitle>Como o esporte é um dos meus hoobies e com uma breve inspiração do <strong>@luhcasgabriel</strong>, estou iniciando o projeto <strong>sportflix</strong>!</SubTitle>
                    <Button to="/">+ vídeos</Button>
                </TitleContent>
                <Background src={bg} alt="Background - girls making exercices"/>
            </Flex>
        </Container>
    );
}

export default HomeScreen;