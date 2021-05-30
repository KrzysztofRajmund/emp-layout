import React from 'react';
//routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//components
import LandingPage from './components/LandingPage/LandingPage';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';


const App: React.FC = () => {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
