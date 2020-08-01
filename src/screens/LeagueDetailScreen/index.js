import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetch as fetchTeams } from '../../services/teams';
import { find as findLeague } from '../../services/leagues';
import Container from '../../componets/Container';
import Spinner from '../../componets/Spinner';
import { List, Item, Panel, Search, SearchInput, Title } from '../../componets/Sport';
import { Banner, Hero, LeagueName, Picture } from '../../componets/League';

const LeagueDetailScreen = ({match}) => {
    const { leagueName, id } = match.params;
    const [teams, setTeams] = useState([]);
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log();

    useEffect(() => {
        const fetchLeagueData = async () => {
            setLeague(await findLeague(id));
        };

        const fetchTeamsData = async () => {
            setTeams(await fetchTeams(leagueName));
            setLoading(false);
        };

        fetchLeagueData();
        fetchTeamsData();
    }, [leagueName, id]);

    return (
        <Container>
            {league && (
                <Hero>
                    <Banner className="header">
                        <img src={league.strBanner} alt={league.strLeague} />
                        <Picture>
                            <img src={league.strBadge} alt={`${league.strLeague} Logo`} />
                        </Picture>
                    </Banner>
                    <LeagueName>{league.strLeague}</LeagueName>
                </Hero>
            )}
            <Search>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.1 40.3"><path fill="#fff" d="M38.3 37.6l-13-13c2.3-2.5 3.7-5.8 3.7-9.4 0-7.6-6.2-13.9-13.9-13.9-7.6 0-13.8 6.2-13.8 13.8C1.3 22.8 7.5 29 15.1 29c3.5 0 6.7-1.3 9.2-3.5l13.1 13.1.9-1zm-23.2-9.9C8.2 27.7 2.6 22 2.6 15.1c0-6.9 5.6-12.5 12.5-12.5s12.5 5.6 12.5 12.5c.1 6.9-5.6 12.6-12.5 12.6z"></path><path fill="#fff" d="M37.4 40.3L24.2 27.2c-2.6 2-5.8 3.1-9.1 3.1C6.8 30.2 0 23.5 0 15.1S6.8 0 15.1 0s15.1 6.8 15.1 15.1c0 3.4-1.2 6.7-3.3 9.4l13.2 13.2-2.7 2.6zM15.1 3.8C8.9 3.8 3.8 8.9 3.8 15.1s5.1 11.3 11.3 11.3c6.2 0 11.3-5.1 11.3-11.3S21.3 3.8 15.1 3.8z"></path></svg>
                <SearchInput type="text" name="search" placeholder="Buscar time" />
            </Search>
            {loading && teams.length === 0 && <Spinner />}
            {!loading && teams.length === 0 && (
                <Panel>
                    <Title>Liga não encontrada</Title>
                </Panel>
            )}
            {!loading && teams.length > 0 && (
                <Panel>
                    <Title>{leagueName}</Title>
                    <List>
                        {teams.map((team) => (
                            <Item key={team.idTeam}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 18l6-6-6-6-1.4 1.4 4.6 4.6-4.6 4.6L10 18z"></path></svg>
                                <Link to={`/leagues/${encodeURIComponent(leagueName)}/team/${encodeURIComponent(team.strTeam)}`}>{team.strTeam}</Link>
                            </Item>
                        ))}
                    </List>
                </Panel>  
            )}
        </Container>
    );
}

export default withRouter(LeagueDetailScreen);