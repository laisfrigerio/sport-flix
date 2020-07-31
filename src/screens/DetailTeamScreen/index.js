import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../../componets/Container';
import { Panel, Title } from '../../componets/Sport';

const DetailTeamScreen = ({match}) => {
    const { team } = match.params;

    return (
        <Container>
            <Panel>
                <Title>Página de detalhes do {team} em construção!</Title>
            </Panel>
        </Container>
    );
}

export default withRouter(DetailTeamScreen);