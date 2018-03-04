import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import BinsMain from './components/bins/BinsMain';
import BinsList from './components/bins/BinsList';
import { Bins } from '../imports/collections/bins';


const routes = (
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route exact path="/" component={BinsList} />
                <Route path="/bins" component={BinsMain} />
            </Switch>
        </div>
    </BrowserRouter>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});
