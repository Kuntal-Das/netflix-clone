import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <p>HOME page</p> */}
          <Home />
        </Route>
        <Route path="/signin">
          <p>Signin page</p>
        </Route>
        <Route path="/signup">
          <p>Signup page</p>
        </Route>
        <Route path="/browse">
          <p>Browse page</p>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
