import React from 'react';
import ReactDOM from 'react-dom';
import dynamoDB from 'services/dynamoDB';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'styles/css-reset.css';
import 'styles/main.less';
import '../node_modules/rpg-awesome/css/rpg-awesome.min.css';

// set up services
async function startServices() {
    await dynamoDB.init();
}

// render
startServices();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
