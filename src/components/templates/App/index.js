import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import HomePage from '@UI/Pages/HomePage';
import NotFoundPage from '@UI/Pages/NotFoundPage';
import ThemeWrapper from '@Styles';
import configureStore, { history } from '@Redux/store';

const initalState = {};
const store = configureStore(initalState);

const App = () => (
  <Provider store={store}>
    <ThemeWrapper>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </ConnectedRouter>
    </ThemeWrapper>
  </Provider>
);

export default App;
