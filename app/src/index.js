import React from 'react';
import ReactDOM from 'react-dom';
import 'services/dynamoDB';

import '../node_modules/rpg-awesome/css/rpg-awesome.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import 'styles/main.less';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { updateUrl } from 'data/actions';

// render
ReactDOM.render(<App />, document.getElementById('tg-app'));
registerServiceWorker();

// go to home page
updateUrl(window.location.pathname);
