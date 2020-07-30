import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './componets/Header';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import AddVideoScreen from './screens/AddVideoScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/categories" component={CategoriesScreen} />
          <Route exact path="/add-video" component={AddVideoScreen} />
          <Route path="/*" component={NotFoundScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
