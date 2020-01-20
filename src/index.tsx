import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import middleware from './middleware/middleware';
import { createStore } from 'redux';
import reducers from './reducers/reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducers, middleware);

ReactDOM.render(
    <BrowserRouter>
        <App store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
);
