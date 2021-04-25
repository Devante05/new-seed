import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path = "/"><Home/></Route>
      {/* <Route exact path = "/myprofile"><MyProfile/></Route>
      <Route exact path = "/seeder"><Seeder/></Route>
      <Route exact path = "/login"><Login/></Route> */}
    </Switch>

  </Router>
  );
}

export default App;
