import ReactDOM from 'react-dom';
import React from 'react';

import SimpleReact from './simpleReact.js';

import { Provider } from "react-redux";
import store from './reactRedux/store.js';
import ReactRedux from './reactRedux.js';

ReactDOM.render(
    <SimpleReact />,
    document.getElementById('root')
);


ReactDOM.render(
    <Provider store={store}>
        <ReactRedux />
    </Provider>,
    document.getElementById('rootRedux')
);