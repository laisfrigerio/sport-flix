import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../../componets/Container';
import Spinner from '../../componets/Spinner';
import { Panel, Title } from '../../componets/Sport';
import { BackButton, Banner, Hero, LeagueName, Picture } from '../../componets/Sport';
import { find } from '../../services/teams';

const DetailTeamScreen = ({match}) => {
    const { teamName, id } = match.params;
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTeam(await find(id));
            setLoading(false);
        };
        fetchData();
    }, [teamName, id]);

    return (
        <Container>
            {team && (
                <Hero>
                    <BackButton to={`/leagues/${LeagueName}/${id}`}>Voltar</BackButton>
                    <Banner className="header">
                        <img src={team.strTeamBanner} alt={team.strTeam} />
                        <Picture>
                            <img src={team.strTeamBadge} alt={`${team.strTeam} Logo`} />
                        </Picture>
                    </Banner>
                    <LeagueName>{team.strTeam}</LeagueName>
                </Hero>
            )}
            {loading && !team && <Spinner />}
            {!loading && !team && (
                <Panel>
                    <Title>Time não encontrado</Title>
                </Panel>
            )}
            {!loading && team && (
                <Panel>
                    <Title>Descrição</Title>
                    {team.strDescriptionPT 
                        ? <p>{team.strDescriptionPT}</p>
                        : <p>{team.strDescriptionEN}</p>
                    }
                </Panel>
            )}
        </Container>
    );
}

export default withRouter(DetailTeamScreen);