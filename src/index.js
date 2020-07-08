import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />

      {/* <Route exact path="*" component={NotFound} /> */}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
