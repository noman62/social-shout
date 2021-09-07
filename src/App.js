import React from "react";
import Home from "./component/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<Router>
  <Route path="/">
<Home></Home>
  </Route>
</Router>
  );
}

export default App;
