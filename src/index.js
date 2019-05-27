import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import appReducers from './controllers/reducers/index';
import {Provider} from 'react-redux';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);//khởi tạo store và đưa appReducers vào store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    // Khai báo Provider để cấp store cho App
    document.getElementById('root')
);
serviceWorker.unregister();
