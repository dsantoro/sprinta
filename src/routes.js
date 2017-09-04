import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Page from './components/Page';
import HomePage from './components/HomePage';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path="/page" component={ Page } />
    </Route>
)