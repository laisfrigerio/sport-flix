import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './componets/Header';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import LeagueListScreen from './screens/LeagueListScreen';
import LeagueDetailScreen from './screens/LeagueDetailScreen';
import DetailTeamScreen from './screens/DetailTeamScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/categories" component={CategoryScreen} />
          <Route exact path="/leagues" component={LeagueListScreen} />
          <Route exact path="/leagues/:leagueName/:id" component={LeagueDetailScreen} />
          <Route exact path="/leagues/:leagueName/:leagueId/team/:teamName/:id" component={DetailTeamScreen} />
          <Route path="/*" component={NotFoundScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
