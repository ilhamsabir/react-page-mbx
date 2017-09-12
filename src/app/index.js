import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import 'bulma/css/bulma.css';
import 'jquery';
import Main from './Main.jsx';
import stores from './stores/index.jsx';

ReactDOM.render(
  <Provider store={stores}>
    <Main/>
  </Provider>
  , document.getElementById('app')
);
