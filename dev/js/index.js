import 'babel-polyfill';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers/index'
import App from './components/app';
import thunk from 'redux-thunk';
import { composeWithDevTools } from  'redux-devtools-extension'
const logger = createLogger();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunk, promise, logger)
    )
    
);



ReactDOM.render(
    <Provider store= {store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,document.getElementById('root')
);
