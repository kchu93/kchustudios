import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/AppWithHooks';
import middleware from './middleware/middleware';
import { createStore } from 'redux';
import reducers from './reducers/reducers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
