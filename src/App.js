import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './componets/Header';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import LeagueScreen from './screens/LeagueScreen';
import TeamScreen from './screens/TeamScreen';
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
          <Route exact path="/leagues" component={LeagueScreen} />
          <Route exact path="/leagues/:league" component={TeamScreen} />
          <Route exact path="/leagues/:league/team/:team" component={DetailTeamScreen} />
          <Route path="/*" component={NotFoundScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
