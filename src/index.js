import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './utils/context';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qiq4lmgc.us.auth0.com"
      clientId="uYa7aAkRSB8dLNB1PYuMchYiy5UjaoX8"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <AppProvider>
        <App/>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
