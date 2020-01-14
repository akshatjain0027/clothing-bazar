import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';   // It is a react component used to add redux to our app. The provider component is wrapped around our complete app.
import store from './redux/store';  // The store from the store.js file in redux folder is imported and added to provider component.

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter> 
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
