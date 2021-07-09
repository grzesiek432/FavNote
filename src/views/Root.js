import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';
import store from 'store/store';
import Login from 'views/LoginPage';
import RegisterPage from './RegisterPage';

const Root = () => (
   <Provider store={store}>
      <BrowserRouter>
         <MainTemplate>
            <Switch>
               <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
               <Route exact path={routes.notes} component={Notes} />
               <Route exact path={routes.login} component={Login} />
               <Route exact path={routes.register} component={RegisterPage} />
               <Route exact path={routes.note} component={DetailsPage} />
               <Route exact path={routes.articles} component={Articles} />
               <Route exact path={routes.article} component={DetailsPage} />
               <Route exact path={routes.twitters} component={Twitters} />
               <Route exact path={routes.twitter} component={DetailsPage} />
            </Switch>
         </MainTemplate>
      </BrowserRouter>
   </Provider>
);

export default Root;
