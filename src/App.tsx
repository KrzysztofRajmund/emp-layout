import React from 'react';
//routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//components
import LandingPage from './components/LandingPage/LandingPage';



const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
