import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Jira from "./Jira";
import Profile from "./Profile";
import Confluence from "./Confluence";
import Leaderboards from "./Leaderboards";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/jira">
        <Jira />
      </Route>
      <Route path="/confluence">
        <Confluence />
      </Route>
      <Route path="/leaderboards">
        <Leaderboards />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
);

export default App;
