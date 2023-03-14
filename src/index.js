import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Page/nav'
import Project from './Page/project'
import Center from './Page/center'
import Certified from './Page/certified'
import Contact from './Page/contact'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Center />
  
    <Certified />
    <Project />
    <Contact />
  
  </React.StrictMode>
);

serviceWorkerRegistration.register();