import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Browse, Home, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { RouteWithRedirect, ProtectedRoute } from "./utils/routes";
import { FirebaseContext } from "./context/firebase";

class App extends Component {
  state = { user: null }
  static contextType = FirebaseContext

  componentDidMount = () => {
    const { firebase } = this.context
    this.unsubscribe = firebase.auth().onAuthStateChanged(currUser=> {
      if(currUser){
        this.setState({ user : currUser })
      }else{
        this.setState({ user: null });
      }
    })
  }

  componentWillUnmount = () => this.unsubscribe()

  render = () => (
    <Router>
      <Switch>
        <RouteWithRedirect
          exact
          path={ROUTES.HOME}
          user={this.state.user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </RouteWithRedirect>

        <RouteWithRedirect
          path={ROUTES.SIGN_IN}
          user={this.state.user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignIn />
        </RouteWithRedirect>

        <RouteWithRedirect
          path={ROUTES.SIGN_UP}
          user={this.state.user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignUp />
        </RouteWithRedirect>

        <ProtectedRoute path={ROUTES.BROWSE} user={this.state.user}>
          <Browse user={this.state.user}/>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
// function App() {
//   const { user } = useAuthListener();

//   return (
//     <Router>
//       <Switch>
//         <RouteWithRedirect
//           exact
//           path={ROUTES.HOME}
//           user={user}
//           loggedInPath={ROUTES.BROWSE}
//         >
//           <Home />
//         </RouteWithRedirect>

//         <RouteWithRedirect
//           path={ROUTES.SIGN_IN}
//           user={user}
//           loggedInPath={ROUTES.BROWSE}
//         >
//           <SignIn />
//         </RouteWithRedirect>

//         <RouteWithRedirect
//           path={ROUTES.SIGN_UP}
//           user={user}
//           loggedInPath={ROUTES.BROWSE}
//         >
//           <SignUp />
//         </RouteWithRedirect>

//         <ProtectedRoute path={ROUTES.BROWSE} user={user}>
//           <Browse user={user}/>
//         </ProtectedRoute>
//       </Switch>
//     </Router>
//   );
// }

export default App;
