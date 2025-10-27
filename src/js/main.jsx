import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
