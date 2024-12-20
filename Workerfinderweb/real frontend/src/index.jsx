// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/Authcontext';  // Import AuthProvider
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <AuthProvider>  {/* Wrap your app with AuthProvider */}
            <App />
        </AuthProvider>
    </Provider>,
    document.getElementById('root')
);
