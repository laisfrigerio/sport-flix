import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '../../componets/Container';
import Spinner from '../../componets/Spinner';
import { Panel, Title } from '../../componets/Sport';
import { BackButton, Banner, Hero, LeagueName, Picture, Uniform } from '../../componets/Sport';
import { find } from '../../services/teams';

const DetailTeamScreen = ({match}) => {
    const { leagueName, leagueId, teamName, id } = match.params;
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
                    <BackButton to={`/leagues/${leagueName}/${leagueId}`}>Voltar</BackButton>
                    <Banner className="header">
                        {team.strTeamBanner && <img src={team.strTeamBanner} alt={team.strTeam} />}
                        <Picture>
                            <img src={team.strTeamBadge} alt={`${team.strTeam} Logo`} />
                        </Picture>
                    </Banner>
                    <LeagueName>
                        {team.strTeam} - <a href={`http://${team.strWebsite}`} >site oficial</a>
                    </LeagueName>
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
                    {team.strTeamJersey && (
                        <Uniform>
                            <img alt={`Uniforme do ${team.strTeam}`} src={team.strTeamJersey} />
                        </Uniform>
                    )}
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