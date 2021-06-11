import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>Browse page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
