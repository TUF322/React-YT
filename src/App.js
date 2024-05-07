// App.js or your main component file where routing is configured
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToggleSidebar from './navbar.js'; // Importing the ToggleSidebar component
import Shorts from './Shorts'; // Importing the Shorts component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ToggleSidebar} />
        <Route exact path="/Shorts.js" component={Shorts} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;
