import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleSidebar from './navbar.js'; // Importing the ToggleSidebar component
import './index.css';
//back color
document.body.style.backgroundColor = '#100c0c';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleSidebar /> {/* Render the ToggleSidebar component */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
