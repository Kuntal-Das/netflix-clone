import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Browse, Home, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks";
import { RouteWithRedirect, ProtectedRoute } from "./utils/routes";

function App() {
  const { user } = useAuthListener();

  return (
    <Router basename="/netflix-clone">
      <Switch>
        <RouteWithRedirect
          exact
          path={ROUTES.HOME}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </RouteWithRedirect>

        <RouteWithRedirect
          path={ROUTES.SIGN_IN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignIn />
        </RouteWithRedirect>

        <RouteWithRedirect
          path={ROUTES.SIGN_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignUp />
        </RouteWithRedirect>

        <ProtectedRoute path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
