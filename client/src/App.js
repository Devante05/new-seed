import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import { StoreProvider } from "./utils/GlobalState";
import Login from "./pages/Login"



function App() {
  return (
    <Router>
    <StoreProvider>
    <Switch>
      <Route exact path = "/"><Home/></Route>
      {/* <Route exact path = "/myprofile"><MyProfile/></Route>
      <Route exact path = "/seeder"><Seeder/></Route> */}
      <Route exact path = "/login"><Login/></Route>
    </Switch>
    </StoreProvider>

  </Router>
  );
}

export default App;
