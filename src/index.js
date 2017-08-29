// Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

//Stilos
import './index.min.css';

//Misc
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

ReactDOM.render(<Router history={ browserHistory } routes={ routes } />, document.getElementById('root'));
registerServiceWorker();
