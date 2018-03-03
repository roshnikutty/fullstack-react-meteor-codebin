import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './components/App';

const routes = (
    <BrowserRouter >
        <Route path="/" component={App}>
        </Route>
    </BrowserRouter>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});