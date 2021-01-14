import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import DashBoard from "./DashBoard";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={DashBoard} />
        </Switch>
      </HashRouter>
     
    </div>
  );
}

export default App;
