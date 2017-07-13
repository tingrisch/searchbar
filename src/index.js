import React from 'react';
import ReactDOM from 'react-dom';
import SearchBarContainer from './SearchBarContainer/SearchBarContainer.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from "react-redux";
import { createStore } from "redux";

import suggestions from "./reducers/search";

const store = createStore(
  suggestions,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}> 
        <SearchBarContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
