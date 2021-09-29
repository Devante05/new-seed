import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { AuthProvider } from "./components/AuthContext.js"
import Home from "./pages/Home"
import Signup from "./pages/FirebaseAuth/Signup.js"
import Profile from "./pages/FirebaseAuth/Profile.js"
import Login from "./pages/FirebaseAuth/Login.js"
import PrivateRoute from "./pages/FirebaseAuth/PrivateRoute.js"
import ForgotPassword from "./pages/FirebaseAuth/ForgotPassword.js"
import UpdateProfile from "./pages/FirebaseAuth/UpdateProfile.js"



function App() {
  return (
    <Router>
      <AuthProvider>
      <StoreProvider>

    <Switch>
      <Route exact path = "/"><Home/></Route>
      <Route exact path = "/home"><Home/></Route>
      <PrivateRoute exact path="/profile"><Profile/> </PrivateRoute>
      <PrivateRoute exact path="/update-profile"><UpdateProfile/></PrivateRoute>
      <Route exact path="/signup"><Signup/></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/forgot-password"><ForgotPassword/></Route>
      </Switch>
    </StoreProvider>
    </AuthProvider>


  </Router>
  );
}

export default App;
