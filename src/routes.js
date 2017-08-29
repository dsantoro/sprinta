import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Signin from './components/Signin';
import HomePage from './components/HomePage';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path="signin" component={Signin} />
    </Route>
)